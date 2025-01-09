// import
"use client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetPoem = () => {
    const posts = useQuery({
        queryKey: ['poets'],
        queryFn:async () =>
        {
            const res = await axios.get("/api/post/get-poem");
            return res.data.poem;
        }
    })
    return posts;
}