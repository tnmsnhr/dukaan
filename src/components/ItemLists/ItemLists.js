import React from 'react';
import ItemList from './ItemList/ItemList';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image1.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.png';
import chevcron from '../../images/chevron.svg';

const ItemLists = () => {
    const itemLists=[
        {image:image1, name:'Ice Cream Bowl', sku:1, price:399, discount:30},
        {image:image2, name:'Baskin Robbin\'s Scoop Cup', sku:0, price:399, discount:0},
        {image:image3, name:'Ice Cream Bowl', sku:1, price:249, discount:0},
        {image:image4, name:'Kwality Walls Black Currant', sku:1, price:175, discount:0},
        {image:image4, name:'Ice Cream Bowl', sku:1, price:399, discount:30},
        {image:image1, name:'Baskin Robbin\'s Scoop Cup', sku:1, price:399, discount:0},
        {image:image1, name:'Ice Cream Bowl', sku:1, price:399, discount:30},
        {image:image5, name:'Kwality Walls Black Currant', sku:1, price:175, discount:0},
        {image:image5, name:'Kwality Walls Black Currant', sku:1, price:175, discount:0},
        {image:image5, name:'Kwality Walls Black Currant', sku:1, price:175, discount:0},
        {image:image5, name:'Kwality Walls Black Currant', sku:1, price:175, discount:0},
        {image:image5, name:'Kwality Walls Black Currant', sku:1, price:175, discount:0}
    ]
    return (
        <div className="itemlists">
            <div className="">
                <h3 className="heading-md margin-top-lg margin-bottom-md">Ice Creams <span className="badge">10</span></h3>
                {itemLists.map(item=> <ItemList key={Math.random()} item={item}/>)}

                <div className="see__more">
                    <h3>see all products</h3>
                    <img src={chevcron} alt="arrow"/>
                </div>

                <h3 className="heading-md margin-top-lg margin-bottom-md">Ice Creams <span className="badge">10</span></h3>
                <ItemList item={itemLists[5]}/>
            </div>
        </div>
    )
}

export default ItemLists;
