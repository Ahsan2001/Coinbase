import React from 'react'
import {  NatureWonderland, ContactForm, BlogContent, WhyWeNeedHelp, AumanaHelpContent, HowCanHelpComponent, HomeBannerComponent, Testmonials, WhatIsNature, NWCollageImages, GreetingBanner } from '../components'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const Home  = () => {
  TabTitles("Aumana - Natural Wonderland");

  return (
    <Layout>
      <HomeBannerComponent />
      <NatureWonderland />
      <GreetingBanner />
      <WhatIsNature />
      <WhyWeNeedHelp />
      <NWCollageImages />
      <HowCanHelpComponent />
      <AumanaHelpContent />
      <Testmonials />
      <BlogContent />
      <ContactForm />
    </Layout>
  )
}

export default Home 