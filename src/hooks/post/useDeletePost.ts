"use client"

import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function useDeletePost() {

    const mutation = useMutation({
        mutationFn: async (data: { id: string }) => {
            const { id } = data;
            const res = await axios.get(`/api/post/delete-post/${id}`);
            return res;
        },
        onSuccess: () => {

            toast.success("Post Deleted successfully");

        },
        onError: (err: any) => {
            toast.error(err.response.data.message || "Login failed");
        }
    });
    return mutation;
}
