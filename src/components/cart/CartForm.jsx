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
        const isFormFilled = Object.values(formData).every(value => value !== '');
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
        <form className="cart-form">
            <div>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} />
            </div>
            <div>
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            </div>
            <div>
                <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
            </div>
            <div>
                <input type="text" name="postCode" placeholder="Post code" value={formData.postCode} onChange={handleChange} />
            </div>
            <div>
                <input type="number" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            </div>
            <button onClick={handlePurchase} className="cart-form-btn" type="submit">Check Out</button>
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