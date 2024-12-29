"use client"

import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function useAddPost() {
    const router = useRouter();
    const mutation = useMutation({
        mutationFn: async (formdata: any) => {
            const res = await fetch("/api/post/add-post", {
                method: "POST",
                body: formdata,
            })
            console.log(res);
            return res;
        },
        onSuccess: () => {
            toast.success("Login successful");
            
        },
        onError: (err: any) => {
            toast.error(err.response.data.message || "Login failed");
        }
    });
    return mutation;
}
