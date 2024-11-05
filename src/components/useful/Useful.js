import React from "react";
import "./useful.css";
import Gerb1 from '../../image/image-removebg-preview.png'
import Xalq from '../../image/xalq.jpg'
import Davlat from '../../image/davlat.png'
import Ochiq from '../../image/ochiq.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useTranslation } from "react-i18next";


function Useful() {

  const { t } = useTranslation();
  return (
    <div className="useful" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">
      <div className="usefulBox">
        <span className="bounce" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('about.animateTitle')}</span>
        <h2 className="newsTitle" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('useful.title')}</h2>
        <span className="border" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <span className="kvadrat" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <span className="border" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <p className="newSubtitle" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('useful.subtitle')}</p>
        <div className="usefulItems" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">
        <Swiper
          style={{
            "--swiper-pagination-bullet-inactive-opacity": "1",
          }}
          
          slidesPerView={3}
          spaceBetween={30}
          
          grabCursor={true}
          touchEventsTarget={"container"}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
          280: {
            slidesPerView: 1,
            
          },
          600: {
            slidesPerView: 2,
           
          },
          768: {
            slidesPerView: 3,
            
          },
        }}
          modules={[Pagination]}
          className="mySwiper"
        >
            <SwiperSlide>
            <div className="usefulItem">
                <div className="usefulImg">
                    <img src={Gerb1} alt='gerb1'/>
                </div>
                <div className="usefulInfo">
                    <a href='https://president.uz/uz'>{t('useful.president')}</a>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="usefulItem">
                <div className="usefulImg">
                    <img src={Xalq} alt='xalq'/>
                </div>
                <div className="usefulInfo">
                    <a href='https://uzedu.uz/uz'>{t('useful.xalq')}</a>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="usefulItem">
                <div className="usefulImg">
                    <img src={Davlat} alt='davlat'/>
                </div>
                <div className="usefulInfo">
                    <a href='https://my.gov.uz/oz'>{t('useful.portal')}</a>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="usefulItem">
                <div className="usefulImg">
                    <img src={Ochiq} alt='ochiq'/>
                </div>
                <div className="usefulInfo">
                    <a href='https://data.gov.uz/'>{t('useful.malumot')}</a>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="usefulItem">
                <div className="usefulImg">
                    <img src={Gerb1} alt='gerb1'/>
                </div>
                <div className="usefulInfo">
                    <a href='https://president.uz/uz'>{t('useful.president')}</a>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="usefulItem">
                <div className="usefulImg">
                    <img src={Xalq} alt='xalq'/>
                </div>
                <div className="usefulInfo">
                    <a href='https://uzedu.uz/uz'>{t('useful.xalq')}</a>
                </div>
            </div>
            </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Useful;
