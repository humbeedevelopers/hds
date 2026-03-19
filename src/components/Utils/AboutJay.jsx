import FadeInButtons from '@/Animations/FadeInButtons'
import ParagraphTextReveal from '@/Animations/ParagraphTextReveal'
import SlideReveal from '@/Animations/SlideReveal'
import React from 'react'


const AboutJay = () => {
  return (
    <article className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 py-12">
        
        {/* Text Content Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
        
        <div className="group"> 
            <FadeInButtons>
                <blockquote className="relative font-instrument font-light text-2xl md:text-4xl leading-[1.15] text-text-main">
                “In a world where every second counts, we design with intention to maximize dwell time”
                </blockquote>
            </FadeInButtons>   
        </div>

        <ParagraphTextReveal delay={0.1}>
            <p className="font-light text-base md:text-xl leading-snug max-w-md md:pr-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>
        </ParagraphTextReveal>

        <footer className="space-y-1">
            <ParagraphTextReveal delay={0.3}>
            <h4 className="font-semibold text-xl tracking-tight text-text-main">
                Jay Patel
            </h4>
            <p className="font-light text-xl">
                The one with the steering wheel
            </p>
            </ParagraphTextReveal>
        </footer>
        </div>

        {/* Image Column */}
        <div className="relative w-1/2 max-w-md aspect-square order-1 lg:order-2">
        <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
            <SlideReveal>
            <img
            src='https://plus.unsplash.com/premium_photo-1738692725686-50a275d81090?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="Jay Patel - Founder and Creative Lead"
            className="object-cover transition-all duration-1000 ease-out group-hover:scale-110"
            />

            </SlideReveal>
        </div>
        </div>

    </article>
  )
}

export default AboutJay