import styles from "./style.module.css"
import { Button } from "@/components/ui/button"
import { SiteLogo } from "@/assets/svg/siteLogo"
import { useState } from "react"

export const HomeHeader = () => {
    // const [login, setLogin] = useState(false)

    const handleSubmit = () => {

    }

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <SiteLogo />
            </div>
            <div className="flex items-center cursor-pointer gap-30">
                <ul className={styles.header__list}>
                    <li className={styles.header__item}> Bosh sahifa </li>
                    <li className={styles.header__item}> Yangiliklar </li>
                    <li className={styles.header__item}> Imkoniyatlar </li>
                    <li className={styles.header__item}> Biz bilan bo'glanish </li>
                </ul>
                <Button
                    onClick={() => {
                        window.location.href = "/login"
                    }}
                >
                    <span className={styles.header__button_span}>
                        Kirish
                    </span>
                </Button>
            </div>
        </div>
    )
}