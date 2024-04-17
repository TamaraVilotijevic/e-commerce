import { useContext } from "react";
import ProductsList from "../products/ProductsList";
import './products.css';
import { ProductsContext } from "../../context/ProductsContext";

const Products = () => {
    const {state, filterProducts, sortProducts} = useContext(ProductsContext);
    const {products, value, activeBtn} = state;

    return <div className="products-container">
        <div className="products-categories-wrapper">
            <div className="products-categories">
                <button onClick={() => filterProducts("all")} className={`btn-category ${activeBtn === 'all' ? 'active' : ''}`}>All products</button>
                <button onClick={() => filterProducts("men's clothing")} className={`btn-category ${activeBtn === "men's clothing" ? 'active' : ''}`}>Men</button>
                <button onClick={() => filterProducts("women's clothing")} className={`btn-category ${activeBtn === "women's clothing" ? 'active' : ''}`}>Women</button>
                <button onClick={() => filterProducts("jewelery")} className={`btn-category ${activeBtn === "jewelery" ? 'active' : ''}`}>Jewelery</button>
                <button onClick={() => filterProducts("electronics")} className={`btn-category ${activeBtn === "electronics" ? 'active' : ''}`}>Electronics</button>
            </div>
            <select className="btn-sort" value={value} name="sort" id="sort" onChange={sortProducts}>
                <option value="sortBy">Sort by</option>
                <option value="priceAsc">Price lowest to highest</option>
                <option value="priceDes">Price highest to lowest</option>
            </select>
        </div>
        <ProductsList products={products} />
    </div>
};

export default Products;