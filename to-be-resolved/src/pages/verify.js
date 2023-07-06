import React from 'react'
import Layout from '../layout'
import { Verify } from '../components'
import { TabTitles } from '../utils/tabTtile'

const VerifyOTP = () => {
    TabTitles("Verify OTP")
    return (
        <Layout>
            <Verify />
        </Layout>
    )
}

export default VerifyOTP 