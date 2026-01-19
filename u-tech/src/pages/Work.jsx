import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ExternalLink } from 'lucide-react';
import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';

const Work = () => {
  // Project Data
  const webProjects = [
    {
      id: 1,
      title: "Quantora",
      category: "Web Development",
      description: "A comprehensive dashboard for real-time data tracking.",
      image: Project1,
      alt: "Quantora web dashboard project by U-Tech",
      url: "https://quantora-mu.vercel.app",
      large: true
    },
    {
      id: 2,
      title: "RahmahKnits",
      category: "E-commerce",
      description: "Modern marketplace for local vendors.",
      image: Project2,
      alt: "RahmahKnits e-commerce website developed by U-Tech",
      url: "https://rahmah-knits-ngqa.vercel.app",
      large: false
    },
    {
      id: 3,
      title: "HifzHub",
      category: "Web App",
      description: "High-performance site with glassmorphism UI.",
      image: Project3,
      alt: "HifzHub web application by U-Tech",
      url: "https://quranly-jcdh.vercel.app",
      large: false
    }
  ];

  return (
    <>
    <main className="min-h-screen bg-white pt-32 pb-20">

      {/* SEO */}
      <Helmet>
        <title>Our Work | U-Tech Web Development Projects</title>
        <meta
          name="description"
          content="Explore U-Tech’s featured web development projects, including dashboards, e-commerce platforms, and modern web applications."
        />
        <meta
          name="keywords"
          content="U-Tech projects, web development portfolio, featured web projects, frontend development, e-commerce websites"
        />
        <meta name="author" content="U-Tech" />

        <meta property="og:title" content="U-Tech Projects – Featured Web Work" />
        <meta
          property="og:description"
          content="A curated selection of web applications, dashboards, and digital products built by U-Tech."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://u-tech.com/work" />
        <meta property="og:site_name" content="U-Tech" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="U-Tech Web Projects" />
        <meta
          name="twitter:description"
          content="Featured web development and digital projects crafted by U-Tech."
        />

        <link rel="canonical" href="https://u-tech.com/work" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Our Latest Projects
          </h1>
          <p className="text-slate-500 text-lg">
            A showcase of our web development, design, and media work.
          </p>
        </header>

        {/* FEATURED WEB PROJECTS */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-slate-900 mb-8 border-b-2 border-teal-500 inline-block pb-1">
            Featured Web Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${project.large ? 'md:col-span-2' : 'col-span-1'} group`}
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      project.large ? 'h-[450px]' : 'h-[300px]'
                    }`}
                  />

                  {/* Hover Link */}
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} project`}
                      className="bg-white text-slate-900 p-4 rounded-full hover:bg-teal-500 hover:text-white transition"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="text-teal-600 text-sm font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mt-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Secondary Section */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-8">
            Selected Design & Media Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-teal-500">
              <h4 className="font-bold">Brand Identity</h4>
              <p className="text-sm text-slate-500 mt-2">Marketing Creatives</p>
            </div>
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-teal-500">
              <h4 className="font-bold">Video Promo</h4>
              <p className="text-sm text-slate-500 mt-2">Motion Graphics</p>
            </div>
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-teal-500">
              <h4 className="font-bold">UI Case Study</h4>
              <p className="text-sm text-slate-500 mt-2">UX Research</p>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed inset-0 pointer-events-none opacity-10 -z-10" />
    </main>
    </>
  );
};

export default Work;
