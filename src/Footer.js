import React from 'react'
import "./Footer.css";

function Footer() {

    const year = new Date().getFullYear();

    return (
        <div className="footer-container">
            <div className="footer__details">
                <div className="details__section">
                    <h3>Get to Know Us</h3>
                    <ul>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Investor Relations</li>
                        <li>Amazon Devices</li>
                    </ul>
                </div>
                <div className="details__section">
                    <h3>Make Money with Us</h3>
                    <ul>
                        <li>Sell products on Amazon</li>
                        <li>Sell on Amazon Business</li>
                        <li>Sell apps on Amazon</li>
                        <li>Become an Affilate</li>
                        <li>Advertise Your Products</li>
                        <li>Self-Publish with us</li>
                        <li>Host an Amazon Hub</li>
                    </ul>
                </div>
                <div className="details__section">
                    <h3>Amazon Payment Products</h3>
                    <ul>
                        <li>Amazon Business Card</li>
                        <li>Shop with Points</li>
                        <li>Reload Your Balance</li>
                        <li>Amazon Currency Converter</li>
                    </ul>
                </div>
                <div className="details__section">
                    <h3>Let Us Help You</h3>
                    <ul>
                        <li>Amazon and COVID-19</li>
                        <li>Your Account</li>
                        <li>Your Orders</li>
                        <li>Shipping Rates & Policies</li>
                        <li>Returns & Replacements</li>
                        <li>Manage Your Content and Devices</li>
                        <li>Amazon Assistant</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <div className="copyright__details">
                 <p>&copy; {year} Amazonshop | Saandeep Rawat</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
