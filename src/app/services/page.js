// "use client"
import { getPageBySlug } from "@/lib/api";
import { Clients, Footer, Hero } from "@/components"
// import { FAQs } from "@/components/FooterTabs"
import ServiceBenifits from "@/components/ServiceBenifits"
import ServicesCards from "@/components/ServicesCards"
import ServicesHero from "@/components/ServicesHero"
import ServicesPageClient from "@/components/ServicesPageClient"
import TabbedComponent from "@/components/TabbedComponent"
import AboutJay from "@/components/Utils/AboutJay"
// import { useState } from "react"


const Page = async () => {
  const pageData = await getPageBySlug("services");

  const acf = pageData?.acf || {};

   // helper to build items
  const buildItems = (group, prefix, count) => {
    if (!group) return [];

    return Array.from({ length: count }, (_, i) => {
      const index = i + 1;

      return {
        title: group[`${prefix}_${index}_title`],
        duration: group[`${prefix}_${index}_duration`],
        description: group[`${prefix}_${index}_description`],
      };
    }).filter(item => item.title); // remove empty
  };

  //  transform ACF → tabs
  const tabsData = [
    {
      tab_title: "Capabilities",
      tab_items: buildItems(acf.capabilities, "cap", 3),
    },
    {
      tab_title: "Process",
      tab_items: buildItems(acf.process, "process", 3),
    },
    {
      tab_title: "Industries",
      tab_items: buildItems(acf.industries, "ind", 3),
    },
  ].filter(tab => tab.tab_items.length > 0);
  // const [activeFooter, setActiveFooter] = useState("faqs");
  return (
    <main className="w-full">
      <ServicesPageClient>
      <ServicesHero  data={acf} />
      <div className="px-4 md:px-20 w-full">
        <Clients head1={'Featured Clients'} showPara />
        <TabbedComponent tabsData={tabsData}/>
        <ServiceBenifits data={acf}/>
        <AboutJay data={acf.about_jay}/>
        <ServicesCards />
      </div>
    </ServicesPageClient>
      {/* <Footer activeFilter={activeFooter} setActiveFilter={setActiveFooter} /> */}
    </main>
  )
}

export default Page