import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./footer"

export const MainLayout = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}