// import
"use client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetPoem = () => {
    const posts = useQuery({
        queryKey: ['posts'],
        queryFn:async () =>
        {
            const res = await axios.post("/api/post/get-poem");
            return res.data.poem;
        }
    })
    return posts;
}