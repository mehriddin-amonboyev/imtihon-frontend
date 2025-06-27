import styles from "./style.module.css"
import { Button } from "@/components/ui/button"
import { SiteLogo } from "@/assets/svg/siteLogo"
import { useNavigate } from "react-router-dom"

export const HomeHeader = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full flex justify-between items-center sticky top-0 bg-[var(--bg)] shadow-md z-10 px-20 py-3">
            <div className="flex items-center">
                <SiteLogo />
            </div>
            <div className="flex justify-evenly items-center cursor-pointer gap-6">
                <ul className={styles.header__list}>
                    <li className={styles.header__item}> Bosh sahifa </li>
                    <li className={styles.header__item}> Yangiliklar </li>
                    <li className={styles.header__item}> Imkoniyatlar </li>
                    <li className={styles.header__item}> Biz bilan bo'glanish </li>
                </ul>
                <Button onClick={() => { navigate("/login") }} >
                    <span className={styles.header__button_span}> Kirish </span>
                </Button>
            </div>
        </div>
    )
}