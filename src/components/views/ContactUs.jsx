import '../footer/footer.css';

const ContactUs = () => {
    return <div className="container">
        <h1>Contact Us</h1>
        <form className='contact-us'>
            <div>
                <label>First Name: </label>
                <input type="text" />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" />
            </div>
            <div>
                <label>Phone: </label>
                <input type="number" />
            </div>
            <div>
                <label>Subject: </label>
                <input type="text" />
            </div>
            <div>
                <label>Message: </label>
                <textarea></textarea>
            </div>
            <button onClick={(e) => e.preventDefault()} className='contact-send-btn' type="submit">Send</button>
        </form>
    </div>;
};

export default ContactUs;