import React, { useState, useEffect } from 'react'
import "./statistics.css"
import { useTranslation } from "react-i18next";
import { FaUser } from 'react-icons/fa'
import { FaPaintBrush } from 'react-icons/fa'
import { FaKey } from 'react-icons/fa'
import CountUp from 'react-countup';
import { FaGraduationCap } from 'react-icons/fa'


function Statistics() {
    const [info, setInfo] = useState();

    useEffect(() => {
        fetch("https://admin-panel-production-abfb.up.railway.app/info")
            .then((res) => res.json())
            .then((data) => setInfo(data[0].statistics))
            .catch((error) => console.error("Error:", error));
    }, []);
    // console.log(info);

    const { t } = useTranslation();
    return (
        <div className='statistics' data-aos="fade-up" data-aos-duration="1500">
            <div className='statisticsBox'>
                <span className="bounce" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('about.animateTitle')}</span>
                <h1 className='statisticName' data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('statistics.statisticsTitle')}</h1>
                <span className='border' data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span><span className='kvadrat' data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span><span className='border' data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up"></span>
                <p className='statistics-subtitle' data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">{t('statistics.statisticsSubtitle')}</p>
                <div className='statistic-container'>
                    <div className='statistic-item'>
                        <div className='statistic-icon'>
                            <FaUser />
                        </div>
                        <div className='counter'><CountUp end={info && info.teachers} /></div>
                        <div className='statisticInfo'>
                            {t('statistics.statisticsInfo1')}
                        </div>
                    </div>
                    <div className='statistic-item'>
                        <div className='statistic-icon'>
                            <FaGraduationCap />
                        </div>
                        <div className='counter'><CountUp end={info && info.students} /></div>
                        <div className='statisticInfo'>
                            {t('statistics.statisticsInfo2')}
                        </div>
                    </div>
                    <div className='statistic-item'>
                        <div className='statistic-icon'>
                            <FaKey />
                        </div>
                        <div className='counter'><CountUp end={info && info.classes} /></div>
                        <div className='statisticInfo'>
                            {t('statistics.statisticsInfo3')}
                        </div>
                    </div>
                    <div className='statistic-item'>
                        <div className='statistic-icon'>
                            <FaPaintBrush />
                        </div>
                        <div className='counter'><CountUp end={info && info.subjects} /></div>
                        <div className='statisticInfo'>
                            {t('statistics.statisticsInfo4')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics