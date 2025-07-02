import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Explorer of Smart Systems & Digital Tech
            </h3>

            <p className="text-muted-foreground">
              I enjoy creating digital solutions from web applications and data
              systems to experimenting with automation and artificial
              intelligence. My interests span across web development, data
              management, and exploring emerging technologies.
            </p>

            <p className="text-muted-foreground">
              I once joined the Advanced AI division in a cross-disciplinary
              tech project, which strengthened my passion for combining
              creativity with technology to make real impact. For me, learning
              technology is a never-ending journey a path to continuously grow
              and contribute.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1G_8ldOqTuzHvjnd57ZyWbl0I-X6MPF2Z/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
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
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground text-justify">
                    Developing functional and user-friendly websites that
                    prioritize accessibility, responsiveness, and a smooth user
                    experience, using widely adopted web development practices.
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
                  <h4 className="font-semibold text-lg">
                    AI & Machine Learning
                  </h4>
                  <p className="text-muted-foreground text-justify">
                    Exploring intelligent systems through real-world projects,
                    including plant disease detection using AI and user research
                    for smart apps.
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
                  <h4 className="font-semibold text-lg">
                    Project & Team Management
                  </h4>
                  <p className="text-muted-foreground text-justify">
                    Leading and supporting projects by ensuring effective
                    teamwork, organized planning, and consistent follow-through.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
