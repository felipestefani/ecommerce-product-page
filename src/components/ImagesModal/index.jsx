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
import close from "../../assets/images/icon-close.svg";
import { useState } from "react";

const ImageModal = props => {

    const { isOpen, onClose } = props

    const images = [product_1, product_2, product_3, product_4]
    const thumbnails = [thumb_1, thumb_2, thumb_3, thumb_4]
    const [thumbImage, setThumbImage] = useState('')
    const [mainImage, setMainImage] = useState(product_1)

    const changeImage = thumb => {
        setThumbImage(thumb)
        setMainImage(images[thumbnails.indexOf(thumb)])
    }

    const nextImage = () => {
        if(images.indexOf(mainImage) == images.length - 1) {
            setMainImage(images[0])
            setThumbImage(thumbnails[0])
        } else{
            setMainImage(images[images.indexOf(mainImage)+1])
            setThumbImage(thumbnails[images.indexOf(mainImage)+1])
        } 
    }

    const previousImage = () => {
        if(images.indexOf(mainImage) == 0) {
            setMainImage(images[3])
            setThumbImage(thumbnails[3])
        } else{
            setMainImage(images[images.indexOf(mainImage)-1])
            setThumbImage(thumbnails[images.indexOf(mainImage)-1])
        } 
    }

    if(!isOpen) return null

    return (   
        <div className={style.image_modal_overlay}>
            <div className={style.image_modal_container}>
                <img className={style.image_modal_close} src={close} alt="close icon" onClick={onClose}/>
                <div className={style.main_image_container}>
                    <div className={style.previous_image} onClick={previousImage}>
                        <img className={style.previous_icon} src={previous} alt="previous icon" />
                    </div>
                    <img className={style.main_image_img} src={mainImage} alt="" />
                    <div className={style.next_image} onClick={nextImage}>
                        <img className={style.next_icon} src={next} alt="previous icon" />
                    </div>
                </div>
                <div className={style.thumb_images_container}>
                    <ul className={style.thumb_images_list}>
                        {
                            thumbnails.map( thumb => (
                                <li key={thumb} className={style.thumb_image}>
                                    <div className={thumbImage == thumb ? style.thumb_emphasis : ''}></div>
                                    <img 
                                        className={style.thumb_emphasis_image}
                                        src={thumb}
                                        alt="thumb image" 
                                        onClick={() => changeImage(thumb)}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ImageModal