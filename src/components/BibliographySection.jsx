import { Book } from 'lucide-react';

const writingSamples = [
    {
        id: 1, 
        title: 'The Garden',
        type: 'Short Story',
        writtenYear: '2025'
    },
];

export const BibliographySection = () => {
    return (
    <section id = 'bibliography' className = 'py-24 px-4 relative'>
        <div className = 'container mx-auto max-w-5xl'>
            <h2 className = 'text-3xl md:text-4xl font-bold mb-4 text-center'>
                Writing <span className = 'text-primary'> Samples </span>
            </h2>
                <p className = 'text-center text-muted-foreground mb-12 max-w-2xl mx-auto'> 
                    Here's a collection of some of the things I've written over the past several months.
                    This includes mostly short stories, but I'm currently working on Book 1 of a horror-fantasy series.
                </p>
                <div className = 'grid grid-cols-1 gap-8 justify-items-center'>
                    {writingSamples.map((sample, key) => (
                        /* can get download button code from AboutSection.jsx */
                        /* will want the button inside the div so need to figure that out */
                        <div key = {key} className = 'group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-8 flex flex-col justify-items-center col-span-3'>
                            <div className = 'flex items-start gap-4'> 
                                <div className = 'p-3 rounded-full bg-primary/10 mb-4'>
                                    <Book className = 'text-primary h-6 w-6'/>
                                </div>
                                <div className = 'text-left'>
                                    <h4 className = 'text-md font-semibold '>
                                    {sample.title}
                                    </h4>
                                    <h5 className = 'text-xs font-muted-foreground'>
                                        {sample.type} - {sample.writtenYear}
                                    </h5>
                                </div>

                                </div> 
                                <a 
                                    href = "/The-Garden.pdf"
                                    className = 'cosmic-button'
                                    download>
                                    Download
                                </a>
                        </div>
                    ))}
                </div>
        </div>
    </section>
)};
