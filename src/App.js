import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/views/Home';
import Cart from './components/views/Cart';
import Products from './components/views/Products';
import SingleProduct from './components/views/SingleProduct';
import PrivacyPolicy from './components/views/PrivacyPolicy';
import TermsOfService from './components/views/TermsOfService';
import ContactUs from './components/views/ContactUs';
import PageNotFound from './components/views/PageNotFound';
import ProductsContextProvider from './context/ProductsContext';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductsContextProvider>
          <CartContextProvider>
            <Navbar />
            <Routes>
              <Route path='/cart' element={<Cart />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/:productId' element={<SingleProduct />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path='/' element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </CartContextProvider>
        </ProductsContextProvider>
      </Router>
    </div>
  );
}

export default App;
