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
      .then((data) => {
        setNews(data);
        window.scrollTo(0, 0);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {news && (
        <div className="full-new">
          <div className="full-new-img-container">
            {news?.img.map((item) => (
              <div className="full-new-img">
                <img src={item} alt="img" />
              </div>
            ))}
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
