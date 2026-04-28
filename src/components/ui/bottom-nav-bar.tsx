"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import {
  Home,
  GraduationCap,
  Briefcase,
  User,
  Mail,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", icon: Home },
  { label: "Education", icon: GraduationCap },
  { label: "Projects", icon: Briefcase },
  { label: "About Me", icon: User },
  { label: "Contact", icon: Mail },
];

const MOBILE_LABEL_WIDTH = 72;

type BottomNavBarProps = {
  className?: string;
  defaultIndex?: number;
  stickyBottom?: boolean;
};

export function BottomNavBar({
  className,
  defaultIndex = 0,
  stickyBottom = false,
}: BottomNavBarProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  useEffect(() => {
    const timelineElement = document.getElementById("timeline-section");
    const projectsElement = document.getElementById("projects-section");
    const aboutElement = document.getElementById("about-section");
    const contactElement = document.getElementById("contact-section");
    if (!timelineElement && !projectsElement && !aboutElement && !contactElement) return;

    const sectionOrder: Array<{ element: HTMLElement | null; index: number }> = [
      { element: timelineElement, index: 1 },
      { element: projectsElement, index: 2 },
      { element: aboutElement, index: 3 },
      { element: contactElement, index: 4 },
    ];

    const observer = new IntersectionObserver((entries) => {
      const intersectingEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (intersectingEntries.length > 0) {
        const activeSection = sectionOrder.find(
          (section) => section.element === intersectingEntries[0].target,
        );
        if (activeSection) {
          setActiveIndex(activeSection.index);
        }
        return;
      }

      if (timelineElement) {
        const timelineTop = timelineElement.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY < timelineTop - 120) {
          setActiveIndex(0);
        }
      }
    }, { threshold: [0.3, 0.55, 0.8] });

    sectionOrder.forEach((section) => {
      if (section.element) observer.observe(section.element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26, delay: 3 }}
      role="navigation"
      aria-label="Bottom Navigation"
      className={cn(
        "bg-card/50 dark:bg-card/50 backdrop-blur-md border border-white/10 rounded-full flex items-center p-2 shadow-xl space-x-1 min-w-[320px] max-w-[95vw] h-[52px]",
        stickyBottom && "fixed inset-x-0 top-6 mx-auto z-[100] w-fit",
        className,
      )}
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;

        return (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "flex items-center gap-0 px-3 py-2 rounded-full transition-colors duration-200 relative h-10 min-w-[44px] min-h-[40px] max-h-[44px]",
              isActive
                ? "bg-primary/10 dark:bg-primary/15 text-primary dark:text-primary gap-2"
                : "bg-transparent text-muted-foreground dark:text-muted-foreground hover:bg-white/10 hover:text-white hover:shadow-sm",
              "focus:outline-none focus-visible:ring-0",
            )}
            onClick={() => {
              setActiveIndex(idx);
              if (item.label === "Home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else if (item.label === "Education") {
                const timelineElement = document.getElementById('timeline-section');
                if (timelineElement) {
                  timelineElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              } else if (item.label === "Projects") {
                const projectsElement = document.getElementById("projects-section");
                if (projectsElement) {
                  projectsElement.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              } else if (item.label === "About Me") {
                const aboutElement = document.getElementById("about-section");
                if (aboutElement) {
                  aboutElement.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              } else if (item.label === "Contact") {
                const contactElement = document.getElementById("contact-section");
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }
            }}
            aria-label={item.label}
            type="button"
          >
            <Icon
              size={22}
              strokeWidth={2}
              aria-hidden
              className="transition-colors duration-200"
            />

            <motion.div
              initial={false}
              animate={{
                width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? "8px" : "0px",
              }}
              transition={{
                width: { type: "spring", stiffness: 350, damping: 32 },
                opacity: { duration: 0.19 },
                marginLeft: { duration: 0.19 },
              }}
              className={cn("overflow-hidden flex items-center max-w-[72px]")}
            >
              <span
                className={cn(
                  "font-medium text-xs whitespace-nowrap select-none transition-opacity duration-200 overflow-hidden text-ellipsis text-[clamp(0.625rem,0.5263rem+0.5263vw,1rem)] leading-[1.9]",
                  isActive ? "text-primary dark:text-primary" : "opacity-0",
                )}
                title={item.label}
              >
                {item.label}
              </span>
            </motion.div>
          </motion.button>
        );
      })}
    </motion.nav>
  );
}

export default BottomNavBar;
