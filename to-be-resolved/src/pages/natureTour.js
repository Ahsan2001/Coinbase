import React from 'react'
import { NatureTabs} from '../components/Browse'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const NatureTour = () => {
  TabTitles("Natural Wonderland Tour")

  return (
    <Layout>
       <NatureTabs />
    </Layout>
  )
}

export default NatureTour