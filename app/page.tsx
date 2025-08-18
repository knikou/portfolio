"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="p-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Konstantinos Nikou</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center h-[70vh] text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-4xl md:text-6xl font-bold mb-4">
            Engineer • IT & Project Manager • Digital Transformation Leader
          </span>
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Helping organizations achieve efficiency and growth through technology, project leadership, and digital transformation
        </p>
        <Button className="mt-6">Download CV</Button>
      </section>

      {/* About */}
      <section id="about" className="p-10 bg-gray-50">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="max-w-3xl text-gray-700">
          I am a Professional Project Manager, Engineer, and MBA & MSc holder, PMP® Certified, 
          with strong expertise in consulting, digital transformation, and finance transformation 
          across industries including logistics, banking, telecoms, retail, and the public sector, as well as in M&As.
          I have successfully delivered diverse projects, such as a large-scale SAP transformation in telecoms 
          and an e-commerce logistics project in retail. Skilled in MS software, scripting/coding, and SAP, 
          I combine technical, managerial, and strategic thinking to achieve results.
          Recognized as a positive, agile team player, I thrive on continuous learning, improvement, and enabling growth.
          Feel free to contact me at kostas.nikou@gmail.com.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="p-10">
        <h3 className="text-3xl font-bold mb-6">Skills</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">Project Management & Leadership</h4><p>PMP, Agile/Scrum, MS Project, Jira</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">IT & Digital Tools</h4><p>Microsoft 365, Azure, Cloud, Security</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">Programming & Data</h4><p>Python, SQL, VBA, PowerShell</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">Industries Experience</h4><p>Telecoms, Banking, Retail, Logistics, Public Sector</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">Personal & Professional Skills</h4><p>Strategic Thinking & Problem-Solving</p></CardContent></Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10 bg-gray-50">
        <h3 className="text-3xl font-bold mb-6">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">Project A</h4><p>Short description + results</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">Project B</h4><p>Short description + results</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">Project C</h4><p>Short description + results</p></CardContent></Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 text-center">
        <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
        <p className="text-gray-700 mb-4">Email: <a href="mailto:kostas.nikou@gmail.com" className="text-blue-600">kostas.nikou@gmail.com</a></p>
        <Button asChild>
          <a href="https://www.linkedin.com/in/knikou/" target="_blank">Connect on LinkedIn</a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-gray-100 text-gray-500">
        © {new Date().getFullYear()} Konstantinos Nikou - All Rights Reserved
      </footer>
    </div>
  );
}
