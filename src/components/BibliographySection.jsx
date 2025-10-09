import { Book } from 'lucide-react';

const writingSamples = [
    {
        id: 1, 
        title: 'The Garden',
        type: 'Short Story',
        writtenYear: '2025',
        buttonAction: 'download',
        actionLink: '/The-Garden.pdf',
        className: 'cosmic-button',
        linkText: 'Download',
        description: 'A short story about the most tenacious garden in the world. It might as well be the only garden.'
    },
    {
        id: 3,
        title: "There's No Such Thing as Random",
        type: "Short Story",
        writtenYear: '2025',
        buttonAction: 'download',
        actionLink: '/Theres-No-Such-Thing-as-Random.pdf',
        className: 'cosmic-button',
        linkText: 'Download',
        description: "A short story about a man and the stranger he's seated next to on a flight."
    }, 
    {
        id: 2, 
        title: 'Her Quiet Night In',
        type: 'Short Story',
        writtenYear: '2025',
        buttonAction: 'send',
        actionLink: '#contact',
        className: 'cosmic-button',
        linkText: 'Request a copy!',
        description: 'A short story about a woman who gets more than she bargained for on a quite night in.'
    },
];

export const BibliographySection = () => {

    return (
        <section id = 'bibliography' className = 'py-24 px-4 relative'>
            <div className = 'container mx-auto max-w-5xl'>
                <h2 className = 'text-3xl md:text-4xl font-bold mb-4 text-center'>
                    {" "}
                    Writing <span className = 'text-primary'>Samples</span>
                </h2>
                <p className = 'text-center text-muted-foreground mb-12 max-w-2xl mx-auto'> 
                    Here's a collection of some of the things I've written over the past several months.
                    This includes mostly short stories, but I'm currently working on the first book of a horror-fantasy series.
                    Check back soon for more updates and <strong>chilling</strong> new stories!
                </p>
                <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 max-w-2xl mx-auto'>
                    {writingSamples.map((sample, key) => (
                        <div key={key} className = 'group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col items-center p-4'> 
                            <div className="flex items-center w-full justify-between mb-2 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Book className="text-primary h-6 w-6" />
                                </div>
                                <div className="flex flex-col items-start">
                                <h4 className="text-md font-semibold text-left">{sample.title}</h4>
                                <h5 className="text-xs font-muted-foreground text-left">
                                    {sample.type} - {sample.writtenYear}
                                </h5>
                                </div>
                            </div>
                            {sample.buttonAction === 'download' ? (
                                <a
                                className="cosmic-button"
                                href={sample.actionLink}
                                download
                                >
                                {sample.linkText}
                                </a>
                            ) : (
                                <a
                                className="cosmic-button"
                                href="#contact"
                                >
                                {sample.linkText}
                                </a>
                            )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};