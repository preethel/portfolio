"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Experience as ExperienceType, Education, Achievement } from "@/lib/types";

interface ExperienceProps {
  experience: ExperienceType[];
  education: Education[];
  achievements: Achievement[];
}

export default function Experience({ experience, education, achievements }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative pl-8 border-l-2 border-primary/30"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="p-6 rounded-xl bg-card border border-primary/10 hover:border-primary/30 transition-all">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-bold">{exp.position}</h4>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                          <Calendar className="h-4 w-4" />
                          {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground/60 mt-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-foreground/70 mb-4">{exp.description}</p>
                    
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <div>
                        <p className="text-sm font-semibold mb-2">Key Responsibilities:</p>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start gap-2 text-sm text-foreground/70">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          {education && education.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative pl-8 border-l-2 border-secondary/30"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                    
                    <div className="p-6 rounded-xl bg-card border border-primary/10 hover:border-primary/30 transition-all">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                        <div>
                          <h4 className="text-xl font-bold">{edu.degree}</h4>
                          <p className="text-secondary font-semibold">{edu.institution}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-sm text-foreground/60">
                            <Calendar className="h-4 w-4" />
                            {edu.startDate} - {edu.endDate}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-foreground/60 mt-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                      <p className="text-foreground/70">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Certifications & Achievements
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-xl bg-card border border-primary/10 hover:border-primary/30 transition-all"
                  >
                    <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-primary font-semibold mb-2">{achievement.issuer}</p>
                    <p className="text-xs text-foreground/60 mb-3">{achievement.date}</p>
                    <p className="text-sm text-foreground/70">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
