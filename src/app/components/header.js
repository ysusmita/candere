"use client";
import {useState} from "react"
export default function page() {
    const [activeSection, setActiveSection] = useState(null);

    const handleMouseEnter = (id) => {
        setActiveSection(id);
    };

    const handleMouseLeave = (bool) => {
            if(bool === false ){
                console.log("2==>",bool)
                setActiveSection(null);
            }
    };

    return (
        <header className="header_container">
            <div className="order_container">
                <div className="order_wrapper">
                    <div className="dflex mob_dn">
                        <img className="mr_8" src="https://www.candere.com/media/home_page_images/mega_menu/icons/Order-Tracking.svg" />
                        <span >Order Tracking</span>
                    </div>
                    
                    
                    <div>
                        <div className="news-ticker">
                            <div className="list_wrap">
                                <div className="list">
                                    Workwear Essentials under 30K -
                                        <button className="btn23">Shop now</button>
                                </div>
                                <div className="list">
                                        <button className="btn23">Flat 20% off</button>
                                    on Diamond &amp; Solitaire prices
                                </div>
                                <div className="list">
                                    Don't wait, Express it -
                                        <button className="btn23">Ships in 24 hrs</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="contact_btn_wrap mob_dn" >
                        <div className="dflex">
                            <svg className="mr_8" width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.19985 10.9H9.23319C9.63319 10.8667 9.93319 10.4667 9.93319 10.0333V7.46666C9.93319 7.03333 9.56652 6.63333 9.13319 6.63333H8.29985C8.23319 6.63333 8.09985 6.7 8.09985 6.8V10.6667C8.09985 10.7333 8.16652 10.8667 8.29985 10.8667H9.19985V10.9Z" fill="white"></path><path d="M5.93325 0C2.86659 0 0.333252 2.5 0.333252 5.6V8.53333C0.333252 8.6 0.399919 8.73333 0.533252 8.73333H1.56659C1.63325 8.73333 1.76659 8.66667 1.76659 8.53333V8.13333C1.76659 8.06667 1.69992 7.93333 1.56659 7.93333H1.19992C1.16659 7.93333 1.16659 7.93333 1.13325 7.9C1.09992 7.9 1.09992 7.83333 1.09992 7.83333V5.56667C1.09992 2.86667 3.29992 0.666667 5.96659 0.666667C8.63325 0.666667 10.8666 2.86667 10.8666 5.56667V7.83333C10.8666 7.9 10.7999 7.93333 10.7333 7.93333H10.3999C10.3333 7.93333 10.2333 8 10.2333 8.13333V8.53333C10.2333 8.6 10.2999 8.73333 10.3999 8.73333H11.3999C11.4666 8.73333 11.5666 8.66667 11.5666 8.53333V5.6C11.4999 2.53333 8.96659 0 5.93325 0Z" fill="white"></path><path d="M3.53337 6.66666H2.70003C2.2667 6.66666 1.8667 7.03332 1.8667 7.49999V10.0667C1.8667 10.5 2.23337 10.9 2.70003 10.9H3.53337C3.60003 10.9 3.60003 10.9 3.6667 10.8333C3.6667 10.8333 3.73337 10.7667 3.73337 10.7V6.76666L3.70003 6.73332C3.6667 6.69999 3.60003 6.66666 3.53337 6.66666Z" fill="white"></path><path d="M11.4333 8.93332H10.9C10.7667 8.93332 10.7333 8.99999 10.7333 9.09999V10.3667C10.7333 11.3 9.93333 12.1333 8.96667 12.1333H7.46667V11.4667C7.46667 11.2333 7.26667 11.0333 7 11.0333H5.26667C4.6 11.0333 4 11.6 4 12.3V12.8C4 13.4667 4.56667 14.0667 5.26667 14.0667H7C7.23333 14.0667 7.46667 13.8667 7.46667 13.6V13H8.96667C10.4 13 11.5667 11.8333 11.5667 10.4V9.19999V9.09999C11.5667 8.96665 11.5 8.93332 11.4333 8.93332Z" fill="white"></path></svg>
                            <span >Contact Us</span>
                        </div>
                        <div className=" dflex blog_wrap">
                            <svg className="mr_8" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1107_2824)"><path d="M13 2.33334L12 1.33334L11 2.33334L10 1.33334L9 2.33334L8 1.33334L7 2.33334L6 1.33334L5 2.33334L4 1.33334L3 2.33334L2 1.33334V14.6667L3 13.6667L4 14.6667L5 13.6667L6 14.6667L7 13.6667L8 14.6667L9 13.6667L10 14.6667L11 13.6667L12 14.6667L13 13.6667L14 14.6667V1.33334L13 2.33334ZM12.6667 12.7267H3.33333V3.27334H12.6667V12.7267ZM4 10H12V11.3333H4V10ZM4 7.33334H12V8.66668H4V7.33334ZM4 4.66668H12V6.00001H4V4.66668Z" fill="white"></path></g><defs><clipPath id="clip0_1107_2824"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
                            <span >blog</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_mid">
                <div className="dflex">
                    <div className="logo">
                        <img src="https://www.candere.com/media/logo/stores/1/Candere_Full_logo_1.svg" />
                    </div>
                </div>
                <div className="dflex  header_mid_wrap mob_dn">
                    <div className="dflex header_mid_left">
                        <div className="dflex store_wrap">
                            <div className="dflex">
                                <img src="https://www.candere.com/static/version1740396150/frontend/Codilar/candere_desktop/en_US/Magento_Search/images/findStore.png" className="mr_8" />
                                <span className="font12">Find Store</span>
                            </div>
                            <div className="bottom_bor"></div>
                        </div>
                        <div className="dflex store_wrap">
                            <div className="dflex">
                                <img src="https://www.candere.com/static/version1740396150/frontend/Codilar/candere_desktop/en_US/Magento_Search/images/referFriend.png" className="mr_8" />
                                <span className="font12">Refer & Earn</span>
                            </div>
                            <div className="bottom_bor"></div>
                        </div>
                        <div className="dflex store_wrap">
                            <div className="dflex">
                                <img src="https://www.candere.com/static/version1740396150/frontend/Codilar/candere_desktop/en_US/Magento_Search/images/expressDelivery.png" className="mr_8" />
                                <span className="font12">Express delivery</span>
                            </div>
                            <div className="bottom_bor"></div>
                        </div>

                    </div>
                    <div className="header_mid_right">
                        <div className="search-container">
                            <input type="text" placeholder="Search for" className="search-input" />
                            <button className="search-button">
                                <img src="https://www.candere.com/static/version1740396150/frontend/Codilar/candere_desktop/en_US/Magento_Search/images/icons/searchWhite.svg" />
                            </button>
                        </div>

                    </div>
                </div>

                <div className="header_right dflex">
                    <div className="dflex  mob_dn">
                        <svg className="mr_8" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1126_2501)"><path d="M8.00008 1.33334C5.20008 1.33334 2.66675 3.48001 2.66675 6.80001C2.66675 8.92001 4.30008 11.4133 7.56008 14.2867C7.81341 14.5067 8.19341 14.5067 8.44675 14.2867C11.7001 11.4133 13.3334 8.92001 13.3334 6.80001C13.3334 3.48001 10.8001 1.33334 8.00008 1.33334ZM8.00008 8.00001C7.26675 8.00001 6.66675 7.40001 6.66675 6.66668C6.66675 5.93334 7.26675 5.33334 8.00008 5.33334C8.73341 5.33334 9.33341 5.93334 9.33341 6.66668C9.33341 7.40001 8.73341 8.00001 8.00008 8.00001Z" fill="#1A6770"></path></g><defs><clipPath id="clip0_1126_2501"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
                        <span>Pincode</span>
                    </div>
                    <div className=" user_icon mob_dn">
                        <img src="https://www.candere.com/static/version1740396150/frontend/Codilar/candere_desktop/en_US/Codilar_Mystore/images/icons/userFilled.svg" />
                    </div>
                    <div className=" user_icon like_icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1249 16.775C10.4916 17.35 9.51655 17.35 8.88322 16.7667L8.79155 16.6833C4.41655 12.725 1.55822 10.1333 1.66655 6.9C1.71655 5.48333 2.44155 4.125 3.61655 3.325C5.81655 1.825 8.53322 2.525 9.99988 4.24166C11.4665 2.525 14.1832 1.81666 16.3832 3.325C17.5582 4.125 18.2832 5.48333 18.3332 6.9C18.4499 10.1333 15.5832 12.725 11.2082 16.7L11.1249 16.775Z" fill="#1A6770"></path></svg>
                        <span data-bind="text: wishlist().counter ? parseInt(wishlist().counter) : 0 " className="counter qty">0</span>
                    </div>
                    <div className=" user_icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9999 4.99999H13.3333C13.3333 3.15832 11.8416 1.66666 9.99992 1.66666C8.15825 1.66666 6.66659 3.15832 6.66659 4.99999H4.99992C4.08325 4.99999 3.33325 5.74999 3.33325 6.66666V16.6667C3.33325 17.5833 4.08325 18.3333 4.99992 18.3333H14.9999C15.9166 18.3333 16.6666 17.5833 16.6666 16.6667V6.66666C16.6666 5.74999 15.9166 4.99999 14.9999 4.99999ZM8.33325 8.33332C8.33325 8.79166 7.95825 9.16666 7.49992 9.16666C7.04159 9.16666 6.66659 8.79166 6.66659 8.33332V6.66666H8.33325V8.33332ZM9.99992 3.33332C10.9166 3.33332 11.6666 4.08332 11.6666 4.99999H8.33325C8.33325 4.08332 9.08325 3.33332 9.99992 3.33332ZM13.3333 8.33332C13.3333 8.79166 12.9583 9.16666 12.4999 9.16666C12.0416 9.16666 11.6666 8.79166 11.6666 8.33332V6.66666H13.3333V8.33332Z" fill="#1A6770"></path></svg>
                    </div>

                </div>
            </div>
            <div className="navbar_wrappwr" >
                <ul className="nav_wrap">
                    <li >Bestsellers </li>
                    <li >
                        <span className="arr_icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.71204 3.96466C3.57068 3.54064 5.72775 2.50177 5.95811 0C5.95811 0 5.07853 0.14841 4.63874 0.233215C4.19895 0.318021 2 0.339223 2 1.4629V4.57951C2 4.60071 2 4.62191 2 4.66431C2.02094 4.60071 2.23037 4.21908 2.71204 3.96466ZM6 6C5.8534 4.5371 4.99476 3.60424 4.42932 3.13781C3.84293 3.60424 3.25654 3.92226 2.85864 4.11308L2.79581 4.15548C2.35602 4.36749 2.18848 4.72792 2.16754 4.77032L2.06283 4.93993C2.25131 5.32155 2.71204 5.59717 3.46597 5.74558C3.73822 5.80919 4.19895 5.87279 4.82722 5.87279C5.14136 5.87279 5.95812 6 6 6Z" fill="#1EB6C7"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.3834 7.96466C12.2526 7.54064 14.4364 6.50177 14.6696 4C14.6696 4 13.7791 4.14841 13.3339 4.23322C12.8887 4.31802 10.6625 4.33922 10.6625 5.4629V8.57951C10.6625 8.60071 10.6625 8.62191 10.6625 8.66431C10.6837 8.60071 10.8958 8.21908 11.3834 7.96466ZM14.712 10C14.5636 8.5371 13.6943 7.60424 13.1219 7.13781C12.5283 7.60424 11.9346 7.92226 11.5318 8.11308L11.4682 8.15548C11.023 8.36749 10.8533 8.72792 10.8321 8.77032L10.7261 8.93993C10.917 9.32155 11.3834 9.59717 12.1466 9.74558C12.4223 9.80919 12.8887 9.87279 13.5247 9.87279C13.8427 9.87279 14.6696 10 14.712 10Z" fill="#1EB6C7"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.71204 15.9162C3.57068 15.4974 5.72775 14.4712 5.95811 12C5.95811 12 5.07853 12.1466 4.63874 12.2304C4.19895 12.3141 2 12.3351 2 13.445V16.5236C2 16.5445 2 16.5654 2 16.6073C2.02094 16.5445 2.23037 16.1675 2.71204 15.9162ZM6 17.9267C5.8534 16.4817 4.99476 15.5602 4.42932 15.0995C3.84293 15.5602 3.25654 15.8743 2.85864 16.0628L2.79581 16.1047C2.35602 16.3141 2.18848 16.6702 2.16754 16.712L2.06283 16.8796C2.25131 17.2565 2.71204 17.5288 3.46597 17.6754C3.73822 17.7382 4.19895 17.801 4.82722 17.801C5.14136 17.801 5.95812 17.9267 6 17.9267Z" fill="#1EB6C7"></path>
                        </svg></span>

                        <span className="new_li">New Arrivals</span>  </li>
                    <li
                    onMouseEnter={() => handleMouseEnter("rings_section")}
                    onMouseLeave={()=>handleMouseLeave()}
