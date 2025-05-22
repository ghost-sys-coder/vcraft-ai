"use client";
import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'
import { landingPageNavLinks } from '@/constants'
import Link from 'next/link'


const LandingPageMobileNavbar = () => {
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    }
    return (
        <div className='md:hidden'>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger><MenuIcon /></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className='font-semibold text-xl text-blue-600'>VCraft AI</SheetTitle>
                        <SheetDescription className='py-20 flex flex-col justify-center gap-4'>
                            {landingPageNavLinks.map(({ urlIcon, urlLink, urlText }) => (
                                <Link
                                    key={urlText} href={urlLink}
                                    onClick={handleLinkClick}
                                    className='flex items-center gap-2 text-xl text-gray-700 hover:text-blue-600 px-4 py-2 rounded transition duration-300'>
                                    {urlIcon && React.createElement(urlIcon)}
                                    <span>{urlText}</span>
                                </Link>
                            ))}
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default LandingPageMobileNavbar