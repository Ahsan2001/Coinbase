import React from 'react'
import { Step5 } from '../components/CreateDesigns'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'


const DashboardAdjustSize = () => {
    TabTitles("Design")
    return (
        <Layout>
            <Step5 />
        </Layout>
    )
}

export default DashboardAdjustSize