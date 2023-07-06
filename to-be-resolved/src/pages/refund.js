import React  from 'react'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'
import {RefundPolicy} from '../components'

const Refund = () => {
  TabTitles("Refund Policy")
  return (
    <Layout>
      <RefundPolicy />
    </Layout>
  )
}

export default Refund