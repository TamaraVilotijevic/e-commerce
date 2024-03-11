import './productsListItem.css';
import { Link } from 'react-router-dom';

const ProductsListItem = ({product}) => {
    return <Link className='products-item-wrapper' to={`/products/${product.id}`}>
        <div className='products-img-wrapper'>
            <img src={product.image} alt={product.title} />
        </div>
        <div className='products-description'>
            <h4 className='product-price'>${product.price}</h4>
            <p>{product.title}</p>
        </div>
    </Link>;
};

export default ProductsListItem;