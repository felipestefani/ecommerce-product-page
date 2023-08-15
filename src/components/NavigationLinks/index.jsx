import style from "./style.module.css";

const NavigationLinks = () => {
    return (
        <div className={style.nav_items_visible}>
            <ul className={style.nav_items_list}>
                <li className={style.nav_item}><a href="https://www.linkedin.com/in/felipe-stefani-a35185116/" target="_blank">Collections</a></li>
                <li className={style.nav_item}><a href="https://www.instagram.com/felipestefani/" target="_blank">Men</a></li>
                <li className={style.nav_item}><a href="https://www.linkedin.com/in/felipe-stefani-a35185116/" target="_blank">Women</a></li>
                <li className={style.nav_item}><a href="https://www.instagram.com/felipestefani/" target="_blank">About</a></li>
                <li className={style.nav_item}><a href="https://www.linkedin.com/in/felipe-stefani-a35185116/" target="_blank">Contact</a></li>
            </ul>
        </div>
    )
}



export default NavigationLinks