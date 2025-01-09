import { db } from "@/lib/db";
import { addPostSchema } from "@/schema/post.schema";
import { uploadToCloudinary } from "@/utils/uploadCloudnary";
import { zValidator } from "@hono/zod-validator";
import { Category } from "@prisma/client";
import { Hono } from "hono";
import { HTTPException } from 'hono/http-exception';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import cloudinary from 'cloudinary';
import { deleteImage } from "@/utils/deleteImage";
// Set up storage for multer
const storage = multer.memoryStorage(); // or any other storage you want to use
const upload = multer({ storage: storage });

export const post = new Hono()
    .post('/add-post', async (c) => {
        try {
            const body = await c.req.parseBody();
            const { title,
                author,
                content,
                category } = body;
            const files = body.image;
            const postContent = content.toString();
            const authorName = author.toString();
            const postTitle = title.toString();
            const postCategory = category.toString() as Category;
            // check if files is an array and has length
            if (!files || (Array.isArray(files) && files.length === 0)) {
                return c.json({ message: "No files uploaded" }, 400);
            }

            // if files is not an array, convert it to an array
            const fileArray = Array.isArray(files) ? files : [files];

            const processedFiles = await Promise.all(
                fileArray.map(async (file) => {
                    if (!(file instanceof File)) {
                        return c.json(
                            {
                                message: "Invalid file type",
                                error: "Expected a file upload but received something else",
                                received: typeof file,
                            },
                            400
                        );
                    }

                    const buffer = await file.arrayBuffer();
                    const mimeType = file.type;
                    const encoding = "base64";
                    const base64Data = Buffer.from(buffer).toString("base64");
                    const randomId = uuidv4();
                    const fileUri = "data:" + randomId + mimeType + ";" + encoding + "," + base64Data;
                    // load into a buffer for later use
                    const res = await uploadToCloudinary(fileUri, file.name, "post-images");
                    if (res.success && res.result) {
                        const { secure_url, public_id } = res.result;
                        secure_url
                        const newPost = await db.post.create({
                            data: {
                                title: postTitle, category: postCategory, author: authorName, content: postContent, imageUrl: secure_url,
                                imgPublicId: public_id
                            }
                        });
                        console.log(newPost)
                        return c.json({ message: "Post created", post: newPost }, 201);
                    } else {
                        throw new HTTPException(401, { message: 'File upload failed' });
                    }
                })
            );

            return c.json({ message: "Image uploaded", files: processedFiles }, 200);
        } catch (error) {
            console.log(error)
            throw new HTTPException(500, { message: 'An error occurred' });
        }
    }).get('/get-posts', async (c) => {
        try {
            const posts = await db.post.findMany();
            return c.json({ posts }, 200);
        } catch (error) {
            throw new HTTPException(500, { message: 'An error occurred' });
        }
    }).get('/get-post/:id', async (c) => {
        try {
            const post = await db.post.findUnique({ where: { id: c.req.param("id") } });
            if (!post) {
                throw new HTTPException(404, { message: 'Post not found' });
            }
            return c.json({ post }, 200);
        } catch (error) {
            throw new HTTPException(500, { message: 'An error occurred' });
        }
    }).get('/delete-post/:id', async (c) => {
        try {
            const post = await db.post.findUnique({ where: { id: c.req.param("id") } });
            if (!post) {
                throw new HTTPException(404, { message: 'Post not found' });
            }
            const res = await deleteImage(post.imgPublicId);
            if (res.error) {
                throw new HTTPException(500, { message: 'An error occurred' });
            }
            await db.post.delete({ where: { id: c.req.param("id") } });
            return c.json({ message: 'Post deleted' }, 200);
        } catch (error) {
            throw new HTTPException(500, { message: 'An error occurred' });
        }
    }).post('/update-post/:id', async (c) => {
        try {
            const body = await c.req.parseBody();
            const { title, author, content, category } = body;
            const postContent = content.toString();
            const authorName = author.toString();
            const postTitle = title.toString();
            const postCategory = category.toString() as Category;
            const post = await db.post.update({
                where: { id: c.req.param("id") },
                data: { title: postTitle, category: postCategory, author: authorName, content: postContent }
            });
            return c.json({ message: 'Post updated', post }, 200);
        } catch (error) {
            throw new HTTPException(500, { message: 'An error occurred' });
        }
    }).get("/get-poem", async (c) => {
        try {
            const poem = await db.post.findMany({
                where: { category: "Poetry" },
                orderBy: { createdAt: "desc" },
                take: 4
            });
            return c.json({ poem }, 200);
        } catch (error) {
            throw new HTTPException(500, {
                message: "Internal server error occurred"
            });
        }
    }).get("/get-stories", async (c) => {
        try {
            const Stories = await db.post.findMany({
                where: { category: "Stories" },
                orderBy: { createdAt: "desc" },
                take: 4
            });
            return c.json({ Stories }, 200);
        } catch (error) {
            throw new HTTPException(500, {
                message: "Internal server error occurred"
            });
        }
    })
    .get("/get-airtcle", async (c) => {
        try {
            const Article = await db.post.findMany({
                where: { category: "Article" },
                orderBy: { createdAt: "desc" },
                take: 4
            });
            return c.json({ Article }, 200);
        } catch (error) {
            throw new HTTPException(500, {
                message: "Internal server error occurred"
            });
        }
    })