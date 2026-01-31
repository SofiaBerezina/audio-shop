// src/components/Card.tsx
import React from 'react';
import {Product} from '../data';

interface CardProps {
    product: Product;
    addToCart: (product: Product) => void;
}

const Card: React.FC<CardProps> = ({product, addToCart}) => {
    return (
        <article className="card">
            <div className="image-container">
                <img src={product.image} alt={product.name} className="card__image" loading="lazy" />
            </div>

            <div className="card__content">
                <h3 className="card__title">{product.name}</h3>
                <span className="card__price">{product.price} ₽</span>
                <span className="card__rate">{product.rating}</span>
                <button
                    className="card__buy-button"
                    onClick={() => addToCart(product)}
                >
                    Купить
                </button>
            </div>
        </article>
    );
};

export default Card;