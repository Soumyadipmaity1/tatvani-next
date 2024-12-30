import { db } from "@/lib/db";
import { uploadToCloudinary } from "@/utils/uploadCloudnary";
import { Hono } from "hono";
import { HTTPException } from 'hono/http-exception';
import { v4 as uuidv4 } from 'uuid';

export const advertisement = new Hono()
    .post('/add-advertisement', async (c) => {
        try {
            const { shopName, address, googleMapLink, description, image } = await c.req.parseBody();
console.log(shopName, address, googleMapLink, description, image)
            const files = image;
            const showNameStr = shopName.toString();
            const addressStr = address.toString();
            const googleLinkStr = googleMapLink.toString();
            const descriptionStr = description.toString();

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
                    const fileUri = "data:" + randomId + mimeType + ";base64," + base64Data; // Corrected URI format

                    // load into a buffer for later use
                    const res = await uploadToCloudinary(fileUri, file.name, "advertisement-images");
                    if (res.success && res.result) {
                        const { secure_url, public_id } = res.result;
                        console.log(secure_url, public_id)
                        await db.advertisement.create({
                            data: {
                                shopName: showNameStr,
                                address: addressStr,
                                googleLink: googleLinkStr,
                                description: descriptionStr,
                                imageUrl: secure_url,
                                imgPublicId: public_id,
                            }
                        });
                        return c.json({ message: "Image uploaded successfully" }, 201);
                    } else {
                        return c.json({ message: "Image upload failed" }, 400);
                    }
                })
            ); // Closing the Promise.all

           
        } catch (error) {
            console.log(error)
            throw new HTTPException(500, { message: "Internal Server Error" });
        }
    });
