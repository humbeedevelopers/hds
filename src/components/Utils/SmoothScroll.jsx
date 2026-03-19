"use client";
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

function LenisSync() {
  const lenis = useLenis();

  useLenis(() => {
    ScrollTrigger.update();
  });
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    
  
    const refreshLenis = () => {
      if (lenis) {
        lenis.resize();
      }
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', refreshLenis);
  
    window.addEventListener('refresh-lenis', refreshLenis);
    
    return () => {
      window.removeEventListener('resize', refreshLenis);
      window.removeEventListener('refresh-lenis', refreshLenis);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05, 
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        easing: (t) => t * (2 - t),
        infinite: false,
      }}
    >
      <LenisSync />
      {children}
    </ReactLenis>
  );
}