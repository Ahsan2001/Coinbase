import React from 'react'
import { Step1 } from '../components/CreateDesigns'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const Design = () => {
  TabTitles("Design")
  return (
    <Layout>
        <Step1 />
    </Layout>
  )
}

export default Design