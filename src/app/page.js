"use client"
import {Hero, About, Clients, Works, Highlights, Footer, ContactForm, ServiceCards } from '@/components'

import portalImage from '../../public/portal-image.png'
import PortalSection from '@/components/Utils/PortalSection'
import Reviews from '@/components/Reviews'
import { useState } from 'react'

const Page = () => {
  const [activeFooter, setActiveFooter] = useState("contact");
  
  return (
    <main>
      <Hero />
      <About />
      <Clients head1={'Believed by'} head2={'from Global Brands to Start-ups'} />
      <Works />
      <ServiceCards />
      <PortalSection 
        foregroundImage={portalImage}
      />
      <Highlights />
      <Reviews />
      <ContactForm />
      <Footer activeFilter={activeFooter} setActiveFilter={setActiveFooter} />
    </main>
  )
}

export default Page