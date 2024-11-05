import React from 'react'
import './leadership.css'
import { useTranslation } from "react-i18next";
import Direktor from "../../image/direktor.png.jpg"
import Direktor1 from "../../image/direktor1.jpg"
import Direktor2 from "../../image/direktor2-removebg-preview.png"

function Leadership() {

    const { t } = useTranslation();
  return (
    <div className='leadership' id='leadership'>
        <div className='leaderBox'>
        <span className="bounce" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('about.animateTitle')}</span>
        <h2 className='leaderTitle' data-aos="fade-up" data-aos-duration="2000">{t('leader.leaderTitle')}</h2>
            <div className='leaderContainer'>
                <div className='leaderItem' data-aos="flip-left" data-aos-duration="1200">
                    <img className='leaderUser' src={Direktor} alt='user'/>
                    <div className='leaderInfo'>
                        <h2 className='leaderName'>Egamberdiyeva Nigora Choriyevna</h2>
                        <h3 className='leaderPosition'>{t('leader.leader')}</h3>
                        <h4 className='telefon'>{t('leader.phone')} <span className='phone'>+99890 522-99-30</span></h4>
                        <h4 className='telefon'>Email: <span className='phone'>direktor@gmail.com</span></h4>
                        <h4 className='telefon'>{t('leader.qabul')} <span className='phone'>{t('leader.kun')}</span></h4>
                    </div>
                </div>
                <div className='leaderItem' data-aos="flip-up" data-aos-duration="1200">
                    <img className='leaderUser' src={Direktor1} alt='user'/>
                    <div className='leaderInfo'>
                        <h2 className='leaderName'>Xolto'rayev O'rol Yuldoshovich</h2>
                        <h3 className='leaderPosition'>{t('leader.leader1')}</h3>
                        <h4 className='telefon'>{t('leader.phone')} <span className='phone'>+99891 588-78-07</span></h4>
                        <h4 className='telefon'>Email: <span className='phone'>direktor@gmail.com</span></h4>
                        <h4 className='telefon'>{t('leader.qabul')} <span className='phone'>{t('leader.kun')}</span></h4>
                    </div>
                </div>
                <div className='leaderItem' data-aos="flip-right" data-aos-duration="1200">
                    <img className='leaderUser' src={Direktor2} alt='user' id='davron'/>
                    <div className='leaderInfo'>
                        <h2 className='leaderName'>Alimov Davron Xaydaraliyevich</h2>
                        <h3 className='leaderPosition'>{t('leader.leader1')}</h3>
                        <h4 className='telefon'>{t('leader.phone')} <span className='phone'>+99899 422-80-07</span></h4>
                        <h4 className='telefon'>Email: <span className='phone'>direktor@gmail.com</span></h4>
                        <h4 className='telefon'>{t('leader.qabul')} <span className='phone'>{t('leader.kun')}</span></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Leadership