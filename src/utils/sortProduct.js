export const SortedProducts = (products, sortOption) => {


    switch (sortOption) {
        case "az":
            return [...products].sort((a, b) => a.name.localeCompare(b.name))
        case "za":
            return [...products].sort((a, b) => b.name.localeCompare(a.name))
        case "lowToHigh":
            return [...products].sort((a, b) => a.price - b.price)
        case "highToLow":
            return [...products].sort((a, b) => b.price - a.price)
        default:
            return [...products]
    }



}