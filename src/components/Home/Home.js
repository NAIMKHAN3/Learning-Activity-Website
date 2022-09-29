import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import BreakTime from './BreakTime/BreakTime';
import Card from './Card/Card';
import './Home.css';
import MyInfo from './MyInfo/MyInfo';
import StudyInfo from './StudyInfo/StudyInfo';

const Home = () => {

    const [cards, setCards] = useState([]);
    const [breaks, setBreaks] = useState(0);
    const [time, setTime] = useState([])
    console.log(time)

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])


    const breakTime = (time) => setBreaks(time);

    const handleMin = (num) => {
        console.log(num)
        const newTime = [...time, num];
        console.log(newTime)

        setTime(newTime);
    }


    return (
        <div className='home-container'>

            <div className='cards'>
                {
                    cards.map(card => <Card card={card} handleMin={handleMin} key={card.id}></Card>)
                }

            </div>
            <div className='information card'>
                <MyInfo></MyInfo>
                <BreakTime breakTime={breakTime}></BreakTime>
                <StudyInfo breaks={breaks} time={time} setTime={setTime}></StudyInfo>

            </div>
        </div>
    );
};

export default Home;