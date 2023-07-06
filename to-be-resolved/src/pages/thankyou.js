import React from 'react'
import { Thanks } from '../components'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const ThankYou = () => {
    TabTitles("Thank You")
    return (
        <Layout>
            <Thanks />
        </Layout>
    )
}

export default ThankYou 