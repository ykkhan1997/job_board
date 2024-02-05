import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Logo } from '../data/Logo'

const Footer = () => {
   return (
      <footer className="bg-base-content/[.03] py-8">
         <div className="container mx-auto px-5 sm:px-0">
            <div className="grid md:flex items-center gap-3 justify-center md:justify-between border-b border-base-content/10 pb-6">
               {/* Footer top left section */}
               <Link href="/" className="mx-auto md:mx-0">
                  <Logo />
               </Link>
               {/* Footer top right section */}
               <div className="flex items-center gap-8">
                  {menu.map((item, index) => (
                     <Link
                        href={item.link}
                        key={index}
                        className="text-base text-base-content font-normal capitalize hover:opacity-60 transition-all"
                     >
                        {item.name}
                     </Link>
                  ))}
               </div>
            </div>
            <div className="flex  items-center gap-3 flex-wrap md:flex-nowrap justify-center md:justify-between pt-6">
               {/* Footer bottom left section */}
               <p className="text-base text-base-content/80">
                  © 2023 JS Template. All Right Reserved.
               </p>
               {/* Footer bottom right section */}
               <div className="flex items-center gap-6">
                  <Link
                     href="/"
                     className="text-base text-base-content/60 hover:opacity-60 transition-all"
                  >
                     Terms of Service
                  </Link>
                  <Link
                     href="/"
                     className="text-base text-base-content/60 hover:opacity-60 transition-all"
                  >
                     Privacy Policy
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer

const menu = [
   {
      name: 'Home',
      link: '/',
   },
   {
      name: 'About',
      link: '/about',
   },
   {
      name: 'Find job',
      link: '/#find-job',
   },
   {
      name: 'Contact',
      link: '/#subscribe',
   },
]
