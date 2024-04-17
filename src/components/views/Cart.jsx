import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cart/CartItem";
import CartForm from "../cart/CartForm";
import '../cart/cart.css';

const Cart = () => {
    const navigate = useNavigate();
    const {cart, setCart, totalItems} = useContext(CartContext);

    const totalPrice = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price*item.amount;
        });
        return total;
    }

    return <>
        {cart.length ? (
        <div className="cart-wrapper">
            <div className="cart-items">
                <h1>Shopping cart ({totalItems()})</h1>
                {cart.map((item,index) => <CartItem key={index} item={item} />)}
                <h2>Total: ${totalPrice().toFixed(2)}</h2>
                <button className="cart-btn" onClick={() => setCart([])}>Empty cart</button>
                <button className="cart-btn" onClick={() => navigate('/products')}>&#171; Continue shopping</button>
            </div>
            <CartForm />
        </div>)
        : (<div className="empty-cart-wrapper">
            <h2>Your cart is empty</h2>
            <button className="button-red" onClick={() => navigate('/products')}>&#171; Shop our products</button>
        </div>)}
    </>;
};

export default Cart;