import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCartState] = useState([]);

    const setCart = (newCart) => {
        setCartState(newCart);
    };


    return <CartContext.Provider value={{cart, setCart}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider;