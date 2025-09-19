import { Code, User, Briefcase, School } from "lucide-react";
export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Who I Am</h3>
                    <p className="text-muted-foreground">
                        Software engineer with telecom (AT&T/T-Mobile) and startup experience, building scalable cloud and AI-powered systems in Python, Java, and Spring Boot. Lifelong learner, fueled by coffee and nature hikes.
                    </p>
                    <p className="text-muted-foreground">
                        When I'm not coding, I enjoy exploring the latest tech trends, contributing to open-source projects, and continuously learning to enhance my skills.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic_button">
                            Get in Touch
                        </a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Backend & Cloud Specialist</h4>
                                <p className="text-muted-foreground">
                                    Engineered scalable Python, Java, and Spring Boot solutions for enterprise projects at AT&T, T-Mobile, and Amdocs. Skilled in designing cloud-native APIs and automation—delivering reliability and performance at scale.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">AI & Continuous Learning</h4>
                                <p className="text-muted-foreground">
                                    Implemented production-ready ML features, semantic search, and automation pipelines. Driven by curiosity—always hands-on with new tech, DSA problems, and contributing to open-source AI projects.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Startup & Product Builder</h4>
                                <p className="text-muted-foreground">
                                    Startup-tested, product-focused: shipped MVPs, led rapid prototyping, and delivered impactful features from scratch. Passionate about building tools that solve real business problems—and learning fast along the way.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    );
};
