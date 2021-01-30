import React from 'react';
import sidecart from '../../images/sidecart.svg'

const Sidecart = () => {
    return (
        <div className="sidecart__container">
            <div className="sidecart">
                <h3 className="heading-md margin-top-lg margin-bottom-md">Bag <span className="badge">0</span></h3>
                <img src={sidecart}/>
                <div className="sidecart__desc">
                    <h3 className="heading-md">Your bag is empty</h3>
                    <p>Looks like you haven’t made your choice yet.</p>
                </div>
            </div>
        </div>
    )
}

export default Sidecart