>Rings </li>
                    <li onMouseEnter={() => handleMouseEnter("Earrings_section")}
                    onMouseLeave={()=>handleMouseLeave()}>Earrings </li>
                    <li onMouseEnter={() => handleMouseEnter("Necklace_section")}
                    onMouseLeave={()=>handleMouseLeave()}>Necklace </li>
                    <li onMouseEnter={() => handleMouseEnter("Bangles_section")}
                    onMouseLeave={()=>handleMouseLeave()}>Bangles & Bracelets </li>
                    <li onMouseEnter={() => handleMouseEnter("Solitaires_section")}
                    onMouseLeave={()=>handleMouseLeave()}>Solitaires </li>
                    <li onMouseEnter={() => handleMouseEnter("Mangalsutras_section")}
                    onMouseLeave={()=>handleMouseLeave()}>Mangalsutras & Pendants </li>
                    <li>Other Jewellery </li>
                    <li>Gifts </li>
                    <li >
                        <div className="offer_li">
                            <span className="offer_icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1152_5573)">
                                        <path d="M14.723 3.70456H14.5274L8.57241 6.97381H4.26827C1.91479 6.97381 0 8.8885 0 11.2421C0 13.3471 1.53289 15.0965 3.53985 15.444L2.15993 20.2955H6.9209L8.28178 15.5112H8.57241L14.5276 18.7799H14.7232C15.984 18.7799 17.01 17.7541 17.01 16.4931V5.99122C17.0097 4.73053 15.9837 3.70456 14.723 3.70456ZM5.76971 18.7708H4.17861L5.01533 15.829H6.60643L5.76971 18.7708ZM10.9659 15.0856L8.96342 13.9864H4.26827C2.75522 13.9864 1.52448 12.7551 1.52448 11.2421C1.52448 9.72903 2.75522 8.49829 4.26827 8.49829H8.96342L10.9659 7.39889V15.0856ZM15.4852 16.4931C15.4852 16.8575 15.228 17.1627 14.8863 17.2376L12.4903 15.9225V6.56216L14.8863 5.24677C15.2283 5.3217 15.4852 5.62716 15.4852 5.99152V16.4931Z" fill="white"></path>
                                        <path d="M19.9353 7.95218L18.845 9.04246C19.4083 9.82279 19.7442 10.7776 19.7442 11.8112C19.7442 12.8451 19.4083 13.7999 18.845 14.5799L19.9353 15.6702C20.7694 14.6054 21.2687 13.2659 21.2687 11.8112C21.2687 10.3566 20.7694 9.01712 19.9353 7.95218Z" fill="white"></path>
                                        <path d="M21.8756 6.01187L20.7942 7.09324C21.8443 8.38119 22.4755 10.0238 22.4755 11.8112C22.4755 13.599 21.8443 15.2413 20.7942 16.5292L21.8756 17.6106C23.1996 16.0429 23.9999 14.0192 23.9999 11.8112C23.9999 9.60331 23.1996 7.57953 21.8756 6.01187Z" fill="white"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1152_5573">
                                            <rect width="24" height="24" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg></span>
                            Offers

                        </div>

                    </li>
                </ul>

            </div>
            <section
                className={activeSection === "rings_section" ? "shop_section visible" : "hidden"}
                // onMouseEnter={() =>{ console.log("enter"); setIsHovered(true)}}
                onMouseLeave={() => {
                    // console.log("leaving")
                    // setIsHovered(()=>false);  
                    handleMouseLeave(false);
                }}>
                <div className="shop_wrapper">

                    <div className=" " >
                        <p className="shop_text">SHOP BY STYLE</p>
                        <ul className="shop_style_wrap">
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Engagement" /> ENGAGEMENT</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/mangalsutras/Mangalsutra-rings_040124.jpg" alt="Solitaire" /> SOLITAIRE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Ring-Solitaire_040124.jpg" alt="Casual" /> CASUAL</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Couple-bands_040124.jpg" alt="Classic" /> CLASSIC</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Casual_040124.jpg" alt="Navratna" /> NAVRATNA</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Mangalsutra" /> MANGALSUTRA RING</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Couple Bands" /> COUPLE BANDS</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Eternity" /> ETERNITY</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Three Stone" /> THREE STONE</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP BY MATERIAL</h3>
                        <ul>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/Solitaire.svg" /> DIAMOND</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/multi_color_platinum.svg" /> PLATINUM</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/Gemstone.svg" /> GEMSTONE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/multi_color_gold.svg" /> GOLD</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP FOR</h3>
                        <ul>
                            <li>UNDER ₹10K</li>
                            <li>₹10K - ₹20K</li>
                            <li>₹20K - ₹30K</li>
                            <li>₹30K - ₹50K</li>
                            <li>₹50K - ₹75K</li>
                            <li>ABOVE ₹75K</li>
                            <li>WOMEN</li>
                            <li>MEN</li>
                            <li>KIDS</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP BY OCCASION</h3>
                        <ul className="occasion_wrap">
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/daily_wear_rings.jpg" alt="Daily Wear" /> DAILY WEAR</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/casual_outings_rings.jpg" alt="Casual Outings" /> CASUAL OUTINGS</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/festive_rings.jpg" alt="Festive" /> FESTIVE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/anniversary_rings.jpg" /> ANNIVERSARY</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/wedding_rings.jpg" alt="Wedding" /> WEDDING</li>
                        </ul>
                    </div>
                </div>

                <div className="shop_highlight ">
                    <div className="shop_text">
                        <img src="https://www.candere.com/media/wysiwyg/mobileMenu/sideBanner/ring.jpg" alt="Rings" />
                        <p>Sharp and Fashionable Rings to elevate your style!</p>

                    </div>
                    <a href="#" className="view-all">VIEW ALL DESIGNS</a>
                </div>
            </section>
            <section
                className={activeSection === "Earrings_section" ? "shop_section visible" : "hidden"}
                // onMouseEnter={() =>{ console.log("enter"); setIsHovered(true)}}
                onMouseLeave={() => {
                    // console.log("leaving")
                    // setIsHovered(()=>false);  
                    handleMouseLeave(false);
                }}>
                <div className="shop_wrapper">

                    <div className=" " >
                        <p className="shop_text">SHOP BY STYLE</p>
                        <ul className="shop_style_wrap">
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/Studs_040124.jpg" alt="Engagement" /> STUDS</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/Jhumkas_040124.jpg" alt="Solitaire" /> JHUMAKA</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/Drops-Dangles_040124.jpg" alt="Casual" /> DANGLES</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/Hoops-Huggies_040124.jpg" alt="Classic" /> HOOP</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/Sui-Dhaga_040124.jpg" alt="Navratna" /> SUI DHAGA</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/Solitaire_040124.jpg" alt="Mangalsutra" />SOLITAIRE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/Navratna_040124.jpg" alt="Couple Bands" /> NAVRATNA</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP BY MATERIAL</h3>
                        <ul>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/Solitaire.svg" /> DIAMOND</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/multi_color_platinum.svg" /> PLATINUM</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/Gemstone.svg" /> GEMSTONE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/multi_color_gold.svg" /> GOLD</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP FOR</h3>
                        <ul>
                            <li>UNDER ₹10K</li>
                            <li>₹10K - ₹20K</li>
                            <li>₹20K - ₹30K</li>
                            <li>₹30K - ₹50K</li>
                            <li>₹50K - ₹75K</li>
                            <li>ABOVE ₹75K</li>
                            <li>WOMEN</li>
                            <li>MEN</li>
                            <li>KIDS</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP BY OCCASION</h3>
                        <ul className="occasion_wrap">
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/casual_outings_earring.jpg" alt="Daily Wear" /> DAILY WEAR</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/casual_outings_earring.jpg" alt="Casual Outings" /> CASUAL OUTINGS</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/festive_earring.jpg" alt="Festive" /> FESTIVE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/anniversary_earring.jpg" /> ANNIVERSARY</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/wedding_earring.jpg" alt="Wedding" /> WEDDING</li>
                        </ul>
                    </div>
                </div>

                <div className="shop_highlight ">
                    <div className="shop_text">
                        <img src="https://www.candere.com/media/wysiwyg/mobileMenu/sideBanner/ring.jpg" alt="Rings" />
                        <p>Sharp and Fashionable Rings to elevate your style!</p>

                    </div>
                    <a href="#" className="view-all">VIEW ALL DESIGNS</a>
                </div>
            </section>
            <section
                className={activeSection === "Necklace_section" ? "shop_section visible" : "hidden"}
                // onMouseEnter={() =>{ console.log("enter"); setIsHovered(true)}}
                onMouseLeave={() => {
                    // console.log("leaving")
                    // setIsHovered(()=>false);  
                    handleMouseLeave(false);
                }}>
                <div className="shop_wrapper">

                    <div className=" " >
                        <p className="shop_text">SHOP BY STYLE</p>
                        <ul className="shop_style_wrap">
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Engagement" /> ENGAGEMENT</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Solitaire" /> SOLITAIRE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Casual" /> CASUAL</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Classic" /> CLASSIC</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Navratna" /> NAVRATNA</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Mangalsutra" /> MANGALSUTRA RING</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Couple Bands" /> COUPLE BANDS</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Eternity" /> ETERNITY</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Three Stone" /> THREE STONE</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP BY MATERIAL</h3>
                        <ul>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/Solitaire.svg" /> DIAMOND</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/multi_color_platinum.svg" /> PLATINUM</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/Gemstone.svg" /> GEMSTONE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/multi_color_gold.svg" /> GOLD</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP FOR</h3>
                        <ul>
                            <li>UNDER ₹10K</li>
                            <li>₹10K - ₹20K</li>
                            <li>₹20K - ₹30K</li>
                            <li>₹30K - ₹50K</li>
                            <li>₹50K - ₹75K</li>
                            <li>ABOVE ₹75K</li>
                            <li>WOMEN</li>
                            <li>MEN</li>
                            <li>KIDS</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP BY OCCASION</h3>
                        <ul className="occasion_wrap">
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/daily_wear_rings.jpg" alt="Daily Wear" /> DAILY WEAR</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/casual_outings_earring.jpg" alt="Casual Outings" /> CASUAL OUTINGS</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/festive_earring.jpg" alt="Festive" /> FESTIVE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/anniversary_rings.jpg" /> ANNIVERSARY</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/wedding_rings.jpg" alt="Wedding" /> WEDDING</li>
                        </ul>
                    </div>
                </div>

                <div className="shop_highlight ">
                    <div className="shop_text">
                        <img src="https://www.candere.com/media/wysiwyg/mobileMenu/sideBanner/ring.jpg" alt="Rings" />
                        <p>Sharp and Fashionable Rings to elevate your style!</p>

                    </div>
                    <a href="#" className="view-all">VIEW ALL DESIGNS</a>
                </div>
            </section>
            <section
                className={activeSection === "Bangles_section" ? "shop_section visible" : "hidden"}
                // onMouseEnter={() =>{ console.log("enter"); setIsHovered(true)}}
                onMouseLeave={() => {
                    // console.log("leaving")
                    // setIsHovered(()=>false);  
                    handleMouseLeave(false);
                }}>
                <div className="shop_wrapper">

                    <div className=" " >
                        <p className="shop_text">SHOP BY STYLE</p>
                        <ul className="shop_style_wrap">
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Engagement" /> ENGAGEMENT</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Solitaire" /> SOLITAIRE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Casual" /> CASUAL</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Classic" /> CLASSIC</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Navratna" /> NAVRATNA</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Mangalsutra" /> MANGALSUTRA RING</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Couple Bands" /> COUPLE BANDS</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Eternity" /> ETERNITY</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Three Stone" /> THREE STONE</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP BY MATERIAL</h3>
                        <ul>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/Solitaire.svg" /> DIAMOND</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/multi_color_platinum.svg" /> PLATINUM</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/Gemstone.svg" /> GEMSTONE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/multi_color_gold.svg" /> GOLD</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP FOR</h3>
                        <ul>
                            <li>UNDER ₹10K</li>
                            <li>₹10K - ₹20K</li>
                            <li>₹20K - ₹30K</li>
                            <li>₹30K - ₹50K</li>
                            <li>₹50K - ₹75K</li>
                            <li>ABOVE ₹75K</li>
                            <li>WOMEN</li>
                            <li>MEN</li>
                            <li>KIDS</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP BY OCCASION</h3>
                        <ul className="occasion_wrap">
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/daily_wear_rings.jpg" alt="Daily Wear" /> DAILY WEAR</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/casual_outings_earring.jpg" alt="Casual Outings" /> CASUAL OUTINGS</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/festive_earring.jpg" alt="Festive" /> FESTIVE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/anniversary_rings.jpg" /> ANNIVERSARY</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/wedding_rings.jpg" alt="Wedding" /> WEDDING</li>
                        </ul>
                    </div>
                </div>

                <div className="shop_highlight ">
                    <div className="shop_text">
                        <img src="https://www.candere.com/media/wysiwyg/mobileMenu/sideBanner/ring.jpg" alt="Rings" />
                        <p>Sharp and Fashionable Rings to elevate your style!</p>

                    </div>
                    <a href="#" className="view-all">VIEW ALL DESIGNS</a>
                </div>
            </section>
            <section
                className={activeSection === "Solitaires_section" ? "shop_section visible" : "hidden"}
                // onMouseEnter={() =>{ console.log("enter"); setIsHovered(true)}}
                onMouseLeave={() => {
                    // console.log("leaving")
                    // setIsHovered(()=>false);  
                    handleMouseLeave(false);
                }}>
                <div className="shop_wrapper">

                    <div className=" " >
                        <p className="shop_text">SHOP BY STYLE</p>
                        <ul className="shop_style_wrap">
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Engagement" /> ENGAGEMENT</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Solitaire" /> SOLITAIRE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Casual" /> CASUAL</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Classic" /> CLASSIC</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Navratna" /> NAVRATNA</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Mangalsutra" /> MANGALSUTRA RING</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Couple Bands" /> COUPLE BANDS</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Eternity" /> ETERNITY</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Three Stone" /> THREE STONE</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP BY MATERIAL</h3>
                        <ul>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/Solitaire.svg" /> DIAMOND</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/multi_color_platinum.svg" /> PLATINUM</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/Gemstone.svg" /> GEMSTONE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/multi_color_gold.svg" /> GOLD</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP FOR</h3>
                        <ul>
                            <li>UNDER ₹10K</li>
                            <li>₹10K - ₹20K</li>
                            <li>₹20K - ₹30K</li>
                            <li>₹30K - ₹50K</li>
                            <li>₹50K - ₹75K</li>
                            <li>ABOVE ₹75K</li>
                            <li>WOMEN</li>
                            <li>MEN</li>
                            <li>KIDS</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP BY OCCASION</h3>
                        <ul className="occasion_wrap">
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/daily_wear_rings.jpg" alt="Daily Wear" /> DAILY WEAR</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/casual_outings_earring.jpg" alt="Casual Outings" /> CASUAL OUTINGS</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/festive_earring.jpg" alt="Festive" /> FESTIVE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/anniversary_rings.jpg" /> ANNIVERSARY</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/wedding_rings.jpg" alt="Wedding" /> WEDDING</li>
                        </ul>
                    </div>
                </div>

                <div className="shop_highlight ">
                    <div className="shop_text">
                        <img src="https://www.candere.com/media/wysiwyg/mobileMenu/sideBanner/ring.jpg" alt="Rings" />
                        <p>Sharp and Fashionable Rings to elevate your style!</p>

                    </div>
                    <a href="#" className="view-all">VIEW ALL DESIGNS</a>
                </div>
            </section>
            <section
                className={activeSection === "Mangalsutras_section" ? "shop_section visible" : "hidden"}
                // onMouseEnter={() =>{ console.log("enter"); setIsHovered(true)}}
                onMouseLeave={() => {
                    // console.log("leaving")
                    // setIsHovered(()=>false);  
                    handleMouseLeave(false);
                }}>
                <div className="shop_wrapper">

                    <div className=" " >
                        <p className="shop_text">SHOP BY STYLE</p>
                        <ul className="shop_style_wrap">
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Engagement" /> ENGAGEMENT</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Solitaire" /> SOLITAIRE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Casual" /> CASUAL</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Classic" /> CLASSIC</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Navratna" /> NAVRATNA</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Mangalsutra" /> MANGALSUTRA RING</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Couple Bands" /> COUPLE BANDS</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Eternity" /> ETERNITY</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/Enagagement-rings_040124.jpg" alt="Three Stone" /> THREE STONE</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP BY MATERIAL</h3>
                        <ul>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/Solitaire.svg" /> DIAMOND</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/multi_color_platinum.svg" /> PLATINUM</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/Gemstone.svg" /> GEMSTONE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/multi_color_gold.svg" /> GOLD</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP FOR</h3>
                        <ul>
                            <li>UNDER ₹10K</li>
                            <li>₹10K - ₹20K</li>
                            <li>₹20K - ₹30K</li>
                            <li>₹30K - ₹50K</li>
                            <li>₹50K - ₹75K</li>
                            <li>ABOVE ₹75K</li>
                            <li>WOMEN</li>
                            <li>MEN</li>
                            <li>KIDS</li>
                        </ul>
                    </div>

                    <div className="shop-category">
                        <h3 className="shop_text">SHOP BY OCCASION</h3>
                        <ul className="occasion_wrap">
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/daily_wear_rings.jpg" alt="Daily Wear" /> DAILY WEAR</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/casual_outings_earring.jpg" alt="Casual Outings" /> CASUAL OUTINGS</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/earring/festive_earring.jpg" alt="Festive" /> FESTIVE</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/anniversary_rings.jpg" /> ANNIVERSARY</li>
                            <li><img src="https://www.candere.com/media/wysiwyg/mobileMenu/sub_category/rings/wedding_rings.jpg" alt="Wedding" /> WEDDING</li>
                        </ul>
                    </div>
                </div>

                <div className="shop_highlight ">
                    <div className="shop_text">
                        <img src="https://www.candere.com/media/wysiwyg/mobileMenu/sideBanner/ring.jpg" alt="Rings" />
                        <p>Sharp and Fashionable Rings to elevate your style!</p>

                    </div>
                    <a href="#" className="view-all">VIEW ALL DESIGNS</a>
                </div>
            </section>

        </header>
    );
}
