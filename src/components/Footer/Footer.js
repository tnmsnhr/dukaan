import React from 'react';
import van from '../../images/van.svg';
import protection from '../../images/protection.svg';
import phone from '../../images/phone.svg';
import whatsapp from '../../images/whatsapp.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer__feature">
                <div className="container">
                    <div className="footer__feature--content">
                        <div className="footer__feature--item">
                            <img src={van} alt="van"/>
                            <h5>Free <br/> Delivery</h5>
                            <p>(above 500)</p>
                        </div>

                        <div className="footer__feature--item">
                            <img src={protection} alt="protection"/>
                            <h5>Buyer <br/> Protection</h5>
                        </div>

                        <div className="footer__feature--item">
                            <img src={phone} alt="phone"/>
                            <h5>Customer <br/> Support</h5>
                        </div>
                    </div>
                    <div className="footer__bottom margin-top-md">
                        <p class="store__details">store details</p>
                        <p className="margin-top-md store__name">Mano Super Market</p>
                        <p className="address margin-top-sm">Krishvi Terazzo, 80 Feet Road Indiranagar, Bengaluru, Karnataka</p>
                        <div className="whatsapp ">
                            <img src={whatsapp}/>
                            <p>Chat with us</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
