import { z } from "zod";

const signInUp = z.object({
    fullName: z.string().min(3).max(10),
    email: z.string().email(),
    password: z.string().min(6).max(15)
});


export { signInUp };