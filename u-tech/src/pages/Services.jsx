import { motion } from "framer-motion";
import { 
  Code2, Layout, Smartphone, Gauge, 
  Palette, PenTool, Video, 
  ArrowRight, CheckCircle2, Search
} from "lucide-react";
import NetworkParticles from "../components/ui/NetworkParticles.jsx";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Our Services | U-Tech – Web Development & Digital Solutions</title>

        <meta
          name="description"
          content="U-Tech delivers modern web development, UI/UX design, SEO optimization, and digital media services to help brands build, scale, and grow online."
        />

        <meta
          name="keywords"
          content="U-Tech, web development, frontend development, full-stack development, UI UX design, SEO optimization, digital solutions"
        />

        <meta name="author" content="U-Tech" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="U-Tech Services – Web Development & Digital Solutions" />
        <meta
          property="og:description"
          content="Modern web development, SEO, UI/UX, and media services designed to grow your digital presence."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://u-tech.com/services" />
        <meta property="og:site_name" content="U-Tech" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="U-Tech Services" />
        <meta
          name="twitter:description"
          content="Web development and SEO-driven digital solutions built for performance and growth."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://u-tech.com/services" />
      </Helmet>
      <main className="relative overflow-hidden bg-slate-50 min-h-screen pt-24 pb-16">
      {/* Network Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <NetworkParticles />
      </div>
      {/* 1. Header Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 text-center mt-26">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Our Digital Solutions
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We provide a full spectrum of web-focused digital services, 
            designed to build, scale, and grow your brand.
          </p>
        </motion.div>
      </section>

      {/* 2. Web Development (Primary Focus) */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
                <Code2 size={16} />
                Primary Core Focus
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Web Development at the Core of What We Do
              </h2>
              <p className="text-slate-600 mb-8">
                U-Tech is primarily a web development firm. We build modern web 
                applications and digital products supported by strong design 
                and creative services.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Frontend Web Development",
                  "Full-stack Web Applications",
                  "MVP Development for Startups",
                  "Website Optimization"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 size={18} className="text-teal-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <Gauge className="text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900">Performance</h4>
                <p className="text-sm text-slate-500">Fast, optimized experiences.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <Layout className="text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900">Scalability</h4>
                <p className="text-sm text-slate-500">Built for future growth.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <Smartphone className="text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900">Responsive</h4>
                <p className="text-sm text-slate-500">Flawless on all devices.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <Code2 className="text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900">Clean Code</h4>
                <p className="text-sm text-slate-500">Maintainable architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Supporting Digital Services */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900">Supporting Services</h2>
          <p className="text-slate-600">Design and media expertise that powers our web products.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* UI/UX Design */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-slate-200">
            <Palette className="text-teal-500 mb-6" size={32} />
            <h3 className="text-xl font-bold text-slate-900 mb-4">UI/UX Design</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li>• Product UI design</li>
              <li>• UX research & wireframing</li>
              <li>• Design systems</li>
              <li>• Developer handoff</li>
            </ul>
          </motion.div>

          {/* Graphic Design */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-slate-200">
            <PenTool className="text-teal-500 mb-6" size={32} />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Graphic Design</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li>• Branding & visual identity</li>
              <li>• Marketing creatives</li>
              <li>• Flyers & posters</li>
              <li>• Social media assets</li>
            </ul>
          </motion.div>

          {/* Video & Media */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-slate-200">
            <Video className="text-teal-500 mb-6" size={32} />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Video & Media</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li>• Video editing</li>
              <li>• Promo & social videos</li>
              <li>• Motion graphics</li>
              <li>• Content production</li>
            </ul>
          </motion.div>

          {/* SEO Optimization */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-slate-200">
            <Search className="text-teal-500 mb-6" size={32} />
            <h3 className="text-xl font-bold text-slate-900 mb-4">SEO Optimization</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li>• On-page & technical SEO</li>
              <li>• Keyword research & strategy</li>
              <li>• Performance & indexing</li>
              <li>• Search visibility analysis</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. Collaboration Model CTA */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The U-Tech Advantage</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Our developers work closely with designers and media experts to deliver 
            consistent branding and faster execution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-md font-semibold transition flex items-center gap-2">
              Start Your Project <ArrowRight size={18} />
            </a>
            <a href="/tutorials" className="bg-slate-800 hover:bg-slate-700 px-8 py-3 rounded-md font-semibold transition border border-slate-700">
              View Tutorials
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Services;