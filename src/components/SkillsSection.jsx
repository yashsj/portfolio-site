import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "Python", level: 90, category: "Languages" },
  { name: "Java", level: 75, category: "Languages" },
  { name: "C++", level: 50, category: "Languages" },
  { name: "JavaScript", level: 70, category: "Languages" },
  { name: "SQL", level: 80, category: "Languages" },

  // Scripting
  { name: "Bash", level: 65, category: "Scripting" },

  // Web Development
  { name: "React", level: 85, category: "Web" },
  { name: "Tailwind CSS", level: 80, category: "Web" },
  { name: "HTML5", level: 90, category: "Web" },
  { name: "CSS3", level: 85, category: "Web" },
  { name: "Node.js", level: 60, category: "Web" },
  { name: "Express.js", level: 60, category: "Web" },
  { name: "Flask", level: 75, category: "Web" },
  { name: "FastAPI", level: 70, category: "Web" },

  // ML & Data Science
  { name: "pandas", level: 90, category: "ML/DS" },
  { name: "NumPy", level: 90, category: "ML/DS" },
  { name: "scikit-learn", level: 80, category: "ML/DS" },
  { name: "TensorFlow", level: 80, category: "ML/DS" },
  { name: "PyTorch", level: 70, category: "ML/DS" },
  { name: "LangChain", level: 70, category: "ML/DS" },
  { name: "Gradio", level: 70, category: "ML/DS" },
  { name: "Hugging Face Transformers", level: 75, category: "ML/DS" },
  { name: "Sentence Transformers", level: 70, category: "ML/DS" },
  { name: "ChromaDB", level: 65, category: "ML/DS" },

  // Databases
  { name: "MySQL", level: 80, category: "Databases" },
  { name: "PostgreSQL", level: 70, category: "Databases" },
  { name: "MongoDB", level: 75, category: "Databases" },
  { name: "Redis", level: 60, category: "Databases" },

  // DevOps & Cloud
  { name: "AWS (EC2/S3/Lambda)", level: 70, category: "DevOps/Cloud" },
  { name: "Docker", level: 75, category: "DevOps/Cloud" },
  { name: "CI/CD", level: 65, category: "DevOps/Cloud" },
  { name: "Jenkins", level: 60, category: "DevOps/Cloud" },
  { name: "Git", level: 90, category: "DevOps/Cloud" },
  { name: "GitHub Actions", level: 65, category: "DevOps/Cloud" },
  { name: "Vercel", level: 60, category: "DevOps/Cloud" },

  // Testing & Automation
  { name: "PyTest", level: 75, category: "Testing" },
  { name: "Postman", level: 70, category: "Testing" },
  { name: "Unit Testing", level: 75, category: "Testing" },
  { name: "Integration Testing", level: 70, category: "Testing" },

  // Monitoring & Logging
  { name: "ELK (Elasticsearch, Logstash, Kibana)", level: 70, category: "Monitoring" },

  // Tools & Other
  { name: "Jupyter Notebook", level: 85, category: "Tools" },
  { name: "VSCode", level: 85, category: "Tools" },
  { name: "PyCharm", level: 80, category: "Tools" },
  { name: "Matplotlib", level: 75, category: "Tools" },
  { name: "Seaborn", level: 70, category: "Tools" },
  { name: "Linux", level: 75, category: "Tools" },

  // Management & Leadership
  { name: "Jira", level: 65, category: "Management" },
  { name: "Agile/Scrum", level: 70, category: "Management" },
  { name: "Mentoring / Code Reviews", level: 70, category: "Management" },

  // Security
  { name: "Security Best Practices", level: 60, category: "Security" }
];

const categories = [
  "All",
  "Languages",
  "Scripting",
  "Web",
  "ML/DS",
  "Databases",
  "DevOps/Cloud",
  "Testing",
  "Monitoring",
  "Tools",
  "Management",
  "Security"
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded full origin-left animate-[grow_1.5s_ease_out"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
