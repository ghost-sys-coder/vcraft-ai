"use client";

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form } from '../ui/form'
import { z } from 'zod'
import { generatePageFormSchema } from '@/lib/formValidation'
import FormInputComponent from './FormInputComponent'
import TextareaComponent from './TextareaComponent';
import SelectComponent from './SelectComponent'
import { brandToneOptions, industryOptions } from '@/constants';
import ColorPickerComponent from './ColorPickerComponent';
import { Button } from '../ui/button';


const GeneratePageForm = () => {
    const form = useForm<z.infer<typeof generatePageFormSchema>>({
        resolver: zodResolver(generatePageFormSchema),
        defaultValues: {
            pageName: "",
            brandName: "",
            brandDescription: "",
            targetAudience: "",
            brandTone: "Friendly",
            industry: "technology",
            brandTagline: "",
            brandColor: "",
            brandLogo: "",
            productName: "",
            problemSolved: "",
            keyFeatures: "",
            imageUrls: [],
            videoUrl: "",
            contactEmail: "",
            mobileContact: "",
            websiteUrl: "",
            address: "",
            socialLinks: {
                facebook: "",
                twitter: "",
                instagram: "",
                linkedIn: "",
                tiktok: ""
            },
            pageTitle: "",
            metaDescription: "",
            metaKeywords: "",
            metaRobots: "index"
        }
    });

    const onSubmit = async (data: z.infer<typeof generatePageFormSchema>) => {
        console.log({ data });
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormInputComponent
                    name='pageName'
                    placeholder='Enter your page name'
                    label='Page Name'
                />
                <FormInputComponent
                    name='brandName'
                    placeholder='Enter your brand name'
                    label='Brand Name'
                />
                <FormInputComponent
                    name='brandTagline'
                    placeholder='Provide your brand tagline'
                    label='Brand Tagline'
                />
                <TextareaComponent
                    name='brandDescription'
                    placeholder='Enter your brand description'
                    label='Brand Description'
                />
                <TextareaComponent
                    name='targetAudience'
                    placeholder='Provide a description of your target audience'
                    label='Target Audience'
                />

                <div className="flex gap-4 items-center max-lg:flex-wrap">
                    <SelectComponent
                        name="industry"
                        placeholder='Select your industry'
                        label='Industry'
                        description='Select the industry that best describes your business'
                        options={industryOptions}
                    />
                    <SelectComponent
                        name='brandTone'
                        placeholder='Select your brand tone'
                        label='brandTone'
                        description='Describe your brand tone'
                        options={brandToneOptions}
                    />
                </div>

                <ColorPickerComponent
                    name='brandColor'
                    label='Choose your brand color'
                />
                <div className="flex justify-center items-center">
                <Button type='submit' className='min-w-[300px]'>
                    Generate
                </Button>
                </div>
            </form>
        </Form>
    )
}

export default GeneratePageForm