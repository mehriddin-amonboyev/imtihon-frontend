import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useSubject = () => {
    const token = JSON.parse(localStorage.getItem("token") || "{}").token?.accessToken || '';

    return useQuery({
        queryKey: ["Subjects"],
        queryFn: () =>
            request
                .get("/subjects", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((res) => res.data)
    });
};