import React from 'react'
import { ContactForm, StewardShipContent } from '../components'
import Layout from '../layout'
import { TabTitles } from '../utils/tabTtile'

const Stewardship = () => {
    TabTitles("StewardShip")
    return (
        <Layout>
            <StewardShipContent />
            {/* <AboutTour /> */}
            <ContactForm />
        </Layout>
    )
}

export default Stewardship 
