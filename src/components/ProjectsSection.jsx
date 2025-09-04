import { ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Digital Site Predictions",
        description: 'Series of Random Forest models to predict which clients are most likely to visit Ameriprise digital platforms.',
        image: '/projects/hal-gatewood-tZc3vjPCk-Q-unsplash.png',
        tags: ['Machine Learning', 'SQL', 'Python']
    },
    {
        id: 2,
        title: "Predictor for ACC Transfer Success",
        description: "A Random Forest model created to predict which clients might benefit the most from being transferred to the ACC.",
        image: "/projects/amy-hirschi-JaoVGh5aJ3E-unsplash.png",
        tags: ['Machine Learning', 'SQL', 'Python']
    },
    {
        id: 3,
        title: 'Investment Performance Analysis',
        description: 'Analysis of 2021 and 2022 investment performance data and their effects on client attrition.',
        image: 'projects/anne-nygard-tcJ6sJTtTWI-unsplash.png',
        tags: ['SQL', 'PySpark', 'Clustering']
    }
];

export const ProjectsSection = () => {

    return (
        <section id = 'projects' className = 'py-24 px-4 relative'>
            <div className = 'container mx-auto max-w-5xl'>
                <h2 className = 'text-3xl md:text-4xl font-bold mb-4 text-center'>
                    {" "}
                    Featured <span className = 'text-primary'> Projects </span>
                </h2>
                <p className = 'text-center text-muted-foreground mb-12 max-w-2xl mx-auto'> 
                    A collection of some of the projects I've worked on that best showcase my technical skills 
                    or thought leadership in projects direction and execution.
                </p>
                <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, key) => (
                        <div key={key} className = 'group bg-card rounded-lg overflow-hidden shadow-xs card-hover'> 
                            <div className = 'h-48 overflow-hidden'>
                                <img src = {project.image} alt={project.title} className = 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                            </div>
                            <div className = 'p-6'>
                                <div className = 'flex flex-wrap gap-1 mb-1 justify-center'>
                                    {project.tags.map((tag) => (
                                        <span className = 'px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground'>
                                            {tag}
                                        </span>
                                ))}
                                </div>
                            </div>
                            <h3 className = 'text-lg font-semibold mb-1'>
                                {project.title}
                            </h3>
                            <p className = 'text-muted-foreground text-xs mb-2 px-4'>
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className = 'text-center mt-12'>
                    <a 
                    className = 'cosmic-button w-fit flex items-center mx-auto gap-2' 
                    target = '__blank'
                    href = 'https://github.com/quickjack32'>
                        Check Out My GitHub <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
};