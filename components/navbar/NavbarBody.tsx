'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useGlobalContext } from '@/context/store'
import MobileNav from './MobileNav'

const NavbarBody = ({ menuData }: any) => {
   const { theme, setTheme, AllTheme } = useGlobalContext()
   const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false)
   const [sticky, setSticky] = useState(false)
   useEffect(() => {
      const handleScroll = () => {
         const isSticky = window.scrollY > 0
         if (isSticky) {
            setSticky(true)
         } else {
            setSticky(false)
         }
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])
   return (
      <div>
         {/* Start Navbar section */}
         <div
            className={`fixed left-0 right-0 z-30 ${
               sticky
                  ? 'bg-primary pb-4 border-b border-red-100/5'
                  : 'bg-transparent'
            }`}
         >
            <div className="container mx-auto w-full px-5 sm:px-0">
               <div className="flex items-center justify-between pt-5">
                  {/* nav left(Logo) section */}
                  <Link href="/">
                     <Image
                        src="/Logo.png"
                        width={152}
                        height={36}
                        alt="logo"
                     />
                  </Link>
                  {/* nav middle(Menu) section */}
                  <nav className=" hidden xl:flex items-center gap-8">
                     {menuData.map((item: any, index: number) => (
                        <Link
                           href={item.link}
                           key={index}
                           className="text-base text-primary-content font-normal capitalize hover:opacity-60 transition-all"
                        >
                           {item.name}
                        </Link>
                     ))}
                  </nav>
                  {/* nav right section */}
                  <div className="flex items-center gap-6">
                     <div className="dropdown dropdown-end">
                        <svg
                           tabIndex={0}
                           className="cursor-pointer"
                           width="22"
                           height="22"
                           viewBox="0 0 22 22"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M19.4234 14.5625C19.3437 14.4734 19.2734 14.3937 19.2218 14.3328C19.0625 14.1453 18.8421 14.0281 18.5984 14.0047C18.35 13.9812 18.1062 14.0515 17.914 14.2109C17.8671 14.2484 17.825 14.2906 17.7875 14.3375C17.7312 14.4031 17.6562 14.4875 17.5671 14.5859C16.8453 15.3922 15.5 16.9015 15.5 18.4625C15.5 20.1406 16.8453 21.5047 18.5 21.5047C20.1546 21.5047 21.5 20.1406 21.5 18.4625C21.5 16.8875 20.15 15.3734 19.4234 14.5625ZM18.5 20C17.675 20 17 19.3062 17 18.4578C17 17.5672 17.9187 16.4515 18.5046 15.7859C19.0906 16.4515 20 17.5672 20 18.4578C20 19.3062 19.325 20 18.5 20Z"
                              fill="white"
                           />
                           <path
                              d="M16.9109 13.7703H16.925C17.2062 13.7703 17.4734 13.6625 17.6703 13.4609C17.8718 13.2594 17.9796 12.9969 17.9796 12.7156C17.9796 12.4344 17.8671 12.1578 17.6656 11.9609L6.82339 1.2078C5.87651 0.256237 4.32964 0.251549 3.37808 1.20311L3.13433 1.44686C2.18277 2.39374 2.17808 3.94061 3.12964 4.89217L5.07964 6.84218L1.10933 10.8078C0.720265 11.1969 0.50464 11.7125 0.499953 12.2656C0.495265 12.8187 0.71089 13.3344 1.09995 13.7234C1.10933 13.7328 1.1187 13.7422 1.13277 13.7562L7.28277 19.6625C7.68589 20.0469 8.19683 20.239 8.71245 20.239C9.22808 20.239 9.74839 20.0422 10.1468 19.6578L10.8078 19.0203C12.7625 17.1312 15.7062 14.2812 16.0906 13.8969C16.114 13.8734 16.3062 13.7703 16.9109 13.7703ZM4.18901 3.83749C3.82339 3.46717 3.82339 2.87655 4.18901 2.51092L4.43277 2.26717C4.79839 1.90155 5.3937 1.90155 5.75933 2.27186L7.71402 4.21249L6.13433 5.79217L4.18901 3.83749ZM15.0359 12.8234C14.689 13.1703 11.6093 16.1515 9.76714 17.9375L9.1062 18.575C8.88589 18.7859 8.5437 18.7859 8.32339 18.5797L2.17339 12.6734L2.16402 12.6641C2.0562 12.5562 1.99995 12.4156 1.99995 12.2656C1.99995 12.1156 2.06089 11.975 2.1687 11.8672L6.13902 7.90624L8.78277 5.26249L15.9406 12.3641C15.5562 12.4531 15.2562 12.6031 15.0359 12.8234Z"
                              fill="white"
                           />
                        </svg>
                        <ul
                           tabIndex={0}
                           className="grid dropdown-content p-3 shadow-lg mt-5 bg-base-200 rounded-lg w-52 max-h-80 overflow-x-auto"
                        >
                           {AllTheme.map((item) => (
                              <li
                                 data-theme={item}
                                 key={item}
                                 className={`capitalize w-full flex mb-2 rounded-md last-of-type:mb-0 justify-between items-center px-2 py-2 hover:bg-base-300 transition-all duration-300 cursor-pointer`}
                                 onClick={() => {
                                    setTheme(item)
                                 }}
                              >
                                 <span className="text-base-content flex items-center gap-2">
                                    {theme === item && (
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          className="w-3 h-3 text-primary"
                                       >
                                          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                                       </svg>
                                    )}
                                    {item}
                                 </span>
                                 <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                                    <div className="bg-primary w-2 rounded"></div>{' '}
                                    <div className="bg-secondary w-2 rounded"></div>{' '}
                                    <div className="bg-accent w-2 rounded"></div>{' '}
                                    <div className="bg-neutral w-2 rounded"></div>
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <Link
                        href="/job-post-form"
                        className="bg-primary-content px-4 py-2.5 rounded-md text-primary font-medium text-sm hidden md:block"
                     >
                        Post a Job
                     </Link>
                     {/* mobile menu icon  */}
                     <div className="block xl:hidden">
                        <svg
                           onClick={() => setSidebarOpen(!sidebarOpen)}
                           className="text-primary-content cursor-pointer"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M22 5.5L9 5.5V4H22V5.5ZM22 12.5H2V11H22V12.5ZM15 19.5L22 19.5V18L15 18V19.5Z"
                              fill="currentColor"
                           />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <MobileNav
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            data={menuData}
         />
      </div>
   )
}

export default NavbarBody
