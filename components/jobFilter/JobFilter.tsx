import React from 'react'

const JobFilter = () => {
   return (
      <div className="p-6 bg-base-300/30 rounded-xl">
         <div className="flex items-center justify-between">
            <h5 className="text-lg font-semibold text-base-content">
               Job Type
            </h5>
            <p className="text-sm text-primary">Clear</p>
         </div>
         <div className="mt-6 flex flex-col gap-3">
            <label className=" flex items-center gap-3">
               <input
                  type="checkbox"
                  className="checkbox checkbox-primary bg-base-100 border border-base-content/20"
               />
               <span className="label-text text-base text-base-content opacity-60">
                  Full Time
               </span>
            </label>
            <label className=" flex items-center gap-3">
               <input
                  type="checkbox"
                  className="checkbox checkbox-primary bg-base-100 border border-base-content/20"
               />
               <span className="label-text text-base text-base-content opacity-60">
                  Part Time
               </span>
            </label>
            <label className=" flex items-center gap-3">
               <input
                  type="checkbox"
                  className="checkbox checkbox-primary bg-base-100 border border-base-content/20"
               />
               <span className="label-text text-base text-base-content opacity-60">
                  Remote
               </span>
            </label>
            <label className=" flex items-center gap-3">
               <input
                  type="checkbox"
                  className="checkbox checkbox-primary bg-base-100 border border-base-content/20"
               />
               <span className="label-text text-base text-base-content opacity-60">
                  Internship
               </span>
            </label>
         </div>
      </div>
   )
}

export default JobFilter
