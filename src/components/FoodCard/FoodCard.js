import React from 'react'

const FoodCard = (props) => {
    return (
        <div className="food__card">
            <section class="card__item">
                <img src={props.image}/>
                {props.title && <h4 className="card__title">{props.title}</h4>}
            </section>
        </div>
    )
}

export  default FoodCard;
