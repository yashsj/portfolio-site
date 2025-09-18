import { School } from "lucide-react";
export const EducationSection = () => { 
    return (
        <section id="education" className="py-24 px-4 relative bg-secondary/30">

           <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Education</span>
                </h2>
            </div>

            <div className="container mx-auto max-w-5xl flex flex-col gap-8">
                
                <div className="gradient-border p-6 card-hover">
                    
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 rounded-full bg-primary/10">
                            <School className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="font-semibold text-lg">
                                MSc Information Systems, Stevens Institute of Technology, Hoboken, NJ
                                <span className="block text-sm text-muted-foreground font-semibold mt-1">
  GPA: 3.8/4.0
</span>
                            </h3>
                        </div>
                        <div className="ml-auto text-right min-w-fit">
                            <span className="text-sm text-muted-foreground font-semibold">
                                2019–2021
                            </span>
                        </div>
                    </div>
                    {/* Coursework - sits below degree row */}
                    <div className="mt-4 text-left">
                        <h5 className="font-semibold text-md mb-1">
                            Relevant Coursework:
                        </h5>
                        <p className="text-muted-foreground">
                            Data Analytics & Machine Learning, Multivariate Analysis - I, Web Mining, Applied Analytics, Data Management, Financial Decision making, Integrating IS Technologies, Service Innovation
                        </p>
                    </div>
                </div>
                {/* Bachelors Card */}
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 rounded-full bg-primary/10">
                            <School className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="font-semibold text-lg">
                                Bachelor of Technology, Computer Science, KJSCE, Mumbai, India
                            </h3>
                        </div>
                        <div className="ml-auto text-right min-w-fit">
                            <span className="text-sm text-muted-foreground font-semibold">
                                2014–2018
                            </span>
                        </div>
                    </div>
                    <div className="mt-4 text-left">
                        <h5 className="font-semibold text-md mb-1">
                            Relevant Coursework:
                        </h5>
                        <p className="text-muted-foreground">
                            Data structures, Database, Data Warehousing and Mining, Artificial Intelligence, Analysis of Algorithms, Machine learning
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};
