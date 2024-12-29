import { Category } from "@prisma/client";
import { z } from "zod";


export const addPostSchema = z.object({
    title: z.string().min(5, { message: "Title must be at least 5 characters." }).max(50, { message: "Title must be at most 50 characters." }),
    author: z.string().min(3, { message: "Author name must be at least 3 characters." }).max(15, { message: "Author name must be at most 15 characters." }),
    content: z.string().min(10, { message: "Content must be at least 10 characters." }),
    category: z.enum(['Article', 'Poetry', 'Stories'], { message: "Category must be one of 'article', 'poetry', or 'stories'." }),
    image_url: z.string(),
})  
