import Image from 'next/image'
import React from 'react'
import { RightArrowIcon } from '../icons/Icons'
import Link from 'next/link'

const JobCards = () => {
   return (
      <div className="p-6 bg-base-100 hover:bg-base-300/30 hover:duration-500 transition border border-base-content/20 rounded-xl group">
         <div className="flex items-center justify-between">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
               <Image
                  src="/images/company-logo.png"
                  alt="company logo"
                  className="p-2 bg-primary rounded-xl"
                  width={48}
                  height={48}
               />
               <div>
                  <p className="text-sm font-medium text-base-content">
                     Microsoft
                  </p>
                  <h6 className="mt-1 text-lg font-semibold text-base-content group-hover:opacity-60 group-hover:duration-300 transition">
                     <Link href="/job-details">
                        Need Senior MERN Stack Developer
                     </Link>
                  </h6>
                  <div className="mt-3 flex items-center gap-2">
                     <p className="bg-base-300/30 px-2 py-1 w-fit text-xs text-base-content/70 rounded-md">
                        Full Time
                     </p>
                     <p className="bg-base-300/30 px-2 py-1 w-fit text-xs text-base-content/70 rounded-md">
                        $5k - $7k
                     </p>
                     <p className="bg-base-300/30 px-2 py-1 w-fit text-xs text-base-content/70 rounded-md">
                        12 hours ago
                     </p>
                  </div>
               </div>
            </div>
            <Link
               href="/job-details"
               className="hidden md:flex items-center gap-1.5 px-4 py-2.5 text-base-content/60 bg-base-300/50 group-hover:bg-primary group-hover:text-primary-content rounded-lg transition group-hover:duration-500"
            >
               View Job
               <span>
                  <RightArrowIcon />
               </span>
            </Link>
         </div>
         <p className="mt-5 text-base text-base-content/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
         </p>
      </div>
   )
}

export default JobCards
