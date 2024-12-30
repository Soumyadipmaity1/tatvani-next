"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function useAdvertisemen() {
    const client = useQueryClient();
    const mutation = useMutation({
        mutationFn: async (formdata: any) => {


            // console.log(formdata.get("image"))
            const res = await fetch("/api/advertise/add-advertisement", {
                method: "POST",
                body: formdata,
            })

            return res;


        },
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['advertisement'] });
            toast.success("Advertisement added successfully");

        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message || "Advertisement added failed");
        }
    });
    return mutation;
}
