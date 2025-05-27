import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AppDispatch } from "../../../store/store";
import { useLogin } from "../services/mutation/loginUser";
import { setToken, setUser } from "../../../store/redux/authSlice";

type LoginFormValues = {
    userName: string;
    password: string;
};

type LoginResponse = {
    accessToken: string;
    refreshToken: string;
    user: {
        id: string;
        role: string;
        userName: string;
    };
}

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const loginMutation = useLogin();

    const { register, handleSubmit, formState: { errors }, } = useForm<LoginFormValues>();

    const handleLogin = (values: LoginFormValues) => {
        loginMutation.mutate(values, {
            onSuccess: (data:LoginResponse) => {                
                dispatch(setToken({
                    accessToken: data?.accessToken,
                    refreshToken: data?.refreshToken
                }))
                dispatch(setUser({ userId: data?.user.id }));
                navigate("/app/subjects");
            },
            onError: (error) => {
                console.error("Login failed:", error);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit(handleLogin)} method="POST">
            <div className="flex gap-[154px]">
                {/* USERNAME */}
                <div className="flex flex-col items-center gap-[5px]">
                    <label
                        htmlFor="userName"
                        className="pt-5 font-secondary font-medium text-xl leading-[130%] text-black"
                    >
                        Username
                    </label>
                    <div className="relative">
                        <span className="font-secondary font-medium absolute left-3 top-1/2 -translate-y-1/2 text-black select-none">
                            @ |
                        </span>
                        <input
                            type="text"
                            id="userName"
                            {...register("userName", { required: "Username kiriting" })}
                            className="pl-15 py-1.5 font-secondary font-medium text-xl leading-[130%] bg-[rgb(217,217,217,0.2)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[3px]"
                        />
                        {errors.userName && (
                            <p className="text-red-500 text-sm">{errors.userName.message}</p>
                        )}
                    </div>
                </div>

                {/* PASSWORD */}
                <div className="flex flex-col items-center gap-[5px]">
                    <label
                        htmlFor="password"
                        className="pt-5 font-secondary font-medium text-xl leading-[130%] text-black"
                    >
                        Parol
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register("password", { required: "Parol kiriting" })}
                        className="w-full py-1.5 px-4 font-secondary font-medium text-xl leading-[130%] bg-[rgb(217,217,217,0.2)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[3px]"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                </div>
            </div>

            {/* SUBMIT */}
            <div className="flex pt-10">
                <button
                    type="submit"
                    className="mx-auto py-1 px-9 rounded-[10px] bg-[#00ced5] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] cursor-pointer"
                >
                    <span className="font-secondary font-medium leading-[130%] text-xl text-black">
                        Kirish
                    </span>
                </button>
            </div>
        </form>
    );
};
