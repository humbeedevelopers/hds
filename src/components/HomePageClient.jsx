"use client";

import { useState } from "react";
import { Footer } from "@/components";

const HomeClient = ({ children }) => {
  const [activeFooter, setActiveFooter] = useState("contact");

  return (
    <>
      {children}
      <Footer activeFilter={activeFooter} setActiveFilter={setActiveFooter} />
    </>
  );
};

export default HomeClient;