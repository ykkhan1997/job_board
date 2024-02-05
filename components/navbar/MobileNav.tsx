import Link from 'next/link'
import React from 'react'

type SidebarLayoutProps = {
   sidebarOpen: boolean
   setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
   data: any
}

const MobileNav = ({
   sidebarOpen,
   setSidebarOpen,
   data,
}: SidebarLayoutProps) => {
   return (
      <nav>
         <div className="block xl:hidden">
            <div
               className={`overflow-y-auto z-40 flex p-8 top-0 flex-col h-screen w-full max-w-[360px] fixed bg-base-100  duration-500 ease-in  gap-2 md:gap-0 shadow-xl ${
                  sidebarOpen ? 'left-0' : '-left-full'
               }`}
            >
               <div className="flex items-center justify-between">
                  {/* logo svg icon  */}
                  <div className="flex items-center gap-2">
                     <div>
                        <svg
                           width="29"
                           height="28"
                           viewBox="0 0 29 28"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <g clipPath="url(#clip0_5067_10092)">
                              <path
                                 d="M20.8111 3.91998C20.8111 4.86797 20.614 5.77011 20.2582 6.58797C22.6478 8.43182 24.1859 11.3171 24.1859 14.56C24.1859 16.2966 23.7448 17.9307 22.9681 19.3572L26.2566 20.3306C27.0927 18.5821 27.5607 16.6254 27.5607 14.56C27.5607 9.55178 24.8093 5.18338 20.7294 2.87134C20.7832 3.21303 20.8111 3.56326 20.8111 3.91998Z"
                                 fill="#4B6BFB"
                              />
                              <path
                                 d="M19.8575 26.7016C18.1014 27.5341 16.1361 28 14.0616 28C6.60625 28 0.5625 21.9827 0.5625 14.56C0.5625 9.55178 3.31384 5.18338 7.39374 2.87134C7.33996 3.21303 7.31204 3.56326 7.31204 3.91998C7.31204 4.86797 7.5092 5.77011 7.86492 6.58797C5.47539 8.43182 3.93727 11.3171 3.93727 14.56C3.93727 20.127 8.47008 24.64 14.0616 24.64C15.8059 24.64 17.4471 24.2008 18.8799 23.4275L19.8575 26.7016Z"
                                 fill="#4B6BFB"
                              />
                              <path
                                 d="M17.9988 3.92C17.9988 6.08496 16.236 7.84 14.0616 7.84C11.8871 7.84 10.1243 6.08496 10.1243 3.92C10.1243 1.75504 11.8871 0 14.0616 0C16.236 0 17.9988 1.75504 17.9988 3.92Z"
                                 fill="#4B6BFB"
                              />
                              <path
                                 d="M7.31201 14.56C7.31201 12.3949 8.3404 10.469 9.93737 9.24C10.7226 9.84428 11.6452 10.2801 12.6507 10.493L13.4991 11.76L12.3742 17.92L14.0616 19.6L15.7489 17.92L14.624 11.76L15.4724 10.493C16.4779 10.2801 17.4005 9.84428 18.1857 9.24C19.7827 10.469 20.8111 12.3949 20.8111 14.56C20.8111 18.2714 17.7892 21.28 14.0616 21.28C10.3339 21.28 7.31201 18.2714 7.31201 14.56Z"
                                 fill="#4B6BFB"
                              />
                              <path
                                 d="M26.6714 22.0719C27.0666 22.1889 27.12 22.7244 26.7556 22.9164L24.8222 23.9355L27.4258 26.5277C27.6056 26.7067 27.6056 26.9969 27.4258 27.176L26.733 27.8657C26.5532 28.0448 26.2616 28.0448 26.0818 27.8657L23.4783 25.2736L22.4547 27.1985C22.2618 27.5613 21.724 27.5081 21.6065 27.1146L19.7059 20.7497C19.6017 20.4007 19.9279 20.0759 20.2784 20.1796L26.6714 22.0719Z"
                                 fill="#4B6BFB"
                              />
                           </g>
                           <defs>
                              <clipPath id="clip0_5067_10092">
                                 <rect
                                    width="28.1231"
                                    height="28"
                                    fill="white"
                                 />
                              </clipPath>
                           </defs>
                        </svg>
                     </div>
                     <div>
                        <svg
                           width="81"
                           height="14"
                           viewBox="0 0 81 14"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M0.123047 10.1174C0.310534 12.6374 1.79168 13.9067 4.00403 13.9067C6.42262 13.9067 7.82878 12.5254 7.82878 9.87472V0.653383H6.36637V9.87472C6.36637 11.8721 5.48518 12.6374 3.98529 12.6374C2.54163 12.6374 1.69794 11.8347 1.54795 10.1174H0.123047Z"
                              fill="#4B6BFB"
                           />
                           <path
                              d="M14.3302 13.9067C16.7113 13.9067 18.2674 12.5441 18.2674 9.87472V8.45605C18.2674 5.78672 16.7113 4.42405 14.3302 4.42405C11.9491 4.42405 10.4117 5.78672 10.4117 8.45605V9.87472C10.4117 12.5441 11.9491 13.9067 14.3302 13.9067ZM14.3302 5.69338C15.9988 5.69338 16.7675 6.79472 16.7675 8.45605V9.85605C16.7675 11.5547 15.9988 12.6374 14.3302 12.6374C12.6616 12.6374 11.9116 11.5547 11.9116 9.85605V8.45605C11.9116 6.79472 12.6616 5.69338 14.3302 5.69338Z"
                              fill="#4B6BFB"
                           />
                           <path
                              d="M25.2061 13.9067C27.2872 13.9067 28.7683 12.5441 28.7683 9.87472V8.47472C28.7683 5.78672 27.2872 4.42405 25.2061 4.42405C23.8937 4.42405 22.8812 5.00272 22.3938 6.14138V0.0933838H20.9126V13.7201H22.3938V12.2454C22.8625 13.2721 23.8187 13.9067 25.2061 13.9067ZM24.8686 12.6374C23.3499 12.6374 22.3938 11.5921 22.3938 9.89338V8.56805C22.3938 6.66405 23.3312 5.69338 24.8498 5.69338C26.5185 5.69338 27.2872 6.79472 27.2872 8.49338V9.85605C27.2872 11.5547 26.5185 12.6374 24.8686 12.6374Z"
                              fill="#4B6BFB"
                           />
                           <path
                              d="M33.4458 13.7201H38.3205C40.9078 13.7201 42.7264 12.4694 42.7264 10.0801V9.61338C42.7264 8.23205 42.014 7.29872 40.7203 6.81338C41.6015 6.34672 42.1265 5.60005 42.1265 4.55472V4.06938C42.1265 1.84805 40.5516 0.653383 37.758 0.653383H33.4458V13.7201ZM37.608 2.61338C39.1079 2.61338 39.8016 3.17338 39.8016 4.14405V4.53605C39.8016 5.46938 39.1079 6.08538 37.6643 6.08538H35.7144V2.61338H37.608ZM38.133 7.91472C39.6516 7.91472 40.4016 8.56805 40.4016 9.63205V10.0054C40.4016 11.0507 39.6516 11.7601 38.133 11.7601H35.7144V7.91472H38.133Z"
                              fill="#4B6BFB"
                           />
                           <path
                              d="M48.8899 13.9067C51.496 13.9067 53.1646 12.4507 53.1646 9.72538V8.41872C53.1646 5.69338 51.496 4.23738 48.8899 4.23738C46.3026 4.23738 44.634 5.69338 44.634 8.41872V9.72538C44.634 12.4507 46.3026 13.9067 48.8899 13.9067ZM48.8899 6.19738C50.2398 6.19738 50.8585 7.11205 50.8585 8.49338V9.65072C50.8585 11.0507 50.2398 11.9467 48.8899 11.9467C47.5588 11.9467 46.9588 11.0507 46.9588 9.65072V8.49338C46.9588 7.11205 47.5588 6.19738 48.8899 6.19738Z"
                              fill="#4B6BFB"
                           />
                           <path
                              d="M60.5824 13.7201H62.851V7.70938C62.851 5.33872 61.5386 4.23738 59.1762 4.23738C56.6639 4.23738 55.5015 5.48805 55.239 7.33605H57.4701C57.5826 6.66405 57.9951 6.19738 59.0262 6.19738C60.1512 6.19738 60.5824 6.73872 60.5824 7.93338V8.40005H58.4638C55.9327 8.40005 54.9578 9.42672 54.9578 10.8267V11.3307C54.9578 12.9361 56.0827 13.9067 57.9388 13.9067C59.3262 13.9067 60.1324 13.4774 60.5824 12.5814V13.7201ZM58.7263 12.3014C57.6763 12.3014 57.2264 11.8907 57.2264 11.1254V10.8267C57.2264 10.1361 57.6388 9.70672 58.7638 9.70672H60.5824V10.2294C60.5824 11.7227 59.9074 12.3014 58.7263 12.3014Z"
                              fill="#4B6BFB"
                           />
                           <path
                              d="M67.7857 8.94138C67.7857 7.24272 68.8731 6.47738 70.373 6.47738H70.9542V4.23738H70.5043C69.3231 4.23738 68.4044 4.81605 67.7857 6.01072V4.42405H65.5359V13.7201H67.7857V8.94138Z"
                              fill="#4B6BFB"
                           />
                           <path
                              d="M78.5257 13.7201H80.7943V0.0933838H78.5257V5.76805C78.0569 4.81605 77.157 4.23738 75.8446 4.23738C73.8197 4.23738 72.2636 5.69338 72.2636 8.43738V9.72538C72.2636 12.4507 73.8197 13.9067 75.8446 13.9067C77.082 13.9067 78.0194 13.4027 78.5257 12.3761V13.7201ZM76.5008 6.19738C77.757 6.19738 78.5257 7.07472 78.5257 8.47472V9.61338C78.5257 11.1627 77.7757 11.9467 76.557 11.9467C75.1884 11.9467 74.5884 11.0507 74.5884 9.61338V8.53072C74.5884 7.11205 75.1884 6.19738 76.5008 6.19738Z"
                              fill="#4B6BFB"
                           />
                        </svg>
                     </div>
                  </div>
                  {/* cross svg icon  */}
                  <div>
                     <svg
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-base-content cursor-pointer hover:text-red-600 transition hover:duration-300"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L4.93934 6L0.21967 10.7197C-0.0732233 11.0126 -0.0732233 11.4874 0.21967 11.7803C0.512563 12.0732 0.987437 12.0732 1.28033 11.7803L6 7.06066L10.7197 11.7803C11.0126 12.0732 11.4874 12.0732 11.7803 11.7803C12.0732 11.4874 12.0732 11.0126 11.7803 10.7197L7.06066 6L11.7803 1.28033C12.0732 0.987437 12.0732 0.512563 11.7803 0.21967C11.4874 -0.0732233 11.0126 -0.0732233 10.7197 0.21967L6 4.93934L1.28033 0.21967Z"
                           fill="currentColor"
                        />
                     </svg>
                  </div>
               </div>
               <div className="mt-16 flex flex-col gap-7">
                  {data.map((item: any, index: number) => (
                     <Link
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        href={item.link}
                        key={index}
                        className="text-lg text-base-content/80 font-normal hover:opacity-60 transition-all hover:duration-300"
                     >
                        {item.name}
                     </Link>
                  ))}
               </div>
            </div>
         </div>
         {/* bg overlay */}
         <div
            className={`xl:hidden fixed top-0 z-30 transition-all duration-500 ease-in-out  h-full w-full backdrop-blur-sm ${
               sidebarOpen ? 'left-0' : '-left-full'
            }`}
            onClick={() => setSidebarOpen(false)}
         />
      </nav>
   )
}

export default MobileNav
