"use client";

import { useState } from "react";
import { Footer } from "@/components";

const ServicesPageClient = ({ children }) => {
  const [activeFooter, setActiveFooter] = useState("faqs");

  return (
    <>
      {children}
      <Footer
        activeFilter={activeFooter}
        setActiveFilter={setActiveFooter}
      />
    </>
  );
};

export default ServicesPageClient;