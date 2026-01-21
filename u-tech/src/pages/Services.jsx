import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Smartphone,
  Gauge,
  Palette,
  PenTool,
  Video,
  ArrowRight,
  CheckCircle2,
  Search,
  Users,
  Layers,
  Rocket,
  Shield
} from "lucide-react";
import NetworkParticles from "../components/ui/NetworkParticles.jsx";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
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
          content="U-Tech delivers modern web development, UI/UX design, SEO optimization, and digital media services to help startups and businesses build scalable digital products."
        />
        <link rel="canonical" href="https://u-tech.com/services" />
      </Helmet>

      <main className="relative overflow-hidden bg-slate-50 min-h-screen pt-24 pb-20">
        {/* Network Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <NetworkParticles />
        </div>

        {/* Header */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Our Digital Solutions
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Web-focused services designed to help startups and businesses build,
              launch, and grow reliable digital products.
            </p>
          </motion.div>
        </section>

        {/* Web Development Core */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left */}
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
                  <Code2 size={16} />
                  Core Focus
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Web Development at the Core of What We Do
                </h2>

                <p className="text-slate-600 mb-8">
                  U-Tech is primarily a web development firm. We build modern,
                  scalable web applications and MVPs—supported by thoughtful
                  design and growth-focused services.
                </p>

                {/* Best For */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Users size={18} /> Best suited for
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 text-sm">
                    <li>• Startups building MVPs</li>
                    <li>• Businesses launching new platforms</li>
                    <li>• Founders validating product ideas</li>
                    <li>• Teams modernizing existing websites</li>
                  </ul>
                </div>

                {/* Process Preview */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-4">
                    Our Development Process
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                    <div className="flex gap-2 items-center">
                      <Layers size={16} /> Planning & Architecture
                    </div>
                    <div className="flex gap-2 items-center">
                      <Palette size={16} /> UI/UX & System Design
                    </div>
                    <div className="flex gap-2 items-center">
                      <Code2 size={16} /> Development & Testing
                    </div>
                    <div className="flex gap-2 items-center">
                      <Rocket size={16} /> Launch & Iteration
                    </div>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:underline"
                >
                  Discuss a web project <ArrowRight size={16} />
                </a>
              </div>

              {/* Right */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {[
                  { icon: Gauge, title: "Performance", text: "Fast, optimized experiences." },
                  { icon: Layout, title: "Scalability", text: "Built to grow with you." },
                  { icon: Smartphone, title: "Responsive", text: "Flawless on all devices." },
                  { icon: Shield, title: "Clean Code", text: "Maintainable architecture." },
                ].map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-md transition"
                  >
                    <Icon className="text-blue-600 mb-4" />
                    <h4 className="font-bold text-slate-900">{title}</h4>
                    <p className="text-sm text-slate-500">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Supporting Services */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900">
              Design & Growth Services That Strengthen Your Product
            </h2>
            <p className="text-slate-600 mt-2">
              These services support and enhance our web development work—not
              standalone distractions.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* UI/UX */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-md transition">
              <Palette className="text-teal-500 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-sm text-slate-500 mb-4">
                Designed to improve usability, retention, and conversion.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Product UI & flows</li>
                <li>• UX research & wireframes</li>
                <li>• Design systems</li>
              </ul>
            </motion.div>

            {/* Graphic */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-md transition">
              <PenTool className="text-teal-500 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">Graphic Design</h3>
              <p className="text-sm text-slate-500 mb-4">
                Visual assets that align with your product and brand identity.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Branding & identity</li>
                <li>• Marketing creatives</li>
                <li>• Social media assets</li>
              </ul>
            </motion.div>

            {/* Video */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-md transition">
              <Video className="text-teal-500 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">Video & Media</h3>
              <p className="text-sm text-slate-500 mb-4">
                Media content that supports marketing and product storytelling.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Promo & social videos</li>
                <li>• Motion graphics</li>
                <li>• Content editing</li>
              </ul>
            </motion.div>

            {/* SEO */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-md transition">
              <Search className="text-teal-500 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">SEO Optimization</h3>
              <p className="text-sm text-slate-500 mb-4">
                Focused on long-term visibility, not shortcuts.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Technical & on-page SEO</li>
                <li>• Keyword strategy</li>
                <li>• Performance audits</li>
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* What We Don’t Do */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="bg-slate-100 rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              What We Don’t Do
            </h3>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>• Generic templates with no strategy</li>
              <li>• One-size-fits-all SEO packages</li>
              <li>• Rushed, unmaintainable codebases</li>
            </ul>
          </div>
        </section>
        {/* Pricing Philosophy */}
<section className="mx-auto max-w-7xl px-6 py-12">
  <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
    <div className="max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
        Our Pricing Philosophy
      </h2>

      <p className="text-slate-600 mb-8">
        At U-Tech, we don’t believe in one-size-fits-all pricing. Every project
        is different, and our pricing reflects the scope, complexity, and value
        of the solution being built.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="flex gap-3">
          <CheckCircle2 className="text-teal-500 mt-1" size={20} />
          <div>
            <h4 className="font-semibold text-slate-900">
              Scope-Based Pricing
            </h4>
            <p className="text-sm text-slate-600">
              We price based on features, timelines, and technical requirements—
              not arbitrary packages.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <CheckCircle2 className="text-teal-500 mt-1" size={20} />
          <div>
            <h4 className="font-semibold text-slate-900">
              No Hidden Costs
            </h4>
            <p className="text-sm text-slate-600">
              Clear estimates, transparent communication, and agreed deliverables
              from day one.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <CheckCircle2 className="text-teal-500 mt-1" size={20} />
          <div>
            <h4 className="font-semibold text-slate-900">
              Quality Over Quantity
            </h4>
            <p className="text-sm text-slate-600">
              We focus on building reliable, maintainable solutions—not rushing
              projects to cut costs.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <CheckCircle2 className="text-teal-500 mt-1" size={20} />
          <div>
            <h4 className="font-semibold text-slate-900">
              Fair for Startups
            </h4>
            <p className="text-sm text-slate-600">
              We work with early-stage teams and help define MVP scopes that fit
              realistic budgets.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <p className="text-slate-700 font-medium">
          If you’re unsure about budget, that’s okay.
        </p>
        <p className="text-slate-600 text-sm mt-2">
          We’ll help you scope a solution that balances functionality, cost, and
          long-term growth.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="bg-slate-900 rounded-2xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Something Solid?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Let’s collaborate to design and build a web product that lasts.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/contact"
                className="bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-md font-semibold transition flex items-center gap-2"
              >
                Start Your Project <ArrowRight size={18} />
              </a>
              <a
                href="/tutorials"
                className="bg-slate-800 hover:bg-slate-700 px-8 py-3 rounded-md font-semibold border border-slate-700 transition"
              >
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
