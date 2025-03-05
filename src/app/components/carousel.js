"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
export default function page() {
    return (
        <>
          <Swiper 
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            loop={true} 
      autoplay={{
        delay: 5000, 
        disableOnInteraction: false, 
        pauseOnMouseEnter: false, // Mouse hover pe bhi na rukke
      }}
      speed={5000} // Smooth continuous scrolling
      slidesPerView={1} // Ek slide dikhane ke liye
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay ]}
            className="mySwiper  mob_dn"
          >
            <SwiperSlide><img src='https://www.candere.com/media/wysiwyg/Limited-Deals_1.jpg'/></SwiperSlide>
            <SwiperSlide><img src='https://www.candere.com/media/wysiwyg/Limited-Deals_1.jpg'/></SwiperSlide>
            <SwiperSlide><img src='https://www.candere.com/media/wysiwyg/wedding-banner.jpg'/></SwiperSlide>
            
          </Swiper>
          <Swiper 
            cssMode={true}
            navigation={false}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            loop={true} 
      autoplay={{
        delay: 5000, 
        disableOnInteraction: false, 
        pauseOnMouseEnter: false, // Mouse hover pe bhi na rukke
      }}
      speed={5000} // Smooth continuous scrolling
      slidesPerView={1} // Ek slide dikhane ke liye
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay ]}
            className="mySwipermb   desk_dn "
          >
            <SwiperSlide><img src='https://www.candere.com/media/home_page_images/mobile_home/Womens-day-mobile-banner_270225.jpg'/></SwiperSlide>
            <SwiperSlide><img src='https://www.candere.com/media/home_page_images/mobile_home/Limited-Deals-Banner-Mobile_270225.jpg'/></SwiperSlide>
            <SwiperSlide><img src='https://www.candere.com/media/home_page_images/mobile_home/msd_270225.jpg'/></SwiperSlide>
            
          </Swiper>
        </>
      );
}