import React from 'react'
import { ContactForm } from '../components'
import { BrowseImage } from '../components/Browse'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const Browse = () => {
  TabTitles("Browse")
  return (
      <Layout>
        <BrowseImage />
        <ContactForm />
      </Layout>
  )
}

export default Browse