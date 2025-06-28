import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SiteLogo } from "@/assets/svg/siteLogo"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useLogin } from "../services/mutation/loginUser"
import { AppDispatch } from "@/store/store"
import { setToken, setUser } from "@/store/redux/authSlice"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { STUDENT_ROUTES } from "@/utils/path"

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


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const loginMutation = useLogin();

  const { register, handleSubmit, formState: { errors }, } = useForm<LoginFormValues>();

  const handleLogin = (values: LoginFormValues) => {
    loginMutation.mutate(values, {
      onSuccess: (data: LoginResponse) => {
        dispatch(setToken({
          accessToken: data?.accessToken,
          refreshToken: data?.refreshToken
        }))
        dispatch(setUser({ id: data?.user.id, role: data?.user.role }));
        navigate(STUDENT_ROUTES.dashboard);
      },
      onError: (error) => {
        console.error("Login failed:", error);
      },
    });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-1">
          <form
            onSubmit={handleSubmit(handleLogin)}
            method="POST"
            className="p-6 md:p-8"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <SiteLogo />
              </div>
              <div className="grid gap-6">
                <Input
                  id="userName"
                  type='text'
                  placeholder="Username"
                  {...register("userName", { required: "Username kiriting" })}
                />
                {errors.userName && (
                  <p className="text-red-500 text-sm">{errors.userName.message}</p>
                )}
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : "password"}
                    placeholder="Password"
                    {...register("password", { required: "Parol kiriting" })}
                  />
                  <Button
                    type="button"
                    variant={"secondary"}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 bg-muted"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full">
                <span className="font-medium text-[1.3rem] text-[var(--secondary-color)]">
                  Login
                </span>
              </Button>
              <div className="flex text-sm justify-between">
                <a href="#" className="text-sm underline-offset-2 hover:underline">
                  Parolni unutdingizmi?
                </a>
                <a href="#" className="underline-offset-4 text-[var(--primary-blue)]">
                  Ro'yxatdan o'tish
                </a>
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Google orqali kirish
                </span>
              </div>
              <div className="grid grid-cols-1 ml-auto mr-auto">
                {/* <Button variant="outline" type="button" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Login with Apple</span>
                </Button> */}
                <Button variant="outline" type="button" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Login with Google</span>
                </Button>
              </div>
              <div className="px-10 font-medium text-[1rem] text-muted-foreground *:[a]:hover:text-primary text-center text-balance *:[a]:underline *:[a]:underline-offset-4">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
