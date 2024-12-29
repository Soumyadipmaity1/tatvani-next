"use client"

import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function useLogOut() {
    const router = useRouter();
    const mutation = useMutation({
        mutationFn: async () => {
            const res = await axios.get("/api/user/logout");
            return res;
        },
        onSuccess: () => {
            toast.success("Logout successful");
            router.push("/login");
        },
        onError: (err: any) => {
            toast.error(err.response.data.message || "Login failed");
        }
    });
    return mutation;
}
