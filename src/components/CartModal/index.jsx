import { useContext } from "react";
import style from "./style.module.css";
import thumb_1 from '../../assets/images/image-product-1-thumbnail.jpg'
import trash from "../../assets/images/icon-delete.svg";
import { MainContext } from "../../contexts/MainContext";

const CartModal = (props) => {

    const { isOpen, closeModal, onMouseEnter } = props
    const { quantityInCart, setQuantityInCart } = useContext(MainContext)

    const handleOverlayClick = e => {
        console.log(e.target);
        console.log(e.currentTarget);
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }

    const emptyCart = () => setQuantityInCart(0)

    const checkout = () => {
        setQuantityInCart(0)
        closeModal()
    }
    
    if(!isOpen) return null

    return (
        <div className={style.modal_cart_container} onMouseEnter={onMouseEnter} onMouseLeave={closeModal} onClick={handleOverlayClick}>
            <div className={style.modal_overlay}>
                <p className={style.cart_title}>Cart</p>
                <hr className={style.cart_line} />
                { quantityInCart == 0 
                    ? (
                        <p className={style.empty_cart}>Your cart is empty.</p>
                    ) : (
                        <div className={style.cart_filled}>
                            <ul>
                                <li className={style.cart_product_list}>
                                    <img className={style.cart_product_image} src={thumb_1} alt="product image" />
                                    <div>
                                        <p className={style.cart_product_title}>Fall Limited Edition Sneakers</p>
                                        <div className={style.cart_prices}>
                                            <span className={style.after_price}>$125.00 x </span>
                                            <span className={style.quantity_item}>{quantityInCart}</span>
                                            <span className={style.total_price}>${quantityInCart*125}.00</span>
                                        </div>
                                    </div>
                                    <img className={style.trash} src={trash} alt="trash icon" onClick={emptyCart}/>
                                </li>
                            </ul>
                            <button className={style.checkout} onClick={checkout}>Checkout</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CartModal