import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact U-Tech | Book a Project or Make an Enquiry</title>
        <meta
          name="description"
          content="Contact U-Tech to book a web development project, MVP, or UI/UX design services. Get in touch with our team for consultations and inquiries."
        />
        <meta
          name="keywords"
          content="contact U-Tech, web development, MVP, UI/UX design, project booking, consultation"
        />
        <link rel="canonical" href="https://u-tech.vercel.app/contact" />
        <meta property="og:title" content="Contact U-Tech" />
        <meta
          property="og:description"
          content="Book a web development project, MVP, or design service with U-Tech. Get expert consultation for your digital needs."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <main className="bg-slate-50">
        {/* HERO */}
        <section className="pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl px-6"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
              Contact U-Tech
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Book a project, request a consultation, or send us a general
              enquiry.
            </p>
          </motion.div>
        </section>

        {/* CONTENT */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* BOOK A PROJECT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-slate-900">
                Book a Project
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Best suited for startups, founders, and businesses looking to
                build or scale a web product.
              </p>

              <p className="mt-4 text-slate-600">
                Tell us about your project and we’ll get back to you with next
                steps.
              </p>

              <form className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <select className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Project Type</option>
                  <option>Website</option>
                  <option>Web Application</option>
                  <option>MVP</option>
                  <option>Redesign</option>
                  <option>Other</option>
                </select>

                <div className="space-y-2">
                  <select className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option>Budget Range</option>
                    <option>₦100k – ₦300k</option>
                    <option>₦300k – ₦700k</option>
                    <option>₦700k+</option>
                  </select>
                  <p className="text-xs text-slate-500">
                    If you’re unsure about budget, select a rough range. We’ll
                    help you scope appropriately.
                  </p>
                </div>

                <textarea
                  rows="5"
                  placeholder="Describe your project..."
                  className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <button
                  type="submit"
                  className="w-full rounded-md bg-teal-500 py-3 font-medium text-white hover:bg-teal-600 transition"
                >
                  Request Project Quote
                </button>

                {/* TRUST SIGNALS */}
                <div className="pt-4 space-y-1 text-xs text-slate-500">
                  <p>We usually respond within 24–48 hours.</p>
                  <p>No obligation — just a conversation.</p>
                  <p>Your information is kept private and never shared.</p>
                </div>
              </form>

              {/* WHAT HAPPENS NEXT */}
              <div className="mt-10 rounded-lg bg-slate-50 p-6">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  What happens next
                </h3>
                <ol className="space-y-2 text-sm text-slate-600">
                  <li>1. We review your request (within 24–48 hours)</li>
                  <li>2. Clarification call or follow-up email</li>
                  <li>3. Proposal, scope, and timeline</li>
                  <li>4. Project kickoff</li>
                </ol>
              </div>
            </motion.div>

            {/* GENERAL ENQUIRIES */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl border border-slate-200 p-8"
            >
              <h2 className="text-2xl font-semibold text-slate-800">
                General Enquiries
              </h2>
              <p className="mt-3 text-slate-600">
                For business questions, partnerships, or general information.
              </p>

              <form className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <textarea
                  rows="5"
                  placeholder="Your message..."
                  className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <button
                  type="submit"
                  className="w-full rounded-md border border-teal-500 py-3 font-medium text-teal-600 hover:bg-teal-50 transition"
                >
                  Send Message
                </button>
              </form>

              <p className="mt-8 text-sm text-slate-500">
                Tutorials, programs, payments, and learning materials are
                managed inside the U-Tech dashboard after account login.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
