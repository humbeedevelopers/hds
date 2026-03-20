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

  const buildClientLogos = (clientLogosObj) => {
  if (!clientLogosObj) return [];

  return Object.keys(clientLogosObj)
    .filter(key => key.startsWith("client_logo_"))
    .map((key, index) => {
      const logo = clientLogosObj[key];

      return {
        id: index + 1,
        name: logo?.title || `Client ${index + 1}`,
        src: logo?.url, // IMPORTANT
      };
    })
    .filter(item => item.src); // remove empty
};

const clientLogos = buildClientLogos(acf.client_logos);

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


  const buildServiceCards = (group) => {
    if (!group || !group.cards_count) return [];

    return Array.from({ length: group.cards_count }, (_, i) => {
      const index = i + 1;
      const card = group[`card_${index}`];

      return {
        id: index,
        title: card?.title,
        description: card?.description,
      };
    }).filter(item => item.title);
  };
  const serviceCards = buildServiceCards(acf);
   // const [activeFooter, setActiveFooter] = useState("faqs");
  return (
    <main className="w-full">
      <ServicesPageClient>
        <ServicesHero data={acf} />
        <div className="px-4 md:px-20 w-full">
          <Clients head1={'Featured Clients'} showPara logos={clientLogos}/>
          <TabbedComponent tabsData={tabsData} />
          <ServiceBenifits data={acf} />
          <AboutJay data={acf.about_jay} />
          <ServicesCards data={serviceCards} />
        </div>
      </ServicesPageClient>
      {/* <Footer activeFilter={activeFooter} setActiveFilter={setActiveFooter} /> */}
    </main>
  )
}

export default Page