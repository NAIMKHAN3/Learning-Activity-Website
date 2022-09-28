import React from 'react';
import './MyInfo.css';
import img from './img/290349825_3216719191912998_4822497770938285549_n-removebg-preview.png';

const MyInfo = () => {
    return (
        <div className='info-containar'>
            <img src={img} alt="" />
            <div>
                <h5>Naim Khan</h5>
                <h6>Bangladesh</h6>
            </div>
        </div>
    );
};

export default MyInfo;