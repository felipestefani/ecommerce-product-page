import { useContext } from "react";
import style from "./style.module.css";
import { MainContext } from "../../contexts/MainContext";

const CartModal = (props) => {

    const {isOpen, onClose, onMouseEnter } = props
    const { quantityInCart } = useContext(MainContext)

    const handleOverlayClick = e => {
        console.log(e.target);
        console.log(e.currentTarget);
        if (e.target === e.currentTarget) {
            onClose()
        }
    }
    
    if(!isOpen) return null

    return (
        <div className={style.modal_cart_container} onMouseEnter={onMouseEnter} onMouseLeave={onClose}>
            <div className={style.modal_overlay}>
                <p className={style.cart_title}>Cart</p>
                <hr />
                { quantityInCart == 0 
                    ? (
                        <p className={style.empty_cart}>Your cart is empty</p>
                    ) : (
                        <span>Ola</span>
                    )
                }
            </div>
        </div>
    )
}

export default CartModal