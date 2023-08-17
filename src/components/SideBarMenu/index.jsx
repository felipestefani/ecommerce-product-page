import style from './style.module.css'
import close from "../../assets/images/icon-close.svg";


const SideBarMenu = props => {
   
    const { isOpen, closeSide } = props
    
    return (
        <div className={`${style.side_bar_overlay} ${isOpen ? style.side_bar_overlay_open: ''}`}>
            <div className={`${style.side_bar_container} ${style.side_bar_container_open}`}>
                <img className={style.close} src={close} alt="close icon" onClick={closeSide}/>
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