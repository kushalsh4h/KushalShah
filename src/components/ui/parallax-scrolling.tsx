'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0
        }
      });

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 }
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean up GSAP and ScrollTrigger instances
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.killTweensOf(triggerElement);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-[#3E505B] text-white" ref={parallaxRef}>
      <section className="relative w-full h-[100vh] overflow-hidden">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-px bg-white/10 z-50"></div>
          <div data-parallax-layers className="absolute top-0 left-0 w-full h-full">
            <div data-parallax-layer="3" className="absolute top-0 left-0 w-full h-[100vh] flex flex-col items-center justify-center z-20 -translate-y-[15vh]">
              <h2 className="text-[12vw] font-[900] text-white tracking-[0.035em] leading-[0.95] m-0 text-center font-sans whitespace-nowrap">Kushal Shah</h2>
            </div>
            <img 
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp" 
              loading="eager" 
              width="800" 
              data-parallax-layer="4" 
              alt="" 
              className="absolute top-0 left-0 w-full h-[120vh] object-cover object-bottom z-30 pointer-events-none" 
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-[#131313] to-transparent z-40 pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
}