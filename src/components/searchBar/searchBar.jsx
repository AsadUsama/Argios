import Styles from './SearchBar.module.scss';
import { useState } from 'react';
import { SearchProducts } from '../../utils/searchProduct';
import productData from "../../mockData/productData"
import search from '../../assest/icons/Search.svg';



export default function SearchBar() {

    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = SearchProducts(searchQuery, productData)

    return (
        <div className={Styles.searchContain}>
            <input type="text"
                placeholder='Search Products...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />



            <img src={search}
                alt="Search Icon"
                className={Styles.searchImg}
            />

            <ul className={Styles.productModal}>
                {searchQuery.trim() === "" ? null : (
                    filteredData.length > 0 ? (
                        filteredData.map((product) => (
                            <li key={product.id}>
                                <img src={product.image} alt={product.alt} className={Styles.productImg} />
                                <div className={Styles.text}>
                                    <a>{product.name}</a>
                                    <p>{product.description}</p>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className={Styles.emptyState}>No product found.</li>
                    )
                )}
            </ul>



        </div>
    )

}

