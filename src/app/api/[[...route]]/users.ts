import { Hono } from "hono";
import { zValidator } from '@hono/zod-validator'
import { signInUp } from "@/schema/user.schema";
import { findByEmail } from "@/services/user.services";
import { HTTPException } from 'hono/http-exception'
export const users = new Hono()
    .post("/add-user", zValidator("json", signInUp), async (c) => {
        const { fullName, email, password } = c.req.valid("json");

        //is email already in use?
        const user = await findByEmail(email);
        if (user) {
            throw new HTTPException(409, { message: 'Email already exits' })
        }else{

        }
    })