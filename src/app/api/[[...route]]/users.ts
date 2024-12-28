import { Hono } from "hono";

export const users = new Hono().get("/", async (c) => {
    return c.json({ message:"Avik" })
})