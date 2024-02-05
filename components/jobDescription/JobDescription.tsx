import React from 'react'
import { LeftArrowIcon, RightArrowIcon } from '../icons/Icons'
import Image from 'next/image'
import SocialShare from '../socialShare/SocialShare'
import Link from 'next/link'

const JobDescription = () => {
   return (
      <div className="p-8 bg-base-100 rounded-2xl">
         <Link
            href="/"
            className=" bg-base-content/5 px-3 py-2.5 text-sm font-medium text-base-content/60 rounded-lg flex items-center gap-2.5 hover:bg-primary hover:text-primary-content transition hover:duration-500 w-fit"
         >
            <span>
               <LeftArrowIcon />
            </span>
            Back
         </Link>
         <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-6 pb-6 xl:border-b border-base-content/10">
            <Image
               src="/images/company-logo.png"
               alt="company logo"
               className="p-2 bg-primary rounded-xl"
               width={48}
               height={48}
            />
            <div>
               <p className="text-base font-medium text-base-content">
                  Microsoft
               </p>
               <h6 className="mt-1 text-3xl font-medium text-base-content">
                  Need Senior MERN Stack Developer
               </h6>
            </div>
         </div>
         {/* description for mini device  */}
         <div className="block xl:hidden">
            <div className="bg-base-100 rounded-xl">
               <button className="bg-primary w-fit hover:bg-primary-focus transition hover:duration-500 py-3 px-5 text-base font-semibold text-primary-content rounded-lg flex items-center gap-3">
                  Apply Now
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
         </div>
         {/* main description starts here  */}
         <div className="mt-8 pb-8 border-b border-base-content/10">
            <h5 className="text-2xl font-bold text-base-content">
               Description
            </h5>
            <h6 className="mt-8 text-xl font-bold text-base-content">
               Overview
            </h6>
            <p className="mt-3 text-lg text-base-content/80">
               Here is a sample job description for a social media manager: Are
               you passionate about creating engaging and creative content for
               social media platforms? Do you have experience in managing and
               growing online communities? If yes, then we are looking for you!
               We are a leading digital marketing agency that helps clients
               achieve their business goals through effective social media
               strategies. We are looking for a social media manager who can
               plan, create, and execute campaigns for various platforms such as
               Facebook, Instagram, Twitter, and LinkedIn.
            </p>
            <div className="mt-8">
               <h6 className="text-xl font-bold text-base-content">
                  Requirements
               </h6>
               <ul
                  className="mt-3 flex flex-col gap-3"
                  style={{ listStyle: 'disc' }}
               >
                  <li className="text-lg text-base-content/80">
                     You have at least 4 years of experience including solid
                     experience as a UI designer in SaaS or an ecommerce
                     solution with a strong portfolio of related projects
                  </li>
                  <li className="text-lg text-base-content/80">
                     You are proficient in Adobe Creative Suite (specifically
                     Illustrator, InDesign and Photoshop)
                  </li>
                  <li className="text-lg text-base-content/80">
                     You are proficient in prototyping tools such as Sketch
                  </li>
                  <li className="text-lg text-base-content/80">
                     Basic HTML5, CSS3, and JavaScript skills are a plus
                  </li>
                  <li className="text-lg text-base-content/80">
                     You pay strong attention to detail and have a keen eye for
                     aesthetics
                  </li>
                  <li className="text-lg text-base-content/80">
                     You have excellent communication skills and can clearly
                     articulate your ideas, designs, and suggestions
                  </li>
                  <li className="text-lg text-base-content/80">
                     You have an amazing track record of success, are highly
                     goal-driven, and work well in fast-paced environments
                  </li>
               </ul>
            </div>
            <div className="mt-8">
               <h6 className="text-xl font-bold text-base-content">
                  Skill & Experience
               </h6>
               <ul
                  className="mt-3 flex flex-col gap-3"
                  style={{ listStyle: 'disc' }}
               >
                  <li className="text-lg text-base-content/80">
                     You have at least 4 years of experience including solid
                     experience as a UI designer in SaaS or an ecommerce
                     solution with a strong portfolio of related projects
                  </li>
                  <li className="text-lg text-base-content/80">
                     You are proficient in Adobe Creative Suite (specifically
                     Illustrator, InDesign and Photoshop)
                  </li>
                  <li className="text-lg text-base-content/80">
                     You are proficient in prototyping tools such as Sketch
                  </li>
                  <li className="text-lg text-base-content/80">
                     Basic HTML5, CSS3, and JavaScript skills are a plus
                  </li>
                  <li className="text-lg text-base-content/80">
                     You pay strong attention to detail and have a keen eye for
                     aesthetics
                  </li>
                  <li className="text-lg text-base-content/80">
                     You have excellent communication skills and can clearly
                     articulate your ideas, designs, and suggestions
                  </li>
                  <li className="text-lg text-base-content/80">
                     You have an amazing track record of success, are highly
                     goal-driven, and work well in fast-paced environments
                  </li>
               </ul>
            </div>
            <div className="mt-8">
               <SocialShare />
            </div>
         </div>
         <div className="mt-8 flex flex-col md:flex-row items-center gap-5 md:gap-0 justify-center md:justify-between">
            <div>
               <h6 className="text-xl font-semibold text-base-content">
                  Interested in this job?
               </h6>
               <p className="mt-1 text-base text-base-content/60">
                  100 days left to apply
               </p>
            </div>
            <button className="bg-primary w-fit hover:bg-primary-focus transition hover:duration-500 py-3 px-5 text-base font-semibold text-primary-content rounded-lg flex items-center gap-3">
               Apply Now
               <span>
                  <RightArrowIcon className="text-xl" />
               </span>
            </button>
         </div>
      </div>
   )
}

export default JobDescription
