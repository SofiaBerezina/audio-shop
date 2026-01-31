// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Product, products } from "./data";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import './styles';

const App: React.FC = () => {
    const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);

    const addToCart = (product: Product) => {
        setCart(prev => {
            const existing = prev.find(item => item.product.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { product, quantity: 1 }];
        });
    };

    // Получаем уникальные категории
    const categories = Array.from(new Set(products.map(product => product.category)));

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Router>
            <Header cartCount={totalItems} />
                <main className="main">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home
                                categories={categories}
                                addToCart={addToCart}
                            />}
                        />
                        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
                    </Routes>
                </main>
            <Footer />
        </Router>
    );
};

export default App;