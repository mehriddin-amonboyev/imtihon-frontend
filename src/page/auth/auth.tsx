import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useLogin } from "./services/mutation/loginUser";
import { registerUser } from "../../store/redux/authSlice";
import { registerSchema } from "../../schemas/register.schema";
import { AppDispatch, RootState } from "../../store/store";

const Auth = () => {
    // const loginMutation = useLogin();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { error } = useSelector((state: RootState) => state.auth);

    const { handleSubmit, register, formState: { errors }, } = useForm({ resolver: zodResolver(registerSchema) });

    // Register function
    const submit = (data: any) => {
        dispatch(registerUser(data))
            .unwrap()
            .then((res) => {
                console.log(res);
                navigate("/app/subjects");
            })
            .catch((error) => {
                // Handle registration error
                console.error("Registration failed. ", error);
            });
    }

    // Login function
    // const handleLogin = async (values: { username: string, password: string }) => {
    //     loginMutation.mutate(values, {
    //         onSuccess: (data) => {
    //             dispatch(setUser({ token: data.data }));
    //             localStorage.setItem("token", data.data);
    //             navigate("/app/home");
    //         },
    //         onError: (error) => {
    //             console.error("Login failed:", error);

    //         }

    //     });
    // }

    return (
        <div className="flex flex-col h-full items-center bg-[#f5f8f8]">
            <h1 className="pt-10 text-3xl font-medium leading-[130%] text-black pb-[14px]">
                Ro'yxatdan o'tish
            </h1>
            <div className="pt-[3px] pl-[42px] pr-[37px] pb-[40px] rounded-[10px] bg-[#fff] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <form onSubmit={handleSubmit(submit)} action="" method="POST"  >
                    <div className="flex gap-[154px]">
                        <div className="flex flex-col items-center gap-[5px]">
                            <label
                                htmlFor="firstName"
                                className="font-secondary font-medium text-xl leading-[130%] text-black">
                                Ism
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                {...register("firstName")}
                                className="py-1.5 px-4 font-secondary font-medium text-xl leading-[130%] bg-[rgb(217,217,217,0.2)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[3px]"
                            />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                            <label
                                htmlFor="birthDate"
                                className="pt-5 font-secondary font-medium text-xl leading-[130%] text-black">
                                Tug'ilgan sana
                            </label>
                            <input
                                type="date"
                                {...register("birthDate")}
                                id="birthDate"
                                className="w-full py-1.5 px-4 font-secondary font-medium text-xl leading-[130%] bg-[rgb(217,217,217,0.2)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[3px]"
                            />
                            {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate.message}</p>}

                            <label
                                htmlFor="userName"
                                className="pt-5 font-secondary font-medium text-xl leading-[130%] text-black">
                                Username
                            </label>
                            <div className="relative ">
                                <span className="font-secondary font-medium absolute left-3 top-1/2 -translate-y-1/2 text-black select-none">
                                    @ |
                                </span>
                                <input
                                    type="text"
                                    {...register("userName")}
                                    id="userName"
                                    className="pl-15 py-1.5 font-secondary font-medium text-xl leading-[130%] bg-[rgb(217,217,217,0.2)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[3px]"
                                />
                                {errors.userName && <p className="text-red-500 text-sm">{errors.userName.message}</p>}
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-[5px]">
                            <label
                                htmlFor="lastName"
                                className="font-secondary font-medium text-xl leading-[130%] text-black">
                                Familiya
                            </label>
                            <input
                                type="text"
                                {...register("lastName")}
                                id="lastName"
                                className="w-full py-1.5 px-4 font-secondary font-medium text-xl leading-[130%] bg-[rgb(217,217,217,0.2)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[3px]"
                            />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}

                            <label
                                htmlFor="phoneNumber"
                                className="pt-5 font-secondary font-medium text-xl leading-[130%] text-black">
                                Telefon raqam
                            </label>
                            <div className="relative">
                                <span className="font-secondary font-medium absolute left-3 top-1/2 -translate-y-1/2 text-black select-none">
                                    +998 |
                                </span>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    {...register("phoneNumber")}
                                    className="pl-15 py-1.5 font-secondary font-medium text-xl leading-[130%] bg-[rgb(217,217,217,0.2)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[3px]"
                                />
                            </div>
                            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}

                            <label
                                htmlFor="password"
                                className="pt-5 font-secondary font-medium text-xl leading-[130%] text-black">
                                Parol
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...register("password")}
                                className="w-full py-1.5 px-4 font-secondary font-medium text-xl leading-[130%] bg-[rgb(217,217,217,0.2)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[3px]"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                        </div>
                    </div>
                    {/* <div className="flex flex-col items-center pt-1">
                        <label htmlFor=""
                            className="font-secondary font-medium text-xl leading-[130%] text-black">O'qish yoki ish joyingiz</label>
                        <input type="text"
                            className="w-full h-20 bg-[rgb(217,217,217,0.2)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[3px]"
                        />
                    </div> */}
                    <div className="flex pt-10">
                        <button
                            type="submit"
                            className="mx-auto py-1 px-9 rounded-[10px] bg-[#00ced5] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                        >
                            <span className="font-secondary font-medium leading-[130%] text-xl text-black">
                                Ro'yxatdan o'tish
                            </span>
                        </button>
                    </div>
                </form>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="flex pt-3">
                <span className="font-secondary font-medium leading-[130%] text-xl text-black">
                    Ro'yxatdan o'tdingizmi?
                </span>
                <button
                    onClick={() => navigate("/app/login")}
                    className="ml-2 font-secondary font-medium leading-[130%] text-xl text-[#00ced5]"
                >
                    Kirish
                </button>
            </div>
        </div>
    )
}

export default Auth;