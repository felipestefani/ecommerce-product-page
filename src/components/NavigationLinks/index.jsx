import style from "./style.module.css";

const NavigationLinks = () => {
    return (
        <div className={style.nav_items_visible}>
            <ul className={style.nav_items_list}>
                <li className={style.nav_item}>Collections</li>
                <li className={style.nav_item}>Men</li>
                <li className={style.nav_item}>Women</li>
                <li className={style.nav_item}>About</li>
                <li className={style.nav_item}>Contact</li>
            </ul>
        </div>
    )
}

export default NavigationLinks