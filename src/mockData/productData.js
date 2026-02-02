import apple from "../assest/products/apple.png"
import banana from "../assest/products/banana.png"
import carrot from "../assest/products/carrot.png"
import garlic from "../assest/products/garlic.png"
import grapes from "../assest/products/grapes.png"
import lettuce from "../assest/products/lettuce.png"
import onions from "../assest/products/onions.png"
import potatoes from "../assest/products/potatos.png"
import redGrapes from "../assest/products/red-grapes.png"

const productsData = [
    {
        id: 1,
        name: "Apples",
        category: "Fruits",
        price: 50.0,
        image: apple,
        alt: "Fresh red apples",
        inStock: true,
        rating: 4.8,
        description: "Crisp and juicy red apples packed with natural sweetness."
    },
    {
        id: 2,
        name: "Bananas",
        category: "Fruits",
        price: 20.0,
        image: banana,
        alt: "Ripe yellow bananas",
        inStock: true,
        rating: 4.6,
        description: "Fresh, ripe bananas perfect for snacking or smoothies."
    },
    {
        id: 3,
        name: "Carrots",
        category: "Vegetables",
        price: 50.0,
        image: carrot,
        alt: "Fresh orange carrots",
        inStock: true,
        rating: 4.5,
        description: "Crunchy and nutritious carrots rich in vitamins."
    },
    {
        id: 4,
        name: "Garlic",
        category: "Vegetables",
        price: 20.0,
        image: garlic,
        alt: "Fresh garlic bulbs",
        inStock: true,
        rating: 4.7,
        description: "Aromatic garlic bulbs perfect for flavoring any dish."
    },
    {
        id: 5,
        name: "Green Grapes",
        category: "Fruits",
        price: 100.0,
        image: grapes,
        alt: "Fresh green grapes",
        inStock: true,
        rating: 4.9,
        description: "Sweet and refreshing green grapes with a crisp bite."
    },
    {
        id: 6,
        name: "Lettuce",
        category: "Vegetables",
        price: 30.0,
        image: lettuce,
        alt: "Fresh green lettuce leaves",
        inStock: true,
        rating: 4.4,
        description: "Fresh, crunchy lettuce ideal for salads and wraps."
    },
    {
        id: 7,
        name: "Onions",
        category: "Vegetables",
        price: 20.0,
        image: onions,
        alt: "Fresh red onions",
        inStock: true,
        rating: 4.5,
        description: "Flavorful red onions suitable for cooking and salads."
    },
    {
        id: 8,
        name: "Potatoes",
        category: "Vegetables",
        price: 30.0,
        image: potatoes,
        alt: "Brown potatoes",
        inStock: true,
        rating: 4.6,
        description: "Versatile brown potatoes ideal for boiling, frying, or baking."
    },
    {
        id: 9,
        name: "Red Grapes",
        category: "Fruits",
        price: 100.0,
        image: redGrapes,
        alt: "Fresh red grapes",
        inStock: true,
        rating: 4.9,
        description: "Sweet and juicy red grapes loaded with antioxidants."
    },

    {
        id: 10,
        name: "Red Grapes",
        category: "Fruits",
        price: 100.0,
        image: redGrapes,
        alt: "Fresh red grapes",
        inStock: true,
        rating: 4.9,
        description: "Sweet and juicy red grapes bursting with flavor."
    },
    {
        id: 11,
        name: "Potatoes",
        category: "Vegetables",
        price: 30.0,
        image: potatoes,
        alt: "Brown potatoes",
        inStock: true,
        rating: 4.6,
        description: "Fresh brown potatoes perfect for everyday cooking."
    },
    {
        id: 12,
        name: "Onions",
        category: "Vegetables",
        price: 20.0,
        image: onions,
        alt: "Fresh red onions",
        inStock: true,
        rating: 4.5,
        description: "Red onions with a strong aroma and balanced flavor."
    },
    {
        id: 13,
        name: "Lettuce",
        category: "Vegetables",
        price: 30.0,
        image: lettuce,
        alt: "Fresh green lettuce leaves",
        inStock: true,
        rating: 4.4,
        description: "Crisp lettuce leaves great for fresh salads."
    },
    {
        id: 14,
        name: "Green Grapes",
        category: "Fruits",
        price: 100.0,
        image: grapes,
        alt: "Fresh green grapes",
        inStock: true,
        rating: 4.9,
        description: "Delicious green grapes with a naturally sweet taste."
    },
    {
        id: 15,
        name: "Garlic",
        category: "Vegetables",
        price: 20.0,
        image: garlic,
        alt: "Fresh garlic bulbs",
        inStock: true,
        rating: 4.7,
        description: "High-quality garlic ideal for seasoning and cooking."
    },
    {
        id: 16,
        name: "Carrots",
        category: "Vegetables",
        price: 50.0,
        image: carrot,
        alt: "Fresh orange carrots",
        inStock: true,
        rating: 4.5,
        description: "Fresh, crunchy carrots perfect for salads and cooking."
    },
    {
        id: 17,
        name: "Bananas",
        category: "Fruits",
        price: 20.0,
        image: banana,
        alt: "Ripe yellow bananas",
        inStock: true,
        rating: 4.6,
        description: "Naturally sweet bananas rich in energy and nutrients."
    },
    {
        id: 18,
        name: "Apples",
        category: "Fruits",
        price: 50.0,
        image: apple,
        alt: "Fresh red apples",
        inStock: true,
        rating: 4.8,
        description: "Juicy red apples with a crisp and refreshing bite."
    },

    {
        id: 19,
        name: "Apples",
        category: "Fruits",
        price: 50.0,
        image: apple,
        alt: "Fresh red apples",
        inStock: true,
        rating: 4.8,
        description: "Fresh apples packed with sweetness and crunch."
    },
    {
        id: 20,
        name: "Bananas",
        category: "Fruits",
        price: 20.0,
        image: banana,
        alt: "Ripe yellow bananas",
        inStock: true,
        rating: 4.6,
        description: "Soft and sweet bananas ideal for daily snacking."
    },
    {
        id: 21,
        name: "Carrots",
        category: "Vegetables",
        price: 50.0,
        image: carrot,
        alt: "Fresh orange carrots",
        inStock: true,
        rating: 4.5,
        description: "Bright orange carrots full of natural nutrition."
    },
    {
        id: 22,
        name: "Garlic",
        category: "Vegetables",
        price: 20.0,
        image: garlic,
        alt: "Fresh garlic bulbs",
        inStock: true,
        rating: 4.7,
        description: "Fresh garlic with rich aroma and strong flavor."
    },
    {
        id: 23,
        name: "Green Grapes",
        category: "Fruits",
        price: 100.0,
        image: grapes,
        alt: "Fresh green grapes",
        inStock: true,
        rating: 4.9,
        description: "Crisp and sweet green grapes great for desserts."
    },
    {
        id: 24,
        name: "Lettuce",
        category: "Vegetables",
        price: 30.0,
        image: lettuce,
        alt: "Fresh green lettuce leaves",
        inStock: true,
        rating: 4.4,
        description: "Light and crunchy lettuce perfect for fresh meals."
    },
    {
        id: 25,
        name: "Onions",
        category: "Vegetables",
        price: 20.0,
        image: onions,
        alt: "Fresh red onions",
        inStock: true,
        rating: 4.5,
        description: "Fresh red onions ideal for cooking and garnishing."
    },
    {
        id: 26,
        name: "Potatoes",
        category: "Vegetables",
        price: 30.0,
        image: potatoes,
        alt: "Brown potatoes",
        inStock: true,
        rating: 4.6,
        description: "Starchy, versatile potatoes for all types of dishes."
    },
    {
        id: 27,
        name: "Red Grapes",
        category: "Fruits",
        price: 100.0,
        image: redGrapes,
        alt: "Fresh red grapes",
        inStock: true,
        rating: 4.9,
        description: "Juicy red grapes perfect for snacking or juicing."
    },
    {
        id: 27,
        name: "Potatoes",
        category: "Vegetables",
        price: 30.0,
        image: potatoes,
        alt: "Brown potatoes",
        inStock: true,
        rating: 4.6,
        description: "Starchy, versatile potatoes for all types of dishes."
    },
    {
        id: 28,
        name: "Red Grapes",
        category: "Fruits",
        price: 100.0,
        image: redGrapes,
        alt: "Fresh red grapes",
        inStock: true,
        rating: 4.9,
        description: "Juicy red grapes perfect for snacking or juicing."
    },

];

export default productsData;
