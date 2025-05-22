"use client"
import React from 'react'
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MainLinksComponent = () => {
  const pathname = usePathname();
  return (
    <SidebarGroup className='group-data-[collapsible=icon]:hidden'>
      {sidebarLinks.slice(0, 1).map(({ section, links }) => (
        <React.Fragment key={section}>
          <SidebarGroupLabel key={section}>{section}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((link) => (
                <SidebarMenuItem key={link.name}>
                  <SidebarMenuButton asChild className={`${pathname === link.href && "bg-blue-500 text-white"}`}>
                    <Link href={link.href}>
                      <link.icon className="mr-2 h-4 w-4" />
                      <span>{link.name}</span>
                    </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem> 
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </React.Fragment>
      ))}
    </SidebarGroup>
  )
}

export default MainLinksComponent