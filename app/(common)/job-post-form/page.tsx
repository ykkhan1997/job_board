import JobForm from '@/components/jobForm/JobForm'
import { Fragment } from 'react'

export const metadata = {
   title: 'Job Post Form ',
   description: 'Job Post Form page description',
}

export default function Home() {
   return (
      <Fragment>
         <div className="container mx-auto my-20 px-5 md:px-0 w-full md:max-w-[640px] xl:max-w-[800px] -mt-[184px] relative z-[2] mb-20">
            <JobForm />
         </div>
      </Fragment>
   )
}
