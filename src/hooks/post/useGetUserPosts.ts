// import

import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export const useGetUserPosts = () => {
    const posts = useQuery({
        queryKey: ['userPosts'],
        queryFn: async () => {
            const res = await axios.get('/api/userPost/get-posts');
            
            return res.data;
        },
    })
    return posts;
}