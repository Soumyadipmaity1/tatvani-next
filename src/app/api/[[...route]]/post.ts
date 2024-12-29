import { db } from "@/lib/db";
import { addPostSchema } from "@/schema/post.schema";
import { uploadToCloudinary } from "@/utils/uploadCloudnary";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from 'hono/http-exception';
import multer from 'multer';

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
                    const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;
                    // load into a buffer for later use
                    const res = await uploadToCloudinary(fileUri, file.name, "post-images");
                    if (res.success && res.result) {
                        const { secure_url, public_id } = res.result;
                        console.log(secure_url, public_id);
                        // const newPost = db.post.create({
                        //     data: {
                        //         title, category, author, content, image: secure_url
                        //     }
                        // })
                    } else {

                    }
                })
            );

            return c.json({ message: "Image uploaded", files: processedFiles }, 200);
        } catch (error) {
            console.log(error)
            throw new HTTPException(500, { message: 'An error occurred' });
        }
    });
