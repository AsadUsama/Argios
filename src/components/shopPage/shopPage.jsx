import Styles from "./shopPage.module.scss";
import Button from "../button/button";
import products from "../../mockData/productData";
import { useState } from "react";
import PageHeader from "../pageHeader/pageHeader";
import { SearchProducts } from "../../utils/searchProduct";
import { SortedProducts } from "../../utils/sortProduct";


const categories = [
    {
        id: 1,
        name: "Agriculture"
    },
    {
        id: 2,
        name: "Farming"
    },
    {
        id: 3,
        name: "Fresh Vegitables"
    },
    {
        id: 4,
        name: "Harvest"
    },
    {
        id: 5,
        name: "Organic Food"
    },

]



export default function ShopPage() {


    // for displaying products based on pagination first i defined the Productsperpage and the total length on products array. 
    // from this information i was able to calculate total pages that i have to make using Math.ceil array  method. it returns 
    // the larger round of of the integer. like if its 3.45. it will return 4. so the remaining products which are .45 get a news page.
    /// from that i used a method array.from and made an array of the pages. like if the pages was 4. 
    // array.from takes two argument kength / anyarray or string. then a callbackfn to manipulate the value. callbk take two argument valye and index.
    // from that i got an array of the length of total pages. and i mapped through that pages array and created buttons. with value i.
    // after that for every page i measured a starting index and a endingindex 
    // startingindex = curreentPaeg - 1 * productPerPage.  endingIndex = "startingIndex + productPerpage."
    // using that startingIndex and ending index I sliced the product array with two params products.slice(startingIndex, endingIndex)
    // for making the pagination work i had to create a state variable using reaxt hook useEffect and assigned it a value of one.
    // then on clicking the Button which is page no buttom i use onclick event to set the new page value.
    // with that i was able to change the page number which changes the values of currentPage start index and then so on...

    // ----- using the approach above i was able to make product page with pagination, but that's not the end of the story.-------

    // after doing this I also had to make a filter based on search query. for that i wrote a js helper function. 
    // which filters the products based on the search query. i imported that into this component. then for the input i again used a useState variable.
    // set the initial value to empty then called a onChange event handler on the input which that i was able to capture the value of input being typed.
    // then i called that helper function filteredData. and pass the props values. searchQuery whcih is query comming and then the product object.
    // then i createed a function for onChange of input. which geting e.target.value and setCurrentPage to 1.
    // and i defined the currentProducts and then called a slice on filteredData to show the filtered products.
    // sliced using startIndex and endiInsex.

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("default");


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);  // ← Reset to page 1
    };



    const filteredData = SearchProducts(searchQuery, products);
    const sortedData = SortedProducts(filteredData, sortBy);
    // const totalProducts = products.length;
    // const totalProducts = filteredData.length; 
    const totalProducts = sortedData.length;


    const productPerPage = 9;

    const totalPages = Math.ceil(totalProducts / productPerPage);

    const pages = Array.from({ length: totalPages }, (__, i) => i + 1)

    const startIndex = (currentPage - 1) * productPerPage;

    const endIndex = startIndex + productPerPage;

    // const currentProducts = products.slice(startIndex, endIndex);
    const currentProducts = sortedData.slice(startIndex, endIndex);


    return (
        <>
            <PageHeader heading="Shop" />

            <div className="container">
                <div className="row">
                    <div className={Styles.shopLayout}>

                        <div className={Styles.sideBar}>
                            <input
                                type="text"
                                id="#productSearch"
                                placeholder="Search Products..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <div className={Styles.priceRange}>
                                <h4>Price</h4>
                                <div className={Styles.ranges}>
                                    <input type="range" />
                                </div>
                                <div className={Styles.priceBtn}>
                                    <p className={Styles.price}>
                                        $0 - $500
                                    </p>
                                    <Button>Apply</Button>
                                </div>
                            </div>
                            <div className={Styles.categories}>
                                <h4>Categories</h4>
                                <div className={Styles.category}>
                                    {
                                        categories.map((item) => (
                                            <a key={item.id} href="">{item.name}</a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>


                        <div className={Styles.products}>
                            <div className={Styles.results}>
                                <p>Showing {startIndex + 1} - {Math.min(endIndex, totalProducts)} of {totalProducts} results</p>

                                <select
                                    name="dropDown"
                                    id="#Sorting"
                                    placeholder="Default Sorting"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="default">Default Sorting</option>
                                    <option value="az">A to Z</option>
                                    <option value="za">Z to A</option>
                                    <option value="lowToHigh"> Price Low To High</option>
                                    <option value="highToLow">Price High To Low</option>
                                </select>
                            </div>

                            <div className={Styles.productCards}>
                                {currentProducts.length > 0 ? (
                                    currentProducts.map((product) => (
                                        <div key={product.id} className={Styles.productCard}>
                                            <img src={product.image} alt={product.alt} />
                                            <p className={Styles.name}>{product.name}</p>
                                            <p className={Styles.price}>${product.price}.00</p>
                                        </div>
                                    ))
                                ) : searchQuery ? (
                                    <p className={Styles.noResults}>No products found for "{searchQuery}"</p>
                                ) : (
                                    <p className={Styles.noResults}>No products available</p>
                                )}
                            </div>


                            <div className={Styles.pagination}>
                                {pages.map((page) => (
                                    <button key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={currentPage === page ? Styles.isActive : ''}
                                    >{page}</button>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}