import React from 'react'
import "./Footer.css";

function Footer() {

    return (
        <div className="footer-container">
            <div className="footer__details">
                <div className="details__section">
                    <h3>Get to Know Us</h3>
                    <ul>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Ecommerceify</li>
                        <li>Investor Relations</li>
                        <li>Ecommerceify Devices</li>
                    </ul>
                </div>
                <div className="details__section">
                    <h3>Make Money with Us</h3>
                    <ul>
                        <li>Sell products on Ecommerceify</li>
                        <li>Sell on Ecommerceify Business</li>
                        <li>Sell apps on Ecommerceify</li>
                        <li>Become an Affilate</li>
                        <li>Advertise Your Products</li>
                        <li>Self-Publish with us</li>
                        <li>Host an Ecommerceify Hub</li>
                    </ul>
                </div>
                <div className="details__section">
                    <h3>Ecommerceify Payment Products</h3>
                    <ul>
                        <li>Ecommerceify Business Card</li>
                        <li>Shop with Points</li>
                        <li>Reload Your Balance</li>
                        <li>Ecommerceify Currency Converter</li>
                    </ul>
                </div>
                <div className="details__section">
                    <h3>Let Us Help You</h3>
                    <ul>
                        <li>Ecommerceify and COVID-19</li>
                        <li>Your Account</li>
                        <li>Your Orders</li>
                        <li>Shipping Rates & Policies</li>
                        <li>Returns & Replacements</li>
                        <li>Manage Your Content and Devices</li>
                        <li>Ecommerceify Assistant</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <div className="copyright__details">
                 <p>&copy; 2000-2022 | Ecommerceify</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
