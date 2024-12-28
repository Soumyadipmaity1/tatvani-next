import { Hono } from "hono";
import { zValidator } from '@hono/zod-validator'
import { signInUp } from "@/schema/user.schema";
import { findByEmail } from "@/services/user.services";
import { HTTPException } from 'hono/http-exception';
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { deleteCookie, setCookie } from "hono/cookie";
import { createToken } from "@/utils/jwtToken";
export const users = new Hono()
    .post("/add-user", zValidator("json", signInUp), async (c) => {
        const { fullName, email, password } = c.req.valid("json");

        //is email already in use?
        const user = await findByEmail(email);
        if (user) {
            throw new HTTPException(409, { message: 'Email already exits' })
        } else {
            const hashPassword = await bcrypt.hash(password, 10);
            //create user
            const newUser = await db.user.create({
                data: {
                    fullName,
                    email,
                    password: hashPassword
                }
            });
            return c.json({ message: "User created successfully" }, 201);
        }
    }).post("/sign-in", zValidator("json", signInUp.pick({
        email: true,
        password: true
    })), async (c) => {
        try {
            const { email, password } = c.req.valid("json");
            // console.log(email, password )
            const findUser = await findByEmail(email);
            // console.log(findUser)
            if (findUser===null) {
                return c.json({ message: 'User not found' }, 404);
            } else {
                const isMatch = await bcrypt.compare(password, findUser.password);
                const token = createToken(findUser.id);
                if (isMatch) {
                    setCookie(c, "token", token, {
                        path: "/",
                        secure: true,
                        httpOnly: true,
                        maxAge: 86400, // 1 day in seconds
                        expires: new Date(Date.now() + 86400 * 1000),
                    });
                    return c.json({ message: 'User signed in' }, 200);
                } else {
                    return c.json({ message: 'Wrong Password' }, 404);
                }
            }
        } catch (error) {
            return c.json({ message: 'An error occurred' }, 500);
        }
    })
    .get("/logout", async (c) => {
        try {
            deleteCookie(c, "token");
            return c.json({ message: 'User signed out' }, 200);
        } catch (error) {
            return c.json({ message: 'An error occurred' }, 500);
        }
    })