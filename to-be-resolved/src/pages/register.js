import React from 'react'
import { RegisterForm } from '../components'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const Register = () => {
  TabTitles("Register")
  return (
    <Layout>
      <RegisterForm />
    </Layout> 
  )
}

export default Register

