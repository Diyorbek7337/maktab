import React from "react";
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
  return (
    <div className="main" id="main">
      <Swiper
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
        <SwiperSlide>
          <img src={Rasm1} alt="Rasm1" className="image1" />
          {/* <h2 className="swiperTitle">1-Sonli Umumiy O'rta ta'lim maktabiga xush kelibsiz</h2> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Rasm2} alt="Rasm2" className="image1" />
          {/* <h2 className="swiperTitle">1-Sonli Umumiy O'rta ta'lim maktabiga xush kelibsiz</h2> */}
        </SwiperSlide>
      </Swiper>
      <About/>
      <News/>
      <Statistics/>
    </div>
  );
}

export default Main;
