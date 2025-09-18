import { Code,User,Briefcase,School } from "lucide-react";
export const AboutSection = () => {
    return (<section id="about" className="py-24 px-4 relative"> 
    {" "}
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
        </h2>
        </div>   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Passionate problem solver</h3>
                <p className="text-muted-foreground">
                    I am a dedicated Software Developer with a passion for creating
                    high-performance backend systems, cloud-native applications, 
                    and AI-powered solutions. My expertise lies in Python, Java, Spring Boot, 
                    AWS/Azure, and Kubernetes, enabling me to build scalable and efficient systems 
                    that address real-world challenges. I thrive in dynamic, fast-paced environments 
                    where I can leverage my skills to drive business impact and deliver innovative 
                    solutions.
                </p>

                <p className="text-muted-foreground">
                    When I'm not coding, I enjoy exploring 
                    the latest tech trends, contributing 
                    to open-source projects., and continuously 
                    learning to enhance my skills.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic_button"> 
                        {" "}
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
                            <Code className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">3+ Years Experience</h4>
                            <p className="text-muted-foreground">Senior SWE at Amdocs leveraging AI for rapid devlopment 
                                with modern frameworks</p>
                        </div>
                        </div>

                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">AI</h4>
                            <p className="text-muted-foreground">Do DSA and VibeCode all day :) </p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Product hunter prodige</h4>
                            <p className="text-muted-foreground">$$$ </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    

            </div>
        <div>

        </div>
    </section>
    )
};
