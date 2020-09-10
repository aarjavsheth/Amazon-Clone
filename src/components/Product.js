import React from 'react'
import './Product.css';
import {useStateValue} from '../StateProvider'

function Product({ id, title, image, price, rating }) {
    const [{cart}, dispatch] = useStateValue()

    const addToCart = () => {
        // dispatch item into data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                
                <h6>{title}</h6>
                <p className="product__price">
                    <small>$</small>
                    <strong>{`${price}`}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><span role="img" aria-label="star">⭐</span></p>
                    ))}
                </div>

            </div>
            
            <img src={image} alt={title}/>

            <button onClick={addToCart}>
                Add to Shopping Cart
            </button>
        </div>
    )
}

export default Product
