import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
    return <footer className="footer-wrapper">
        <div className="footer">
            <p>© 2024 E-commerce Shop by <b>Tamara Vilotijevic</b></p>
            <div className="footer-links-wrapper">
                <Link className="footer-link" to={"/privacy-policy"}>Privacy Policy</Link>
                <Link className="footer-link" to={"/terms-of-service"}>Terms Of Service</Link>
                <Link className="footer-link" to={"/contact-us"}>Contact Us</Link>
            </div>
        </div>
    </footer>;
};

export default Footer;