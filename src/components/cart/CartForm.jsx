import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartForm = () => {
    const {setCart} = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        address: '',
        city: '',
        postCode: '',
        phone: ''
    });
    const [purchaseSuccess, setPurchaseSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePurchase = (e) => {
        e.preventDefault();
        const isFormFilled = e.target.checkValidity();
        if (isFormFilled) {
            setPurchaseSuccess(true);
        } else {
            alert('Please fill in all fields');
        }
    };

    const handleDismiss = () => {
        setPurchaseSuccess(false);
        setCart([]);
    };

    return <div className="cart-form-wrapper">
        <h2>Shipping Details</h2>
        <form className="cart-form" onSubmit={handlePurchase}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} pattern=".*\S+.*" />
                </div>
                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} pattern=".*\S+.*" />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" required value={formData.address} onChange={handleChange} pattern=".*\S+.*" />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" required value={formData.city} onChange={handleChange} pattern=".*\S+.*" />
                </div>
                <div>
                    <label htmlFor="postCode">Post code</label>
                    <input type="text" id="postCode" name="postCode" required value={formData.postCode} onChange={handleChange} pattern=".*\S+.*" />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" id="phone" name="phone" required value={formData.phone} onChange={handleChange} pattern=".*\S+.*" />
                </div>
                <button className="cart-form-btn" type="submit">Check Out</button>
            </form>
        {purchaseSuccess && (
                <div className="success-message">
                    <p>Congratulations! Your purchase was successful. It will be delivered to you shortly.</p>
                    <button onClick={handleDismiss}>OK</button>
                </div>
            )}
    </div>;
};

export default CartForm;