import { HomeNavbar } from "./components/homeNavbar"
import { HomeSidebar } from "./components/homeSidebar"
import { Outlet } from "react-router-dom"

export const StudentLayout = () => {
    return (
        <div className="flex h-screen">
            <HomeSidebar />
            <div className="w-px h-full bg-[#c2c2c2]" />
            <div className="w-full">
                <HomeNavbar />
                <div className="flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}