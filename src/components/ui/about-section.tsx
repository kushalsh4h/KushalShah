"use client";

import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

export default function AboutSection() {
  return (
    <section id="about-section" className="bg-[#131313] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mx-auto text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
            About Me
          </p>
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-white sm:text-5xl xl:text-6xl">
            Building clean products with curiosity and intent.
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl lg:text-2xl">
            I am Kushal Shah, a Computer Engineering student at Mukesh Patel
            School of Technology Management & Engineering, Mumbai. I enjoy
            building web experiences and AI-powered applications that are simple
            to use, technically strong, and visually clear.
          </p>

          <p className="mx-auto mb-8 max-w-3xl text-xl font-medium leading-relaxed text-white/90 sm:text-2xl lg:text-3xl">
            I am deeply interested in{" "}
            <AnimatedTextCycle
              words={["Web Development", "Software Development", "Data Analytics"]}
              interval={2600}
              className="text-[#3E505B]"
            />
            .
          </p>

          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg lg:text-xl">
            I have worked on projects ranging from AI-based product recognition
            tools to full-stack e-commerce and frontend-focused web apps. I like
            solving real problems, improving usability, and shipping polished
            interfaces that feel fast and intuitive.
          </p>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl">
            <span className="font-semibold text-white">Interests & hobbies:</span>{" "}
            web design systems, AI tools, hackathons, learning new technologies,
            music, and exploring product ideas with friends.
          </p>
        </div>
      </div>
    </section>
  );
}
