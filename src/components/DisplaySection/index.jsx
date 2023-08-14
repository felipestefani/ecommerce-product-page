import style from "./style.module.css";
import product_1 from '../../assets/images/image-product-1.jpg'
import product_2 from '../../assets/images/image-product-2.jpg'
import product_3 from '../../assets/images/image-product-3.jpg'
import product_4 from '../../assets/images/image-product-4.jpg'
import thumb_1 from '../../assets/images/image-product-1-thumbnail.jpg'
import thumb_2 from '../../assets/images/image-product-2-thumbnail.jpg'
import thumb_3 from '../../assets/images/image-product-3-thumbnail.jpg'
import thumb_4 from '../../assets/images/image-product-4-thumbnail.jpg'
import next from "../../assets/images/icon-next.svg";
import previous from "../../assets/images/icon-previous.svg";
import { useState } from "react";

const DisplaySection = () => {

    const images = [product_1, product_2, product_3, product_4]
    const thumbnails = [thumb_1, thumb_2, thumb_3, thumb_4]
    const [mainImage, setMainImage] = useState(product_1)
    const [thumbImage, setThumbImage] = useState('')

    const changeToImage = (index,thumb) => {
        setMainImage(images[index])
        setThumbImage(thumb)
    }

    return (
        <div className={style.display_section_container}>
            <div className={style.main_image}>
                <div className={style.display_previous_button}>
                    <div className={style.previous_button}>
                        <img className={style.previous_icon} src={previous} alt="previous icon" />
                    </div>
                </div>
                <img className={style.product_image} src={mainImage} alt="main product image"/>    
                <div className={style.display_next_button}>
                    <div className={style.next_button}>
                        <img className={style.next_icon} src={next} alt="next icon" />
                    </div>
                </div>
            </div>
            <div className={`${style.thumbnails} ${style.display_thumbnails}`}>
                {
                    thumbnails.map( (thumb, index) => (        
                            <div key={thumb+index} className={style.thumb_container} >
                                <div className={thumbImage == thumb ? style.emphasis_thumb : ''} style={{ display:thumbImage == thumb ? 'block' : 'none'}}></div>
                                <img
                                    key={thumb} 
                                    className={`${style.thumbnail_image}`} 
                                    src={thumb} 
                                    alt="product thumbnail image" 
                                    onClick={() => changeToImage(index, thumb)}
                                />
                            </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DisplaySection