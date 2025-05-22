import React from 'react'
import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { ChevronUp, LogOutIcon, User2 } from 'lucide-react'
import { getLoggedInUser, signOut } from '@/appwrite/auth'

const SidebarFooterComponent = async () => {
    const user = await getLoggedInUser();
    const username = user?.name.split(" ")[0];

    // const initials = user?.name.split(" ").map((n: string) => n[0]).join("").toUpperCase();


    return (
        <SidebarFooter className='sticky bottom-0'>
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton>
                                <User2 /> {username}
                                <ChevronUp className="ml-auto" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side="top"
                            className="w-fit min-w-[230px] bg-white dark:bg-gray-800"
                        >
                            <DropdownMenuItem>
                                <span>Account</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span>Billing</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={signOut}>
                                <LogOutIcon />
                                <span>Sign out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    )
}

export default SidebarFooterComponent