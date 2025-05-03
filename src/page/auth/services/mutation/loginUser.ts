import { useMutation } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useLogin = () => {
    return useMutation({
        mutationFn: (values: {
            user: string | undefined,
            password: string | undefined
        }) =>
            request
                .post("/auth/login", values)
                .then((res) =>
                    // localStorage.setItem("token", res.data.token)
                    res.data,
                )
    });
};