import formData from 'form-data';
import Mailgun from 'mailgun.js';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get form data from request body
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate environment variables
    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN || !process.env.RECIPIENT_EMAIL) {
      console.error('Missing environment variables');
      console.error('MAILGUN_API_KEY exists:', !!process.env.MAILGUN_API_KEY);
      console.error('MAILGUN_DOMAIN exists:', !!process.env.MAILGUN_DOMAIN);
      console.error('RECIPIENT_EMAIL exists:', !!process.env.RECIPIENT_EMAIL);
      return res.status(500).json({ error: 'Server configuration error' });
    }

    console.log('Environment check:');
    console.log('API Key format (first 10 chars):', process.env.MAILGUN_API_KEY.substring(0, 10) + '...');
    console.log('Domain:', process.env.MAILGUN_DOMAIN);
    console.log('Recipient:', process.env.RECIPIENT_EMAIL);

    // Initialize Mailgun
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY.trim(),
      url: 'https://api.mailgun.net',
    });

    // Send email
    const emailData = {
      from: `Contact Form <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      'h:Reply-To': email,
    };

    console.log('Attempting to send email with domain:', process.env.MAILGUN_DOMAIN);
    const result = await mg.messages.create(process.env.MAILGUN_DOMAIN, emailData);
    console.log('Email sent successfully:', result);

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', error.message, error.stack);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
}

// Configure the function
export const config = {
  api: {
    bodyParser: true,
  },
};