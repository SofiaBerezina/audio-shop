export interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    image: string;
    category: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Apple BYZ S852I",
        price: 2927,
        rating: 4.7,
        image: '/images/apple-BYZ.jpg',
        category: "Наушники"
    },
    {
        id: 2,
        name: "Apple EarPods",
        price: 2327,
        rating: 4.5,
        image: "/images/apple-earpods.jpg",
        category: "Наушники"
    },
    {
        id: 3,
        name: "Apple EarPods",
        price: 2327,
        rating: 4.5,
        image: "/images/apple-earpods-with-case.jpg",
        category: "Наушники"
    },
    {
        id: 4,
        name: "Apple AirPods",
        price: 9527,
        rating: 4.9,
        image: "/images/apple-airpods.jpg",
        category: "Беспроводные наушники"
    },
    {
        id: 5,
        name: "GERLAX GH-04",
        price: 6527,
        rating: 4.7,
        image: "/images/gerlax.jpg",
        category: "Беспроводные наушники"
    },
    {
        id: 6,
        name: "BOROFONE BO4",
        price: 7527,
        rating: 4.8,
        image: "/images/borofone.jpg",
        category: "Беспроводные наушники"
    },
];