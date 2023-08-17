import style from "./style.module.css";
import menu from "../../assets/images/icon-menu.svg";
import { useState } from "react";
import SideBarMenu from "../SideBarMenu";

const MenuHamburguer = () => {

    const [isSideOpen, setIsSideOpen] = useState(false)

    const openSideBar = () => setIsSideOpen(true)
    const closeSidebar = () => setIsSideOpen(false)

    return (
        <div className={style.menu_visible}>
            <div className={style.menu_hamburguer_container}>
            <img className={style.menu_hamburguer_img} src={menu} alt="menu hamburguer" onClick={openSideBar} /> 
            <SideBarMenu isOpen={isSideOpen} closeSidebar={closeSidebar}/>
            </div>
        </div>
    )
}

export default MenuHamburguer