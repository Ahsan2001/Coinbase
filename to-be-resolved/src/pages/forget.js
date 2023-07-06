import React from 'react'
import Layout from '../layout'
import { Forget } from '../components'
import { TabTitles } from '../utils/tabTtile'


const ForgetPassword = () => {
    TabTitles("Forget Password")
    return (
        <Layout>
            <Forget />
        </Layout>
    )
}

export default ForgetPassword