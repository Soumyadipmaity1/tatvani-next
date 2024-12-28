import jwt from "jsonwebtoken";

export function createToken(id: string) {
    return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: '1d' })
}