"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Award } from "lucide-react";
import { Personal } from "@/lib/types";

interface AboutProps {
  personal: Personal;
}

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Rocket,
    title: "Fast Performance",
    description: "Optimizing applications for speed and efficiency",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively with cross-functional teams",
  },
  {
    icon: Award,
    title: "Best Practices",
    description: "Following industry standards and modern methodologies",
  },
];

export default function About({ personal }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold gradient-text">
              {personal.title}
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {personal.bio}
            </p>
            <p className="text-foreground/70">
              With a strong foundation in both frontend and backend technologies,
              I specialize in creating end-to-end solutions that are not only
              functional but also user-friendly and scalable. My experience spans
              across various domains including enterprise applications, AI/ML
              integration, and cloud infrastructure.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm">Available for opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-xl bg-card hover:bg-primary/5 border border-primary/10 transition-all"
              >
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
