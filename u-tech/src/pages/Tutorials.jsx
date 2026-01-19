import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NetworkParticles from "../components/ui/NetworkParticles";
import { X, Lock } from "lucide-react";

const tutorials = [
  {
    title: "Modern Frontend Development",
    price: 180000,
    discount: 120000,
    duration: "8 Weeks",
    lessons: 42,
    description:
      "HTML, CSS, JavaScript, React, Tailwind, animations, component design, and real-world UI architecture.",
    outcomes: [
      "Build production-ready user interfaces",
      "Create scalable component systems",
      "Understand modern frontend workflows",
      "Develop real-world responsive layouts",
    ],
    outline: [
      "Web & Browser Fundamentals",
      "HTML & CSS for Real Projects",
      "JavaScript Foundations",
      "React Component Architecture",
      "State & Data Flow",
      "Project: Production Dashboard",
    ],
  },
  {
    title: "Backend Engineering with Node.js",
    price: 220000,
    discount: 150000,
    duration: "10 Weeks",
    lessons: 48,
    description:
      "APIs, databases, authentication, security, performance optimization, and scalable backend systems.",
    outcomes: [
      "Build secure REST APIs",
      "Design scalable backend systems",
      "Work with databases effectively",
      "Implement authentication & authorization",
    ],
    outline: [
      "Backend Fundamentals",
      "Node.js & Express",
      "Databases & Data Modeling",
      "Authentication & Security",
      "Performance Optimization",
      "Project: Scalable API",
    ],
  },
  {
    title: "Fullstack Web Application Development",
    price: 320000,
    discount: 220000,
    duration: "14 Weeks",
    lessons: 65,
    description:
      "End-to-end product development: frontend, backend, deployment, testing, and real-world MVPs.",
    outcomes: [
      "Build fullstack applications from scratch",
      "Connect frontend to backend systems",
      "Deploy real-world products",
      "Work like a professional developer",
    ],
    outline: [
      "Fullstack Architecture",
      "Frontend + Backend Integration",
      "Authentication & Payments",
      "Deployment & DevOps Basics",
      "Testing & Optimization",
      "Project: Real MVP",
    ],
  },
];

export default function Tutorials() {
  const [activeTutorial, setActiveTutorial] = useState(null);

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pt-28 pb-32 relative">
      <NetworkParticles />

      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {/* PAGE HEADER */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Learn Software Development the Right Way
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose between independent tutorials or a structured learning
            program designed to take you from beginner to professional.
          </p>
        </section>

        {/* VIEW TUTORIALS */}
        <section className="space-y-12">
          <h2 className="text-3xl font-semibold text-slate-900">
            View Tutorials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tutorials.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm">
                  {item.description}
                </p>

                <div className="space-y-1 text-sm text-slate-700">
                  <p>Duration: {item.duration}</p>
                  <p>Lessons: {item.lessons}</p>
                </div>

                <div className="pt-4">
                  <p className="line-through text-slate-400">
                    ₦{item.price.toLocaleString()}
                  </p>
                  <p className="text-xl font-bold text-teal-500">
                    ₦{item.discount.toLocaleString()}
                  </p>
                  <p className="text-xs text-slate-500">
                    Flash Sale (Limited Time)
                  </p>
                </div>

                <button
                  onClick={() => setActiveTutorial(item)}
                  className="w-full mt-4 rounded-lg bg-teal-50 text-teal-500 py-2 hover:bg-teal-100 transition font-medium"
                >
                  View Tutorial
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* START LEARNING / PROGRAM */}
        <section className="space-y-16">
          <h2 className="text-3xl font-semibold text-slate-900">
            Start Learning (Guided Program)
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 1",
                title: "Frontend Foundations",
                text: "Learn how the web works, build interfaces, and understand modern UI development.",
              },
              {
                step: "Step 2",
                title: "Backend Engineering",
                text: "Build APIs, handle databases, authentication, and server-side logic.",
              },
              {
                step: "Step 3",
                title: "Fullstack Mastery",
                text: "Combine frontend and backend to ship real products and scalable systems.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white border border-slate-200 p-6 space-y-3 shadow-sm"
              >
                <span className="text-teal-500 text-sm font-medium">
                  {step.step}
                </span>
                <h3 className="text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-xl mx-auto rounded-2xl bg-white border border-slate-200 p-8 text-center space-y-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">
              Complete Software Development Program
            </h3>

            <p className="text-slate-600 text-sm">
              A structured roadmap with mentorship, projects, and career-ready
              skills.
            </p>

            <div>
              <p className="line-through text-slate-400">₦1,000,000</p>
              <p className="text-3xl font-bold text-teal-500">₦580,000</p>
              <p className="text-xs text-slate-500">
                Flash Sale • Limited Slots
              </p>
            </div>

            <button className="w-full rounded-lg bg-teal-500 text-white py-3 font-semibold hover:bg-teal-600 transition">
              Join the Program
            </button>
          </div>
        </section>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeTutorial && (
          <motion.div
            className="fixed inset-0 z-50 bg-slate-900/70 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-2xl w-full bg-white rounded-2xl p-8 space-y-6 relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <button
                onClick={() => setActiveTutorial(null)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-900"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-semibold">
                {activeTutorial.title}
              </h3>

              <p className="text-slate-600 text-sm">
                {activeTutorial.description}
              </p>

              {/* DETAILS */}
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
                <p><strong>Duration:</strong> {activeTutorial.duration}</p>
                <p><strong>Total Lessons:</strong> {activeTutorial.lessons}</p>
              </div>

              <div className="space-y-2">
                <p className="font-medium">What you will learn:</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  {activeTutorial.outcomes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Lock size={14} className="text-teal-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Lesson Outline:</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {activeTutorial.outline.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Lock size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <p className="line-through text-slate-400">
                  ₦{activeTutorial.price.toLocaleString()}
                </p>
                <p className="text-2xl font-bold text-teal-500">
                  ₦{activeTutorial.discount.toLocaleString()}
                </p>
              </div>

              <button className="w-full rounded-lg bg-teal-500 text-white py-3 font-semibold hover:bg-teal-600 transition">
                Unlock Tutorial
              </button>

              <p className="text-xs text-slate-500 text-center">
                This purchase unlocks this tutorial only.  
                For full mentorship and roadmap access, join the program.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
