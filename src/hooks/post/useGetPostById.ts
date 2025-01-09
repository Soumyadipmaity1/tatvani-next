// import
"use client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetPostById = (id: string | null) => {
    const posts = useQuery({
        enabled: !!id,
        queryKey: ['posts', id],
        queryFn: async () => {
            const res = await axios.get(`/api/post/get-post/${id}`);
            return res.data.post;
        }
    })
    return posts;
}