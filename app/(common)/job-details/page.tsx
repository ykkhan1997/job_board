import React from 'react'
import Advertisement from '@/components/advertisement/Advertisement'
import JobCards from '@/components/jobCards/JobCards'
import JobDescription from '@/components/jobDescription/JobDescription'
import JobInfo from '@/components/jobInfo/JobInfo'
import NewsletterTwo from '@/components/newsletter/NewsLetterTwo'
import { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Job Details',
   description: 'Job Details page description',
}

export default function JobDetails() {
   return (
      <div className="container mx-auto px-5 md:px-0 -mt-[184px] relative z-[2] mb-20">
         <div className="grid grid-cols-12 lg:gap-8 justify-items-center w-full">
            {/* main section */}
            <div className="col-span-12 lg:w-10/12 xl:w-full xl:col-span-8">
               <div>
                  <JobDescription />
                  <div className="mt-12">
                     <h5 className="text-2xl text-base-content font-semibold">
                        Related Jobs
                     </h5>
                     <div className="mt-6 flex flex-col gap-6">
                        {[1, 2, 3].map((item: any, index: any) => (
                           <div key={item.id}>
                              <JobCards />
                           </div>
                        ))}
                     </div>
                     <div className="mt-16">
                        <NewsletterTwo />
                     </div>
                  </div>
               </div>
            </div>
            {/* sidebar section  */}
            <div className="hidden xl:block xl:col-span-4">
               <JobInfo />
               <div className="mt-8 px-12">
                  <Advertisement />
               </div>
            </div>
         </div>
      </div>
   )
}
