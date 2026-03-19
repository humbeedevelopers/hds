"use client"
import React from 'react'
import { motion } from 'framer-motion';
import FadeUpLetters from '@/Animations/FadeUpLetters';

const ServicesHero = () => {
  return (
    <section className='w-full p-5'>
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98]
        }}
        className='w-full bg-card-bg min-h-[90vh] md:min-h-[95vh] flex flex-col justify-between items-center text-center rounded-hero py-8'>
            <div></div>
            <FadeUpLetters>
                <h1 className='font-instrument text-5xl md:text-7xl text-center px-4'>
                    Title of the Services
                </h1>
            </FadeUpLetters>

            <div className='w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-8 md:gap-0'>
                <p className='text-md text-center md:text-start w-full md:w-1/4'> 
                    <span className='text-primary'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non architecto similique laborum quos molestias dolor
                    </span>  
                    &nbsp; velit autem recusandae omnis. Aut alias dignissimos cumque dolores nemo ipsam laudantium necessitatibus eos eaque?
                </p>
                
                <button className='bg-bg-soft text-text-muted px-8 py-4 rounded-card w-fit'>
                    know more
                </button>
            </div>
        </motion.div>
    </section>
  )
}

export default ServicesHero