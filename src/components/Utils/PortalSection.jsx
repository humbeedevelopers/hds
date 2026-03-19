import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParallaxGallery from "./ParallaxGallery";

gsap.registerPlugin(ScrollTrigger);

const PortalSection = ({ foregroundImage }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", 
        pin: true,
        scrub: true,
      },
    });

    tl.to(imageRef.current, {
      scale: 25,     
      opacity: 0,
      ease: "power3.in",
      duration: 1,
    })
    .from(contentRef.current, {
      opacity: 0,     
      duration: 0.5,
    }, "< 0.1");   
  }, containerRef);

  return () => ctx.revert();
}, []);

  return (
    <div data-nav-color="dark" ref={containerRef} className="relative w-full overflow-hidden">
      <div ref={contentRef} className="inset-0 z-[1] w-full h-[200vh] overflow-hidden">
        <ParallaxGallery />
      </div>
      
      <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none">
        <img
          ref={imageRef}
          src={foregroundImage.src}
          alt="Portal"
          className="w-full h-screen absolute top-0 object-cover"
          style={{ willChange: "transform" }}
        />
      </div>
    </div>
  );
};

export default PortalSection;