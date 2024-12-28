import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export default function useLogin() {
    const mutation = useMutation({
        mutationFn: async (data: any) => {
            axios.post("/api/user/sign-in", { email: data.email, password: data.password })
                .then((res) => {
                    return res.data;
                })
        },
        onSuccess: () => {
            toast.success("Login successful");
        },
        onError: () => {
            toast.error("Login failed");
        }
    });
    return mutation;
}
