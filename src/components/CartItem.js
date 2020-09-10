import React, { forwardRef } from 'react'
import './CartItem.css'
import { useStateValue } from '../StateProvider'
import FlipMove from 'react-flip-move'

function CartItem({id, image, title, price, rating}) {
    const[{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        // Remove an item from the cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    
    return (
        <div className='cartitem'>
            <img className='cartitem__image' src={image} alt={title}/>

            <div className='cartitem__info'>
                <p className='cartitem__title'>{title}</p>

                <p className='cartitem__price'>
                <small>$ {price}</small>
                </p>

                <p className='cartitem__rating'>
                {Array(rating).fill().map((_, i) => (
                    <p><span role="img" aria-label="star">⭐</span></p>
                ))}
                </p>

                <button onClick={removeFromCart}>
                    Remove from cart
                </button>
            </div>
            
        </div>
    )
}

export default CartItem
