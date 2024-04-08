import ProductsListItem from "./ProductsListItem";
import './productsList.css';

const ProductsList = ({products}) => {
    return <div className="products-wrapper">
        {products.map((product,index) => <ProductsListItem key={index} product={product} />)}
    </div>;
};

export default ProductsList;