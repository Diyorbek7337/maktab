import React, {useState, useEffect} from "react";
import "./teacher.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Leader from "../../image/user.png";
// import T1 from "../../image/t1.jpg"
// import T2 from "../../image/t2.jpg"
// import T3 from "../../image/t3.jpg"
// import T4 from "../../image/t4.png"
// import T5 from "../../image/t5.jpg"
import { useTranslation } from "react-i18next";


function Teacher() {
  const { t } = useTranslation();
  const [info, setInfo] = useState();

  useEffect(() => {
    fetch("https://3-maktab-back-production.up.railway.app/teacher")
      .then((res) => res.json())
      .then((data) => setInfo(data))
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
                <img src={item.img} alt="teacher" className="t1"/>
                  
                  <div className="teacherInfo">
                    <h2 className="leaderName teacherName">
                    {item.lastName} {item.firstName}
                    </h2>
                    <h3 className="teacherPosition">
                    {t('teacher.teacherPosition')}
                    </h3>
                    <h4 className="teacherExperience">{t('teacher.teacherYear1')}</h4>
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
