import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCartState] = useState([]);

    const setCart = (newCart) => {
        setCartState(newCart);
    };

    const totalItems = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.amount;
        });
        return total;
    }

    return <CartContext.Provider value={{cart, setCart, totalItems}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider;