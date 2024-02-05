import React from 'react'
import { ImageIcon, RightArrowIcon } from '../icons/Icons'

const JobForm = () => {
   return (
      <div className="p-5 md:p-10 lg:p-16 bg-base-100 rounded-2xl">
         <h4 className="text-2xl md:text-3xl text-base-content">Post a Job</h4>
         <p className="text-base md:text-lg text-base-content/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </p>
         {/* user info  */}
         <div className="mt-12">
            <h5 className="text-lg font-semibold text-base-content">
               User Info
            </h5>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text text-sm text-base-content/80">
                        Your Name
                     </span>
                  </label>
                  <input
                     type="text"
                     className="w-full border border-base-content/10 p-3 outline-none text-base-content rounded-lg focus:outline-none input"
                  />
               </div>
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text text-sm text-base-content/80">
                        Your Email
                     </span>
                  </label>
                  <input
                     type="email"
                     className="w-full focus:outline-none input border border-base-content/10 p-3 outline-none text-base-content rounded-lg"
                  />
               </div>
            </div>
         </div>

         {/* company details  */}
         <div className="mt-8">
            <h5 className="text-lg font-semibold text-base-content">
               Company Details
            </h5>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text text-sm text-base-content/80">
                        Company Name
                     </span>
                  </label>
                  <input
                     type="text"
                     className="w-full border focus:outline-none input border-base-content/10 p-3 outline-none text-base-content rounded-lg"
                  />
               </div>
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text text-base-content/80">
                        Industries
                     </span>
                  </label>
                  <select className="w-full select border border-base-content/10 focus:outline-none p-3 outline-none text-base-content/40 text-base rounded-lg">
                     <option defaultValue="2" disabled>
                        Select Industries
                     </option>
                     <option value="1">Industries 1</option>
                     <option value="2">Industries 2</option>
                     <option value="3">Industries 3</option>
                  </select>
               </div>
            </div>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text text-sm text-base-content/80">
                        Location
                     </span>
                  </label>
                  <input
                     type="text"
                     className="w-full focus:outline-none input border border-base-content/10 p-3 outline-none text-base-content rounded-lg"
                  />
               </div>
               <div className="w-full flex items-center gap-2">
                  <div className="form-control w-full">
                     <label className="label">
                        <span className="label-text text-sm text-base-content/80">
                           Image
                        </span>
                     </label>
                     <label
                        htmlFor="fileupload"
                        className="w-full border border-base-content/10 p-3 outline-none text-base-content rounded-lg"
                     >
                        Choose File
                     </label>
                     <input
                        type="file"
                        id="fileupload"
                        placeholder="No file chosen"
                        className="hidden bg-base-100 text-base-content"
                     />
                  </div>
                  <label
                     htmlFor="fileupload"
                     className="p-4 border border-base-content/10 mt-8 rounded-lg w-fit cursor-pointer"
                  >
                     <ImageIcon className="text-base-content" />
                  </label>
               </div>
            </div>
         </div>

         {/* job info  */}
         <div className="mt-8">
            <h5 className="text-lg font-semibold text-base-content">
               Job Info
            </h5>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text text-sm text-base-content/80">
                        Job Title
                     </span>
                  </label>
                  <input
                     type="text"
                     placeholder="e.g.  Senior Product Designer"
                     className="w-full focus:outline-none input border border-base-content/10 p-3 outline-none text-base-content rounded-lg"
                  />
               </div>
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text text-base-content/80">
                        Job Type
                     </span>
                  </label>
                  <select className="w-full select border border-base-content/10 p-3 outline-none text-base-content rounded-lg text-base text-base-content/40">
                     <option
                        defaultValue="1"
                        disabled
                        className="text-base-content/40"
                     >
                        Select Type
                     </option>
                     <option value="4">Type 1</option>
                     <option value="2">Type 2</option>
                     <option value="3">Type 3</option>
                  </select>
               </div>
            </div>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text text-sm text-base-content/80">
                        Job Role
                     </span>
                  </label>
                  <input
                     type="text"
                     placeholder="e.g.  Product Designer"
                     className="w-full focus:outline-none input border border-base-content/10 p-3 outline-none text-base-content rounded-lg"
                  />
               </div>
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text text-sm text-base-content/80">
                        Salary Range
                     </span>
                  </label>
                  <input
                     type="text"
                     placeholder="e.g.  $10k - $20k"
                     className="w-full focus:outline-none input border border-base-content/10 p-3 outline-none text-base-content rounded-lg"
                  />
               </div>
            </div>
         </div>

         {/* job description  */}
         <div className="mt-8">
            <h5 className="text-lg font-semibold text-base-content">
               Job Description
            </h5>
            <div className="mt-4">
               <textarea
                  placeholder="Write your text..."
                  className="textarea focus:outline-none border border-base-content/10 textarea-lg w-full h-48"
               ></textarea>
            </div>
         </div>
         {/* job Responsibilities  */}
         <div className="mt-8">
            <h5 className="text-lg font-semibold text-base-content">
               Responsibilities
            </h5>
            <div className="mt-4">
               <textarea
                  placeholder="Write your text..."
                  className="textarea focus:outline-none border border-base-content/10 textarea-lg w-full h-48"
               ></textarea>
            </div>
         </div>
         {/* job Benefits  */}
         <div className="mt-8">
            <h5 className="text-lg font-semibold text-base-content">
               Benefits
            </h5>
            <div className="mt-4">
               <textarea
                  placeholder="Write your text..."
                  className="textarea focus:outline-none border border-base-content/10 textarea-lg w-full h-48"
               ></textarea>
            </div>
         </div>
         {/* Pro section  */}
         <div className="mt-8">
            <h5 className="text-lg font-semibold text-base-content">Pro</h5>
            <div className="mt-4">
               <div className="py-4 px-5 border border-base-content/10 flex items-center justify-between rounded-lg">
                  <label className=" flex items-center gap-4">
                     <input
                        type="checkbox"
                        className="checkbox checkbox-primary bg-base-100 border border-base-content/20"
                     />
                     <span className="label-text text-base text-base-content">
                        Highlight your post to stay on top
                     </span>
                  </label>
                  <p className="text-base font-bold text-base-content">$9.45</p>
               </div>
            </div>
         </div>
         {/* button  */}
         <div className="mt-6 md:mt-10">
            <button className="bg-primary w-fit hover:bg-primary-focus transition hover:duration-500 py-3 px-5 text-base font-semibold text-primary-content rounded-lg flex items-center gap-3">
               Post Your Job
               <span>
                  <RightArrowIcon className="text-xl" />
               </span>
            </button>
         </div>
      </div>
   )
}

export default JobForm
