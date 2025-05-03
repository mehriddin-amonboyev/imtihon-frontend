import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useLogin } from "./services/mutation/loginUser";
import { setUser } from "../../store/redux/authSlice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginMutation = useLogin();

    const handleLogin = async (values: { user: string, password: string }) => {
        loginMutation.mutate(values, {
            onSuccess: (data) => {
                dispatch(setUser({ token: data.data }));
                localStorage.setItem("token", data.data);
                navigate("/app/home");
            },
            onError: (error) => {
                console.error("Login failed:", error);

            }

        });
    }
    return (
        <div className="flex flex-col h-screen justify-between">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold">Auth</h1>
            </div>
        </div>
    )
}

export default Login;