import style from "./style.module.css";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import NavigationLinks from "../NavigationLinks";
import MenuHamburguer from "../MenuHamburguer";

const NavigationBar = () => {
    return (
        <div className={style.navigation_bar_container}>
            <div className={style.nav_items}>
                <MenuHamburguer />
                <img className={style.logo} src={logo} alt="Logo" />
                <NavigationLinks />
            </div>
            <div className={style.user_items}>
                <img className={style.cart} src={cart} alt="cart" />
                <img className={style.avatar} src={avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default NavigationBar