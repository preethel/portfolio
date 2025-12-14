"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getPortfolioData } from "@/lib/utils";

export default function Home() {
  const data = getPortfolioData();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero personal={data.personal} />
      <About personal={data.personal} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Experience 
        experience={data.experience} 
        education={data.education}
        achievements={data.achievements}
      />
      <Contact personal={data.personal} />
      <Footer personal={data.personal} />
    </main>
  );
}
