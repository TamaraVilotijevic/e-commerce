import api from "../../services/api";
import { useEffect, useState, useContext } from "react";
import ProductsList from "../products/ProductsList";
import './products.css';
import { ProductsContext } from "../../context/ProductsContext";

const Products = () => {
    const {products, setProducts} = useContext(ProductsContext);
    const [value, setValue] = useState('sortBy');
    const [activeBtn, setActiveBtn] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await api.get('/products');
            setProducts(res.data);
            setValue('sortBy');
            setActiveBtn('all');
        } catch (error) {
            console.log('Error', error);
        }
    };

    const filterProducts = async (category) => {
        try { 
            const res = await api.get(`/products/category/${category}`);
            setProducts(res.data);
            setValue('sortBy');
            setActiveBtn(category);
        } catch (error) {
            console.log('Error', error);
        }
    };

    const sortProducts = (e) => {
        setValue(e.target.value);
        if (e.target.value === 'priceAsc') {
            const sortedProducts = [...products].sort((a, b) => a.price - b.price);
            setProducts(sortedProducts);
        } else if (e.target.value === 'priceDes') {
            const sortedProducts = [...products].sort((a, b) => b.price - a.price);
            setProducts(sortedProducts);
        } else {
            fetchProducts();
        }
    }

    return <div>
        <div className="products-categories-wrapper">
            <div className="products-categories">
                <button onClick={fetchProducts} className={`btn-category ${activeBtn === 'all' ? 'active' : ''}`}>All products</button>
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