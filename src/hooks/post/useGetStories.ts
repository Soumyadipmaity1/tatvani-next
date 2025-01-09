// import
"use client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetStories = () => {
    const posts = useQuery({
        queryKey: ['posts'],
        queryFn:async () =>
        {
            const res = await axios.get("/api/post/get-stories");
            return res.data.poem;
        }
    })
    return posts;
}