
export const SearchProducts = (query, products) => {

    if (!query || query.trim() === "") {
        return products;
    }

    const normalizedQuery = query.trim().toLowerCase();

    const filteredProducts = products.filter((product) => {
        const productName = product.name.trim().toLowerCase();

        return productName.includes(normalizedQuery)
    })

    return filteredProducts

};
