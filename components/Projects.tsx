"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Showcasing some of my best work in software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-xl bg-card hover:bg-primary/5 border border-primary/10 transition-all duration-300 shadow-lg hover:shadow-2xl">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold">
                    <Star className="h-3 w-3 fill-white" />
                    Featured
                  </div>
                )}

                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all">
                    {project.name}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground/60 mb-2">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                {project.features.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground/60 mb-2">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-xs text-foreground/70 flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-primary/10">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
