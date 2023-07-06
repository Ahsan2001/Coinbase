import React from 'react'
import { BlogListing } from '../components'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const Blogs = () => {
    TabTitles("Aumana - Blogs")
    return (
        <Layout>
            <BlogListing />
        </Layout>
    )
}

export default Blogs