import React from 'react'
import Footer from './Footer'
import Header from './Header'

const DefaultLAyout = ({children}) => {
  return (
    <div>
      <Header />
      <div className='main'>{children}</div>
      <Footer />
    </div>
  )
}

export default DefaultLAyout
