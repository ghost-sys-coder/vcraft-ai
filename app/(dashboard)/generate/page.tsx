import { signOut } from '@/appwrite/auth'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
    return (
        <div>
            <form action={signOut}>
                <Button type='submit'>SignOut</Button>
            </form>
        </div>
    )
}

export default page