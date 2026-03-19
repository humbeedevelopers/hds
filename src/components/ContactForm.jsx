import WordRotator from '@/Animations/WordRotator';
import React from 'react';
import { Widget } from '@typeform/embed-react';
import WordReveal from '@/Animations/WordReveal';
import ParagraphTextReveal from '@/Animations/ParagraphTextReveal';

const ContactForm = () => {
  const animatedWords = ["design", "apps", "websites", "brand"];

  return (
    <section className='w-full min-h-screen font-instrument p-10 md:p-20 flex flex-col'>
        {/* Top Text Section */}
        <div className='text-5xl md:text-7xl'>
            <h3 className="flex flex-wrap items-center leading-tight">
                <WordReveal>
                    Top 1% 
                </WordReveal>
                <span className="italic text-text-muted">
                   <WordRotator words={animatedWords} className='min-w-[250px]' />
                </span>
            </h3>
            <h3 className="leading-tight">
                <WordReveal>
                    For top 1% businesses
                </WordReveal>
            </h3>
        </div>
        
        <ParagraphTextReveal>
            <p className="mt-8 text-xl font-open-sans text-text-muted">
                Join our curated collection of digital masterpieces where
                each project showcases our expertise in designing visually
                stunning, strategically driven experiences proven to achieve
                results.
            </p>
        </ParagraphTextReveal>

        {/* Typeform Section - Positioned Below */}
        <div className="mt-12 w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-sm bg-white/20">
            {/* <Widget 
                id="" 
                style={{ width: '100%', height: '100%' }} 
                className="my-form"
                inlineOnMobile={true}
            /> */}
        </div>
    </section>
  )
}

export default ContactForm;