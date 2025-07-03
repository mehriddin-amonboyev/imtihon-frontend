import { Outlet } from "react-router-dom"
import { SidebarProvider } from "@/components"
import { UserSidebar } from "./components/userSidebar"
import { HomeNavbar } from "./components/userNavbar"

export default function UserLayout() {
    return (
        <>
            <SidebarProvider className="flex px-20 pt-10">
                <UserSidebar />
                <main className="w-full bg-[var(--eerie-black2)] mt-20 rounded-[var(--fs2)] sticky top-0 ">
                    <div className="sticky top-0 z-20">
                        <HomeNavbar />
                    </div>
                    <div className="">
                        <Outlet />
                    </div>
                </main>
            </SidebarProvider>
        </>
    )
}