import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FullNew.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper";


function FullNew() {

  const { id } = useParams();
  const [news, setNews] = useState(false);
  useEffect(() => {
    fetch(`https://3-maktab-back-production.up.railway.app/new/${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {news && (
        <div className="full-new">
          <div className="full-new-img-container">
            <Swiper
              spaceBetween={30}
              autoHeight={true}
              effect={"fade"}
              navigation={true}
              touchEventsTarget={"container"}
              grabCursor={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[EffectFade, Navigation, Autoplay]}
              className="mySwiper"
            >
              {news?.img.map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <img src={item} alt="Rasm1" className="image1" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h1>{news?.title}</h1>
          <p>{news?.description}</p>
          <p>Date: {news?.date}</p>
          <p>Category: {news?.text}</p>
        </div>
      )}
    </>
  );
}

export default FullNew;
