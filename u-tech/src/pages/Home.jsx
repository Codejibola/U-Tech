import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NetworkParticles from "../components/ui/NetworkParticles.jsx";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <>
    <Helmet>
          <title>U-Tech | Building SEO-Optimized Modern Web Solutions</title>
          <meta
              name="description"
              content="U-Tech builds fast, scalable, SEO-optimized web applications with modern UI/UX and clean architecture." />
          <meta
              name="keywords"
              content="web development, SEO optimization, modern web apps, UI UX design, U-Tech" />
          <link rel="canonical" href="https://u-tech.vercel.app/" />
    </Helmet><main className="relative overflow-hidden bg-slate-50">
    



              {/* Network Background */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                  <NetworkParticles />
              </div>
              {/* HERO SECTION */}
              <section className="relative pt-32 pb-24">
                  {/* Background network effect (optional image/svg layer) */}
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                      {/* Replace with SVG or background image later */}
                  </div>

                  <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                      {/* LEFT: TEXT */}
                      <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                      >
                          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-slate-900 leading-tight">
                              Building the Architecture <br />
                              of the Modern Web.
                          </h1>

                          <p className="mt-6 max-w-xl text-lg text-slate-600">
                              Web-focused digital solutions backed by UI/UX mastery,
                              creative branding, and expert-led training.
                          </p>

                          <div className="mt-10 flex items-center gap-6">
                              <a
                                  href="/contact"
                                  className="inline-flex items-center gap-2 rounded-md bg-teal-500 px-6 py-3 text-white font-medium hover:bg-teal-600 transition"
                              >
                                  Start a Web Project
                                  <ArrowRight size={18} />
                              </a>

                              <a
                                  href="/work"
                                  className="text-slate-700 font-medium hover:text-slate-900 transition"
                              >
                                  View Work
                              </a>
                          </div>
                      </motion.div>

                      {/* RIGHT: MOCK SCREEN */}
                      <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="relative"
                      >
                          <div className="rounded-xl bg-slate-900 shadow-2xl border border-slate-800">
                              {/* Fake editor header */}
                              <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-800">
                                  <span className="w-3 h-3 rounded-full bg-red-500" />
                                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                  <span className="w-3 h-3 rounded-full bg-green-500" />
                              </div>

                              {/* Code area */}
                              <pre className="p-8 text-base text-slate-200 overflow-hidden min-h-96">
                                  <span className="text-teal-400">import</span> Trust <span className="text-teal-400">from</span> <span className="text-amber-300">&apos;u-tech&apos;</span>;
                                  {"\n"}<span className="text-teal-400">import</span> {"{"} Performance, SEO, Design {"}"} <span className="text-teal-400">from</span> <span className="text-amber-300">&apos;@u-tech/core&apos;</span>;
                                  {"\n"}
                                  {"\n"}<span className="text-teal-400">export default</span> <span className="text-sky-400">function</span> WhyClientsChooseUs() {"{"}
                                  {"\n"}  <span className="text-teal-400">const</span> results = {"{"}
                                  {"\n"}    speed: <span className="text-amber-300">&quot;Fast-loading, optimized builds&quot;</span>,
                                  {"\n"}    seo: <span className="text-amber-300">&quot;Search engines love our structure&quot;</span>,
                                  {"\n"}    ux: <span className="text-amber-300">&quot;Interfaces users actually enjoy&quot;</span>,
                                  {"\n"}    scale: <span className="text-amber-300">&quot;Built to grow with your business&quot;</span>,
                                  {"\n"}  {"}"};
                                  {"\n"}
                                  {"\n"}  <span className="text-teal-400">return</span> (
                                  {"\n"}    &lt;<span className="text-sky-400">Project</span>&gt;
                                  {"\n"}      &lt;<span className="text-sky-400">SEO</span> optimized /&gt;
                                  {"\n"}      &lt;<span className="text-sky-400">Performance</span> tuned /&gt;
                                  {"\n"}      &lt;<span className="text-sky-400">Design</span> humanCentered /&gt;
                                  {"\n"}      &lt;<span className="text-sky-400">Outcome</span> valueDriven results={"{"}results{"}"} /&gt;
                                  {"\n"}    &lt;/<span className="text-sky-400">Project</span>&gt;
                                  {"\n"}  );
                                  {"\n"}{"}"}
                                  {"\n"}
                                  {"\n"}<span className="text-green-400">✓ Trusted by clients • SEO-ready • Built for growth</span>
                              </pre>

                          </div>
                      </motion.div>
                  </div>
              </section>

              {/* WEB DEVELOPMENT – PRIMARY SECTION */}
              <section className="py-24 bg-white">
                  <div className="mx-auto max-w-7xl px-6">
                      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                          Web Development at the Core of What We Do
                      </h2>

                      <p className="mt-4 max-w-2xl text-slate-600">
                          We design and build fast, scalable, and maintainable web
                          applications using modern technologies and best practices.
                      </p>

                      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                          {[
                              "Frontend Web Development",
                              "Full-Stack Web Applications",
                              "MVP Development for Startups",
                              "Website Optimization & Maintenance",
                          ].map((service) => (
                              <div
                                  key={service}
                                  className="rounded-lg border border-slate-200 p-6 hover:shadow-md transition"
                              >
                                  <h3 className="font-medium text-slate-900">
                                      {service}
                                  </h3>
                                  <p className="mt-3 text-sm text-slate-600">
                                      Built for performance, scalability, and long-term growth.
                                  </p>
                              </div>
                          ))}
                      </div>
                  </div>
              </section>

              {/* SUPPORTING SERVICES */}
              <section className="py-24 bg-slate-50">
                  <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                      <div>
                          <h3 className="text-xl font-semibold text-slate-900">
                              UI/UX Design
                          </h3>
                          <ul className="mt-4 space-y-2 text-slate-600">
                              <li>Product UI Design</li>
                              <li>UX Research & Wireframing</li>
                              <li>Design Systems</li>
                              <li>Developer Handoff</li>
                          </ul>
                      </div>

                      <div>
                          <h3 className="text-xl font-semibold text-slate-900">
                              Graphic Design
                          </h3>
                          <ul className="mt-4 space-y-2 text-slate-600">
                              <li>Brand Identity</li>
                              <li>Marketing Creatives</li>
                              <li>Flyers & Posters</li>
                          </ul>
                      </div>

                      <div>
                          <h3 className="text-xl font-semibold text-slate-900">
                              Video & Media
                          </h3>
                          <ul className="mt-4 space-y-2 text-slate-600">
                              <li>Promo Videos</li>
                              <li>Social Media Content</li>
                              <li>Motion Graphics</li>
                          </ul>
                      </div>

                  </div>
              </section>

              {/* CTA */}
              <section className="py-24 bg-slate-900 text-center">
                  <h2 className="text-3xl md:text-4xl font-semibold text-white">
                      Have a web project or product idea?
                  </h2>
                  <p className="mt-4 text-slate-300">
                      Let’s build something scalable and impactful.
                  </p>

                  <a
                      href="/contact"
                      className="mt-8 inline-block rounded-md bg-teal-500 px-8 py-4 font-medium text-white hover:bg-teal-600 transition"
                  >
                      Start a Web Project
                  </a>
              </section>
          </main>
          </>
  );
};

export default Home;
