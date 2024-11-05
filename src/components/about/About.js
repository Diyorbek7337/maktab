import React from 'react'
import "./about.css"
import Maktab from "../../image/1-maktab.jpg"
import { useTranslation } from "react-i18next";


function About() {
  const { t } = useTranslation();

  return (
    <div className='about' id='about'>
    <span className="bounce" data-aos="fade-up" data-aos-duration="1500">{t('about.animateTitle')}</span>
    <h2 className='aboutTitle' data-aos="fade-up" data-aos-duration="2000">{t('about.aboutTitle')}</h2>
        <div className='aboutBox'>
            <div className='aboutBoxInfo' data-aos="fade-right" data-aos-duration="600" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <h1 className='school-name'>{t('about.animateTitle')}</h1>
                <p className='schoolAbout'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='aboutBoxImg' data-aos="fade-left" data-aos-duration="600" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <img src={Maktab} alt='maktab' className='maktab'/>
            </div>
        </div>
    </div>
  )
}

export default About