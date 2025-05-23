import { z } from "zod";


const phoneRegex = /^\+?[0-9]{7,15}$/; // Supports formats like +256751234567 or 0751234567

export const generatePageFormSchema = z.object({
    pageName: z.string().min(1, { message: "Page name is required" }),
    brandName: z.string().min(1, { message: "Brand name is required" }),
    brandDescription: z.string().refine(
        (val) => val.length >= 20,
        (val) => ({
            message: val.trim().length === 0 ?
                "Brand description is required"
                : "Brand Description must be at least  20 characters long",
        })
    ),
    targetAudience: z.string().min(1, { message: "Target audience is required" }),
    brandTone: z.enum(["Friendly", "Professional", "Casual", "Formal", "Bold"]),
    industry: z.enum(["technology", "finance", "healthcare", "education", "retail", "real-estate", "travel", "food-and-beverage", "automotive", "entertainment"]),
    brandTagline: z.string().min(1, { message: "Brand tagline is required" }),
    brandColor: z.string().min(1, { message: "Brand color is required" }),
    brandLogo: z.string().min(1, { message: "Brand logo is required" }),
    

    productName: z.string().min(1, { message: "Product name is required" }),
    problemSolved: z.string().min(1, { message: "Problem solved is required" }),
    keyFeatures: z.string().min(1, { message: "Key features are required" }),

    imageUrls: z.array(z.instanceof(File).refine(file =>
        file.size <= 5 * 1024 * 1024,
        { message: "Each image file must be 5MB or smaller" }
    ).refine(file =>
        ["image/jpeg", "image/png", "image/gif", "image/webp", "image/jpg"].includes(file.type),
        { message: "Only JPEG, PNG, GIF, WEBP and JPG files are allowed" }
    )
    ).optional(),
    videoUrl: z.string().url({ message: "Must be a valid url" }).optional(),
    

    contactEmail: z.string().email({ message: "Must be a valid email" }).optional(),
    mobileContact: z.string().regex(phoneRegex, { message: "Must be a valid phone number" }).optional(),
    websiteUrl: z.string().url({ message: "Must be a valid url" }).optional(),
    address: z.string().optional(),
    socialLinks: z.object({
        facebook: z.string().url({message: "Must be a valid url"}).optional(),
        twitter: z.string().url({message: "Must be a valid url"}).optional(),
        instagram: z.string().url({message: "Must be a valid url"}).optional(),
        linkedIn: z.string().url({message: "Must be a valid url"}).optional(),
        tiktok: z.string().url({message: "Must be a valid url"}).optional(),
    }).optional(),


    // SEO
    pageTitle: z.string().min(1, { message: "Page title is required" }),
    metaDescription: z.string().min(1, { message: "Meta description is required" }),
    metaKeywords: z.string().min(1, { message: "Meta keywords are required" }),
    metaRobots: z.enum(["index", "noindex"]),
})



