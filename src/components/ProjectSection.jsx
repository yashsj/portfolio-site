import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A modern, professional portfolio site designed to showcase projects and contact information. Built using React, Vite, and Tailwind CSS, the site includes a custom email contact form powered by EmailJS, supports dark mode, and is deployed on Vercel for fast, reliable global hosting.",
        image: "/projects/portfolio.png",
        tags: ["React", "JavaScript", "Vite", "Tailwind CSS", "EmailJS", "Vercel", "HTML5", "CSS3", "Responsive Design", "Accessibility", "Frontend", "Single Page Application", "Git", "GitHub", "ESLint", "Modern Web", "Dark Mode", "Hooks", "Custom Components"],
        demoUrl: "#",
        githubUrl: "https://github.com/yashsj/portfolio-site",
    },
    {
        id: 2,
        title: "SpeechNet: Automated Human Speech Isolation", 
        description: "Developed at Amdocs, this project delivers an automated deep learning pipeline for isolating human speech from background noise in audio files. Leveraging Python and Librosa, it converted over 7,500 audio samples into spectrograms for robust training and curation. Several neural network architectures were built and evaluated, deploying an Artificial Neural Network (ANN) model that achieved 82.32% accuracy. The solution enables scalable, automated extraction of human speech from diverse real-world datasets.",
        image: "/projects/SpeechNet.png",
        tags: ["Python", "Deep Learning", "Librosa", "NumPy", "Matplotlib", "Artificial Neural Networks", "Audio Signal Processing", "Data Engineering", "Classification", "Spectrograms", "Amdocs", "Automation", "Noise Reduction", "Machine Learning", "Data Preprocessing"],
        demoUrl: "#",
        githubUrl: "https://github.com/yashsj/SpeechNet",
    },
    {
        id: 3,
        title: "Review Recommender System",
        description: "A semantic review recommendation system powered by Python, vector databases, and advanced NLP. Lets users find the most relevant and emotionally aligned Yelp reviews for any search query—filtering by business type, mood, and more, all via an interactive, AI-driven dashboard.",
        image: "/projects/ReviewRecommender.png",
        tags: ["Python", "pandas", "LangChain", "ChromaDB", "Hugging Face Transformers", "Sentence Transformers", "Gradio", "Vector Search", "Semantic NLP", "Emotion Analysis", "Yelp Dataset", "Recommender System", "OpenAI API"],
        demoUrl: "#",
        githubUrl: "https://github.com/yashsj/ReviewRecommender",
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
                            {/* Project title at the top */}
                            <h3 className="text-xl font-semibold mb-2 px-6 pt-6">{project.title}</h3>
                            {/* Image next */}
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                {/* Project description below image */}
                                <p className="text-foreground text-sm mb-4">{project.description}</p>
                                {/* Tech stack badges at the end for easy scanability */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
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
                    <a 
                        className="cosmic_button w-fit flex items-center mx-auto gap-2" 
                        target="_blank"
                        href="https://github.com/yashsj"
                    >
                        Check my GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
};
