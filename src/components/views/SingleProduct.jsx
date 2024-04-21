import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import './singleProduct.css';
import { CartContext } from "../../context/CartContext";
import { FaStar } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProduct = () => {
    const {productId} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(undefined);
    const {cart, setCart} = useContext(CartContext);
    const notify = () => toast.success("Item added to cart!", {
        icon: BsCartCheckFill
    });

    useEffect(() => {
        api.get(`/products/${productId}`)
        .then((res) => {
            setProduct(res.data);
        })
        .catch(err => console.log('Error', err));
    }, []);

    const addToCart = () => {
        if (product) {
            const existingProduct = cart.find(item => item.id === product.id);
            if (existingProduct) {
                const updatedCart = cart.map(item =>
                    item.id === existingProduct.id ? {...item, amount: item.amount + 1} : item
                );
                setCart(updatedCart);
            } else {
            setCart([...cart, {...product, amount: 1}]);
            }
        }
        notify();
    };

    return <div>
        {product && 
        (<div className="single-product-wrapper">
            <div className="single-product-img">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="single-product-info">
                <h2>{product.title}</h2>
                <p className="rating">Rating: {product.rating.rate} <FaStar style={{color: 'rgb(252 228 99)'}} />, {product.rating.count} reviews</p>
                <p className="single-product-price"><b>${product.price}</b></p>
                <p className="single-product-description">{product.description}</p>
                <button className="button" onClick={addToCart}>Add to cart</button>
                <button className="button back-btn" onClick={() => navigate('/products')}>&#171; Back to all products</button>
            </div>
        </div>)}
        <ToastContainer position="top-center" transition={Slide} draggable />
    </div>;
};

export default SingleProduct;