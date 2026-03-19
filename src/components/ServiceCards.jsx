import React from 'react';
import { MoveRight } from 'lucide-react';
import RevealCards from '@/Animations/RevealCards';

const services = [
  {
    title: "3D Design & Animation",
    description: "Websites that don't just look stunning—they lead, persuade, and convert. Each journey mapped for delight.",
    bgColor: "bg-[#FFE8E2]",
    gridColor: "bg-[#FFD8CC]",
    image: "/service_card-2.svg",
  },
  {
    title: "Motion Design & Animation",
    description: "Seamlessly elegant apps your users will love. Fluid. Intuitive. Loyal to your brand, loyal to their needs.",
    bgColor: "bg-[#E6FFD9]",
    gridColor: "bg-[#D9F9B1]",
    image: "/service_card-2.svg",
  },
  {
    title: "Startup Branding",
    description: "Scroll-stopping visuals that spark engagement and define your digital presence.",
    bgColor: "bg-[#CEEBFF]",
    gridColor: "bg-[#C2E5FF]",
    image: "/service_card-3.svg",
  },
  {
    title: "MVP Development",
    description: "Striking graphics—crafted to connect, resonate, and elevate your brand's story above the noise.",
    bgColor: "bg-[#FFFBB7]",
    gridColor: "bg-[#FFF4B1]",
    image: "/service_card-4.svg",
  }
];

const ServiceCard = ({ service }) => {
  return (
    <div className="group flex flex-col cursor-pointer">
      <div className={`${service.bgColor} py-10 h-90 flex flex-col transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-xl rounded-t-2xl overflow-hidden`}>
        <h3 className="text-[clamp(1.2rem,2vw,1.5rem)] font-montserrat max-w-3/4 px-6 text-gray-900 mb-6 w-3/4 leading-tight transition-transform duration-500 group-hover:translate-x-1">
          {service.title}
        </h3>
        
        {/* BG Grid Area */}
        <div 
          className={`flex-grow ${service.gridColor} flex items-center justify-center transition-colors duration-500`}
          style={{ 
            backgroundImage: 'linear-gradient(#00000008 1px, transparent 1px), linear-gradient(90deg, #00000008 1px, transparent 1px)', 
            backgroundSize: '15px 15px' 
          }}
        >
          {/* Image Container - Added scaling and subtle rotation */}
          <div className="text-6xl opacity-80 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-2">
            <img 
              src={service.image} 
              alt={service.title} 
              className="h-[clamp(4rem,10vw,8rem)] w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-5 px-1">
        <p className="text-[clamp(0.875rem,1.1vw,1rem)] text-text-muted leading-snug mb-4 transition-colors duration-300 group-hover:text-text-main">
          {service.description}
        </p>
        
        <div className="overflow-hidden w-auto">
          <MoveRight 
            className="text-black w-6 h-6 transition-transform duration-500 ease-in-out group-hover:translate-x-3" 
          />
        </div>
      </div>
    </div>
    );
  };

const ServiceCards = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <RevealCards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </RevealCards>
      </div>
    </section>
  );
};

export default ServiceCards;