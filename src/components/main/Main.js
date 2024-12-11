import React, { useState, useEffect } from "react";
import Rasm1 from "../../image/rasm1.jpg";
import Rasm2 from "../../image/rasm2.jpg";
import "./main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Autoplay } from "swiper";
import About from "../about/About";
import News from "../news/News";
import Statistics from "../statistics/Statistics"
function Main() {

  const [info, setInfo] = useState();

  useEffect(() => {
    fetch("https://3-maktab-back-production.up.railway.app/info")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data[0].slider)
        window.scrollTo(0, 0);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  // console.log(info);


  return (
    <div className="main" id="main">
      <Swiper
        autoHeight={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        touchEventsTarget={'container'}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
      >
        {info && info.img.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="Rasm1" className="image1" />
            {/* <h2 className="swiperTitle">1-Sonli Umumiy O'rta ta'lim maktabiga xush kelibsiz</h2> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <About />
      <News />
      <Statistics />
    </div>
  );
}

export default Main;
