

import { db } from "@/lib/db";


export const findByEmail = async (email: string) => {
    return db.user.findFirst({
        where: {
            email
        }
    });
};


export const findById = async (id: string) => {
    return db.user.findFirst({
        where: {
            id
        }
    });
};
