

import { db } from "@/lib/db";


export const findByEmail = async (email: string) => {
    const user = await db.user.findFirst({
        where: {
            email
        }
    });
    return user;
};


export const findById = async (id: string) => {
    const user = db.user.findFirst({
        where: {
            id
        }
    });
    return user;
};
