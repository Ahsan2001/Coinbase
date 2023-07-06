import React from 'react'
import { Imagedetail } from '../components'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const ProductDetail = () => {
    TabTitles("Image Detail")
    return (
        <Layout>
            <Imagedetail />
        </Layout>
    )
}

export default ProductDetail; 