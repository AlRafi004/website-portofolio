import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    title: "Website Kedai Kopi",
    description:
      "A simple website for a coffee shop that showcases the business profile, menu list, and an online ordering feature in a responsive and user-friendly design.",
    image: "/projects/project1.png",
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://kedai-kopi-latte-amore.vercel.app/",
    githubUrl: "https://github.com/AlRafi004/kedai-kopi-latte-amore",
  },
  {
    id: 2,
    title: "Website To-do-list",
    description:
      "A simple and responsive To-Do List web app that lets users add, delete, and mark tasks as completed.",
    image: "/projects/project2.png",
    tags: ["TailwindCSS", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://website-to-do-list.vercel.app/",
    githubUrl: "https://github.com/AlRafi004/website-to-do-list",
  },
  {
    id: 3,
    title: "Website Anime dan Manga",
    description:
      "Anime search web application built with Next.js, Tailwind CSS, and TypeScript. Displays real-time anime listings from the Jikan API.",
    image: "/projects/project3.png",
    tags: ["React", "Next.js", "TailwindCSS", "TypeScript", "Jikan API"],
    demoUrl: "https://website-anime-manga-rafi.vercel.app/",
    githubUrl: "https://github.com/AlRafi004/website-anime-manga",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Take a look at some of my latest work, thoughtfully built with a focus
          on design, speed, and usability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
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
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/AlRafi004"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
