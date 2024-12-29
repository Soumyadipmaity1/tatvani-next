"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function useUserPost() {
    const client = useQueryClient();
    const mutation = useMutation({
        mutationFn: async (formdata: {
            firstName: string,
            lastName: string,
            college: string,
            email: string,
            mobileNo: string,
            category: string,
            title: string,
            content: string
        }) => {
            const { firstName,
                lastName,
                college,
                email,
                mobileNo,
                category,
                title,
                content } = formdata;
            const res = await axios.post("/api/userPost/add-post", {
                firstName,
                lastName,
                college,
                email,
                mobileNo,
                category,
                title,
                content
            });
            return res;
        },
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['userPosts'] });
            toast.success("Post added successfully");

        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message || "Login failed");
        }
    });
    return mutation;
}
