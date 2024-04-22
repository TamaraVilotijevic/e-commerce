import './home.css';
import shopping from '../../assets/shopping.svg';
import newsletter from '../../assets/newsletter.png';
import { useNavigate } from 'react-router-dom';
import HomeSlider from '../slider/HomeSlider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useState } from 'react';

const Home = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const notify = () => toast("You have subscribed to our newsletter!", {
        icon: <MdOutlineMarkEmailRead />
    });

    const handleSubscribe = (e) => {
        e.preventDefault();
        const isValid = e.target.checkValidity();
        if (isValid) {
            notify();
            setEmail('');
        }
    }

    return <main className="home-wrapper">
        <header className='main-header'>
            <div className='shop-banner'>
                <img src={shopping} alt="shop-banner" />
            </div>
            <div className='banner-text'>
                <h1><span>Free shipping</span> <br />only today on all orders</h1>
                <button className='button' onClick={() => navigate('/products')}>Shop now &#187;</button>
            </div>
        </header>
        <div className='slider-wrapper'>
            <h2>TOP RATED PRODUCTS</h2>
            <HomeSlider />
        </div>
        <section className='news-section-wrapper'>
            <div className='news-section'>
                <div className='news-img'>
                    <img src={newsletter} alt="newsletter" />
                </div>
                <h2>Subscribe to our newsletter!</h2>
                <p>Stay up to date with our latest news and products.</p>
                <form className='news-form' onSubmit={handleSubscribe}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required placeholder='Your email address' />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
        <ToastContainer position="top-center" autoClose={2000} draggable draggablePercent={60} />
    </main>;
};

export default Home;