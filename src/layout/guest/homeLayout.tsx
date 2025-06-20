import { Outlet } from "react-router-dom"
import { HomeHeader } from "./components/homeHeader"

export const HomeLayout = () => {
    return (
        <div className="flex flex-col justify-between">
            <HomeHeader />
            <div className="px-20">
                <Outlet />
            </div>
        </div>
    )
}