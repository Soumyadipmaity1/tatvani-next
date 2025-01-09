// import
"use client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetAirtcle = () => {
    const posts = useQuery({
        queryKey: ['article'],
        queryFn:async () =>
        {
            const res = await axios.get("/api/post/get-airtcle");
            return res.data.Article;
        }
    })
    return posts;
}