import { Briefcase } from "lucide-react";
import React, { useState } from "react";

const workHistory = [
  {
    company: "Amdocs",
    title: "Senior Software Developer",
    years: "2021 – Present",
    location: "Plano, TX",
    bullets: [
      "Developed and deployed a full-stack, AI-powered semantic search application using LangChain and OpenAI, indexing over 1,400 complex records and improving data retrieval and analysis efficiency by 40%.",
      "Designed and implemented high-performance Spring Boot APIs and microservices, reducing latency by 40% and supporting seamless integration with core backend systems.",
      "Architected and developed a scalable, object-oriented Python backend platform to automate end-to-end system validation, accelerating overall development cycles by 40% with on-demand quality gates in CI/CD pipelines.",
      "Engineered scalable solutions to resolve a massive data backlog of 250+ requests, optimized complex SQL queries, and automated data provisioning scripts, shortening data delivery turnaround time by 60%.",
      "Built high-throughput data processing utilities using PyTest, reducing system validation time from 2 hours to 20 minutes (80% efficiency gain) and providing faster feedback for development teams.",
      "Spearheaded a major environment consolidation initiative, saving up to $50,000 per day by identifying and decommissioning unused legacy applications.",
      "Integrated automated test suites into Jenkins CI/CD, enabling continuous validation, automated reporting, and reducing manual intervention by 40%.",
      "Onboarded and mentored new graduate engineers, leading Agile testing sprints and creating knowledge transfer sessions to accelerate productivity.",
      "Conducted functional and regression testing on mobile and web applications, ensuring robust validation across diverse platforms and supporting comprehensive data integrity checks.",
      "Logged over 150 bugs in JIRA, performed root cause analysis using ELK logs, and collaborated with SRE and DevOps teams to resolve cross-application dependencies and compatibility challenges."
    ]
  },
  {
    company: "Stevens Institute of Technology",
    title: "Graduate Teaching Assistant – Machine Learning",
    years: "Dec 2020 – May 2021",
    location: "Hoboken, NJ",
    bullets: [
      "Mentored and tutored students on machine learning concepts, model development, and best practices.",
      "Graded and provided technical feedback on semester-long ML projects, improving academic performance and code quality.",
      "Supported course delivery with hands-on labs, technical workshops, and Python-based exercises in Jupyter Notebook."
    ]
  }
];

const TimelineCard = ({ job, idx, isLast }) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="mb-10 flex items-start relative">
      {/* Timeline Dot */}
      <div className="absolute left-0 top-7 flex flex-col items-center">
        <Briefcase className="h-6 w-6 text-primary" />
        {!isLast && <div className="h-16 w-1 bg-primary/10 mt-1" />}
      </div>
      <div className="ml-8 flex-1 bg-card border border-primary/10 rounded-lg px-6 py-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="text-left w-full">
          <div className="font-bold text-lg text-primary">{job.company}</div>
          <div className="font-semibold text-base text-foreground mt-0.5">{job.title}</div>
          <div className="flex flex-row mt-0.5 gap-3 text-xs text-muted-foreground">
            <span>{job.years}</span>
            <span>{job.location}</span>
          </div>
        </div>
        <ul className="mt-4 list-disc pl-6 text-sm text-foreground space-y-3 text-left">
          {(showAll ? job.bullets : job.bullets.slice(0, 4)).map((b, k) => (
            <li key={k} className="leading-relaxed text-left">{b}</li>
          ))}
        </ul>
        {job.bullets.length > 4 && (
          <button
            onClick={() => setShowAll((s) => !s)}
            className="mt-2 text-xs text-primary underline focus:outline-none"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
};

export const WorkExp = () => (
  <section id="workexp" className="py-20 px-3 bg-background">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Work <span className="text-primary">Experience</span>
      </h2>
      <div className="relative border-l-2 border-primary/20 pl-6">
        {workHistory.map((job, idx) => (
          <TimelineCard key={idx} job={job} idx={idx} isLast={idx === workHistory.length - 1} />
        ))}
      </div>
    </div>
  </section>
);
