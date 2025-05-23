import GeneratePageForm from '@/components/shared/GeneratePageForm'
import React from 'react'


const page = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="max-w-[800px] m-auto w-full shadow-lg rounded-md p-4">
                <h1 className='pb-5 font-semibold md:text-2xl'>Provide the following details to generate your landing page!</h1>
                <div className="">
                    <GeneratePageForm />
                </div>
            </div>
        </div>
    )
}

export default page