import React, { ReactNode } from 'react'
import { getLoggedInUser } from '@/appwrite/auth'
import { redirect } from 'next/navigation';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/shared/AppSidebar';
import { cookies } from 'next/headers';

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
    const user = await getLoggedInUser();

    if (!user) return redirect("/sign-in");

    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
    return (
        <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <SidebarInset className='py-[10px] px-[20px]'>
                <main className="">
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default DashboardLayout