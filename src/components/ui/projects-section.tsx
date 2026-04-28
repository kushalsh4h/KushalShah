"use client";

import { RollingTextList } from "@/components/ui/rolling-list";

export default function ProjectsSection() {
  return (
    <section id="projects-section" className="bg-[#131313] py-24">
      <div className="container">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Projects
        </h2>
        <RollingTextList />
      </div>
    </section>
  );
}
