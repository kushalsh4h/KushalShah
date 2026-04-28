"use client";

import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { error?: string; message?: string };
      if (!response.ok) {
        throw new Error(data.error ?? "Could not send message");
      }

      setStatus("success");
      setMessage(data.message ?? "Thanks! I will get back to you soon.");
      setEmail("");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      setStatus("error");
      setMessage(errorMessage);
    }
  }

  return (
    <section id="contact-section" className="bg-[#131313] py-24">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
          Contact
        </p>
        <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Let&apos;s build something together.
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
          Drop your email and I&apos;ll receive a message that you&apos;re interested to hire.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="your@email.com"
            className="h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#3E505B] focus:ring-2 focus:ring-[#3E505B]/40"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="h-12 w-full rounded-xl bg-[#3E505B] px-6 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === "loading" ? "Sending..." : "Send"}
          </button>
        </form>

        {message ? (
          <p
            className={`mt-4 text-sm ${
              status === "error" ? "text-red-300" : "text-white/80"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </section>
  );
}
