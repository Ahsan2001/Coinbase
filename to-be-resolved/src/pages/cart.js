import React from 'react'
import { CartOrder } from '../components'
import { TabTitles } from '../utils/tabTtile'
import Layout from '../layout'

const Cart = () => {
  TabTitles("Cart Summary")
  return (
    <Layout>
        <CartOrder />
    </Layout>
  )
}

export default Cart