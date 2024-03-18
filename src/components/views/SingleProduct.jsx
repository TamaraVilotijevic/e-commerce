import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import './singleProduct.css';
import { CartContext } from "../../context/CartContext";
import { FaStar } from "react-icons/fa";

const SingleProduct = () => {
    const {productId} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(undefined);
    const {cart, setCart} = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        api.get(`/products/${productId}`)
        .then((res) => {
            setProduct(res.data);
        })
        .catch(err => console.log('Error', err));
    }, []);

    const addToCart = () => {
        if (product) {
            setCart([...cart, {...product, amount: 1}]);
            setAddedToCart(true);
        }
    };

    return <div>
        {product && 
        (<div className="single-product-wrapper">
            <div className="single-product-img">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="single-product-info">
                <h2>{product.title}</h2>
                <p className="rating">Rating: {product.rating.rate} <FaStar />, {product.rating.count} reviews</p>
                <p className="single-product-price"><b>${product.price}</b></p>
                <p className="single-product-description">{product.description}</p>
                <button className="button" onClick={addToCart}>Add to cart</button>
                <button className="button back-btn" onClick={() => navigate('/products')}>&#171; Back to all products</button>
            </div>
        </div>)}
    </div>;
};

export default SingleProduct;