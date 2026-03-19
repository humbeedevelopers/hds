import WordReveal from '@/Animations/WordReveal';
import React from 'react';
import {motion} from 'framer-motion'
import FadeInUpText from '@/Animations/FadeInUpText';

const Clients = ({head1, head2, showPara = false}) => {
  const CLIENT_LOGOS = [
    { id: 1, name: 'Shivalik', src: '/shivalik.png' },
    { id: 2, name: 'Shivalik', src: '/shivalik.png' },
    { id: 3, name: 'Shivalik', src: '/shivalik.png' },
    { id: 4, name: 'Shivalik', src: '/shivalik.png' },
    { id: 5, name: 'Shivalik', src: '/shivalik.png' },
    { id: 6, name: 'Shivalik', src: '/shivalik.png' },
    { id: 7, name: 'Shivalik', src: '/shivalik.png' },
    { id: 8, name: 'Shivalik', src: '/shivalik.png' },
    { id: 9, name: 'Shivalik', src: '/shivalik.png' },
    { id: 10, name: 'Shivalik', src: '/shivalik.png' },
    { id: 11, name: 'Shivalik', src: '/shivalik.png' },
    { id: 12, name: 'Shivalik', src: '/shivalik.png' },
  ];

  const rows = [
    { logos: CLIENT_LOGOS.slice(0, 4), delay: "0s" },
    { logos: CLIENT_LOGOS.slice(4, 8), delay: "-5s" },
    { logos: CLIENT_LOGOS.slice(8, 12), delay: "-10s" },
  ];

  return (
    <section className="w-full py-8 lg:py-6 overflow-hidden px-4 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        
        {/* Header Section */}
        <header className="mb-16 md:mb-20 flex md:justify-between md:flex-row flex-col gap-4 items-start">
          <h2 className="font-instrument text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <WordReveal>
              {head1 && head1} <br />
              {head2 && <span className="text-primary">{head2}</span>}
            </WordReveal>
          </h2>
          {showPara && (
            <motion.p 
            initial={{x : 60, opacity : 0}}
            whileInView={{x : 0, opacity : 1}}
            viewport={{once : true}}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} 
            className='text-sm md:w-[40%] text-right'> 
            <span className='text-primary'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem veritatis </span> <br />
              esse nisi, fugit aliquam repellat nostrum? Velit aliquid quasi quaerat quas error quam autem eligendi nobis officia, ratione ducimus voluptate.</motion.p>
            )}
          
        </header>

        {/* Animated Logos */}
        <FadeInUpText className="space-y-8">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="relative overflow-hidden"
              style={{ 
                maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
              }}
            >
              <div
                className="flex animate-scroll-left w-max"
                style={{ animationDelay: row.delay }}
              >
                {[...row.logos, ...row.logos, ...row.logos].map((logo, index) => (
                  <div 
                    key={`${logo.id}-${index}`} 
                    className="flex shrink-0 items-center justify-center grayscale px-12"
                  >
                    <img 
                      src={logo.src} 
                      alt={`${logo.name} logo`} 
                      className="h-8 w-auto object-contain md:h-10 lg:h-12" 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </FadeInUpText>

      </div>
    </section>
  );
};

export default Clients;