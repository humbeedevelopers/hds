"use client"
import React from 'react';
import { Mouse } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeUpLetters from '@/Animations/FadeUpLetters';
import FadeInUpText from '@/Animations/FadeInUpText';

const Hero = () => {
  const cutoutRadius = 'clamp(40px, 8vw, 50px)'; 

  return (
    <section data-nav-color="dark" className="min-h-screen w-full sm:p-8 md:p-6 lg:p-5 p-3 font-instrument flex flex-col">
        <motion.div 
          className="relative min-h-[90vh] md:min-h-[95vh] w-full rounded-hero bg-primary flex items-center justify-center px-4"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            ease: [0.21, 0.47, 0.32, 0.98]
          }}
          style={{
            WebkitMaskImage: `radial-gradient(circle at bottom center, transparent ${cutoutRadius}, black calc(${cutoutRadius} + 1px))`,
            maskImage: `radial-gradient(circle at bottom center, transparent ${cutoutRadius}, black calc(${cutoutRadius} + 1px))`
          }}>
            
            <div className='flex flex-col gap-4 md:gap-5 text-center text-bg-light w-full max-w-6xl'>
              <FadeUpLetters>
                <h1 className='text-[8.5vw] md:text-6xl leading-[1.1] md:leading-tight'>
                  <span className='text-head'> Award Winning </span> <br />
                  Design Agency bridging <br />
                  products, brands and people
                </h1>
              </FadeUpLetters>
              <FadeInUpText delay={2} once>
                <p className='font-open-sans text-sm md:text-lg max-w-[280px] md:max-w-2xl mx-auto opacity-90'>
                  Transforming Bold Ideas into Exceptional Digital Experiences
                </p>
              </FadeInUpText>
            </div>
          
        </motion.div>

        <div className="flex justify-center -mt-[31px] sm:-mt-[34px] md:-mt-[38px] animate-bounce">
          <Mouse 
            size={35} 
            className="text-primary rotate-180" 
          />
        </div>
    </section>
  );
};

export default Hero;