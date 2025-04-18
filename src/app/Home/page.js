"use client";
import Header from "../components/header";
import Carousel from "../components/carousel";
import Footer from "../components/footer"
import Watchswiper from "../components/watchswiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function page() {
  const leftBannerRef=useRef(null)
  const rightBannerRef=useRef(null)
  const mainContainerRef=useRef(null)
  const leftProductwrapRef=useRef(null)
  const rightProductwrapRef=useRef(null)
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    gsap.from(leftBannerRef.current,{
      x:-100,
      opacity:0,
      scrollTrigger: {
        trigger: mainContainerRef.current, // The element that triggers the animation
        scroller:"body",
        start: "top 70%", // When the top of the element reaches 80% of the viewport
      }
    })
    gsap.from(rightBannerRef.current,{
      x:100,
      opacity:0,
      scrollTrigger: {
        trigger: rightBannerRef.current, // The element that triggers the animation
        scroller:"body",
        start: "top 70%", // When the top of the element reaches 80% of the viewport
      },
    })    
    gsap.from(".rewards_section",{
      scrub: 2,
      scale:0,
      scrollTrigger:{
        trigger: ".rewards_section", // The element that triggers the animation
        scroller:"body",
        start: "top 80%",
      }
    })
     gsap.from(leftProductwrapRef.current,{
      x:-100,
      opacity:0,
      scrollTrigger: {
        trigger: leftProductwrapRef.current, // The element that triggers the animation
        scroller:"body",
        start: "top 70%", // When the top of the element reaches 80% of the viewport
      }
    })
    gsap.from(rightProductwrapRef.current,{
      x:100,
      opacity:0,
      scrollTrigger: {
        trigger: rightProductwrapRef.current, // The element that triggers the animation
        scroller:"body",
        start: "top 70%", // When the top of the element reaches 80% of the viewport
      },
    })  
    gsap.from(".elegant_img",{
      scrub: 2,
      scale:0,
      scrollTrigger:{
        trigger: ".elegant_img", // The element that triggers the animation
        scroller:"body",
        start: "top 70%",
      }
    })  
  })
  return (
    <><Header />
   <section className="catg_product desk_dn">
    <div className="catg_product_wrap">
      <div className="catg_product_list">
        <img src="https://www.candere.com/media/wysiwyg/homepage/horizontal_menu/Mangalsutra_1_210524.png" />
        <span>Mangalsutra</span>
      </div>
      <div className="catg_product_list">
        <img src="https://www.candere.com/media/wysiwyg/homepage/horizontal_menu/Ring_170124.jpg" />
        <span>Ring</span>
      </div>
      <div className="catg_product_list">
        <img src="https://www.candere.com/media/wysiwyg/homepage/horizontal_menu/Necklace_050624.jpg" />
        <span>Necklace</span>
      </div>
      <div className="catg_product_list">
        <img src="https://www.candere.com/media/wysiwyg/homepage/horizontal_menu/Earring_060524.jpg" />
        <span>Earring</span>
      </div>
      <div className="catg_product_list">
        <img src="https://www.candere.com/media/wysiwyg/homepage/horizontal_menu/Chains_050624.jpg" />
        <span>Chains</span>
      </div>
      <div className="catg_product_list">
        <img src="https://www.candere.com/media/wysiwyg/homepage/horizontal_menu/Solitaire.jpg" />
        <span>Solitaire</span>
      </div>
      <div className="catg_product_list">
        <img src="https://www.candere.com/media/wysiwyg/homepage/horizontal_menu/Bangle_020623.png" />
        <span>Bangle</span>
      </div>
    </div>
   </section>
    <Carousel />
      <div ref={mainContainerRef} className="main_container">
        <div className="offer_banner ">
          <div ref={leftBannerRef} className="offer_left_banner">
            <img src="https://www.candere.com/media/home_page_images/bannerTop/LHS-Workwear_270225.gif" />
          </div>
          <div ref={rightBannerRef} className="offer_right_banner">
            <img src="https://www.candere.com/media/home_page_images/bannerTop/RHS-New-Arrival_270225.jpg" />
          </div>
        </div>
        <div>
          <div className="rewards_section">
            <div className="rewards_section_wrapper">
              <div className="rewards_section_wrapper_left">
                <div >
                  <h2 className="rewards_sub_text">Hey
                    Jewellery Enthusiast!
                  </h2>
                  <p className="rewards_text ">Up to <strong>₹10K</strong> is awaiting to get credited to your promo
                    wallet
                  </p>
                  <p className="rewards_text">Sign up now to claim
                  </p>
                  <a href="https://www.candere.com/survey/customer/index/" className="rewards_btn" data-action-id="89329ab8">Claim Rewards</a>
                </div>
              </div>
              <div className="rewards_section_wrapper_right">
                <div className="rewards_section_img">
                  <img alt="visitor" src="https://storage.googleapis.com/marketing_emailer/emailer_2023/custom/personalization/visitor_image.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-category">
          <div className="heading_wrap">
            <div className="heading">Product Category</div>
            <p className="subheading">So that you don't run out of options to choose from!</p>
          </div>
          <div className="product-grid">
            <div ref={leftProductwrapRef} className="product_wrap">
              <div className="dflex pd_itme">
                <div className="product_item ring_img">
                  <img src="https://www.candere.com/media/home_page_images/product_categories/Ring_210125.jpg" alt="Stunning Rings" />
                  <span className="image_text">Stunning Rings</span>
                </div>
                <div className="product_item ring_img">
                  <img src="https://www.candere.com/media/home_page_images/product_categories/Earrings_210125.jpg" alt="Classy Earrings" />
                  <span className="image_text">Classy Earrings</span>
                </div>
              </div>
              <div className="product_item Mangalsutras_img mob_dn">
                <img src="https://www.candere.com/media/home_page_images/product_categories/Mangalsutra_Desktop_210125.jpg" alt="Versatile Mangalsutras" />
                <span className="Mangalsutras_text">Versatile Mangalsutras</span>
              </div>
            </div>
            <div className="product_item_mb">
            <div className="desk_dn">
            <div className="product_item Mangalsutras_img">
                <img src="https://www.candere.com/media/home_page_images/product_categories/Mangalsutra_Desktop_210125.jpg" alt="Versatile Mangalsutras" />
                <span className="image_text">Versatile Mangalsutras</span>
              </div>
              <div className="product_item Mangalsutras_img gorgeous">
                <img src="https://www.candere.com/media/home_page_images/product_categories/Bracelet_Desktop_210125.jpg" alt="Gorgeous Bracelets" />
                <span className="image_text">Gorgeous Bracelets</span>
              </div>
            </div>
            <div className="product_item elegant_img">
              <img src="https://www.candere.com/media/home_page_images/product_categories/Necklace_Desktop_210125.jpg" alt="Elegant Necklaces" />
              <span className="image_text">Elegant Necklaces</span>
            </div>

            </div>

            <div ref={rightProductwrapRef} className="product_wrap">
              <div className="product_item mob_dn">
                <img src="https://www.candere.com/media/home_page_images/product_categories/Bracelet_Desktop_210125.jpg" alt="Gorgeous Bracelets" />
                <span className="image_text">Gorgeous Bracelets</span>
              </div>
              <div className=" pd_itme">
                <div className="product_item ring_img">
                  <img src="https://www.candere.com/media/home_page_images/product_categories/Pendant_210125.jpg" alt="Dainty Pendants" />
                  <span className="image_text"> Dainty Pendants</span>
                </div>
                <div className="product_item ring_img">
                  <img src="https://www.candere.com/media/home_page_images/product_categories/Chains_210125.jpg" alt="Statement Chains" />
                  <span className="image_text">Statement Chains</span>
                </div>
              </div>
            </div>



          </div>
        </div>
        <section className="collection">
          <div className="heading_wrap">
            <div className="heading">Collections You'll Love</div>
            <p className="subheading">Let's take a glimpse at our featured collections before diving in!</p>
          </div>

          <div className="collection-grid mob_dn">
            <div className="collection-item">
              <img src="https://www.candere.com/media/home_page_images/featured_collection/Oliva_270225.jpg" alt="Oliva" />
            </div>
            <div className="collection-item">
              <img src="https://www.candere.com/media/home_page_images/featured_collection/Evil-eye_270225.jpg" alt="Evil Eye" />
            </div>
            <div className="collection-item">
              <img src="https://www.candere.com/media/home_page_images/featured_collection/Ziva_210125.jpg" alt="Ziva" />
            </div>
          </div>
          <Swiper 
         slidesPerView={1.3}
         centeredSlides={true}
         spaceBetween={30}
         
               mousewheel={true}
               keyboard={true}
               loop={true} 
         autoplay={{
           delay: 3000, 
           disableOnInteraction: false, 
          
         }}
      speed={5000} // Smooth continuous scrolling
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay ]}
            className="collectionSwiper collection-grid  desk_dn "
          >
            <SwiperSlide> <div className="collection-item">
              <img src="https://www.candere.com/media/home_page_images/featured_collection/Oliva_270225.jpg" alt="Oliva" />
            </div></SwiperSlide>
            <SwiperSlide><div className="collection-item">
              <img src="https://www.candere.com/media/home_page_images/featured_collection/Evil-eye_270225.jpg" alt="Evil Eye" />
            </div></SwiperSlide>
            <SwiperSlide><div className="collection-item">
              <img src="https://www.candere.com/media/home_page_images/featured_collection/Ziva_210125.jpg" alt="Ziva" />
            </div></SwiperSlide>
            
          </Swiper>

          <button className="show-more">SHOW ME MORE</button>
        </section>
        <section className="product_collection">
          <div className="heading_wrap">
            <div className="heading">We've Got You Covered!</div>
            <p className="subheading">Whatever you are looking for we have it</p>
          </div>
          <div className="covered_grid mob_dn">
            <div className="covered_item">
              <img src="https://www.candere.com/media/home_page_images/gifting/small-investments_061224.jpg" alt="Brilliant Firsts" />
              <p>Brilliant Firsts</p>
            </div>
            <div className="covered_item">
              <img src="https://www.candere.com/media/home_page_images/gifting/playful-picks_061224.jpg" alt="Your mini-me's" />
              <p>Your mini-me's</p>
            </div>
            <div className="covered_item">
              <img src="https://www.candere.com/media/home_page_images/gifting/gift-memories_061224.jpg" alt="Gift Memories" />
              <p>Gift Memories</p>
            </div>
            <div className="covered_item">
              <img src="https://www.candere.com/media/home_page_images/gifting/pehla-heera_061224.jpg" alt="Daily Diamonds" />
              <p>Daily Diamonds</p>
            </div>
            <div className="covered_item">
              <img src="https://www.candere.com/media/home_page_images/gifting/shadi-ready_061224.jpg" alt="The Bridal Edit" />
              <p>The Bridal Edit</p>
            </div>
            <div className="covered_item">
              <img src="https://www.candere.com/media/home_page_images/gifting/on-a-budget_061224.jpg" alt="Pocket Friendly" />
              <p>Pocket Friendly</p>
            </div>
          </div>
          <Swiper 
      slidesPerView={1.3}
      centeredSlides={true}
      spaceBetween={30}
      
            mousewheel={true}
            keyboard={true}
            loop={true} 
      autoplay={{
        delay: 5000, 
        disableOnInteraction: false, 
       
      }}
      speed={3000} // Smooth continuous scrolling
      // slidesPerView={1} // Ek slide dikhane ke liye
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay ]}
            className="mySwipermb_coverd   desk_dn "
          >
            <SwiperSlide> <div className="covered_item">
              <img src="https://www.candere.com/media/home_page_images/gifting/small-investments_061224.jpg" alt="Brilliant Firsts" />
              <p>Brilliant Firsts</p>
            </div></SwiperSlide>
            <SwiperSlide><div className="covered_item">
              <img src="https://www.candere.com/media/home_page_images/gifting/playful-picks_061224.jpg" alt="Your mini-me's" />
              <p>Your mini-me's</p>
            </div></SwiperSlide>
            <SwiperSlide> <div className="covered_item">
              <img src="https://www.candere.com/media/home_page_images/gifting/gift-memories_061224.jpg" alt="Gift Memories" />
              <p>Gift Memories</p>
            </div></SwiperSlide>
            <SwiperSlide><div className="covered_item">
              <img src="https://www.candere.com/media/home_page_images/gifting/pehla-heera_061224.jpg" alt="Daily Diamonds" />
              <p>Daily Diamonds</p>
            </div></SwiperSlide>
            <SwiperSlide><div className="covered_item">
              <img src="https://www.candere.com/media/home_page_images/gifting/shadi-ready_061224.jpg" alt="The Bridal Edit" />
              <p>The Bridal Edit</p>
            </div></SwiperSlide>
            <SwiperSlide><div className="covered_item">
              <img src="https://www.candere.com/media/home_page_images/gifting/on-a-budget_061224.jpg" alt="Pocket Friendly" />
              <p>Pocket Friendly</p>
            </div></SwiperSlide>
            
          </Swiper>
        </section>
       

        <section className="banner ">
          <div className="container__group">
            <div className="row__group mob_dn">
              <img src="https://www.candere.com/media/home_page_images/bannerPromo/Solitaire-banner_270225.jpg" />
            </div>
            <div className="row__group desk_dn">
              <img src="https://www.candere.com/media/home_page_images/bannerPromo/Solitaire-Mobile-banner_270225.jpg" />
            </div>
          </div>
        </section>
       
        <section className="banner ">
          <div className="container__group">
            <div className="row__group mob_dn">
              <img src="https://www.candere.com/media/home_page_images/store/store_180225.jpg" />
            </div>
            <div className="row__group desk_dn">
              <img src="https://www.candere.com/media/home_page_images/store/storeMobile_180225.jpg" />
            </div>
          </div>
        </section>
        <section>
          <div className="heading_wrap">
            <div className="heading">Handcrafting Precious Memories To Delight You</div>
          </div>
          <div className="handcrafting">
            <div className="handcrafting_wrapper">

            <div className="handcrafting_img_wrap">
              <div className="handcrafting_img">
                <img src="https://www.candere.com/media/home_page_images/social/1_270225.jpg" />
              </div>
              <div className="handcrafting_img">
                <img src="https://www.candere.com/media/home_page_images/social/2_270225.jpg" />
              </div>
            </div>
            <div className="instagram__wrapper--video">
              <video poster="https://www.candere.com/media/home_page_images/d_home2022/instagram_section/video_poster.jpg" autoPlay loop controls muted style={{height: '100%' , width: '100%'}}>
              <source src="https://storage.googleapis.com/marketing_emailer/campaign_300524/Video.mp4" type="video/mp4"/>
              </video>
            </div>
            </div>
           <div className="handcrafting_wrapper">

                <div className="handcrafting_img_wrap">
                  <div className="handcrafting_img">
                    <img src="https://www.candere.com/media/home_page_images/social/1_270225.jpg" />
                  </div>
                  <div className="handcrafting_img">
                    <img src="https://www.candere.com/media/home_page_images/social/2_270225.jpg" />
                  </div>

                </div>
                <div className="handcrafting_img_wrap">
                  <div className="handcrafting_img">
                    <img src="https://www.candere.com/media/home_page_images/social/1_270225.jpg" />
                  </div>
                  <div className="handcrafting_img">
                    <img src="https://www.candere.com/media/home_page_images/social/2_270225.jpg" />
                  </div>
                </div>
           </div>

          </div>
        </section>

      </div>
      <Watchswiper />
      <Footer />
    </>

  );
}
