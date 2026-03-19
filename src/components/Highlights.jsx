import React from "react";
import ScrollFillText from "../Animations/ScrollFillText";
import AboutJay from "./Utils/AboutJay";

const Highlights = () => {
  const Htext = "We're not just numbers —we're a supportive team and passionate people who love web, apps, social media, animations and thrive in making the experience more fun & meaningful.";
  const Ftext = "We exist to deliver 360° approach from design to development"

  return (
    <section className="relative w-full overflow-hidden py-32">
      <div className="container mx-auto px-6 flex flex-col gap-16">
        
        {/* Header Text */}
        <header className="max-w-6xl mx-auto text-center">
          <ScrollFillText start={'top 75%'} end={'top -25%'} text={Htext} />
        </header>

        <AboutJay />

        {/* Footer Text */}
        <footer className="mx-auto text-center">
          <ScrollFillText start={'top 90%'} end={'top 50%'} text={Ftext} />
        </footer>

      </div>
    </section>
  );
};

export default Highlights;
