import React from 'react'
import { UserAccount } from '../components/UserAccount'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const UserPanel = () => {

   
    TabTitles("Aumana Dashboard")
    

    return (
        <Layout>
            <UserAccount />
        </Layout>
    )
}

export default UserPanel 