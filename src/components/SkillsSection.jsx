import { use, useState } from "react";
import { cn } from "@/lib/utils";
import { Cat } from "lucide-react";



    const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },
  { name: "TypeScript", level: 75, category: "Frontend" },
  { name: "Vue.js", level: 70, category: "Frontend" },
  { name: "Next.js", level: 65, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express.js", level: 75, category: "Backend" },
  { name: "Python", level: 85, category: "Backend" },
  { name: "Java", level: 70, category: "Backend" },
  { name: "PHP", level: 60, category: "Backend" },
  
  // Database
  { name: "MySQL", level: 80, category: "Database" },
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "PostgreSQL", level: 70, category: "Database" },
  { name: "Firebase", level: 65, category: "Database" },
  
  // Tools & Others
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "Figma", level: 70, category: "Design" },
  { name: "Docker", level: 60, category: "DevOps" },
  { name: "AWS", level: 55, category: "Cloud" },
  { name: "Linux", level: 75, category: "Tools" },
  
  // Mobile
  { name: "React Native", level: 65, category: "Mobile" },
  { name: "Flutter", level: 50, category: "Mobile" },
];

const categories = ["All", "Frontend", "Backend", "Database", "Tools", "Design", "DevOps", "Cloud", "Mobile"];




export const SkillsSection = () => {
    const [activeCategory,setActiveCategory]=useState("All");

    const filteredSkills= skills.filter((skill)=>
        activeCategory==="All" || skill.category===activeCategory
    );
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My<span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key)=>(
                    <button key={key} 
                    onClick={()=>setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize"
                    ,activeCategory==category?"bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bg-secondary"

                    )}>
                        {category}
                    </button>
                ))}
                    


            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        
                    <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                     </div>
                     <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                     <div className="bg-primary h-2 rounded full origin-left animate-[grow_1.5s_ease_out" 
                     style={{width:skill.level+"%"}}/>
                     </div>
                     <div className="text-right mt-1">
                        <span className="text-sm text-muted foreground">{skill.level}%</span>
                     </div>
</div>
                ))}
            </div>

        </div>
    </section>

};