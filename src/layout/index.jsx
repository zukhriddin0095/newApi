
import React, { Component, Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/header'
import Footer from '../components/footer'

export class Layout extends Component {
  render() {
    return <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
     
    
  }
}

export default Layout