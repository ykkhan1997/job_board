import React, { Fragment } from 'react'
import NavbarBody from './NavbarBody'

const Navbar = () => {
   return (
      <Fragment>
         <NavbarBody menuData={menu} />
      </Fragment>
   )
}

export default Navbar

const menu = [
   {
      name: 'Home',
      link: '/',
   },
   {
      name: 'About',
      link: '/',
   },
   {
      name: 'Find job',
      link: '#find-job',
   },
   {
      name: 'Subscribe',
      link: '#subscribe',
   },
]
