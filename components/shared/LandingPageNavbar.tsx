import React from 'react'
import Link from 'next/link'
import { landingPageNavLinks } from '@/constants'
import { cn } from '@/lib/utils'
import LandingPageMobileNavbar from './LandingPageMobileNavbar'

const LandingPageNavbar = () => {
  return (
    <header className='bg-white shadow sticky top-0 z-50'>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center justify-center gap-1">
          <h1 className="text-2xl font-bold text-blue-600">VCraft AI</h1>
        </div>
        <nav className="hidden md:flex space-x-4 text-sm">
          {landingPageNavLinks.map(({ urlLink, urlText }) => (
            <Link
              key={urlLink}
              href={urlLink}
              className={cn("text-gray-700 hover:text-blue-600 px-4 py-2 rounded transition duration-300", urlLink === "/generate" && "bg-blue-700 text-white hover:text-white hover:bg-blue-300")}
            >
              {urlText}
            </Link>
          ))}
        </nav>
        {/* mobile navbar */}
        <LandingPageMobileNavbar />
      </div>
    </header>
  )
}

export default LandingPageNavbar