"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function useAddUserPostDelete() {
    const client = useQueryClient();
    const mutation = useMutation({
        mutationFn: async (formdata: {
            id: string
        }) => {
            const { id } = formdata;
            const res = await axios.get(`/api/userPost/delete-post/${id}`);
            return res;
        },
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['userPosts'] });
            toast.success("Post Deleted successfully");

        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message || "Login failed");
        }
    });
    return mutation;
}
