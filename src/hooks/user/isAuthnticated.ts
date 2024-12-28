// import React from 'react'
import { cookies } from 'next/headers'

export default async function isAuthnticated() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')
    return token;
}
