// src/components/Catalogue.tsx
import React from "react";
import { Product } from "../data";
import Card from "./Card";

interface CatalogueProps {
    catalogueProducts: Product[];
    addToCart: (product: Product) => void;
    categoryTitle: string;
}

const Catalogue: React.FC<CatalogueProps> = ({
                                                 catalogueProducts,
                                                 categoryTitle,
                                                 addToCart
                                             }) => {
    return (
        <section className="section">
            <h2 className="section__title">{categoryTitle}</h2>
            <div className="section__container">
                {catalogueProducts.map(product => (
                    <Card
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </section>
    );
};

export default Catalogue;