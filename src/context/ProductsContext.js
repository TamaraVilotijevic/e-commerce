import { createContext, useReducer, useEffect } from "react";
import { productReducer } from "../reducer/productReducer";
import api from "../services/api";

export const ProductsContext = createContext();

const initialProducts = {
    products: [],
    value: "sortBy",
    activeBtn: ""
};

const ProductsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(productReducer, initialProducts);

    useEffect(() => {
        fetchProducts();
      }, []);
    
    const fetchProducts = async () => {
    try {
        const res = await api.get("/products");
        dispatch({ type: "SET_PRODUCTS", payload: res.data });
        dispatch({ type: "SET_VALUE", payload: "sortBy" });
        dispatch({ type: "SET_ACTIVE_BTN", payload: "all" });
    } catch (error) {
        console.log("Error", error);
    }};
    
    const filterProducts = async (category) => {
    try {
        const res = await api.get(`/products/category/${category}`);
        dispatch({ type: "SET_PRODUCTS", payload: res.data });
        dispatch({ type: "SET_VALUE", payload: "sortBy" });
        dispatch({ type: "SET_ACTIVE_BTN", payload: category });
    } catch (error) {
        console.log("Error", error);
    }};
    
      const sortProducts = (e) => {
        dispatch({ type: "SET_VALUE", payload: e.target.value });
        if (e.target.value === "priceAsc") {
          const sortedProducts = [...state.products].sort((a, b) => a.price - b.price);
          dispatch({ type: "SET_PRODUCTS", payload: sortedProducts });
        } else if (e.target.value === "priceDes") {
          const sortedProducts = [...state.products].sort((a, b) => b.price - a.price);
          dispatch({ type: "SET_PRODUCTS", payload: sortedProducts });
        } else {
          fetchProducts();
        }
    };

    return <ProductsContext.Provider value={{state, filterProducts, sortProducts}}>
        {children}
    </ProductsContext.Provider>
}

export default ProductsContextProvider;