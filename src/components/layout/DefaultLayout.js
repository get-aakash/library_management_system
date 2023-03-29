import React from 'react'

export default function DefaultLayout({children}) {
  return (
    <div>
      {/* Header goes here  */}
        <div className="main">{children}</div>
      {/* Footer goes here  */}
    </div>
  )
}
