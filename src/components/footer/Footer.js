import React, { useEffect, useState } from 'react'
import './footer.css'
import { MdNavigateNext } from 'react-icons/md'
import { useTranslation } from "react-i18next";
import { FaChevronUp } from 'react-icons/fa';


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
                                <li className='footerNavItems'><MdNavigateNext className='next' /> <a href="#main">{t("nav.main")}</a></li>
                                <li className='footerNavItems'><MdNavigateNext className='next' /> <a href="#main">{t("nav.about")}</a></li>
                                <li className='footerNavItems'><MdNavigateNext className='next' /> <a href="#main">{t("nav.news")}</a></li>
                                <li className='footerNavItems'><MdNavigateNext className='next' /> <a href="#main">{t("nav.leader")}</a></li>
                                <li className='footerNavItems'><MdNavigateNext className='next' /> <a href="#main">{t("nav.contact")}</a></li>
                            </ul>
                        </div>
                        <div className='footerItem' data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">
                            <h1 className='FooterTitle'>{t('footer.navigate3')}</h1>
                            <div className='footerInfo'>
                                <p><b>{t('footer.manzil')}:</b> {info && info.address}</p>
                                <p><b>{t('leader.phone')}</b> {info && info.phone}</p>
                                <p><b>{t('footer.email')}:</b> {info && info.email}</p>
                                <p><b>{t('footer.faks')}:</b> {info && info.faks}</p>
                            </div>
                        </div>
                        <div className='footerItem' data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">
                            <h1 className='FooterTitle'>{t('footer.navigate4')}</h1>
                            <div className='map'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2271.945441783783!2d67.79317743000274!3d37.99654907661317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b56943be7db889%3A0x126b52f2df896529!2s1.Maktab!5e0!3m2!1sru!2s!4v1674062600546!5m2!1sru!2s" width="100" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='top' type='button' onClick={scrollToTop}><FaChevronUp /></button>
            </div>

            <div className='footerContainer' >
                <p>Copyright © 2023 - React by Diyorbek</p>
            </div>
        </>
    )
}

export default Footer