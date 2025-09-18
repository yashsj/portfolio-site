import { ExternalLink, Github,ArrowRight} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Project one",
        description: "Test one description",
        image: "/projects/pic1.png",
        tags: ["React", "Node.js"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Project two", 
        description: "Test two description",
        image: "/projects/pic2.png",
        tags: ["python", "Django"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Project three",
        description: "Test three description",
        image: "/projects/pic3.png",
        tags: ["Java", "Spring Boot"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
                    A selection of projects that showcase my skills and experience in building
                    high-performance backend systems, cloud-native applications, and AI-powered solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-3">
                                        <a 
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-10 h-10 text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-10 h-10 text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="text-center mt-12">
                    <a className="cosmic_button w-fit flex items-center mx-auto gap-2" 
                    target="_blank"
                    href="https://github.com/yashsj">Check my GitHub <ArrowRight size={16}/></a>

                </div>
            </div>
        </section>
    );
};
