import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvider'
import Product from './Product';
import CartItem from './CartItem';

function Checkout() {

    const [{cart, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""/>

                <div>
                    <h3>{user ? `Hey, ${user?.email}`: `Hello`}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Cart {cart.length > 0 ? ` ` : `Is Empty`}
                    </h2>
                </div>

                {/* CartItem */}
                {cart.map(item => (
                    <CartItem
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                    />
                ))}
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout