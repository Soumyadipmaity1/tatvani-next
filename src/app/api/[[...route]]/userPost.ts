import { db } from "@/lib/db";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

export const userPost = new Hono()
    .post('/add-post', async (c) => {
        try {

            const { firstName, lastName, college, email, mobileNo, category, title, content } = await c.req.json();

            // console.log("firstName"+firstName, "lastName"+lastName, "college"+college, "email"+email, "mobileNo"+mobileNo, "category"+category, "title"+title, "content"+content)




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

        } catch (error: any) {
            console.log(error)
            throw new HTTPException(500, { message: "Internal Server Error" });
        }
    }).get('/get-posts', async (c) => {
        try {
            const posts = await db.userPost.findMany();
            console.log("===============>",posts)
            return c.json(posts, 200);
        } catch (error) {
            throw new HTTPException(500, { message: "Internal Server Error" });
        }
    }).get('/get-post/:id', async (c) => {
        try {
            const id = c.req.param("id");
            const post = await db.userPost.findUnique({
                where: {
                    id: id
                }
            });
            return c.json(post, 200);
        } catch (error) {
            throw new HTTPException(500, { message: "Internal Server Error" });
        }
    }).get("/approve-post/:id", async (c) => {
        try {
            const id = c.req.param("id");
            await db.userPost.update({
                where: {
                    id: id
                },
                data: {
                    approved: true
                }
            });
            return c.json({ message: "Post approved" }, 200);
        } catch (error) {
            throw new HTTPException(500, { message: "Internal Server Error" });
        }
    }).get("/delete-post/:id", async (c) => {
        try {
            const id = c.req.param("id");
            await db.userPost.delete({
                where: {
                    id: id
                }
            });
            return c.json({ message: "Post deleted" }, 200);
        } catch (error) {
            throw new HTTPException(500, { message: "Internal Server Error" });
        }
    });