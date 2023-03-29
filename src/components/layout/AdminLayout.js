import React from 'react'

export default function AdminLayout({children}) {
  return (
    <div>
      {/* Header goes here  */}
      <div className="main">{children}</div>
      {/* Footer goes here  */}
    </div>
  )
}
