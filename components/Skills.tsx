"use client";

import React from "react";
import { motion } from "framer-motion";
import { Skills as SkillsType } from "@/lib/types";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Brain, 
  Wrench, 
  Network,
  LucideIcon
} from "lucide-react";

interface SkillsProps {
  skills: SkillsType;
}

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  DevOps: Cloud,
  "AI/ML": Brain,
  Tools: Wrench,
  Architecture: Network,
};

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500 to-cyan-500",
  Backend: "from-purple-500 to-pink-500",
  Database: "from-green-500 to-emerald-500",
  DevOps: "from-orange-500 to-red-500",
  "AI/ML": "from-violet-500 to-purple-500",
  Tools: "from-yellow-500 to-amber-500",
  Architecture: "from-indigo-500 to-blue-500",
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => {
            const Icon = categoryIcons[category] || Code2;
            const gradient = categoryColors[category] || "from-blue-500 to-purple-500";

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-card hover:bg-primary/5 border border-primary/10 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${gradient}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{category}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border border-primary/20 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Skill Count Badge */}
                  <div className="mt-4 pt-4 border-t border-primary/10">
                    <span className="text-sm text-foreground/60">
                      {skillList.length} {skillList.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
