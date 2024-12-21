import React, { useState, useEffect } from "react";
import "./directions.css";
import "../general.css";
import { useTranslation } from "react-i18next";
function Directions() {
  const [data, setData] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    fetch(`https://admin-panel-production-abfb.up.railway.app/direction`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.reverse());
        window.scrollTo(0, 0);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="directions container">
      <div className="directions-title">
      <span className="bounce" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('about.animateTitle')}</span>
        <h2 className="newsTitle" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('teacher.teacherTitle')}</h2>
        <span className="border" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <span className="kvadrat" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <span className="border" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>   
      </div>
      {data &&
        data.map((item, index) => (
          <div className="directions-item-back">
            <div key={index} className="directions-item">
              <div className="directions-img">
                <img src={item.img} alt="img" />
              </div>
              <div className="directions-info">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Directions;
