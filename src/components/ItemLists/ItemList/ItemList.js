import React from 'react'
import FoodCard from '../../FoodCard/FoodCard';
import plus from '../../../images/plus.svg';

const ItemList = ({item}) => {
    return (
        <div className="item__list--container">
            <div className="item__card">
                <FoodCard image={item.image}/>
                {item.discount >0 && <p className="discount__badge">{item.discount}% OFF</p>}
            </div>
            <div className="item__details">
                <div className="details__row margin-bottom-sm">
                    <h4 className="heading-sm">{item.name}</h4>
                    <p className="sku_details">{item.sku} Unit</p>
                </div>
                <div className="action__row">
                    <div className="price__details">
                        <h3>&#x20B9;{Math.ceil(item.price-item.price*0.30)} {item.discount >0 && <span className="original_price"><strike>&#x20B9; {item.price}</strike></span>}</h3> 
                    </div>
                    <div className="add_button--area">
                        {item.sku>0 ?<button className="add_button">Add <img src={plus}/></button>:<p className="outof__stock">Out of stock</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemList;
