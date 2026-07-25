
import React from "react";
import { motion } from "framer-motion";
import {
  SiOpenai, SiDocker, SiExpress, SiReact, SiNodedotjs,
  SiWebrtc, SiJavascript, SiMongodb,
} from "react-icons/si";
import { FaJava, FaQrcode } from "react-icons/fa";
import { BsTerminal } from "react-icons/bs";

const projects = [
  {
    title: "TalkGPT",
    subtitle: "AI-Powered Conversational Assistant",
    date: "Feb 2025",
    bgColor: "#0d1f2d",
    accentColor: "#10b981",
    tag: "AI-Driven Innovation",
    techIcons: [SiOpenai, SiReact, SiExpress, SiNodedotjs],
    techNames: ["OpenAI API", "React.js", "Express.js", "Node.js"],
    bullets: [
      "Full-stack AI chat app integrating OpenAI API (ChatGPT) via Express.js backend",
      "Streaming responses in a responsive React.js interface",
      "RESTful APIs for prompt processing with real-time chatbot-style output",
    ],
    link: "#",
  },
  {
    title: "GParking",
    subtitle: "Smart Campus Parking System",
    date: "Jan 2026",
    bgColor: "#0f172a",
    accentColor: "#3b82f6",
    tag: "Scalable Solution",
    techIcons: [SiReact, SiNodedotjs, SiDocker, FaQrcode],
    techNames: ["React", "Node.js", "Docker", "QR Code"],
    bullets: [
      "Full-stack scalable solution with JWT-secured RESTful APIs",
      "Live parking occupancy tracking, QR code verification & violation management",
      "Containerized with Docker, deployed on Render, packaged as Android app via Capacitor",
    ],
    link: "#",
  },
  {
    title: "Connectify",
    subtitle: "Real-Time Video Communication Platform",
    date: "May 2025",
    bgColor: "#1a0a2e",
    accentColor: "#a855f7",
    tag: "Real-Time Systems",
    techIcons: [SiWebrtc, SiNodedotjs, SiJavascript, SiReact],
    techNames: ["WebRTC", "Socket.io", "Node.js", "React"],
    bullets: [
      "Real-time video conferencing with WebRTC and Socket.io for low-latency signalling",
      "Session synchronization and responsive interface across desktop and mobile",
      "RESTful APIs in Node.js for user and room management",
    ],
    link: "#",
  },
  {
    title: "RepoFlow",
    subtitle: "Distributed Version Control System",
    date: "Aug 2025",
    bgColor: "#0d1a10",
    accentColor: "#22c55e",
    tag: "CLI Tool",
    techIcons: [SiNodedotjs, BsTerminal, SiJavascript],
    techNames: ["Node.js", "CLI", "File System APIs"],
    bullets: [
      "Custom CLI-based version control system built in Node.js",
      "Commit tracking, multi-branch workflows, and automated change detection",
      "Leverages File System APIs for distributed source management",
    ],
    link: "#",
  },
  {
    title: "SGPA Calculator",
    subtitle: "Desktop Application",
    date: "Oct 2025",
    bgColor: "#1a0f00",
    accentColor: "#f59e0b",
    tag: "Desktop App",
    techIcons: [FaJava],
    techNames: ["Java", "JavaFX"],
    bullets: [
      "Desktop application (executable) built in Java using JavaFX",
      "Dynamic grade inputs with real-time GPA computation logic",
      "Cross-platform installable executable for ease of use",
    ],
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black text-white py-20 px-4 sm:px-8 overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-10 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-10 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]">
            My Work
          </h2>
          <p className="mt-3 text-gray-400 text-lg">
            5 production-grade projects — AI · Full Stack · Real-Time · CLI · Desktop
          </p>
        </motion.div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative rounded-2xl border border-white/10 overflow-hidden shadow-xl group"
              style={{ backgroundColor: project.bgColor }}
              aria-label={project.title}
            >
              {/* Accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: project.accentColor }}
              />

              <div className="p-6 sm:p-8 flex flex-col h-full gap-4">
                {/* Tag + Date */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{
                      color: project.accentColor,
                      borderColor: project.accentColor + "55",
                      backgroundColor: project.accentColor + "18",
                    }}
                  >
                    {project.tag}
                  </span>
                  <span className="text-xs text-gray-500">{project.date}</span>
                </div>

                {/* Title */}
                <div>
                  <h3
                    className="text-2xl sm:text-3xl font-extrabold"
                    style={{ color: project.accentColor }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{project.subtitle}</p>
                </div>

                {/* Bullet points */}
                <ul className="flex flex-col gap-2 flex-1">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: project.accentColor }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech stack icons */}
                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/10">
                  {project.techIcons.map((Icon, j) => (
                    <span
                      key={j}
                      className="flex items-center gap-1.5 text-xs text-gray-400"
                      title={project.techNames[j]}
                    >
                      <Icon
                        className="text-lg"
                        style={{ color: project.accentColor }}
                      />
                      <span>{project.techNames[j]}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  boxShadow: `inset 0 0 40px ${project.accentColor}22`,
                }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
