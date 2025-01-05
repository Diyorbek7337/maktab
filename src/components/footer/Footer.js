import React, { useEffect, useState } from 'react'
import './footer.css'
import { MdNavigateNext } from 'react-icons/md'
import { useTranslation } from "react-i18next";
import { FaChevronUp } from 'react-icons/fa';
import { NavLink } from "react-router-dom";


function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const { t } = useTranslation();
    const [info, setInfo] = useState();

    useEffect(() => {
        fetch("https://admin-panel-production-abfb.up.railway.app/info")
            .then((res) => res.json())
            .then((data) => setInfo(data[0].contacts))
            .catch((error) => console.error("Error:", error));
    }, []);
    // console.log(info);

    return (
        <>
            <div className='footer' data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">
                <div className='footerBox'>
                    <div className='footerItems'>
                        <div className='footerItem' data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">
                            <h1 className='FooterTitle'>{t('footer.navigate1')}</h1>
                            <p className='footerSubtitle'>
                                {t('footer.subtitle')}
                            </p>

                        </div>
                        <div className='footerItem' data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">
                            <h1 className='FooterTitle'>{t('footer.navigate2')}</h1>
                            <ul className='footerNav'>
                                <li className='footerNavItems'><MdNavigateNext className='next' /> <NavLink to="">{t("nav.main")}</NavLink></li>
                                <li className='footerNavItems'><MdNavigateNext className='next' /> <NavLink to="directions">Yo'nalishlar</NavLink></li>
                                <li className='footerNavItems'><MdNavigateNext className='next' /> <NavLink to="leader">{t("nav.leader")}</NavLink></li>
                                <li className='footerNavItems'><MdNavigateNext className='next' /> <NavLink to="teacher">{t("nav.teacher")}</NavLink></li>
                                <li className='footerNavItems'><MdNavigateNext className='next' /> <NavLink to="contact">{t("nav.contact")}</NavLink></li>
                            </ul>
                        </div>
                        <div className='footerItem' data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">
                            <h1 className='FooterTitle'>{t('footer.navigate3')}</h1>
                            <div className='footerInfo'>
                                <p><b>{t('footer.manzil')}:</b> Sho‘rchi Tumani, Oqqo‘rg‘on MFY,  Mustaqillik Ko‘chasi, 73-Uy</p>
                                <p><b>{t('leader.phone')}</b> <a href='tel:+998762287554'>+998762287554</a></p>
                                <p><b>{t('footer.email')}:</b> <a href='mailto:info@shurchi3politexnikum.uz'>info@shurchi3politexnikum.uz</a></p>
                                <p><b>{t('footer.faks')}:</b> {info && info.faks}</p>
                            </div>
                        </div>
                        <div className='footerItem' data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">
                            <h1 className='FooterTitle'>{t('footer.navigate4')}</h1>
                            <div className='map'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6354.8387102961!2d67.830022!3d37.985006!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDU5JzA2LjAiTiA2N8KwNDknNDguMSJF!5e1!3m2!1suz!2s!4v1734727752880!5m2!1suz!2s" width="100" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='top' type='button' onClick={scrollToTop}><FaChevronUp /></button>
            </div>

            <div className='footerContainer' >
                <p>Copyright © 2024 - React by Diyorbek</p>
            </div>
        </>
    )
}

export default Footer