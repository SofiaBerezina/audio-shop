import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data';
import CartItem from '../components/CartItem';

interface CartPageProps {
    cart: { product: Product; quantity: number }[];
    setCart: React.Dispatch<React.SetStateAction<{ product: Product; quantity: number }[]>>;
}

const CartPage: React.FC<CartPageProps> = ({ cart, setCart }) => {
    const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const updateQuantity = (id: number, newQuantity: number) => {
        if (newQuantity < 1) return;
        setCart(prev =>
            prev.map(item =>
                item.product.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCart(prev => prev.filter(item => item.product.id !== id));
    };

    return (
        <div className="cart-page">
            <Link to="/" className="return-button">← Назад</Link>
            <h1 className="cart-page__title">Корзина</h1>
            {cart.length === 0 ? (
                <p className="cart-page__empty">Корзина пуста</p>
            ) : (
                <section className="cart">
                    <div className="cart__items">
                        {cart.map(item => (
                            <CartItem
                                key={item.product.id}
                                item={item}
                                updateQuantity={updateQuantity}
                                removeItem={removeItem}
                            />
                        ))}
                    </div>

                    <aside className="cart__summary">
                        <p className="cart__total">
                            <span>ИТОГО</span><span>{totalPrice} ₽</span>
                        </p>
                        <button className="assign-button">Перейти к оформлению</button>
                    </aside>
                </section>
            )}
        </div>
    );
};

export default CartPage;