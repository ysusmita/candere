"use client";
import { useState } from "react"
export default function page() {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section], // Toggle the visibility of the section
        }));
    };

    return (
        <>
        <footer className="mob_dn">
        <div className="newsletter">
            <p>Sign up for our offer updates:</p>
            <input type="email" placeholder="Your email address" />
            <input type="text" placeholder="Your mobile number" />
            <button>SUBSCRIBE NOW</button>
        </div>
    <div className="footer-container">

        <div className="footer-sections">
            <div className="footer-column">
                <p className="footer_header">
                    ABOUT US
                </p>
                <ul>
                    <li><a href="#">About Our Company</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Offers T&Cs</a></li>
                    <li><a href="#">Customer Reviews</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>

            <div className="footer-column">
            <p className="footer_header">WHY CANDERE?</p>
                <ul>
                    <li><a href="#">15-Day Returns</a></li>
                    <li><a href="#">Cancel & Refund</a></li>
                    <li><a href="#">Lifetime Exchange</a></li>
                    <li><a href="#">DGRP</a></li>
                    <li><a href="#">Certified Jewellery</a></li>
                    <li><a href="#">Candere Wallet</a></li>
                </ul>
            </div>

            <div className="footer-column">
            <p className="footer_header">EXPERIENCE CANDERE</p>
                <ul>
                    <li><a href="#">Refer And Earn</a></li>
                    <li><a href="#">DigiGold</a></li>
                    <li><a href="#">Lookbook</a></li>
                    <li><a href="#">Stylery Blog</a></li>
                    <li><a href="#">Video Gallery</a></li>
                    <li><a href="#">Order Tracking</a></li>
                    <li><a href="#">Virtual Try On</a></li>
                </ul>
            </div>

            <div className="footer-column">
            <p className="footer_header">JEWELLERY GUIDES</p>
                <ul>
                    <li><a href="#">Diamond Education</a></li>
                    <li><a href="#">Gemstone Education</a></li>
                    <li><a href="#">Metal Education</a></li>
                    <li><a href="#">Size Guide</a></li>
                    <li><a href="#">Gold Rate Guide</a></li>
                    <li><a href="#">Jewellery Care</a></li>
                </ul>
            </div>

            <div className="footer-column">
            <p className="footer_header">CONTACT US</p>
                <ul>
                    <li> <a> India +91 22 61066262</a></li>
                    <li><a>(9am-7pm, 6 days a week)</a> </li>
                    <li><a href="mailto:support@candere.com">support@candere.com</a></li>
                    <li><a href="#">Find Experience Centre</a></li>
                    <li><a href="#">Kalyan Store Locator</a></li>
                    <li><a href="#">Kalyan Jewellers Website</a></li>
                    <li><a href="#">Kalyan Stores</a></li>
                </ul>
            </div>
            <div className="social-media">
            <p className="footer_header">FOLLOW US</p>
            <div className="social_icon_wrap">
            <div><img src="https://www.candere.com/media/home_page_images/social/facebook_color_1.svg"/></div>
            <div><img src="https://www.candere.com/media/home_page_images/social/instagram_color_1.svg"/></div>
            <div><img src="https://www.candere.com/media/home_page_images/social/wikipedia_color_1.svg"/></div>
            <div><img src="https://www.candere.com/media/home_page_images/social/youtube_color_1.svg"/></div>
            <div><img src="https://www.candere.com/media/home_page_images/social/pinterest_color_1.svg"/></div>
            <div><img src="https://www.candere.com/media/home_page_images/social/wikipedia_color_1.svg"/></div>
            </div>
            
        </div>
        </div>

        

        <div className="footer-bottom">
            <p>&copy; 2025 CANDERE.COM . ALL RIGHTS RESERVED. SITE MAP</p>
            <p>We Accept: VISA | MasterCard | Paytm | RuPay | Cash on Delivery | PayPal | AMEX</p>
        </div>
    </div>
</footer>
        
        <footer className="desk_dn">
            <div className="newsletter">
            <p className="title">Get Our Latest Updates</p>
                <p>Subscribe and be the first one to know our new updates</p>
                <input type="email" placeholder="Your email address" />
                <input type="text" placeholder="Your mobile number" />
                <button>SUBSCRIBE NOW</button>
            </div>
        <div className="footer-container">

            <div className="footer-sections">
                <div className="footer-column">
                    <p className="footer_header" onClick={() => toggleSection("aboutUs")}>
                        ABOUT US
                        <span className={`toggle-icon ${openSections["aboutUs"] ? "open" : ""}`}>
                {openSections["aboutUs"] ? "-" : "+" }
              </span>
                    </p>
                    {openSections["aboutUs"] && (
                    <ul>
                        <li><a href="#">About Our Company</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Offers T&Cs</a></li>
                        <li><a href="#">Customer Reviews</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                    )}
                </div>

                <div className="footer-column">
                <p className="footer_header" onClick={() => toggleSection("whycandere")}>WHY CANDERE?
                <span className={`toggle-icon ${openSections["whycandere"] ? "open" : ""}`}>
                {openSections["whycandere"] ? "-" : "+" }
              </span>
                </p>
                {openSections["whycandere"] && (
                    <ul>
                        <li><a href="#">15-Day Returns</a></li>
                        <li><a href="#">Cancel & Refund</a></li>
                        <li><a href="#">Lifetime Exchange</a></li>
                        <li><a href="#">DGRP</a></li>
                        <li><a href="#">Certified Jewellery</a></li>
                        <li><a href="#">Candere Wallet</a></li>
                    </ul>
                    )}
                </div>

                <div className="footer-column">
                <p className="footer_header" onClick={() => toggleSection("EXPERIENCE")}>EXPERIENCE CANDERE
                <span className={`toggle-icon ${openSections["EXPERIENCE"] ? "open" : ""}`}>
                {openSections["EXPERIENCE"] ? "-" : "+" }
              </span>
                </p>
                {openSections["EXPERIENCE"] && (
                    <ul>
                        <li><a href="#">Refer And Earn</a></li>
                        <li><a href="#">DigiGold</a></li>
                        <li><a href="#">Lookbook</a></li>
                        <li><a href="#">Stylery Blog</a></li>
                        <li><a href="#">Video Gallery</a></li>
                        <li><a href="#">Order Tracking</a></li>
                        <li><a href="#">Virtual Try On</a></li>
                    </ul>
                     )}
                </div>

                <div className="footer-column">
                <p className="footer_header" onClick={() => toggleSection("JEWELLERY")}>JEWELLERY GUIDES
                <span className={`toggle-icon ${openSections["JEWELLERY"] ? "open" : ""}`}>
                {openSections["JEWELLERY"] ? "-" : "+" }
              </span>
                </p>
                {openSections["JEWELLERY"] && (
                    <ul>
                        <li><a href="#">Diamond Education</a></li>
                        <li><a href="#">Gemstone Education</a></li>
                        <li><a href="#">Metal Education</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">Gold Rate Guide</a></li>
                        <li><a href="#">Jewellery Care</a></li>
                    </ul>
                     )}
                </div>

                <div className="footer-column">
                <p className="footer_header" onClick={() => toggleSection("CONTACT")}>CONTACT US
                <span className={`toggle-icon ${openSections["CONTACT"] ? "open" : ""}`}>
                {openSections["CONTACT"] ? "-" : "+" }
              </span>
                </p>
                {openSections["CONTACT"] && (
                    <ul>
                        <li> <a> India +91 22 61066262</a></li>
                        <li><a>(9am-7pm, 6 days a week)</a> </li>
                        <li><a href="mailto:support@candere.com">support@candere.com</a></li>
                        <li><a href="#">Find Experience Centre</a></li>
                        <li><a href="#">Kalyan Store Locator</a></li>
                        <li><a href="#">Kalyan Jewellers Website</a></li>
                        <li><a href="#">Kalyan Stores</a></li>
                    </ul>
                )}
                </div>
                <div className="social-media">
                <p className="footer_header">FOLLOW US</p>
                <div className="social_icon_wrap">
                <div><img src="https://www.candere.com/media/home_page_images/social/facebook_color_1.svg"/></div>
                <div><img src="https://www.candere.com/media/home_page_images/social/instagram_color_1.svg"/></div>
                <div><img src="https://www.candere.com/media/home_page_images/social/wikipedia_color_1.svg"/></div>
                <div><img src="https://www.candere.com/media/home_page_images/social/youtube_color_1.svg"/></div>
                <div><img src="https://www.candere.com/media/home_page_images/social/pinterest_color_1.svg"/></div>
                <div><img src="https://www.candere.com/media/home_page_images/social/wikipedia_color_1.svg"/></div>
                </div>
                
            </div>
            </div>

            

            <div className="footer-bottom">
                <p>&copy; 2025 CANDERE.COM . ALL RIGHTS RESERVED. SITE MAP</p>
                <p>We Accept: VISA | MasterCard | Paytm | RuPay | Cash on Delivery | PayPal | AMEX</p>
            </div>
        </div>
    </footer>
    </>
 
    );

}