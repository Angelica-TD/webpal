import React, { useState } from 'react';

const AddToCartForm = () => {
    const [quantity, setQuantity] = useState(1);
    const maxQuantity = 10;

    const handleQuantityChange = (event) => {
        let inputValue = event.target.value;
        inputValue = Math.min(Math.max(inputValue, 1), maxQuantity);
        setQuantity(inputValue);
    };

    const addToCart = () => {
        console.log(`Added ${quantity} items to the cart.`);
    };

    return (
        <div className="product-quantity d-md-flex gap-2">
            <input
                type="number"
                id="quantity"
                value={quantity}
                min="1"
                max={maxQuantity}
                onChange={handleQuantityChange}
                className=""
            />
            <div className="product-add-to-cart">
                <button onClick={addToCart} type="button" className="btn btn-primary add-to-cart">Add to cart</button>
            </div>
        </div>
    );
};

export default AddToCartForm;
