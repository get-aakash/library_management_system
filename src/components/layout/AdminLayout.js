import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function AdminLayout({children}) {
  return (
    <div>
      {/* Header goes here  */}
      <Header />
      <div className="main">{children}</div>
      {/* Footer goes here  */}
      <Footer />
    </div>
  )
}
