// import

import { useQuery } from "@tanstack/react-query"

export const useGetPosts = () => {
    const posts = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            fetch('/api/post/get-posts').then((res) =>
                res.json(),
            ),
    })
    return posts;
}