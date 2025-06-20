import { sidebarRoutes } from "./routes";
import Logo from '@/assets/img/siteLogo.png';
export const HomeSidebar = () => {
    return (
        <>
            <div className="w-[27%] flex flex-col items-center sticky top-0 h-screen">
                <a href="/student">
                    <figure className="max-w-[212px] mt-[84px]">
                        <img src={Logo} alt="Site logotipi" />
                    </figure>
                </a>
                <div>
                    {sidebarRoutes.map((route, index) => {
                        const isActive = location.pathname === route.path;
                        return (
                            <a
                                key={index}
                                href={route.path}
                                className={
                                    "flex justify-baseline items-center p-2 rounded-lg " +
                                    (isActive
                                        ? "bg-gradient-to-r from-[#1e5adb] to-[#5aa6ed] text-red font-bold"
                                        : "hover:bg-gray-400")
                                }
                            >
                                <i className={route.icon + " mr-3"}>
                                    <route.logo />
                                </i>
                                <span className={
                                    "font-normal text-lg text-center " +
                                    (isActive
                                        ? ""
                                        : "text-black")
                                }>
                                    {route.label}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </>
    )
}