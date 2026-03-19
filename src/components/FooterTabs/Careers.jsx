"use client";

import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import FadeInUpText from '@/Animations/FadeInUpText';
import StrikeText from '@/Animations/StrikeText';
import {motion} from 'framer-motion'

const Careers = () => {
  const AvailablePositions = [
    { title: 'Web Developer | GSAP Master | Web Animation', url: '/careers/web-developer-gsap' },
    { title: 'Social Media Manager', url: '/careers/social-media-manager' },
    { title: 'Senior Business Development Executive | Middle East Market', url: '/careers/business-development-middle-east' },
    { title: 'Sr. UI/UX Designer | Figma Expert', url: '/careers/ui-ux-designer-figma' }
  ];

  return (
    <div className='flex flex-col md:flex-row w-full font-montserrat justify-between mt-10 border-t border-b'>
      {/* Left Section */}
      <div className='w-full md:w-1/2 flex flex-col p-6 md:p-8 border-r'>
        <FadeInUpText stagger={0.2} className="flex flex-col gap-10 md:gap-32">          
          <div className='flex flex-col gap-6'>
            <div className="text-4xl md:text-5xl font-thin leading-tight">
              <h3>Join Our</h3>
              <StrikeText delay={0.75}>Workplace</StrikeText>
              <h3>family.</h3>
            </div>
           
            <p className="w-full md:w-4/5 text-base md:text-lg text-black/60">
              We believe in creating an environment where you’ll look forward to 
              showing up every day (even though when it’s a MONDAY!)
            </p>
          </div>

          <div className='w-full text-right'>
            <h4 className='text-lg font-thin'>We're Building</h4>
            <h2 className='text-3xl font-bold'>#TheTalentAPI</h2>
          </div>
        </FadeInUpText>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 border-l-0 md:border-l border-t md:border-t-0'>

        <FadeInUpText>
          <h1 className="text-2xl md:text-3xl font-black p-5 border-b border-black">
            Current Openings
          </h1>
        </FadeInUpText>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {AvailablePositions.map((post, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
            >
              <Link
                href={post.url}
                className="group flex justify-between items-center border-b transition-all hover:bg-primary hover:text-white hover:pl-6 py-4 px-5"
              >
                <span className="text-md md:text-lg font-light">{post.title}</span>
                <FontAwesomeIcon
                  icon={faShareFromSquare}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Careers;