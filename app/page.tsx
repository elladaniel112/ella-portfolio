import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <h1 className="text-xl font-bold">
            Emmanuella Daniel
            <span className="text-cyan-400">.</span>
          </h1>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>

            <a href="#services" className="hover:text-cyan-400">
              Services
            </a>

            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

          {/* HERO TEXT */}
          <div>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Web Developer • Cybersecurity Student
            </p>

            <h2 className="text-5xl font-bold leading-tight md:text-7xl">
              Hi, I'm{" "}
              <span className="text-cyan-400">
                Emmanuella Daniel
              </span>
              .
            </h2>

            <h3 className="mt-5 text-2xl font-semibold text-slate-300 md:text-3xl">
              I build modern websites and secure web applications.
            </h3>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              I'm a web developer and cybersecurity student passionate about
              building responsive websites, web applications, and
              security-focused digital solutions.
            </p>

            {/* HERO BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Hire Me
              </a>

              <a
                href="/Emmanuella_Daniel_CV.pdf"
                download
                className="rounded-lg border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                Download CV ↓
              </a>

            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-8 flex gap-5 text-sm text-slate-400">

              <a
                href="https://github.com/elladaniel112"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-400"
              >
                GitHub →
              </a>

              <a
                href="#contact"
                className="transition hover:text-cyan-400"
              >
                Let's Connect →
              </a>

            </div>

          </div>

          {/* CYBERSECURITY VISUAL */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-md">

              <div className="absolute -inset-4 rounded-3xl bg-cyan-400/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-900 p-8 shadow-2xl">

                {/* TOP BAR */}
                <div className="mb-8 flex items-center justify-between">

                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <span className="text-xs text-slate-500">
                    CYBERGUARD
                  </span>

                </div>

                {/* SHIELD */}
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-6xl">
                  🛡️
                </div>

                <h3 className="mt-7 text-center text-2xl font-bold">
                  Security
                  <span className="text-cyan-400">.Online</span>
                </h3>

                <p className="mt-2 text-center text-sm text-slate-400">
                  Building secure digital experiences
                </p>

                {/* SECURITY ITEMS */}
                <div className="mt-8 space-y-4">

                  <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950 p-4">

                    <span className="text-sm text-slate-300">
                      Web Development
                    </span>

                    <span className="text-xs font-semibold text-green-400">
                      ACTIVE
                    </span>

                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950 p-4">

                    <span className="text-sm text-slate-300">
                      Cybersecurity
                    </span>

                    <span className="text-xs font-semibold text-green-400">
                      ACTIVE
                    </span>

                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950 p-4">

                    <span className="text-sm text-slate-300">
                      Secure Applications
                    </span>

                    <span className="text-xs font-semibold text-cyan-400">
                      READY
                    </span>

                  </div>

                </div>

                {/* STATUS */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-green-400">

                  <span className="h-2 w-2 rounded-full bg-green-400" />

                  Systems Secure

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-slate-800 bg-slate-900/40"
      >

        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Building with code and learning cybersecurity.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-slate-400">
            I'm passionate about web development and cybersecurity.
            I enjoy creating useful applications, learning how websites
            work, and applying security concepts to the projects I build.
          </p>

        </div>

      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-6xl px-6 py-20"
      >

        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Technologies I work with
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Firebase",
            "Cloud Firestore",
            "Git",
            "GitHub",
            "Vercel",
            "Web Security",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center text-slate-300 transition hover:border-cyan-400"
            >
              {skill}
            </div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-slate-800 bg-slate-900/40"
      >

        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Projects I've built
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Here are some of the projects I've worked on while developing
            my skills in web development and cybersecurity.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            {/* CYBERGUARD */}
            <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-cyan-950 via-slate-900 to-slate-950">

                <div className="text-center">

                  <div className="text-6xl transition duration-300 group-hover:scale-110">
                    🛡️
                  </div>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                    Cybersecurity Platform
                  </p>

                </div>

              </div>

              <div className="p-7">

                <div className="flex items-center justify-between gap-4">

                  <h3 className="text-2xl font-bold">
                    CyberGuard
                  </h3>

                  <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                    Live
                  </span>

                </div>

                <p className="mt-4 leading-7 text-slate-400">
                  A web-based cybersecurity platform that allows users to
                  perform website security configuration checks, view
                  security reports, save scan history, and manage their
                  accounts.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "Next.js",
                    "React",
                    "Tailwind CSS",
                    "Firebase",
                    "Firestore",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="mt-7 flex flex-wrap gap-4">

                  <a
                    href="https://cyberguard-gules.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-cyan-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    View Live Site →
                  </a>

                  <a
                    href="https://github.com/elladaniel112/cyberguard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-slate-700 px-5 py-2.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    GitHub →
                  </a>

                </div>

              </div>

            </article>

            {/* DEELLAS */}
            <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition duration-300 hover:-translate-y-2 hover:border-pink-400">

              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-pink-950 via-slate-900 to-slate-950">

                <div className="text-center">

                  <div className="text-6xl transition duration-300 group-hover:scale-110">
                    👗
                  </div>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                    Fashion Website
                  </p>

                </div>

              </div>

              <div className="p-7">

                <div className="flex items-center justify-between gap-4">

                  <h3 className="text-2xl font-bold">
                    DEELLAS
                  </h3>

                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                    Frontend
                  </span>

                </div>

                <p className="mt-4 leading-7 text-slate-400">
                  A fashion-focused website created to showcase products
                  while demonstrating modern frontend design, responsive
                  layouts, navigation, and user-friendly interfaces.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "Responsive Design",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="mt-7">

                  <a
                    href="#contact"
                    className="inline-block rounded-lg border border-slate-700 px-5 py-2.5 font-semibold text-white transition hover:border-pink-400 hover:text-pink-400"
                  >
                    Ask About Project →
                  </a>

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-6xl px-6 py-20"
      >

        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Services
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          How I can help
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "Business Websites",
              text: "Modern websites for small businesses and personal brands.",
            },
            {
              title: "Landing Pages",
              text: "Clean and responsive landing pages designed to showcase products or services.",
            },
            {
              title: "Web Applications",
              text: "Interactive applications using React, Next.js and Firebase.",
            },
            {
              title: "Basic Website Security",
              text: "Basic website security configuration checks and recommendations.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >

              <h3 className="font-bold">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {service.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-slate-800 bg-slate-900/40"
      >

        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Contact
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Let's work together.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
              Have a website idea or project you would like to discuss?
              Send me a message and let's talk about it.
            </p>

          </div>

          <ContactForm />

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">

        <p>
          © {new Date().getFullYear()} Emmanuella Daniel. All rights reserved.
        </p>

        <p className="mt-2">
          Web Developer • Cybersecurity Student
        </p>

      </footer>

    </main>
  );
}