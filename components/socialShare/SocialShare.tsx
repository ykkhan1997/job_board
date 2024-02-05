import Link from 'next/link'
import React from 'react'
import {
   FacebookIcon,
   InstragramIcon,
   TweeterIcon,
   YoutubeIcon,
} from '../icons/Icons'

const SocialShare = () => {
   return (
      <div className=" flex items-center gap-6">
         <h5 className="text-lg text-base-content font-medium">Share:</h5>
         <div className=" flex items-center gap-2 text-base-content">
            <Link
               href="/"
               target="_blank"
               className="bg-base-100 border border-base-content/20 rounded-md p-3 hover:bg-primary hover:duration-300 transition hover:text-primary-content"
            >
               <FacebookIcon />
            </Link>
            <Link
               href="/"
               target="_blank"
               className="bg-base-100 border border-base-content/20 rounded-md p-3 hover:bg-primary hover:duration-300 transition hover:text-primary-content"
            >
               <TweeterIcon />
            </Link>
            <Link
               href="/"
               target="_blank"
               className="bg-base-100 border border-base-content/20 rounded-md p-3 hover:bg-primary hover:duration-300 transition hover:text-primary-content"
            >
               <InstragramIcon />
            </Link>
            <Link
               href="/"
               target="_blank"
               className="bg-base-100 border border-base-content/20 rounded-md p-3 hover:bg-primary hover:duration-300 transition hover:text-primary-content"
            >
               <YoutubeIcon />
            </Link>
         </div>
      </div>
   )
}

export default SocialShare
