import React from 'react'
import {  CollageInterest } from '../components'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const About = () => {
  TabTitles("About")
  return (
     <Layout>
          <CollageInterest />
    </Layout>
  )
}

export default About