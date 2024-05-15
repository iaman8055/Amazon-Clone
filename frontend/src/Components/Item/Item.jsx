import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
function Item() {
	return (

    <div className="item">
			<img
				src="https://img2.hkrtcdn.com/31812/pck_3181151_c_m.jpg"
				alt=""
			/>
			<div className="description">
				<p className="name">MASSDROP X SENNHEISER HD 6XX HEADPHONES</p>
				<div className="items-prices">
					<div className="item-price-new">₹</div>
					<div className="item-price-old">₹</div>
					<div className="variant-offer"></div>
				</div>
				<div className="addtocart-btn">
					<div className="buttonclass">
						<img src="https://static1.hkrtcdn.com/hknext/static/media/common/cartNew.svg" />
						<button>Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
		// </Link>
	)
}

export default Item;