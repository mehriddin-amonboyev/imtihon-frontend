import { Outlet } from "react-router-dom"
import { HomeHeader } from "./homeHeader"

export const HomeLayout = () => {
    return (
        <div className=" flex flex-col justify-between px-20 pt-[55px]">
            <HomeHeader />
            <div className="">
                <Outlet />
            </div>
        </div>
    )
}