import style from "./style.module.css";
import product_1 from '../../assets/images/image-product-1.jpg'
import product_2 from '../../assets/images/image-product-2.jpg'
import product_3 from '../../assets/images/image-product-3.jpg'
import product_4 from '../../assets/images/image-product-4.jpg'


const DisplaySection = () => {
    return (
        <div className="display_section_container">
            <img className={style.product_image} src={product_1} alt="product one"/>
            <img className={style.product_image} src={product_2} alt="product two"/>
            <img className={style.product_image} src={product_3} alt="product three"/>
            <img className={style.product_image} src={product_4} alt="product four"/>
        </div>
    )
}

export default DisplaySection