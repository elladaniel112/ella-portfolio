"use client";

import Image from "next/image";
import { useState } from "react";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between py-5">

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-xl font-bold"
            >
              Emmanuella Daniel
              <span className="text-cyan-400">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              <a href="#about" className="transition hover:text-cyan-400">
                About
              </a>

              <a href="#skills" className="transition hover:text-cyan-400">
                Skills
              </a>

              <a href="#projects" className="transition hover:text-cyan-400">
                Projects
              </a>

              <a href="#services" className="transition hover:text-cyan-400">
                Services
              </a>

              <a href="#why-hire-me" className="transition hover:text-cyan-400">
                Why Hire Me
              </a>

              <a href="#contact" className="transition hover:text-cyan-400">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg border border-slate-700 px-3 py-2 text-xl text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="border-t border-slate-800 py-4 md:hidden">
              <div className="flex flex-col gap-1">

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  About
                </a>

                <a
                  href="#skills"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Skills
                </a>

                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Projects
                </a>

                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Services
                </a>

                <a
                  href="#why-hire-me"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Why Hire Me
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Contact
                </a>

              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-2">

          {/* Hero Text */}
          <div className="text-center lg:text-left">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Web Developer • Cybersecurity Student
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-cyan-400">
                Emmanuella Daniel
              </span>
              .
            </h1>

            <h2 className="mt-5 text-xl font-semibold text-slate-300 sm:text-2xl md:text-3xl">
              I build modern websites and secure web applications.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:mx-0">
              I&apos;m a web developer and cybersecurity student passionate
              about building responsive websites, web applications, and
              security-focused digital solutions.
            </p>

            {/* Hero Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">

              <a
                href="#projects"
                className="rounded-lg bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Hire Me
              </a>

              <a
                href="/Emmanuella_Daniel_CV.pdf"
                download
                className="rounded-lg border border-cyan-400 px-6 py-3 text-center font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                Download CV ↓
              </a>

            </div>

            {/* Hero Links */}
            <div className="mt-8 flex justify-center gap-5 text-sm text-slate-400 lg:justify-start">

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
                Let&apos;s Connect →
              </a>

            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/20 blur-3xl" />

              <div className="relative h-[430px] w-[320px] overflow-hidden rounded-[2rem] border-4 border-cyan-400/40 bg-slate-900 shadow-2xl shadow-cyan-400/10 sm:h-[500px] sm:w-[380px]">

                <Image
                  src="/profile.jpg"
                  alt="Emmanuella Daniel"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, 380px"
                  className="object-cover"
                  style={{ objectPosition: "center 18%" }}
                />

              </div>

              {/* Developer Badge */}
              <div className="absolute -bottom-5 left-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 shadow-xl sm:-left-5 sm:px-5">

                <p className="text-sm font-semibold text-cyan-400">
                  Web Developer
                </p>

                <p className="text-xs text-slate-400">
                  Cybersecurity Student
                </p>

              </div>

              {/* Available Badge */}
              <div className="absolute right-0 top-6 flex items-center gap-2 rounded-full border border-green-500/30 bg-slate-900 px-3 py-2 shadow-xl sm:-right-4 sm:px-4">

                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                <span className="text-xs font-semibold text-green-400">
                  Available
                </span>

              </div>

            </div>
          </div>

        </div>

        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="border-t border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Building with code and learning cybersecurity.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-slate-400">
            I&apos;m passionate about web development and cybersecurity.
            I enjoy creating useful applications, learning how websites
            work, and applying security concepts to the projects I build.
          </p>

        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="mx-auto max-w-6xl px-6 py-16 sm:py-20"
      >

        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Technologies I work with
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

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
              className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              {skill}
            </div>
          ))}

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="border-t border-slate-800 bg-slate-900/40"
      >

        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Projects I&apos;ve built
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Here are some of the projects I&apos;ve worked on while developing
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

              <div className="p-6 sm:p-7">

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

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                  <a
                    href="https://cyberguard-gules.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-cyan-400 px-5 py-2.5 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    View Live Site →
                  </a>

                  <a
                    href="https://github.com/elladaniel112/cyberguard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-slate-700 px-5 py-2.5 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
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

              <div className="p-6 sm:p-7">

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

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                  <a
                    href="https://deellas.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-pink-400 px-5 py-2.5 text-center font-semibold text-slate-950 transition hover:bg-pink-300"
                  >
                    View Live Site →
                  </a>

                  <a
                    href="https://github.com/elladaniel112/deellas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-slate-700 px-5 py-2.5 text-center font-semibold text-white transition hover:border-pink-400 hover:text-pink-400"
                  >
                    GitHub →
                  </a>

                </div>

              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="mx-auto max-w-6xl px-6 py-16 sm:py-20"
      >

        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Services
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          How I can help
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

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
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
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

      {/* ================= WHY HIRE ME ================= */}
      <section
        id="why-hire-me"
        className="border-t border-slate-800 bg-slate-950"
      >

        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Why Hire Me
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What you can expect from me
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              I combine modern web development with a growing cybersecurity
              mindset to create websites and applications that are useful,
              responsive, and security-conscious.
            </p>

          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">
                💻
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Modern Development
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                I build modern websites and web applications using
                technologies such as React, Next.js, Tailwind CSS, and
                Firebase.
              </p>

            </div>

            {/* CARD 2 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">
                🔐
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Security Mindset
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                As a cybersecurity student, I consider security while
                building and look for common configuration and application
                security issues.
              </p>

            </div>

            {/* CARD 3 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">
                📱
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Responsive Design
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                I create interfaces that adapt to different screen sizes
                so visitors can use your website comfortably on phones,
                tablets, and computers.
              </p>

            </div>

            {/* CARD 4 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">
                ⚡
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Clean User Experience
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                I focus on clean layouts, clear navigation, readable
                content, and interfaces that make it easy for users to
                find what they need.
              </p>

            </div>

            {/* CARD 5 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-2xl">
                🚀
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Project Focus
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                I work toward turning ideas into functional digital
                products while continuously improving my development and
                cybersecurity skills.
              </p>

            </div>

            {/* CARD 6 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">
                🤝
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Client-Focused
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                I aim to understand project requirements clearly and
                build solutions that match the client&apos;s goals and
                audience.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="border-t border-slate-800 bg-slate-900/40"
      >

        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Let&apos;s work together.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
              Have a website idea or project you would like to discuss?
              Send me a message and let&apos;s talk about it.
            </p>

          </div>

          <ContactForm />

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">

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