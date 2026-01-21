import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import NetworkParticles from "../components/ui/NetworkParticles.jsx";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About U-Tech | Our Mission & Story</title>
        <meta
          name="description"
          content="Learn about U-Tech, a tech firm specializing in web development, MVPs, UI/UX design, video editing, and educational tutorials."
        />
        <meta
          name="keywords"
          content="U-Tech, about us, web development company, digital solutions, web education, UI/UX, MVP, tutorials"
        />
        <link rel="canonical" href="https://u-tech.vercel.app/about" />
        <meta property="og:title" content="About U-Tech" />
        <meta
          property="og:description"
          content="Empowering creators with high-impact web apps, MVPs, design solutions, and educational tutorials."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-slate-50 pt-32 pb-24 px-4">
        <NetworkParticles />
        <div className="mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Building High-Impact Web Apps, MVPs & Digital Solutions
              </h1>
              <p className="text-slate-600 text-lg mb-6">
                From web development to UI/UX, graphic design, video editing, and tutorials—U-Tech empowers creators and businesses to bring ideas to life.
              </p>
              <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
                <a
                  href="/tutorials"
                  className="bg-slate-100 text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-200 font-medium transition"
                >
                  View Tutorials
                </a>
               <a
                 href="/contact"
                 className="inline-flex items-center justify-center bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 font-medium transition w-auto"
              > 
               Start Your Project Today
              </a>

              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
                alt="Web Development Team"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>

          {/* Our Story Timeline */}
          <section className="py-16 bg-slate-100 rounded-lg px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Story</h2>
            <div className="space-y-12">
              {[
                {
                  title: "We Started with a Vision",
                  desc: "U-Tech was founded to turn ideas into high-quality web apps and MVPs that help businesses succeed online.",
                  icon: "🎯",
                },
                {
                  title: "Core Expertise: Web Apps & MVPs",
                  desc: "We focus on scalable, performance-optimized web applications that are SEO-ready and built with clean architecture.",
                  icon: "💻",
                },
                {
                  title: "Comprehensive Digital Solutions",
                  desc: "UI/UX, graphic design, and video editing services ensure your products are not just functional, but visually engaging.",
                  icon: "🎨",
                },
                {
                  title: "Sharing Knowledge Through Tutorials",
                  desc: "We create high-quality tutorials and educational content to help developers and entrepreneurs grow.",
                  icon: "📚",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-start gap-6 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="text-4xl">{item.icon}</div>
                  <div className="max-w-xl">
                    <h3 className="font-semibold text-slate-900 text-xl mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Why Choose U-Tech */}
          <section className="py-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose U-Tech?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Fast Delivery of MVPs",
                  desc: "Turn your ideas into live products quickly without compromising quality.",
                  icon: "⚡",
                },
                {
                  title: "Educational Tutorials",
                  desc: "Grow your skills with step-by-step tutorials across web development, UI/UX, and design.",
                  icon: "📘",
                },
                {
                  title: "Creative Multimedia Services",
                  desc: "From graphic design to video editing, we provide complete digital solutions for your brand.",
                  icon: "🎬",
                },
                {
                  title: "Production-Ready Quality",
                  desc: "Every project we deliver is ready for the real world, optimized for performance and scalability.",
                  icon: "✅",
                },
                {
                  title: "Dedicated Support",
                  desc: "Our team is here to help you scale your ideas with expert guidance and community support.",
                  icon: "🤝",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-teal-500 text-2xl">{item.icon}</span>
                    <h3 className="font-semibold text-slate-900 text-lg">{item.title}</h3>
                  </div>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-teal-50 rounded-lg px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Ready to Transform Your Ideas?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Helping startups and businesses bring their web projects and MVPs to life with expert digital solutions.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="/tutorials" className="bg-slate-100 text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-200 font-medium transition">
                Explore Tutorials
              </a>
              <a href="/contact" className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 font-medium transition">
                Start Your Project Today
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
