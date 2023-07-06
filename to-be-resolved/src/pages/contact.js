import React from 'react'
import ContactForm from '../components/ContactSection/contactForm'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const Contact = () => {
  TabTitles("Contact Us")
  return (
      <Layout>
            <ContactForm />
     </Layout>
  )
}

export default Contact