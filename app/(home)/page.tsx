import Advertisement from '@/components/advertisement/Advertisement'
import JobCards from '@/components/jobCards/JobCards'
import JobFilter from '@/components/jobFilter/JobFilter'
import Newsletter from '@/components/newsletter/Newsletter'
import { Fragment } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Home page',
   description: 'Home page description',
}

export default function Home() {
   return (
      <Fragment>
         <div className="container mx-auto my-16 xl:my-20 px-5 md:px-0">
            <div className="grid grid-cols-12 lg:gap-12">
               {/* sidebar part*/}
               <div className="hidden xl:block xl:col-span-3">
                  <JobFilter />
                  <div className="mt-6">
                     <Advertisement />
                  </div>
               </div>
               {/* main part */}
               <div className="col-span-12 xl:col-span-9" id="find-job">
                  <div className="flex items-center justify-between">
                     <h3 className="text-2xl font-semibold text-base-content">
                        Latest Jobs
                     </h3>
                     <p className="text-base text-base-content/60">
                        2,640 Result Found
                     </p>
                  </div>
                  <div className="mt-8 flex flex-col gap-6">
                     {[1, 2, 3, 4, 5, 6, 7, 8].map((item: any, index: any) => (
                        <div key={item.id}>
                           <JobCards />
                        </div>
                     ))}
                  </div>
                  <div className="mt-8 mb-16 flex items-center justify-center md:justify-start">
                     <button className="btn btn-primary px-5 py-3">
                        See All Jobs
                     </button>
                  </div>
                  <div>
                     <Newsletter />
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
