// "use client"
import {Hero, About, Clients, Works, Highlights, Footer, ContactForm, ServiceCards } from '@/components'
import { getPageBySlug } from "@/lib/api";
import portalImage from '../../public/portal-image.png'
import PortalSection from '@/components/Utils/PortalSection'
import Reviews from '@/components/Reviews'
// import { useState } from 'react'
import HomeClient from '@/components/HomePageClient';

const Page = async () => {
  // const [activeFooter, setActiveFooter] = useState("contact");
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
        name: logo?.title,
        src: logo?.url,
      };
    })
    .filter(item => item.src);
};

const clientLogos = buildClientLogos(acf.client_logos);
  return (
    <main>
      <Hero />
      <About />
      <Clients  logos={clientLogos} head1={'Believed by'} head2={'from Global Brands to Start-ups'} />
      <Works />
      <ServiceCards />
      <PortalSection 
        foregroundImage={portalImage}
      />
      <Highlights />
      <Reviews />
      <ContactForm />
      <HomeClient />
      {/* <Footer activeFilter={activeFooter} setActiveFilter={setActiveFooter} /> */}
    </main>
  )
}

export default Page