import React from 'react';
import Card from './Card/Card';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='card'>
                <h4>Cart container</h4>
                <Card></Card>
            </div>
            <div className='information'>
                <h4>information containar</h4>
            </div>
        </div>
    );
};

export default Home;