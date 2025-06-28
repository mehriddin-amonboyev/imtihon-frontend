import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    Notification,
    Separator
} from "@/components"

export const HomeNavbar = () => {
    return (
        <div className="w-full sticky top-0 z-1 bg-white">
            <NavigationMenu className="block py-4">
                <NavigationMenuList className="ml-auto px-10">
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
            <Separator orientation="horizontal" className="bg-amber-950" />
        </div>
    )
}