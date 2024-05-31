import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
function Item({item}) {
	return (
 <div className="item">
			<Link to={`/productdetails/${item.id}`}>

			<img
				src={item.image}
				alt=""
			/>
			<div className="description">
				<p className="name">{item.name}</p>
				<div className="items-prices">
					<div className="item-price-new">₹{item.new_price}</div>
					<div className="item-price-old">₹{item.old_price}</div>
					<div className="variant-offer"></div>
				</div>
				<div className="addtocart-btn">
					<div className="buttonclass">
						<img src="https://static1.hkrtcdn.com/hknext/static/media/common/cartNew.svg" />
						<button>Add to Cart</button>
					</div>
				</div>
			</div>
			</Link>

		</div>
	)
}

export default Item;