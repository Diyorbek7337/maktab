import React from "react";
import Tadbir from "../../image/tadbir.jpg";
import "./news.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useTranslation } from "react-i18next";


function News() {
  const { t } = useTranslation();
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
           
            <SwiperSlide>
              <div className="tadbirItem">
                <div className="tadbirImg">
                  <img src={Tadbir} alt="tadbir" />
                </div>
                <div className="newInfo">
                  <h2 className="tadbirName">«G'uncha» oromgohi</h2>
                  <span className="solid"></span>
                  <p className="date">22.06.2022</p>
                  <p className="tadbirInfo">
                    Sho'rchi tumani 1 - sonli maktabda tashkil etilgan «G'uncha»
                    oromgohi faoliyatidan lavhalar.
                  </p>
                  <a href="#" className="batafsil">
                  {t('news.newsMore')}
                  </a>
                  <div className="batafsilWindow">
                    
                  </div>
                </div>
              </div>
              
              
            </SwiperSlide>
            <SwiperSlide>
              <div className="tadbirItem">
                <div className="tadbirImg">
                  <img src={Tadbir} alt="tadbir" />
                </div>
                <div className="newInfo">
                  <h2 className="tadbirName">«G'uncha» oromgohi</h2>
                  <span className="solid"></span>
                  <p className="date">22.06.2022</p>
                  <p className="tadbirInfo">
                    Sho'rchi tumani 1 - sonli maktabda tashkil etilgan «G'uncha»
                    oromgohi faoliyatidan lavhalar.
                  </p>
                  <a href="#" className="batafsil">
                  {t('news.newsMore')}
                  </a>
                </div>
              </div>
              
              
            </SwiperSlide>
            <SwiperSlide>
              <div className="tadbirItem">
                <div className="tadbirImg">
                  <img src={Tadbir} alt="tadbir" />
                </div>
                <div className="newInfo">
                  <h2 className="tadbirName">«G'uncha» oromgohi</h2>
                  <span className="solid"></span>
                  <p className="date">22.06.2022</p>
                  <p className="tadbirInfo">
                    Sho'rchi tumani 1 - sonli maktabda tashkil etilgan «G'uncha»
                    oromgohi faoliyatidan lavhalar.
                  </p>
                  <a href="#" className="batafsil">
                  {t('news.newsMore')}
                  </a>
                </div>
              </div>
              
              
            </SwiperSlide>
            <SwiperSlide>
              <div className="tadbirItem">
                <div className="tadbirImg">
                  <img src={Tadbir} alt="tadbir" />
                </div>
                <div className="newInfo">
                  <h2 className="tadbirName">«G'uncha» oromgohi</h2>
                  <span className="solid"></span>
                  <p className="date">22.06.2022</p>
                  <p className="tadbirInfo">
                    Sho'rchi tumani 1 - sonli maktabda tashkil etilgan «G'uncha»
                    oromgohi faoliyatidan lavhalar.
                  </p>
                  <a href="#" className="batafsil">
                  {t('news.newsMore')}
                  </a>
                </div>
              </div>
              
              
            </SwiperSlide>
            <SwiperSlide>
              <div className="tadbirItem">
                <div className="tadbirImg">
                  <img src={Tadbir} alt="tadbir" />
                </div>
                <div className="newInfo">
                  <h2 className="tadbirName">«G'uncha» oromgohi</h2>
                  <span className="solid"></span>
                  <p className="date">22.06.2022</p>
                  <p className="tadbirInfo">
                    Sho'rchi tumani 1 - sonli maktabda tashkil etilgan «G'uncha»
                    oromgohi faoliyatidan lavhalar.
                  </p>
                  <a href="#" className="batafsil">
                  {t('news.newsMore')}
                  </a>
                </div>
              </div>
              
              
            </SwiperSlide>
            <SwiperSlide>
              <div className="tadbirItem">
                <div className="tadbirImg">
                  <img src={Tadbir} alt="tadbir" />
                </div>
                <div className="newInfo">
                  <h2 className="tadbirName">«G'uncha» oromgohi</h2>
                  <span className="solid"></span>
                  <p className="date">22.06.2022</p>
                  <p className="tadbirInfo">
                    Sho'rchi tumani 1 - sonli maktabda tashkil etilgan «G'uncha»
                    oromgohi faoliyatidan lavhalar.
                  </p>
                  <a href="#" className="batafsil">
                  {t('news.newsMore')}
                  </a>
                </div>
              </div>
              
              
            </SwiperSlide>
            <SwiperSlide>
              <div className="tadbirItem">
                <div className="tadbirImg">
                  <img src={Tadbir} alt="tadbir" />
                </div>
                <div className="newInfo">
                  <h2 className="tadbirName">«G'uncha» oromgohi</h2>
                  <span className="solid"></span>
                  <p className="date">22.06.2022</p>
                  <p className="tadbirInfo">
                    Sho'rchi tumani 1 - sonli maktabda tashkil etilgan «G'uncha»
                    oromgohi faoliyatidan lavhalar.
                  </p>
                  <a href="#" className="batafsil">
                  {t('news.newsMore')}
                  </a>
                </div>
              </div>
              
              
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default News;
