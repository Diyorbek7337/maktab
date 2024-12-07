import React, {useEffect, useState} from "react";
import "./news.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


function News() {
  const { t } = useTranslation();
  const [info, setInfo] = useState();

  useEffect(() => {
    fetch("https://3-maktab-back-production.up.railway.app/new")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  // console.log(info);
  return (
    <div className="news" id="news" data-aos="fade-up">
      <div className="newsBox">
        <span className="bounce" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">{t('about.animateTitle')}</span>
        <h2 className="newsTitle" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">{t('news.newsTitle')}</h2>
        <span className="border" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <span className="kvadrat" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <span className="border" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <p className="newSubtitle" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
        {t('news.newsSubtitle')}
        </p>
        <div className="newItems" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
          <Swiper
            style={{
              "--swiper-pagination-bullet-inactive-opacity": "1",
            
            }}
            slidesPerView={3}
            // spaceBetween={30}
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
          992: {
            slidesPerView: 3,
            
          },
        }}
            modules={[Pagination]}
            className="mySwiper newsSwiper"
          >
           
          {
            info && info.map((item, index) => (
              <SwiperSlide>
              <div className="tadbirItem">
                <div className="tadbirImg">
                  <img src={item.img[0]} alt="tadbir" />
                </div>
                <div className="newInfo">
                  <h2 className="tadbirName">{item.title}</h2>
                  <span className="solid"></span>
                  <p className="date">{item.date}</p>
                  <p className="tadbirInfo">
                    {item.description}
                  </p>
                  <Link to={`fullnew/${item._id}`} className="batafsil">
                  Batafsil
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            ))
          }
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default News;
