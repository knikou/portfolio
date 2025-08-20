"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="p-6 flex justify-between items-center shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h1 className="text-2xl font-bold">Konstantinos Nikou</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-yellow-300">About</a>
          <a href="#skills" className="hover:text-yellow-300">Skills</a>
          <a href="#projects" className="hover:text-yellow-300">Projects</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col md:flex-row items-center justify-center h-[65vh] text-center md:text-left px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="flex-1 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Engineer • Project Manager <br /> IT Leader
            </span>
          </motion.h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            Professional Project Manager, Engineer, MBA and MSc holder, PMP® Certified. 
            Extensive experience in Consulting, Digital & Finance Transformation across multiple sectors. 
            Proven track record in delivering large-scale SAP, Digital Transformation and Logistics projects 
            with strong technical and managerial expertise.
          </p>
          <br /><Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700">
            <a href="/CV_Nikou_Konstantinos.pdf" download>
              Download CV
            </a>
          </Button>
        </div>

        {/* Profile Image */}
        <div className="flex-1 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Konstantinos Nikou"
            width={280}
            height={280}
            className="rounded-full shadow-xl border-4 border-white"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-10 bg-white">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">About Me</h3>
        <p className="max-w-3xl text-gray-700">
          I am a PMP® Certified Project Manager and Engineer with an MBA and MSc, experienced in Consulting, 
          Digital and Finance Transformation, and IT Management. I have delivered successful projects in Logistics, 
          Banking, Telecoms, Retail, and Public Sectors, including M&As. I combine technical knowledge with leadership 
          and strategic thinking to achieve impactful results.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="p-10 bg-gradient-to-r from-indigo-50 to-blue-50">
        <h3 className="text-3xl font-bold mb-6 text-indigo-700">Skills</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="shadow-md hover:shadow-lg transition">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-blue-700">Project Management</h4>
                <p>PMP®, Agile/Scrum, PMO, MS Project, Monday</p>
              </CardContent>
            </Card>
          </div>
          <div className="shadow-md hover:shadow-lg transition">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-blue-700">Consulting & Transformation</h4>
                <p>Digital & Finance Transformation, M&As, Supply Chain Strategy</p>
              </CardContent>
            </Card>
          </div>
          <div className="shadow-md hover:shadow-lg transition">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-blue-700">ERP & Systems</h4>
                <p>SAP, Microsoft Dynamics 365, WMS, TMS, CRM</p>
              </CardContent>
            </Card>
          </div>
          <div className="shadow-md hover:shadow-lg transition">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-blue-700">Programming & Data</h4>
                <p>Python, SQL, JavaScript, HTML/CSS, Power BI, VBA, AutoCAD</p>
              </CardContent>
            </Card>
          </div>
          <div className="shadow-md hover:shadow-lg transition">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-blue-700">Soft Skills</h4>
                <p>Leadership, Negotiations (Scotworks), Strategic Thinking, Team Facilitation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10 bg-gray-50">
        <h3 className="text-3xl font-bold mb-6 text-blue-700">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* ... same project cards, maybe add hover effect */}
          <div className="hover:shadow-lg transition"><Card><CardContent className="p-4"><h4 className="font-semibold mb-2 text-indigo-700">PwC – Finance Transformation</h4><p>SAP PMO, M&As (2024–Today).</p></CardContent></Card></div>
          <div className="hover:shadow-lg transition"><Card><CardContent className="p-4"><h4 className="font-semibold mb-2 text-indigo-700">Makios Logistics – Digital Transformation</h4><p>Microsoft Dynamics 365, WMS SQL migration, Power BI rollout, TMS/Fleet Management, CRM implementation (2022–2024).</p></CardContent></Card></div>
          <div className="hover:shadow-lg transition"><Card><CardContent className="p-4"><h4 className="font-semibold mb-2 text-indigo-700">Alpha Bank – IT Projects</h4><p>Bankassurance Platform, Loans Reconciliation (TIRESIAS), Credit Card Data Migration (2020–2022).</p></CardContent></Card></div>
          <div className="hover:shadow-lg transition"><Card><CardContent className="p-4"><h4 className="font-semibold mb-2 text-indigo-700">AB Vassilopoulos – PMO</h4><p>E-commerce Distribution Centre, new WMS, Supply Chain redesign, cultural transformation (2018–2020).</p></CardContent></Card></div>
          <div className="hover:shadow-lg transition"><Card><CardContent className="p-4"><h4 className="font-semibold mb-2 text-indigo-700">Real Consulting – SAP Consultant</h4><p>SAP IFRS15 for Telecom, SAP BPC for Construction (2015–2018).</p></CardContent></Card></div>
          <div className="hover:shadow-lg transition"><Card><CardContent className="p-4"><h4 className="font-semibold mb-2 text-indigo-700">KPMG Advisors – Consulting</h4><p>Business Process Reengineering, Public Sector advisory (2007–2015).</p></CardContent></Card></div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
        <p className="mb-4">Email: <a href="mailto:kostas.nikou@gmail.com" className="underline">kostas.nikou@gmail.com</a></p>
        <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl shadow-md">
          <a href="https://www.linkedin.com/in/knikou/" target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-gray-100 text-gray-500">
        © {new Date().getFullYear()} Konstantinos Nikou - All Rights Reserved
      </footer>
    </div>
  );
}
