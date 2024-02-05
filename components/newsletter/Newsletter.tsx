import React from 'react'

const Newsletter = () => {
   return (
      <div className="py-16 bg-primary rounded-3xl flex flex-col items-center px-5" id='subscribe'>
         <div className="max-w-[470px] text-center">
            <h3 className="text-2xl md:text-4xl text-primary-content font-semibold">
               Subscribe Newsletter
            </h3>
            <p className="mt-3 text-base md:text-lg text-primary-content">
               Sign up to our newsletter to ger $10 off your first order, as
               well as news of our latest offers and product releases.
            </p>
            <div className="mt-8 relative">
               <input
                  type="text"
                  placeholder="Email"
                  className="w-full focus:outline-none outline-none p-5 rounded-xl"
               />
               <button className="btn btn-primary px-5 py-3 absolute right-2 top-2">
                  Subscribe
               </button>
            </div>
         </div>
      </div>
   )
}

export default Newsletter
