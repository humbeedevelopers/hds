// "use client"

import { Clients, Footer, Hero } from "@/components"
// import { FAQs } from "@/components/FooterTabs"
import ServiceBenifits from "@/components/ServiceBenifits"
import ServicesCards from "@/components/ServicesCards"
import ServicesHero from "@/components/ServicesHero"
import ServicesPageClient from "@/components/ServicesPageClient"
import TabbedComponent from "@/components/TabbedComponent"
import AboutJay from "@/components/Utils/AboutJay"
// import { useState } from "react"


const Page = () => {
  // const [activeFooter, setActiveFooter] = useState("faqs");
  return (
    <main className="w-full">
      <ServicesPageClient>
      <ServicesHero />
      <div className="px-4 md:px-20 w-full">
        <Clients head1={'Featured Clients'} showPara />
        <TabbedComponent />
        <ServiceBenifits />
        <AboutJay />
        <ServicesCards />
      </div>
    </ServicesPageClient>
      {/* <Footer activeFilter={activeFooter} setActiveFilter={setActiveFooter} /> */}
    </main>
  )
}

export default Page