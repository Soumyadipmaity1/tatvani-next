import { addPostSchema } from "@/schema/post.schema";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from 'hono/http-exception';


export const users = new Hono()
    .post('/add-post', zValidator("json", addPostSchema), async (c) => {
        try {
            const { title, author, content, category, image_url } = c.req.valid("json");
            
        } catch (error) {
            throw new HTTPException(500, { message: 'An error occurred' })
        }
    })