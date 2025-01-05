import React, { useState, useEffect } from "react";
import "./teacher.css";
import "../general.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper";
// import Leader from "../../image/user.png";
import { useTranslation } from "react-i18next";


function Teacher() {
  const { t } = useTranslation();
  const [info, setInfo] = useState();

  useEffect(() => {
    fetch("https://admin-panel-production-abfb.up.railway.app/teacher")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data)
        console.log(data);
        window.scrollTo(0, 0);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div className="teacher" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">
      <div className="teacherBox" >
        <span className="bounce" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('about.animateTitle')}</span>
        <h2 className="newsTitle" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('teacher.teacherTitle')}</h2>
        <span className="border" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <span className="kvadrat" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <span className="border" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <p className="newSubtitle" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('teacher.teacherSubTitle')}</p>
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
          {
            info && info.map((item, index) => (
              <SwiperSlide>
                <div className="teacherItems" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">
                  <div className="teacherItem">
                    <img src={item.img} alt="teacher" className="t1" />

                    <div className="teacherInfo">
                      <h2 className="leaderName teacherName">
                        {item.name}
                      </h2>
                      <h3 className="teacherPosition">
                      {item.job}
                      </h3>
                      <h4 className="teacherExperience">Tajribasi: {item.experience}</h4>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
}

export default Teacher;
