import React, { useEffect, useState } from 'react'
import './leadership.css'
import "../general.css"
import { useTranslation } from "react-i18next";

function Leadership() {
    const [info, setInfo] = useState();
    useEffect(() => {
        fetch("https://admin-panel-production-abfb.up.railway.app/leadership")
            .then((res) => res.json())
            .then((data) => {
                setInfo(data)
                window.scrollTo(0, 0);
            })
            .catch((error) => console.error("Error:", error));
    }, []);
    const { t } = useTranslation();
    return (
        <div className='leadership' id='leadership'>
            <div className='leaderBox'>
                <span className="bounce" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('about.animateTitle')}</span>
                <h2 className='leaderTitle' data-aos="fade-up" data-aos-duration="2000">{t('leader.leaderTitle')}</h2>
                <span className="border" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <span className="kvadrat" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
        <span className="border" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>   
                <div className='leaderContainer'>
                    {info && info.map((item, index) => (
                        <div key={index} className='leaderItem' data-aos="flip-left" data-aos-duration="1200">
                            <img className='leaderUser' src={item.img} alt='user' />
                            <div className='leaderInfo'>
                                <h2 className='leaderName'>{item.name}</h2>
                                <h3 className='leaderPosition'>{item.status}</h3>
                                <h4 className='telefon'>{t('leader.phone')} <span className='phone'>{item.phone}</span></h4>
                                <h4 className='telefon'>Email: <span className='phone'>{item.email}</span></h4>
                                <h4 className='telefon'>{t('leader.qabul')} <span className='phone'>{item.admission}</span></h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Leadership