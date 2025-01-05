import React, { useState, useEffect } from 'react'
import "./about.css"
import { useTranslation } from "react-i18next";


function About() {
  const { t } = useTranslation();

  const [info, setInfo] = useState();

  useEffect(() => {
    fetch("https://admin-panel-production-abfb.up.railway.app/info")
      .then((res) => res.json())
      .then((data) => setInfo(data[0]))
      .catch((error) => console.error("Error:", error));
  }, []);
  // console.log(info);

  return (
    <div className='about' id='about'>
      <span className="bounce" data-aos="fade-up" data-aos-duration="1500">{t('about.animateTitle')}</span>
      <h2 className='aboutTitle' data-aos="fade-up" data-aos-duration="2000">{t('about.aboutTitle')}</h2>
      <div className='aboutBox'>
        <div className='aboutBoxInfo' data-aos="fade-right" data-aos-duration="600" data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h1 className='school-name'>Sho'rchi tuman 3-son Politexnikumi</h1>
          <p className='schoolAbout'>{info && info.description}</p>
        </div>
        <div className='aboutBoxImg' data-aos="fade-left" data-aos-duration="600" data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <img src={info && info.img} alt='maktab' className='maktab' />
        </div>
      </div>
    </div>
  )
}

export default About