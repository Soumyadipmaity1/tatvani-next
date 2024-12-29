import { db } from "@/lib/db";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

export const userPost = new Hono()
    .post('/add-post', async (c) => {
        try {

            const { firstName, lastName, college, email, mobileNo, category, title, content } = await c.req.json();

            console.log("firstName"+firstName, "lastName"+lastName, "college"+college, "email"+email, "mobileNo"+mobileNo, "category"+category, "title"+title, "content"+content)




            await db.userPost.create({
                data: {
                    firstName,
                    lastName,
                    college,
                    email,
                    mobileNo,
                    category,
                    title,
                    content
                }
            })
            return c.json({ message: "Post added successfully" }, 201);

        } catch (error:any) {
            console.log(error)
            throw new HTTPException(500, { message: "Internal Server Error" });
        }
    })