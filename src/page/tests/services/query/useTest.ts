import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useTest = () => {
    const token = JSON.parse(localStorage.getItem("token") || "{}").token?.accessToken || '';
    return useQuery({
        queryKey: ["Tests"],
        queryFn: () =>
            request
                .get("/tests", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((res) => res.data)
    })
}