"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type Timeline_02 = {
  date: string;
  title: string;
  content: string;
};

const timelineData: Timeline_02[] = [
  {
    date: "Aug 2021 - Present",
    title: "B.Tech in Computer Engineering",
    content:
      "Mukesh Patel School of Technology Management & Engineering, Mumbai. Final year student (Semester 10) with CGPA: 3.75 / 4.00. Focused on web development, AI-based applications, and software engineering.",
  },
  {
    date: "Secondary Education",
    title: "10th Grade",
    content:
      "Utpal Shanghvi Global School, Mumbai. Built a strong foundation in mathematics and computer fundamentals.",
  },
];

export default function Timeline_02() {
  return (
    <section id="timeline-section" className="bg-[#131313] py-24">
      <div className="container">
        <h1 className="text-white mb-16 text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Education Timeline
        </h1>

        <div className="relative mx-auto max-w-3xl">
          {/* Subtle vertical line */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-white/20" />

          {timelineData.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-5 -translate-x-1/2 h-3 w-3 rounded-full bg-white/50 ring-2 ring-white/20" />

              {/* Content */}
              <h4 className="text-lg font-normal text-white">
                {entry.title}
              </h4>
              <p className="mb-2 text-sm text-white/60">{entry.date}</p>
              <Card className="border border-white/20 bg-black/50 shadow-sm hover:shadow-md transition duration-300">
                <CardContent className="px-5 py-4">
                  <p className="leading-relaxed text-white/80">
                    {entry.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}