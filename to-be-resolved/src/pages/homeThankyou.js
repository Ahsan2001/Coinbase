import React from 'react'
import { ThankYouHome } from '../components'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const HomeThankYou = () => {
    TabTitles("Thank You")
    return (
        <Layout>
            <ThankYouHome />
        </Layout>
    )
}

export default HomeThankYou; 