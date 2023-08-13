import style from "./style.module.css";
import menu from "../../assets/images/icon-menu.svg";

const MenuHamburguer = () => {
    return (
        <div className={style.menu_visible}>
            <div className={style.menu_hamburguer_container}>
            <img src={menu} alt="menu hamburguer" /> 

            </div>
        </div>
    )
}

export default MenuHamburguer