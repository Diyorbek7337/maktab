import React from "react";
import './contact.css'
import ReactInputMask  from 'react-input-mask';
import { useTranslation } from "react-i18next";


function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact" id="contact" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">
      <div className="contactBox">
        <span className="bounce" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('about.animateTitle')}</span>
        <h2 className="newsTitle" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('contact.contactTitle')}</h2>
        <span className="border" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <span className="kvadrat" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <span className="border" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <p className="newSubtitle" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">
        {t('contact.contactSubTitle')}
        </p>
        <div>
        <form className="contactContainer" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">

            <input type='text' id="name" name="name" className="contactItem" placeholder={t("contact.name")}/>
            <input type='text' id="name" name="fname" className="contactItem" placeholder={t("contact.surname")}/>
            <ReactInputMask placeholder='+998 XX XXX XX XX' required mask="+\9\9\8 (99) 999-99-99" className="contactItem"/>
            <textarea type='text' id="textArea" className="textArea contactItem" placeholder={t("contact.comment")}/>
            <button type="submit" className="contactButton">{t("contact.send")}</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
