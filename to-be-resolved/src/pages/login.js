import React from 'react'
import Layout from '../layout'
import { LoginComponent } from '../components'
import { TabTitles } from '../utils/tabTtile'


const Login = () => {
    TabTitles("Login")
    return (
        <Layout>
            <LoginComponent />
        </Layout>
    )
}

export default Login