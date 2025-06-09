import styles from "./style.module.css"
import { Button } from "@/components/ui/button"
import { SiteLogo } from "@/assets/svg/siteLogo"

export const HomeHeader = () => {
    return (
        <div className="flex justify-between items-center bg-amber-200">
            <div className="flex items-center">
                <SiteLogo />
            </div>
            <div>
                <ul className={styles.header__list}>
                    <li className={styles.header__item}> Home </li>
                    <li className={styles.header__item}> FAQ </li>
                    <li className={styles.header__item}> Contactas </li>
                </ul>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <Button
                    type="button"
                    color="primary"
                    className={styles.header__button}
                    onClick={() => {
                        window.location.href = "/app/login"
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