import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BreakTime from './BreakTime/BreakTime';
import Card from './Card/Card';
import './Home.css';
import MyInfo from './MyInfo/MyInfo';

const Home = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])
    return (
        <div className='home-container'>

            <div className='cards'>
                {
                    cards.map(card => <Card card={card} key={card.id}></Card>)
                }

            </div>
            <div className='information card'>
                <MyInfo></MyInfo>
                <BreakTime></BreakTime>

            </div>
        </div>
    );
};

export default Home;