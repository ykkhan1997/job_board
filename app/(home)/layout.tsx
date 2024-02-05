import Footer from '@/components/footer'
import OthersHeader from '@/components/others-header'
import React, { Fragment } from 'react'

export default function OthersLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <Fragment>
         {/* Others header */}
         <OthersHeader />
         <main> {children}</main>
         {/* Footer */}
         <Footer />
      </Fragment>
   )
}
