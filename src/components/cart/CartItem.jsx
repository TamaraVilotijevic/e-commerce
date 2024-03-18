import { FaTrashCan } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item}) => {
    const {cart, setCart} = useContext(CartContext);
    
    const removeItem = () => {
        const index = cart.findIndex(cartItem => cartItem.id === item.id);

        if (index !== -1) {
            const newCart = [...cart];
            newCart.splice(index, 1);
            setCart(newCart);
        }
    }

    return <div className="cart-item-wrapper">
        <div className="cart-item-img">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
        </div>
        <div className="cart-price-wrapper">
            <p>
                <span>-</span>
                {item.amount}
                <span>+</span>
            </p>
            <p><b>${item.price*item.amount}</b></p>
            <FaTrashCan onClick={removeItem} className="trash-icon" />
        </div>
    </div>;
};

export default CartItem;