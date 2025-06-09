import { Outlet } from "react-router-dom"
import { HomeHeader } from "./homeHeader"

export const HomeLayout = () => {
    return (
        <div className="flex flex-col h-screen justify-between px-25 pt-[55px] 
        ">
            {/* bg-gradient-to-br from-[rgba(0,123,255,0.33)] to-[#fff] */}
            <HomeHeader />
            <div className="h-screen">
                <Outlet />
            </div>
        </div>
    )
}