import React from 'react';
import Layout from '../layout';
import { TabTitles } from '../utils/tabTtile';
import { ChangePassword } from '../components';

const PasswordChange = () => {
  TabTitles("Change Password")
  return (
    <Layout>
        <ChangePassword />
    </Layout>
  )
}

export default PasswordChange







