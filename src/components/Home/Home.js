import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card/Card';
import './Home.css';

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
            <div className='information'>
                <h4>information containar</h4>
            </div>
        </div>
    );
};

export default Home;