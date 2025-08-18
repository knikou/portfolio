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
          Professional Project Manager, Engineer, MBA and MSc holder, PMP® Certified. Extensive experience in Consulting, Digital & Finance Transformation across multiple sectors. Proven track record in delivering large-scale SAP, ERP, and Logistics projects with strong technical and managerial expertise.
        </p>
        <Button className="mt-6">Download CV</Button>
      </section>

      {/* About */}
      <section id="about" className="p-10 bg-gray-50">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="max-w-3xl text-gray-700">
          I am a PMP® Certified Project Manager and Engineer with an MBA and MSc, experienced in Consulting, Digital and Finance Transformation, and IT Management. I have delivered successful projects in Logistics, Banking, Telecoms, Retail, and Public Sectors, including M&As. I combine technical knowledge with leadership and strategic thinking to achieve impactful results.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="p-10">
        <h3 className="text-3xl font-bold mb-6">Skills</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">Project Management</h4><p>PMP®, Agile/Scrum, PMO, MS Project, Jira</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">Consulting & Transformation</h4><p>Finance Transformation, Digital Transformation, M&As, Supply Chain Strategy</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">ERP & Systems</h4><p>SAP (Activate, BPC, BW, MM), Microsoft Dynamics 365, WMS, TMS, CRM</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">Programming & Data</h4><p>Python, SQL, C#, JavaScript, HTML/CSS, Power BI, VBA, AutoCAD</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">Soft Skills</h4><p>Leadership, Negotiation, Strategic Thinking, Team Facilitation</p></CardContent></Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10 bg-gray-50">
        <h3 className="text-3xl font-bold mb-6">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">PwC – Finance Transformation</h4><p>SAP PMO, merger of banking entities through absorption (2024–Today).</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">Makios Logistics – Digital Transformation</h4><p>ERP Dynamics 365, WMS SQL migration, Power BI rollout, TMS/Fleet Management, CRM implementation (2022–2024).</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">Alpha Bank – IT Projects</h4><p>Bankassurance Platform, Loans Reconciliation (TIRESIAS), Credit Card Data Migration (2020–2022).</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">AB Vassilopoulos – PMO</h4><p>E-commerce Distribution Centre, new WMS, Supply Chain redesign, cultural transformation (2018–2020).</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">Real Consulting – SAP Consultant</h4><p>SAP IFRS15 for Telecom, SAP BPC for Construction (2015–2018).</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="font-semibold mb-2">KPMG Advisors – Consulting</h4><p>Business Process Reengineering, Public Sector advisory, Supply Chain projects (2007–2015).</p></CardContent></Card>
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
