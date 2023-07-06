import React  from 'react'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'
import { PrivacyPolicy } from '../components'

const Privacy = () => {
  TabTitles("Privacy Policy")
  return (
    <Layout>
      <PrivacyPolicy />
    </Layout>
  )
}

export default Privacy;