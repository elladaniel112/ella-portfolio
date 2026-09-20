"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );

    formData.append(
      "subject",
      "New Portfolio Contact Message - Emmanuella Daniel"
    );

    formData.append("from_name", "Emmanuella Daniel Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setError("Unable to send message. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto mt-10 max-w-2xl text-left">
      {submitted ? (
        <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-6 text-center">
          <h3 className="text-xl font-bold text-green-400">
            Message Sent Successfully! 🎉
          </h3>

          <p className="mt-2 text-slate-400">
            Thank you for reaching out. I&apos;ll get back to you soon.
          </p>

          <button
            onClick={() => {
              setSubmitted(false);
              setError("");
            }}
            className="mt-5 rounded-lg border border-slate-700 px-5 py-2 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-slate-800 bg-slate-950 p-7"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Your Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Message
            </label>

            <textarea
              name="message"
              rows={6}
              placeholder="Tell me about your project..."
              required
              className="w-full resize-none rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
            />
          </div>

          {error && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </form>
      )}
    </div>
  );
}