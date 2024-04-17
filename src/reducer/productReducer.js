export const productReducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        case "SET_VALUE":
            return { ...state, value: action.payload };
        case "SET_ACTIVE_BTN":
            return { ...state, activeBtn: action.payload };
    
        default:
            return state;
    }
};