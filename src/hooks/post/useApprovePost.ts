"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export default function useApprovePost() {

    const client = useQueryClient();
    const mutation = useMutation({
        mutationFn: async (formdata: {
            id: string
        }) => {
            const { id } = formdata;
            const res = await axios.get(`/api/userPost/approve-post/${id}`);
            return res;
        },
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['userPosts'] });
            toast.success("Post approved successfully");
        },
        onError: (err: any) => {
            toast.error(err.response.data.message || "Login failed");
        }
    });
    return mutation;
}
