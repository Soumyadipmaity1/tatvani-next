import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

export const post = new Hono()
    .post('/add-post', async (c) => {
        try {

            const { firstName, lastName, college, email, mobileNo, type, title, content } = await c.req.parseBody();
            
        } catch (error) {
            throw new HTTPException(500, { message: "Internal Server Error" });
        }
    })