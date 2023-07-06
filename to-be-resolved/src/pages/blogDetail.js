import React from 'react'
import { BlogDetail } from '../components'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const BlogDetails = () => {
    TabTitles("Aumana - Read Blog")
    return (
        <Layout>
            <BlogDetail />
        </Layout>
    )
}

export default BlogDetails;