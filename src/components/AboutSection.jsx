import { Code, BookType, Briefcase } from 'lucide-react';

export const AboutSection = () => {

return <section id = 'about' className = 'py-24 px-4 relative'>
        {" "}
        <div className = 'container mx-auto max-w-5xl'> 
            <h2 className = 'text-3xl md:text-4xl font-bold mb-12 text-center '>
                About <span className = 'text-primary'> Me </span>
            </h2>

            <div className = 'grid grid-cols-1 md:grid-cols-2 gap-8 items-center'> 
            <div className = 'space-y-6'>
                <h3 className = 'text-2xl font-semibold'> Data Scientist, Author, Learner </h3>
                     <p className = 'text-muted-foreground'>  
                        I'm a lifelong learner, currently working as a Data Scientist,
                        writing fiction and teaching myself how to be a web developer
                        in my free time.
                     </p>

                     <p className = 'text-muted-foreground'>
                        With over five years of experience in Data Science and Analytics, I'm constantly
                        staying up to date with industry trends, and pushing myself to learn new skills
                        technologies. My latest venture involves learning how to build websites with React.js
                        and Tailwind.
                     </p>
                     <div className = 'flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href = '#contact' className = 'cosmic-button'>
                            {" "}
                            Get In Touch
                        </a>
                        <a 
                            href = '/Jack-Quick-Resume-2025.pdf' 
                            className = 'px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'
                            download>
                            Download Resume
                        </a>                        
                     </div>
                     </div>
                    <div className = 'grid grid-cols-1 gap-6'> 
                        <div className = 'gradient-border p-6 card-hover'> 
                            <div className = 'flex items-start gap-4'> 
                                <div className = 'p-3 rounded-full bg-primary/10'> 
                                    <Code className = 'text-primary h-6 w-6'/>
                                </div>
                                    <div className = 'text-left'>
                                    <h4 className = 'font-semibold text-lg'> Data Science </h4>
                                    <p className = 'text-muted-foreground'> SQL jockey faking my way through the ML world.</p>
                                </div>
                            </div>
                        </div>
                        <div className = 'gradient-border p-6 card-hover'>
                            <div className = 'flex items-start gap-4'> 
                                <div className = 'p-3 rounded-full bg-primary/10'> 
                                    <BookType className = 'text-primary h-6 w-6'/>
                                </div>
                                    <div className = 'text-left'>
                                    <h4 className = 'font-semibold text-lg'> Author </h4>
                                    <p className = 'text-muted-foreground'> Creative writer of fantasy, fiction, and horror.</p>
                                </div>
                            </div> 
                        </div>
                        <div className = 'gradient-border p-6 card-hover'>
                            <div className = 'flex items-start gap-4'> 
                                <div className = 'p-3 rounded-full bg-primary/10'> 
                                    <Briefcase className = 'h-6 w-6 text-primary'/>
                                </div>
                                    <div className = 'text-left'>
                                    <h4 className = 'font-semibold text-lg'> Work Experience </h4>
                                    <p className = 'text-muted-foreground'> Experience with Healthcare, Insurance, Finance, and Startups. </p>
                                </div>
                                </div>
                            </div> 
                        </div>
                    </div>
        </div>
    </section>;
};