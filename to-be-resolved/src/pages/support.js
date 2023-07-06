import React from 'react';
import { SupportComponent } from '../components';
import { TabTitles } from '../utils/tabTtile';
import Layout from '../layout';

const Support = () => {
    TabTitles("Aumana - Support")
    return (
        <Layout>
            <SupportComponent />
        </Layout>
    )
}

export default Support