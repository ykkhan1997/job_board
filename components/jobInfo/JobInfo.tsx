import React from 'react'
import { RightArrowIcon } from '../icons/Icons'

const JobInfo = () => {
   return (
      <div className="p-8 bg-base-100 rounded-xl">
         <button className="bg-primary w-full hover:bg-primary-focus transition hover:duration-500 py-3 px-5 text-base font-semibold text-primary-content rounded-lg flex items-center justify-end">
            <span className="mr-12"> Apply for this position</span>
            <span>
               <RightArrowIcon className="text-xl" />
            </span>
         </button>
         <div className="mt-3">
            <div className="flex items-center justify-between py-5 border-b border-base-content/10">
               <p className="text-base text-base-content">Date Posted</p>
               <p className="text-base text-base-content font-medium">
                  Apr 04, 2023
               </p>
            </div>
            <div className="flex items-center justify-between py-5 border-b border-base-content/10">
               <p className="text-base text-base-content">Job Type</p>
               <p className="text-base text-base-content font-medium">
                  Full Time
               </p>
            </div>
            <div className="flex items-center justify-between py-5 border-b border-base-content/10">
               <p className="text-base text-base-content">Job Role</p>
               <p className="text-base text-base-content font-medium">
                  Product Designer
               </p>
            </div>
            <div className="flex items-center justify-between py-5 border-b border-base-content/10">
               <p className="text-base text-base-content">Salary</p>
               <p className="text-base text-base-content font-medium">
                  $5k - 7k
               </p>
            </div>
         </div>
      </div>
   )
}

export default JobInfo
