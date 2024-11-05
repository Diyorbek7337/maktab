import React from 'react';
import Navbar from '../navbar/Navbar';
import "./errorpage.css"

const Errorpage = () => {
    return (
        <div>
            <Navbar/>
            <div className='errorMessage container'>
                <h2>Bu sahifa topilmadi iltimos boshqa sahifaga o'ting!</h2>
            </div>
        </div>
    );
};

export default Errorpage;