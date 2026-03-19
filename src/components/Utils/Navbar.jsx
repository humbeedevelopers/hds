"use client";

import React, { useEffect, useState, useRef } from "react";
import { Plus, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [paneWidth, setPaneWidth] = useState(400);
  
  const [navTheme, setNavTheme] = useState("light"); 

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const downScrollAccumulator = useRef(0);
  
  const pathname = usePathname();

  useEffect(() => {
    const updateWidth = () => setPaneWidth(Math.min(window.innerWidth * 0.9, 520));
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const HIDE_THRESHOLD = 400; 

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (delta > 0) {
        downScrollAccumulator.current += delta;
        if (downScrollAccumulator.current > HIDE_THRESHOLD) {
          setIsVisible(false);
          setIsOpen(false);
        }
      } else {
        setIsVisible(true);
        downScrollAccumulator.current = 0; 
      }
      if (currentScrollY < 10) {
        setIsVisible(true);
        downScrollAccumulator.current = 0;
      }

      const elements = document.querySelectorAll("[data-nav-color]");
      let activeTheme = "light"; 

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          activeTheme = el.getAttribute("data-nav-color");
        }
      });

      setNavTheme(activeTheme);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setIsExpanded(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const isDark = navTheme === "dark";

  const DARK_NAV_BG = "bg-black/30"; 
  const LIGHT_NAV_BG = "bg-white/10";

  const navGlassStyles = isDark 
    ? `${DARK_NAV_BG} border-white/10 shadow-2xl` 
    : `${LIGHT_NAV_BG} border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]`;

  const navbarVariants = {
    initial: { y: -100, width: 56, height: 56, borderRadius: 999 },
    drop: { 
      y: 0, 
      width: 56, 
      height: 56, 
      transition: { type: "spring", delay: 2, stiffness: 300, damping: 22 } 
    },
    expand: {
      y: isVisible ? 0 : -120,
      width: paneWidth,
      height: "auto",
      borderRadius: 999,
      transition: { type: "spring", stiffness: 400, damping: 30 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About us", href: "/about" },
  ];

  return (
    <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2 flex flex-col items-center">
      <motion.nav
        layout
        variants={navbarVariants}
        initial="initial"
        animate={isExpanded ? "expand" : "drop"}
        className={`overflow-hidden border backdrop-blur-xl transition-colors duration-500 ${navGlassStyles} flex items-center`}
        style={{ 
          padding: isExpanded ? "8px 16px" : "0",
          justifyContent: isExpanded ? "space-between" : "center" 
        }}
      >
        <motion.div 
          layout 
          className={`flex items-center gap-3 min-w-0 ${isExpanded ? "flex-1 overflow-hidden" : ""}`}
        >
          {isExpanded && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary"
            >
              <div className="h-2 w-2 rounded-full bg-white" />
            </motion.div>
          )}
          
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.img
                key="logo-img"
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                src="/logo.png"
                alt="Logo"
                style={{ filter: isDark ? "invert(1) brightness(1.5)" : "none" }}
                className="h-6 w-auto flex-shrink-0 transition-all duration-500"
              />
            ) : (
              <motion.span
                key="nav-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`font-instrument text-sm transition-colors duration-500 truncate overflow-hidden whitespace-nowrap max-w-[140px] xs:max-w-[200px] sm:max-w-none ${
                  isDark ? "text-white" : "text-surface"
                }`}
              >
                Our clients love working with us
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {isExpanded && (
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <motion.button
                  variants={itemFadeUp}
                  className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-instrument hover:shadow-lg cursor-pointer text-white active:scale-95 md:px-5 md:text-sm"
                  whileHover="hover"
                >
                  Book a call
                  <span className="relative h-4 w-4 overflow-hidden">
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center"
                      variants={{ hover: { x: 6, y: -6, opacity: 0 } }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <ArrowUpRight size={14} />
                    </motion.span>
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ x: -6, y: 6, opacity: 0 }}
                      variants={{ hover: { x: 0, y: 0, opacity: 1 } }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <ArrowUpRight size={14} />
                    </motion.span>
                  </span>
                </motion.button>

              <motion.button
                variants={itemFadeUp}
                onClick={() => setIsOpen(!isOpen)}
                className={`rounded-full cursor-pointer border-2 p-1.5 md:p-2 transition-all duration-300 ${
                  isOpen
                    ? "bg-primary border-primary text-white rotate-90"
                    : isDark 
                      ? "border-white/30 text-white hover:bg-white hover:text-black" 
                      : "border-surface text-surface hover:bg-primary hover:text-white hover:border-primary"
                }`}
              >
                {isOpen ? <X size={18} /> : <Plus size={18} />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <AnimatePresence>
        {isOpen && isVisible && (
          <motion.div 
            initial={{ clipPath: "inset(0% 0% 100% 0% round 40px)", opacity: 0 }}
            animate={{ 
                clipPath: "inset(0% 0% 0% 0% round 40px)", 
                opacity: 1,
                transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
            }}
            exit={{ 
                clipPath: "inset(0% 0% 100% 0% round 40px)", 
                opacity: 0,
                transition: { duration: 0.4 }
            }}
            className="mt-4 w-full bg-bg-soft p-10 shadow-2xl border border-white/5"
            style={{ width: paneWidth }}
          >
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-instrument text-lg text-surface/80">We are</p>
                <h3 className="font-instrument text-2xl text-primary font-medium">Humbee Design Studio</h3>
              </div>
              <ul className="flex flex-col gap-4 text-2xl font-open-sans tracking-tight md:text-2xl">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`cursor-pointer transition-all hover:translate-x-2 ${pathname === link.href ? "text-text-main" : "text-surface/60 hover:text-text-main"}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
              <div className="flex flex-col justify-between gap-8 pt-6 border-t border-surface/10 sm:flex-row sm:items-end">
                <div className="font-open-sans text-surface/60">
                   <a href="mailto:hello@humbeestudio.com" className="hover:text-primary transition-colors">hello@humbeestudio.com</a>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg uppercase text-end text-surface/60">
                  <Link href={""} className="hover:text-text-main transition-colors">Instagram</Link>
                  <Link href={""} className="hover:text-text-main transition-colors">Dribbble</Link>
                  <Link href={""} className="hover:text-text-main transition-colors">Linkedin</Link>
                  <Link href={""} className="hover:text-text-main transition-colors">Behance</Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;