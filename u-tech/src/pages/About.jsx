import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
    <Helmet>
      <title>About U-Tech | Our Mission & Story</title>
      <meta name="description" content="Learn about U-Tech's mission to empower businesses with top-quality web development, digital solutions, and education." />
      <meta name="keywords" content="U-Tech, about us, web development company, digital solutions, web education" />
      <link rel="canonical" href="https://u-tech.vercel.app/about" />
      <meta property="og:title" content="About U-Tech" />
      <meta property="og:description" content="Empowering creators with top-quality digital experiences and web solutions." />
      <meta property="og:type" content="website" />
    </Helmet>
    <main className="min-h-screen bg-slate-50 pt-32 pb-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Building the <br /> Future of Digital
            </h1>
            <div className="mb-6">
              <h2 className="font-semibold text-lg text-slate-900 mb-2">Our Mission</h2>
              <p className="text-slate-600 text-lg">
                Our mission is to empower creators, businesses, and developers with top-quality digital experiences. 
                We believe in high-quality web solutions, education, and the power of clean architecture.
              </p>
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
        <section className="py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Story</h2>
          <div className="bg-white rounded-lg border border-slate-200 p-8">
            <p className="text-slate-600 text-lg mb-6">
              U-Tech is a fast-growing startup founded to deliver high-quality web development solutions and digital products. We're building from the ground up with a clear mission: create amazing digital experiences for businesses and train the next generation of developers.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">We Started with a Vision</h3>
                  <p className="text-slate-600">We recognized the gap between traditional education and industry demands. U-Tech was born to bridge that gap by offering practical, hands-on web development training alongside professional project delivery.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Building Web Apps & MVPs</h3>
                  <p className="text-slate-600">Our core strength is building scalable web applications and MVPs for startups and established businesses. We focus on clean architecture, performance optimization, and SEO-ready solutions that help businesses succeed online.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Expanding Our Services</h3>
                  <p className="text-slate-600">As we grew, we incorporated UI/UX design and graphic design services to provide complete digital solutions. This allows us to deliver end-to-end products that are both beautiful and functional.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Building Trust Through Education</h3>
                  <p className="text-slate-600">We're actively building trust and community by offering quality tutorials and training programs. Our goal is to get more talented developers and entrepreneurs onboard, creating a strong foundation for sustainable growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose U-Tech */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose U-Tech?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Industry-Aligned Solutions", desc: "Our services and training align with current industry standards." },
              { title: "Production-Ready Quality", desc: "Every project delivers production-ready code and design." },
              { title: "Dedicated Support", desc: "We provide ongoing support and community engagement." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-teal-500 font-bold text-xl">✓</span>
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
            Join hundreds of businesses that trust U-Tech for their digital transformation journey.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="/tutorials" className="bg-slate-100 text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-200 font-medium transition">
              View Tutorials
            </a>
            <a href="/contact" className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 font-medium transition">
              Start Your Project
            </a>
          </div>
        </section>
      </div>
    </main>
    </>
  );
};

export default About;
