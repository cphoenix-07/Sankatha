import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from '../../components/shared/Topbar';
import LeftSidebar from '../../components/shared/LeftSidebar';
import RightSidebar from '../../components/shared/RightSidebar';
import Bottombar from '../../components/shared/Bottombar';
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sanatan Sankathaa',
  description: 'A forum for eternal beings in the exploration of the eternal truth. This forum does not promote any religion but eternal truth which in my cultural is known as Sanatan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          
          <main className="flex flex-row">
            <LeftSidebar />
            <section className='lex min-h-screen flex-1 flex-col items-center bg-dark-1 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
            </section>
            <RightSidebar/>
          </main>

          <Bottombar/>
        </body>
      </html>
    </ClerkProvider>
  )
}
