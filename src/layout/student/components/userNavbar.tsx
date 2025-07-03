import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    Notification,
    Separator,
    SidebarTrigger
} from "@/components"

export const HomeNavbar = () => {
    return (
        <div className="w-full bg-[var(--onyx)] rounded-[var(--fs3)]">
            <NavigationMenu className="flex justify-between py-4 px-5">
                <SidebarTrigger/>
                <NavigationMenuList className="">
                    <NavigationMenuItem>
                        <Notification />
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/user/profile">
                            <Avatar >
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>PR</AvatarFallback>
                            </Avatar>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Separator orientation="horizontal" className="" />
        </div>
    )
}