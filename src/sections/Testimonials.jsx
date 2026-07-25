
import { motion } from "framer-motion";
import { FaMedal, FaCode, FaTrophy } from "react-icons/fa";
import { SiCisco, SiLeetcode, SiHackerrank } from "react-icons/si";

const certifications = [
  {
    issuer: "Apna College",
    title: "Data Structures & Algorithms in Java",
    icon: <FaCode className="text-2xl" />,
    color: "#f59e0b",
  },
  {
    issuer: "Apna College",
    title: "Full Stack (MERN) Development",
    icon: <FaCode className="text-2xl" />,
    color: "#3b82f6",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Python Essentials 1 & 2",
    icon: <SiCisco className="text-2xl" />,
    color: "#1CD8D2",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Introduction to Data Science",
    icon: <SiCisco className="text-2xl" />,
    color: "#1CD8D2",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Introduction to Modern AI & Apply AI",
    icon: <SiCisco className="text-2xl" />,
    color: "#1CD8D2",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "CCNA: Networks, Switching & Enterprise Security",
    icon: <SiCisco className="text-2xl" />,
    color: "#1CD8D2",
  },
  {
    issuer: "HackerRank",
    title: "Node.js (Intermediate)",
    icon: <SiHackerrank className="text-2xl" />,
    color: "#22c55e",
  },
];

const achievements = [
  {
    title: "GATE 2026 Qualified",
    subtitle: "Computer Science & IT (CSIT) — National Top-Percentile",
    icon: <FaMedal className="text-3xl" />,
    color: "#f59e0b",
  },
  {
    title: "150+ LeetCode Problems",
    subtitle: "Strong DSA proficiency in Java & Python",
    icon: <SiLeetcode className="text-3xl" />,
    color: "#f97316",
  },
  {
    title: "Top 10 Teams — GITAM GCGC Hackathon 2024",
    subtitle: "Full Stack web & Android app in 24 hours (60+ teams)",
    icon: <FaTrophy className="text-3xl" />,
    color: "#a855f7",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative min-h-screen bg-black text-white px-4 sm:px-8 py-20 overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#f59e0b] to-[#302b63] opacity-10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#1CD8D2] to-[#302b63] opacity-10 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Achievements */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]">
            Achievements
          </h2>
          <p className="mt-3 text-gray-400 text-lg">
            Recognition & milestones that define my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col items-center text-center gap-3 shadow-xl overflow-hidden"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-1"
                style={{
                  backgroundColor: a.color + "22",
                  color: a.color,
                }}
              >
                {a.icon}
              </div>
              <h3 className="text-base font-bold text-white leading-snug">{a.title}</h3>
              <p className="text-sm text-gray-400">{a.subtitle}</p>
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{ background: a.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]">
            Certifications
          </h2>
          <p className="mt-3 text-gray-400 text-lg">
            Industry-recognized credentials backing my skill set
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 flex items-start gap-4 shadow-lg overflow-hidden group"
            >
              <div
                className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: cert.color + "22",
                  color: cert.color,
                }}
              >
                {cert.icon}
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: cert.color }}
                >
                  {cert.issuer}
                </p>
                <h3 className="text-sm font-semibold text-white leading-snug">
                  {cert.title}
                </h3>
              </div>
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: cert.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
