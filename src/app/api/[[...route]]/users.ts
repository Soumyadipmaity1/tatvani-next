import { Hono } from "hono";

export const users = new Hono()
    .post("/", async (c) => {
        const { fullName, email, password } = await c.req.json();
    })