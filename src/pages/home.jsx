import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Partners from '../components/Partners'
import Choose from '../components/Choose'
import Works from '../components/Works'
import Clients from '../components/Clients'
import Footer from '../components/Footer'

function home() {
  return (
    <div className='max-w-[1024px] m-auto'>
      <Header/>
      <Banner/>
      <Partners/>
      <Choose/>
      <Works/>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default home