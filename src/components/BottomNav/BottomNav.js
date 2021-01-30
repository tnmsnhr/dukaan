import React from 'react';
import home from '../../images/home.svg';
import cart from '../../images/cart.svg';
import hamburger from '../../images/hamburger.svg';

const BottomNav = () => {
    return (
        <div className="bottom__nav">
            <div className="container">
                <div className="bottom__nav--container">
                    <div className="bottom__nav--item active">
                        <img src={home}/> <p>Home</p>
                    </div>

                    <div className="bottom__nav--item cart__item">
                        <section className="cart__item--details">
                            <img src={cart}/> 
                            <span>3</span> 
                            <p>Bag</p>
                        </section>
                        
                    </div>

                    <div className="bottom__nav--item">
                        <img src={hamburger}/> <p>Orders</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomNav
