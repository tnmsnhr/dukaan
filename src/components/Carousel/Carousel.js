import React from 'react';
import carousel1 from '../../images/carousel1.png';
import carousel2 from '../../images/carousel2.png';
import FoodCard from '../FoodCard/FoodCard';

const Carousel = () => {

    const itemLists=[
        {name:'Ice Creams',image: carousel1},
        {name:'Home Food',image: carousel2}
    ]
    return (
        <div className="carousel__container">
            <div className="container">
                <h3 className="heading-md margin-top-md margin-bottom-md">Bestsellers</h3>
                <div className="carousel__card--container">
                    {itemLists.map(item=> {
                        return (
                            <div className="carousel__card">
                                <FoodCard image={item.image} title={item.name}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Carousel;
