"use client"

import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function useLogin() {
    const router = useRouter();
    const mutation = useMutation({
        mutationFn: async (data: any) => {
            const res = await axios.post("/api/user/sign-in", { email: data.email, password: data.password })
            return res;
        },
        onSuccess: () => {
            toast.success("Login successful");
            router.push("/dashboard");
        },
        onError: (err: any) => {
            toast.error(err.response.data.message || "Login failed");
        }
    });
    return mutation;
}
