import { FaTrashCan } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item}) => {
    const {cart, setCart} = useContext(CartContext);
    
    const removeItem = () => {
        const newCart = [...cart].filter(cartItem => cartItem.id !== item.id);
        setCart(newCart);
    }

    const increaseAmount = () => {
        const updatedCart = cart.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, amount: cartItem.amount + 1 } : cartItem
        );
        setCart(updatedCart);
    }

    const decreaseAmount = () => {
        if (item.amount > 1) {
            const updatedCart = cart.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, amount: cartItem.amount - 1 } : cartItem
            );
            setCart(updatedCart);
        }
    }

    return <div className="cart-item-wrapper">
        <div className="cart-item-img">
            <div className="cart-img">
                <img src={item.image} alt={item.title} />
            </div>
            <div>
                <p>{item.title}</p>
                <div className="amount-wrapper-div">
                    <p className="amount-wrapper">
                        <span onClick={decreaseAmount}><FiMinus /></span>
                        {item.amount}
                        <span onClick={increaseAmount}><FiPlus /></span>
                    </p>
                    <span>${item.price}</span>
                </div>
            </div>
        </div>
        <div className="cart-price-wrapper">
            <p>${(item.price*item.amount).toFixed(2)}</p>
            <FaTrashCan onClick={removeItem} className="trash-icon" />
        </div>
    </div>;
};

export default CartItem;