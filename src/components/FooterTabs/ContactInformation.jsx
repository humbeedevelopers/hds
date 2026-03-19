"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedinIn, faYoutube, faDribbble, faPinterest, faBehance} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import FadeInUpText from "@/Animations/FadeInUpText";

const ContactInformation = () => {
  const branch_details = [
    {
      city: "US",
      address: "11029 Tahiti isle ln, Tampa, 33647, Florida, United States",
      contact: "+1 (813) 545-0878",
    },
    {
      city: "India",
      address: "724, Shivalik Shilp, S.G Highway, 380015, Ahmedabad, Gujarat",
      contact: "+91 98245-97524",
    },
    {
      city: "Canada",
      address: "1490 Tecumseh Rd E Windsor, ON N8W 1C1",
      contact: "+1 (813) 545-0878",
    },
  ];

  const socialLinks = [
    { icon: faFacebook, href: "#", label: "Facebook" },
    { icon: faInstagram, href: "#", label: "Instagram" },
    { icon: faLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: faYoutube, href: "#", label: "YouTube" },
    { icon: faDribbble, href: "#", label: "Dribbble" },
    { icon: faPinterest, href: "#", label: "Pinterest" },
    { icon: faBehance, href: "#", label: "Behance" },
  ];

return (
    <>
      <FadeInUpText stagger={0.15} className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-5">
            {branch_details.map((object, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
            <h3 className="text-2xl md:text-3xl font-thin border-b border-primary/30 pb-2">
              {object.city}
            </h3>
            <p className="font-light text-sm md:text-base px-4 md:w-3/5">
              {object.address}
            </p>
            <a 
              href={`tel:${object.contact}`} 
              className="font-bold hover:text-primary transition-colors"
            >
              {object.contact}
            </a>
            </div>
          ))}
        </FadeInUpText>

      <div className="w-full flex flex-wrap border-t">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, ease: "easeOut" }}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[50%] md:min-w-0 border flex items-center justify-center p-8 md:p-12 cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary hover:text-bg-light">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FontAwesomeIcon 
                icon={social.icon} 
                className="text-3xl md:text-4xl" 
              />
            </motion.div>
          </motion.a>
        ))}
      </div>
    </>
  );
};

export default ContactInformation;
