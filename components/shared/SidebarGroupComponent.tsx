import React from 'react'
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '../ui/sidebar'
import { Calendar, ChevronDown, Home, Inbox, Search, Settings } from "lucide-react"
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { Collapsible, CollapsibleContent } from '../ui/collapsible'
import { CollapsibleTrigger } from '@radix-ui/react-collapsible'

const SidebarGroupComponent = () => {
    
    return (
        <SidebarGroup className='group-data-[collapsible=icon]:hidden'>
            <SidebarMenu>
                {sidebarLinks.slice(1).map(({ section, links }) => (
                    <Collapsible key={section} asChild className='group/collapsible'>
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton tooltip={section}>
                                    <span>{section}</span>
                                    <ChevronDown className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    {links.map(({ name, icon, href }) => (
                                        <SidebarMenuSubItem key={name}>
                                            <SidebarMenuSubButton asChild>
                                                <Link href={href}>
                                                    {icon && React.createElement(icon)}
                                                    <span>{name}</span>
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>

                    </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}

export default SidebarGroupComponent