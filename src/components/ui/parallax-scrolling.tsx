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
      if (triggerElement) {
        gsap.killTweensOf(triggerElement);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-[#3E505B] text-white" ref={parallaxRef}>
      <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden md:min-h-[680px]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-px bg-white/10 z-50"></div>
          <div data-parallax-layers className="absolute top-0 left-0 w-full h-full">
            <div data-parallax-layer="3" className="absolute top-0 left-0 z-20 flex h-[100svh] min-h-[560px] w-full -translate-y-[10vh] flex-col items-center justify-center md:min-h-[680px] md:-translate-y-[15vh]">
              <h2 className="m-0 whitespace-nowrap text-center font-sans text-[clamp(2.75rem,11vw,12rem)] font-[900] leading-[0.95] tracking-[0.035em] text-white">Kushal Shah</h2>
            </div>
            <img 
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp" 
              loading="eager" 
              width="800" 
              data-parallax-layer="4" 
              alt="" 
              className="pointer-events-none absolute top-0 left-0 z-30 h-[120svh] w-full object-cover object-bottom" 
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-[#131313] to-transparent z-40 pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
}