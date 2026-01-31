import React from 'react';
import {Product} from '../data';

interface CartItemProps {
    item: {
        product: Product;
        quantity: number;
    };
    updateQuantity: (id: number, newQuantity: number) => void;
    removeItem: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({item, updateQuantity, removeItem}) => {
    const {product, quantity} = item;
    const totalPrice = product.price * quantity;
    const priceFormatter = new Intl.NumberFormat('ru-RU');

    return (
        <div className="item">

            <img className="item__image" src={product.image} alt={product.name}/>

            <div className="item__amount-control">
                <button
                    className="item__amount-control-button minus"
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    disabled={quantity <= 1}
                >
                    <img src="/icons/minus.svg" alt="minus-icon" className="minus-icon"/>
                </button>
                <span className="item__quantity">{quantity}</span>
                <button
                    className="item__amount-control-button plus"
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                >
                    <img src="/icons/plus.svg" alt="plus-icon" className="plus-icon"/>
                </button>
            </div>

            <div className="item__info">
                <h3 className="item__title">{product.name}</h3>
                <span className="item__price">{priceFormatter.format(product.price)} ₽</span>
            </div>

            <div className="item__total">
                <button
                    className="item__remove"
                    onClick={() => removeItem(product.id)}
                    aria-label="Удалить товар"
                >
                    <img src="/icons/bin.svg" alt="bin-icon" className="remove-icon"/>
                </button>

                <span className="item__total-price">{priceFormatter.format(totalPrice)} ₽</span>

            </div>
        </div>
    );
};

export default CartItem;