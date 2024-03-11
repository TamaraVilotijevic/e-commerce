import { FiShoppingCart } from "react-icons/fi";
import './navbar.css';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
    const navigate = useNavigate();
    const {cart} = useContext(CartContext);

    return <nav className="navbar-wrapper">
        <h2 onClick={() => navigate('/')}><span className="logo-shop">SHOP</span><span className="logo">byViloTam</span></h2>
        <div className="navbar-cart-wrapper">
            <FiShoppingCart className="navbar-cart-icon" onClick={() => navigate('/cart')} />
            <span className="navbar-cart-number">{cart.length}</span>
        </div>
    </nav>;
};

export default Navbar;