import { FaTrashCan } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item}) => {
    const {cart, setCart} = useContext(CartContext);
    
    const removeItem = () => {
        setCart([...cart].filter(cartItem => cartItem.id !== item.id));
    }

    return <div className="cart-item-wrapper">
        <div className="cart-item-img">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
        </div>
        <div className="cart-price-wrapper">
            <p><b>${item.price}</b></p>
            <FaTrashCan onClick={removeItem} className="trash-icon" />
        </div>
    </div>;
};

export default CartItem;