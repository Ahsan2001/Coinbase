import React  from 'react'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'
import { TermAndCondition } from '../components'

const TermsCondition = () => {
  TabTitles("Terms and Condition")
  return (
    <Layout>
        <TermAndCondition />
    </Layout>
  )
}

export default TermsCondition