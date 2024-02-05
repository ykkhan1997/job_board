import CommonHeader from '@/components/common-header'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

export default function CommonLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <body className="bg-base-100">
         <div className="bg-base-content/[.03]">
            <header>
               {/* Navbar */}
               <Navbar />
            </header>
            <main>
               {/* Common header */}
               <CommonHeader />
               {children}
            </main>
            {/* Footer */}
            <Footer />
         </div>
      </body>
   )
}
