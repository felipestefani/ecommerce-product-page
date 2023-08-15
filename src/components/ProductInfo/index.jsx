import style from "./style.module.css";
import minus from "../../assets/images/icon-minus.svg";
import plus from "../../assets/images/icon-plus.svg";
import cart from "../../assets/images/icon-cart.svg";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";

const ProductInfo = () => {

    const { quantity, setQuantity, quantityInCart, setQuantityInCart } = useContext(MainContext)
    const increase = () => setQuantity(count => count + 1)
    const decrease = () => { quantity > 0 ? setQuantity( count => count -1) : '' }
    const addToCart = () => {
        setQuantityInCart(count => count + quantity)
        setQuantity(0)
    }

    return (
        <div className={style.product_info_container}> 
            <h2 className={style.company_name}>Sneaker Company</h2>     
            <h1 className={style.product_title}>Fall Limited Edition Sneakers</h1>
            <p className={style.product_text_info}>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className={style.price}>
                <p className={style.after_discount}>$125.00 <span className={style.discount}>50%</span></p>
                <p className={style.before_discount}>$250.00</p>
            </div>
            <div className={style.action_section}>
                <div className={style.quantity}>
                    <img className={style.minus} src={minus} alt="minus icon"  onClick={decrease}/>
                    <span className={style.quantity_value}>{quantity}</span>
                    <img className={style.plus} src={plus} alt="plus icon" onClick={increase}/>
                </div>
                <button className={style.add_to_cart} onClick={addToCart}><img className={style.cart_icon} src={cart} alt="cart icon"/>Add to cart</button>
            </div>

        </div>
    )
}

export default ProductInfo