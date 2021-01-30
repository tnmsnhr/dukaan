import React from 'react';
import shopImage from '../../images/shop.jpg';
import tick from '../../images/tick.svg';

const Header = () => {
    return (
        <header className="header__area">
            <div className="container">
                <section class="header__content margin-top-md margin-bottom-md">
                    <div class="shop__image">
                        <img src={shopImage} alt="shop image" />
                    </div>
                    <div className="shop__description">
                        <h3>Mano Super Market</h3>
                        <p className="verified"><span><img src={tick} alt="verified"/></span> trusted seller</p>
                    </div>
                </section>
                <section className="search__area margin-bottom-md">
                    <input className="form__input" placeholder="Search for products..." type="text"/>
                </section>
            </div>
        </header>
    )
}

export default Header;
