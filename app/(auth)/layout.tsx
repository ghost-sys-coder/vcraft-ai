import React, { ReactNode } from 'react'
import { getLoggedInUser } from '@/appwrite/auth'
import { redirect } from 'next/navigation';

export default async function AuthLayout({ children }: { children: ReactNode }) {
    const user = await getLoggedInUser();

    if (user) return redirect("/generate");
    
    return (
        <>
            {children}
        </>
    )
}