import React from 'react'
import { Footer, Header } from '../components'


const Layout = (props) => {
  return (
   <>
    <Header />
      <main className="content">
          {props.children}
      </main>
    <Footer />
   </>
  )
}

export default Layout;