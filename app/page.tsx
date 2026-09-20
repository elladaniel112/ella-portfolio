"use client";

import Image from "next/image";
import { useState } from "react";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappLink =
    "https://wa.me/2348164980583?text=Hello%20Emmanuella,%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20website%20project%20with%20you.";

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#home"
            className="text-xl font-bold tracking-wide text-cyan-400"
          >
            Emmanuella<span className="text-white">.</span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-7 md:flex">
            <a
              href="#about"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#services"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Services
            </a>

            <a
              href="#why-hire-me"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Why Hire Me
            </a>

            <a
              href="#contact"
              className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Contact
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-700 px-3 py-2 text-xl text-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t border-slate-800 bg-slate-950 px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                Projects
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                Services
              </a>

              <a
                href="#why-hire-me"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                Why Hire Me
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20"
      >
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for freelance work
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Web Developer • Cybersecurity Student
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            I build modern websites and{" "}
            <span className="text-cyan-400">
              secure web applications.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m Emmanuella Daniel, a web developer and cybersecurity
            student focused on building responsive, modern and user-friendly
            digital experiences with security in mind.
          </p>

          {/* HERO BUTTONS */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
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

          {/* SOCIAL LINKS */}
          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <a
              href="https://github.com/elladaniel112"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/emmanuella-daniel-80b049409"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="mailto:emmanuelladaniel112@gmail.com"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Email
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* PROFILE IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[430px] w-[320px] overflow-hidden rounded-[2rem] border border-cyan-400/40 bg-slate-900 shadow-2xl shadow-cyan-400/10 sm:h-[500px] sm:w-[380px]">
            <Image
              src="/profile.jpg"
              alt="Emmanuella Daniel"
              fill
              priority
              sizes="(max-width: 640px) 320px, 380px"
              className="object-cover"
              style={{ objectPosition: "center 18%" }}
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur">
              <p className="font-bold">Emmanuella Daniel</p>

              <p className="text-sm text-cyan-400">
                Web Developer & Cybersecurity Student
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-slate-900 bg-slate-950/80 px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Building with creativity and security.
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <p className="leading-8 text-slate-400">
              I&apos;m a web developer passionate about creating clean,
              responsive and modern websites. I enjoy turning ideas into
              functional digital experiences that work beautifully across
              phones, tablets and computers.
            </p>

            <p className="leading-8 text-slate-400">
              As a Cybersecurity student, I also think about security while
              building applications. My goal is to combine development and
              cybersecurity to create websites that are both useful and
              reliable.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Technologies I work with
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
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
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-center font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-400"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-y border-slate-900 bg-slate-900/30 px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Things I&apos;ve built
          </h2>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {/* CYBERGUARD */}
            <article className="rounded-2xl border border-slate-800 bg-slate-950 p-7 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                  Cybersecurity
                </span>

                <span className="text-sm text-slate-500">
                  Project 01
                </span>
              </div>

              <h3 className="text-2xl font-bold">CyberGuard</h3>

              <p className="mt-4 leading-7 text-slate-400">
                A cybersecurity-focused web application with authentication,
                security tools, scan history, activity tracking and security
                reporting features.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "Firebase",
                  "Firestore",
                  "Authentication",
                  "Web Security",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-slate-900 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://cyberguard-gules.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Live Site ↗
                </a>

                <a
                  href="https://github.com/elladaniel112/cyberguard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub ↗
                </a>
              </div>
            </article>

            {/* DEELLAS */}
            <article className="rounded-2xl border border-slate-800 bg-slate-950 p-7 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-pink-400/10 px-3 py-1 text-xs font-semibold text-pink-400">
                  Fashion / E-commerce
                </span>

                <span className="text-sm text-slate-500">
                  Project 02
                </span>
              </div>

              <h3 className="text-2xl font-bold">DEELLAS</h3>

              <p className="mt-4 leading-7 text-slate-400">
                A modern fashion website designed with a clean visual style,
                responsive layouts and dedicated pages for collections, shop
                and contact.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "Tailwind CSS",
                  "Responsive UI",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-slate-900 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://deellas.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Live Site ↗
                </a>

                <a
                  href="https://github.com/elladaniel112/deellas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub ↗
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Services
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            What I can build for you
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Business Websites",
                text: "Professional websites that help businesses establish a strong online presence.",
              },
              {
                title: "Landing Pages",
                text: "Modern landing pages designed to present products, services and campaigns clearly.",
              },
              {
                title: "Web Applications",
                text: "Functional and responsive web applications built around your project requirements.",
              },
              {
                title: "Basic Website Security",
                text: "Security-minded development practices to help make websites safer and more reliable.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HIRE ME */}
      <section
        id="why-hire-me"
        className="border-y border-slate-900 bg-slate-900/30 px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Why Hire Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            What you can expect
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Modern Development",
                text: "I use modern technologies and development practices to build clean and functional websites.",
              },
              {
                title: "Security Mindset",
                text: "My cybersecurity background helps me think about security while developing web applications.",
              },
              {
                title: "Responsive Design",
                text: "I build websites that adapt properly to phones, tablets and desktop computers.",
              },
              {
                title: "Clean User Experience",
                text: "I focus on simple layouts and intuitive interfaces that are easy for users to navigate.",
              },
              {
                title: "Project Focus",
                text: "I work around the goals of each project instead of using a one-size-fits-all approach.",
              },
              {
                title: "Client-Focused",
                text: "Clear communication and understanding your requirements are important parts of my workflow.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  ✓
                </div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s work together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Have a website idea, business project or web application you want
            to build? Send me a message and let&apos;s discuss it.
          </p>

          <ContactForm />

          {/* CONTACT LINKS */}
          <div className="mt-10">
            <p className="mb-5 text-sm text-slate-500">
              You can also reach me through:
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {/* GITHUB */}
              <a
                href="https://github.com/elladaniel112"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-700 px-5 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                GitHub
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/emmanuella-daniel-80b049409"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-700 px-5 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                LinkedIn
              </a>

              {/* EMAIL */}
              <a
                href="mailto:emmanuelladaniel112@gmail.com"
                className="rounded-lg border border-slate-700 px-5 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Email Me
              </a>

              {/* WHATSAPP */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-700 px-5 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <p className="font-bold text-white">
              Emmanuella Daniel
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Web Developer • Cybersecurity Student
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-sm">
            {/* GITHUB */}
            <a
              href="https://github.com/elladaniel112"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              GitHub
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/emmanuella-daniel-80b049409"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              LinkedIn
            </a>

            {/* EMAIL */}
            <a
              href="mailto:emmanuelladaniel112@gmail.com"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Email
            </a>

            {/* WHATSAPP */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-900 pt-6 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Emmanuella Daniel. All rights reserved.
        </div>
      </footer>
    </main>
  );
}