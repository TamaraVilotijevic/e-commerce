import './home.css';
import specialOffer from '../../assets/special-offer.jpg';
import { useNavigate } from 'react-router-dom';
import api from "../../services/api";
import { useEffect, useState } from 'react';
import { FaArrowDown } from "react-icons/fa6";

const Home = () => {
    const navigate = useNavigate();
    const [mainProduct, setMainProduct] = useState(undefined);

    useEffect(() => {
        api.get(`/products/6`)
        .then((res) => {
            setMainProduct(res.data);
        })
        .catch(err => console.log('Error', err));
    }, []);

    return <main className="home-wrapper">
        <div className='special-offer'>
            <img src={specialOffer} alt="special-offer" />
        </div>
        <div className='main-product-wrapper'>
            <h1>Check it out <FaArrowDown /></h1>
            {mainProduct && 
            (<div className='main-product' onClick={() => navigate('/products/6')}>
                <img src={mainProduct.image} alt={mainProduct.title} />
                <div>
                    <span className='old-price'>$240</span> 
                    <span className='new-price'>${mainProduct.price}</span>
                </div>
            </div>)}
            <button className='button' onClick={() => navigate('/products')}>Shop all products &#187;</button>
            <button className='button back-btn' onClick={() => navigate('/products/6')}>View product &#187;</button>
        </div>
    </main>;
};

export default Home;