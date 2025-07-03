import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { SiteLogo } from "@/assets/svg/siteLogo"
import styles from "./style.module.css"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components"

export const HomeHeader = () => {
    const navigate = useNavigate();
    return (
        <NavigationMenu className="px-20 py-4 w-full flex justify-between items-center sticky top-0 z-10 bg-[var(--bg)] dark:bg-[var(--onyx)]">
            <div className="flex items-center">
                <SiteLogo />
            </div>
            <NavigationMenuList className={styles.header__list}>
                <NavigationMenuItem
                    className={styles.header__item}
                    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Bosh sahifa
                </NavigationMenuItem>
                <NavigationMenuItem
                    onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                    className={styles.header__item}
                >
                    <Link to={'#courses'}>
                    Kurslar
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className={styles.header__item}
                >
                    Imkoniyatlar
                </NavigationMenuItem>
                <NavigationMenuItem
                    className={styles.header__item}
                    onClick={()=>document.getElementById('home')?.scrollIntoView({behavior:'smooth'})}
                >
                    Biz bilan bo'glanish
                </NavigationMenuItem>
            </NavigationMenuList>
            <div className="flex gap-2.5">
                <Button
                    variant={'default'}
                    size={'lg'}
                    className="cursor-pointer"
                    onClick={() => { navigate("/login") }}
                >
                    <span className="text-[var(--blue)]"> Kirish </span>
                </Button>
                <Button
                    variant={'primary'}
                    size={'lg'}
                >
                    <span>
                        Ro'yxatdan o'tish
                    </span>
                </Button>
            </div>
        </NavigationMenu>
    )
}