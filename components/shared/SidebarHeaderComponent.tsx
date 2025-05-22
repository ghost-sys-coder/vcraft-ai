import React from 'react'
import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const SidebarHeaderComponent = () => {
    return (
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton>
                                <div className="">
                                    <Image
                                        src={"/images/logo.png"}
                                        width={100}
                                        height={100}
                                        alt='logo'
                                        className='w-24 h-28 rounded-full object-cover'
                                    />
                                </div>
                                <ChevronDown className="ml-auto" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[230px]">
                            <DropdownMenuItem className='w-full bg-blue-500 text-white'>
                                <span>VCraft AI</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                               <Link href={"/generate"}>Build your business landing page</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    )
}

export default SidebarHeaderComponent