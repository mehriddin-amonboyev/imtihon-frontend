import { Outlet } from "react-router-dom"
import { SidebarProvider, Separator } from "@/components"
import { UserSidebar } from "./components/userSidebar"
import { HomeNavbar } from "./components/userNavbar"

export default function UserLayout() {
    return (
        <>
            <SidebarProvider className="flex pt-10">
                <UserSidebar />
                <main className="w-full">
                    <HomeNavbar />
                    <div className="px-10">
                        <Outlet/>
                    </div>
                </main>
            </SidebarProvider>
        </>
    )
}