import React from 'react';
import './BreakTime.css'

const BreakTime = ({ breakTime }) => {
    return (
        <div className='mt-4'>
            <h4 className='mb-4'>Add A Break</h4>
            <div className='break-containar'>
                <button onClick={() => { breakTime(10) }} className='card-btn'><span>10</span> min</button>
                <button onClick={() => { breakTime(15) }} className='card-btn'><span>15</span> min</button>
                <button onClick={() => { breakTime(20) }} className='card-btn'><span>20</span> min</button>
                <button onClick={() => { breakTime(25) }} className='card-btn'><span>25</span> min</button>
            </div>
        </div>
    );
};

export default BreakTime;