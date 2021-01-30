import React from 'react';
import shopImage from '../../images/shop.jpg';
import tick from '../../images/tick.svg';
import cart from '../../images/cart.svg';
import hamburger from '../../images/hamburger.svg';

const Header = () => {
    return (
        <div className="header__area--container">
            <header className="header__area">
                <div className="container">
                    <div className="header__upperrow">
                        <div className="header__left">
                            <section className="header__content margin-top-md margin-bottom-md">
                                <div className="shop__image">
                                    <img src={shopImage} alt="shop image" />
                                </div>
                                <div className="shop__description">
                                    <h3>Mano Super Market</h3>
                                    <p className="verified"><span><img src={tick} alt="verified"/></span> trusted seller</p>
                                </div>
                            </section>
                        </div>
                        <div className="header__right">
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

                    <div className="header__lowerrow">
                        <section className="search__area margin-bottom-md">
                                <input className="form__input" placeholder="Search for products..." type="text"/>
                        </section>  
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
