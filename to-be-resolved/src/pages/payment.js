import React  from 'react'
import { PaymentProcess } from '../components'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const Payment = () => {
  TabTitles("Checkout")
  return (
    <Layout>
        <PaymentProcess />
    </Layout>
  )


}

export default Payment