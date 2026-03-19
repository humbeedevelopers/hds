"use client"
import React from 'react'
import { motion } from 'framer-motion';
import FadeUpLetters from '@/Animations/FadeUpLetters';
import Link from 'next/link';

const ServicesHero = ({ data }) => {
    const {
        hero_title,
        hero_description_blue,
        hero_description,
        hero_button_text,
        hero_button_link,
    } = data || {};
    return (
        <section className='w-full p-5'>
            <motion.div
                initial={{ opacity: 0 }}
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
                        {/* Title of the Services */}
                        {hero_title || "Default Title"}

                    </h1>
                </FadeUpLetters>

                <div className='w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-8 md:gap-0'>
                    <p className='text-md text-center md:text-start w-full md:w-1/4'>
                        <span className='text-primary'>
                            {hero_description_blue || "Default description..."}
                            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non architecto similique laborum quos molestias dolor */}
                        </span>
                        &nbsp;  {hero_description || "Default description..."}
                    </p>

                    {/* <button className='bg-bg-soft text-text-muted px-8 py-4 rounded-card w-fit'>
                        know more
                    </button> */}
                    {hero_button_link?.url && (
                        <Link
                            href={hero_button_link.url}
                            target={hero_button_link.target || "_self"}
                            className="bg-bg-soft text-text-muted px-8 py-4 rounded-card w-fit inline-block"
                        >
                            {hero_button_text || hero_button_link.title || "Know More"}
                        </Link>
                    )}
                </div>
            </motion.div>
        </section>
    )
}

export default ServicesHero