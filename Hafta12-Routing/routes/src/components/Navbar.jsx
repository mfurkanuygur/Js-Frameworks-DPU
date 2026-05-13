import React from 'react'
import {Link} from 'react-router'
export const Navbar = () => {
  return (
    <nav>
        <Link to="/">anasayfa</Link>
        <Link to="/sepetim">sepetim</Link>
    </nav>
  )
}
