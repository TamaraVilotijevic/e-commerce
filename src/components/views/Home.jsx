import './home.css';
import shopping from '../../assets/shopping.svg';
import { useNavigate } from 'react-router-dom';
import HomeSlider from '../slider/HomeSlider';

const Home = () => {
    const navigate = useNavigate();

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
    </main>;
};

export default Home;