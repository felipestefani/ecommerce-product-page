import style from './style.module.css'
import close from "../../assets/images/icon-close.svg";


const SideBarMenu = props => {
   
    const { isOpen, closeSideBar } = props
    
    if (!isOpen) return null
    
    return (
        <div className={style.side_bar_overlay}>
            <div className={style.side_bar_container}>
                <img className={style.close} src={close} alt="close icon" onClick={closeSideBar}/>
                <ul className={style.side_items_list}>
                    <li className={style.side_item}><a href="https://www.linkedin.com/in/felipe-stefani-a35185116/" target="_blank">Collections</a></li>
                    <li className={style.side_item}><a href="https://www.instagram.com/felipestefani/" target="_blank">Men</a></li>
                    <li className={style.side_item}><a href="https://www.linkedin.com/in/felipe-stefani-a35185116/" target="_blank">Women</a></li>
                    <li className={style.side_item}><a href="https://www.instagram.com/felipestefani/" target="_blank">About</a></li>
                    <li className={style.side_item}><a href="https://www.linkedin.com/in/felipe-stefani-a35185116/" target="_blank">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBarMenu