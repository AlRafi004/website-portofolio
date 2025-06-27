import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  {
    name: "HTML5",
    icon: "/icons/HTML5.png",
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: "/icons/CSS3.png",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "/icons/JavaScript.png",
    category: "frontend",
  },
  {
    name: "React",
    icon: "/icons/React.png",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: "/icons/TypeScript.png",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/Tailwind CSS.png",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: "/icons/Next.js.png",
    category: "frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: "/icons/Node.js.png",
    category: "backend",
  },
  {
    name: "MySQL",
    icon: "/icons/MySQL.png",
    category: "backend",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/PostgresSQL.png",
    category: "backend",
  },

  // Tools
  {
    name: "Git/GitHub",
    icon: "/icons/Git.png",
    category: "tools",
  },
  {
    name: "Docker",
    icon: "/icons/Docker.png",
    category: "tools",
  },
  {
    name: "Postman",
    icon: "/icons/Postman.png",
    category: "tools",
  },
  {
    name: "Figma",
    icon: "/icons/Figma.png",
    category: "tools",
  },
  {
    name: "Canva",
    icon: "/icons/Canva.png",
    category: "tools",
  },
  {
    name: "VS Code",
    icon: "/icons/Visual Studio Code (VS Code).png",
    category: "tools",
  },
  {
    name: "Jupyter Notebook",
    icon: "/icons/Jupyter.png",
    category: "tools",
  },

  // Others
  {
    name: "Python",
    icon: "/icons/Python.png",
    category: "others",
  },
  {
    name: "C++",
    icon: "/icons/C++ (CPlusPlus).png",
    category: "others",
  },
  {
    name: "PHP",
    icon: "/icons/PHP.png",
    category: "others",
  },
  {
    name: "C",
    icon: "/icons/C.png",
    category: "others",
  },
  {
    name: "Java",
    icon: "/icons/Java.png",
    category: "others",
  },
];

const categories = ["all", "frontend", "backend", "tools", "others"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
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
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4"
            >
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
