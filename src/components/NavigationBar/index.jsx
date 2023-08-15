import style from "./style.module.css";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import NavigationLinks from "../NavigationLinks";
import MenuHamburguer from "../MenuHamburguer";
import { useContext, useState } from "react";
import { MainContext } from "../../contexts/MainContext";
import CartModal from "../CartModal";

const NavigationBar = () => {

    const { quantityInCart } = useContext(MainContext)

    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <div className={style.navigation_bar_container}>
            <div className={style.nav_items}>
                <MenuHamburguer />
                <img className={style.logo} src={logo} alt="Logo" />
                <NavigationLinks />
            </div>
            <div className={style.user_items}>
                <div className={style.total_cart}>
                    <img className={style.cart} src={cart} alt="cart" onClick={openModal} onMouseEnter={openModal} onMouseOut={closeModal}/>
                    <span className={style.cart_quantity} hidden={quantityInCart == 0 ? true : false}>{quantityInCart}</span>
                    <CartModal isOpen={isModalOpen} closeModal={closeModal} onMouseEnter={openModal}/>
                </div>
                <img className={style.avatar} src={avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default NavigationBar