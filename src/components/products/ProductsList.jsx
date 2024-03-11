import ProductsListItem from "./ProductsListItem";
import './productsList.css';

const ProductsList = ({products}) => {
    return <div className="products-wrapper">
        {products.map(product => <ProductsListItem key={product.id} product={product} />)}
    </div>;
};

export default ProductsList;