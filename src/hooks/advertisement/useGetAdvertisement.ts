"use client"

import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function useGetAdvertisemen() {
    const client = useQuery({
        queryKey: ["advertisement"],
        queryFn: async () => {
            const res = await axios.get("/api/advertise/get-advertisement");
            console.log(res)
            return res.data.advertisements;
        }
    })
    return client;
}
