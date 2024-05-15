// import React from 'react'
import './productDisplay.css'
import star_icon from '../../Assets/star_icon.png'
import star_dull_icon from '../../Assets/star_dull_icon.png'
import image0 from '../../Assets/img1.webp'
import image1 from '../../Assets/img2.webp'
import image2 from '../../Assets/img3.webp'
import image3 from '../../Assets/img4.webp'
import { useState } from 'react'

const Img=[
    {id:0,image:image0},
    {id:1,image:image1},
    {id:2,image:image2},
    {id:3,image:image3},
];

const ProductDisplay = () => {
    const [mainImage, setMainImage] = useState(Img[0]);

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                {Img.map((curr) => {
                    return (
                        <div className="productdisplay-img-list" key={curr.id}>
                            <img
                                src={curr.image}
                                alt=""
                                onMouseEnter={() => setMainImage(curr)}
                                style={{ width: '70px', height: '70px' }} // Add inline style for width and height
                            />
                        </div>
                    );
                })}
            </div>

            <img className="productdisplay-img-main" src={mainImage.image} alt="" />

            <div className="productdisplay-right">
                <h1>Name</h1>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis labore excepturi asperiores reprehenderit illum natus.
                </div>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-price">
                    <div className="productdisplay-right-price-new">
                        $180
                    </div>
                    <div className="productdisplay-right-price-old">
                        $200
                    </div>
                </div>
                <div className="productdisplay-right-selectsize">
                    <h1>Select Sizes</h1>
                    <div className="productdisplay-right-sizes">
                        <div className='productdisplay-right-size'>S</div>
                        <div className='productdisplay-right-size'>M</div>
                        <div className='productdisplay-right-size'>L</div>
                        <div className='productdisplay-right-size'>XL</div>
                    </div>
                </div>
                <div className="productdisplay-right-button">
                    <button className='addtocart'>ADD TO CART</button>
                    <button className='Buynow'>Buy Now</button>
                </div>
                <p className="productdisplay-right-category"><span>Category:</span>Women,T-Shirt,Crop-Top</p>
                <p className="productdisplay-right-category"><span>Tags:</span>Modern,Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
