import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Register } from "./components/register";
import { Login } from "./components/login";
import { LoginForm } from "./components/login-form";

const Auth = () => {
    const { error } = useSelector((state: RootState) => state.auth);
    const [showLogin, setShowLogin] = useState(true);

    return (
        <>
         {/* <div className="flex flex-col items-center mt-[2.5rem] rounded-[2.5rem] bg-[var(--secondary-color)]">
             <h1 className="pt-10 text-3xl font-medium leading-[130%] text-black pb-[14px]">
                 {showLogin ? "Kirish" : "Ro'yxatdan o'tish"}
             </h1>
             <div className="pt-[3px] pl-[42px] pr-[37px] pb-[40px] rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                 {showLogin ? <Login /> : <Register />}

             </div>
             {error && <p className="text-red-500 text-sm">{error}</p>}
             <div className="flex pt-3">
                 <span className="font-secondary font-medium leading-[130%] text-xl text-black">
                     {showLogin ? "Ro'yxatdan o'tmaganmisiz?" : "Ro'yxatdan o'tdingizmi?"}
                 </span>
                 <button
                     onClick={() => setShowLogin(!showLogin)}
                     className="ml-2 font-secondary font-medium leading-[130%] text-xl text-[#00ced5] cursor-pointer"
                 >
                     {showLogin ? "Ro'yxatdan o'tish" : "Kirish"}
                 </button>
             </div>
         </div> */}
        <div className="bg-muted flex min-h-full flex-col items-center p-6 md:p-10">
            <div className="max-w-sm md:max-w-md">
                {showLogin? <LoginForm />: <Register />}
            </div>
        </div>
        </>
    )
}

export default Auth;