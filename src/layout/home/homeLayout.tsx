import { Outlet } from "react-router-dom"
import { HomeHeader } from "./homeHeader"

export const HomeLayout = () => {
    return (
        <div className="flex flex-col h-screen justify-between px-25 pt-[55px]">
            <HomeHeader />
            <div className="h-screen">
                <Outlet />
            </div>
        </div>
    )
}