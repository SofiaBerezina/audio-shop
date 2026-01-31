import React from 'react';
import Catalogue from "../components/Catalogue";
import { Product } from "../data";
import { products } from '../data';

interface HomeProps {
    categories: string[];
    addToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ categories, addToCart }) => {

    return (
        <>
            {categories.map((category) => {
                // Фильтруем товары по текущей категории
                const catalogueProducts: Product[] = products.filter(
                    (product: Product) => product.category === category
                );

                return (
                    <Catalogue
                        key={category}
                        categoryTitle={category}
                        catalogueProducts={catalogueProducts}
                        addToCart={addToCart}
                    />
                );
            })}
        </>
    );
};

export default Home;