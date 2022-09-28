import React from 'react';
import './BreakTime.css'

const BreakTime = () => {
    return (
        <div className='mt-4'>
            <h4 className='mb-3'>Add A Break</h4>
            <div className='break-containar'>
                <button className='card-btn'><span>10</span> min</button>
                <button className='card-btn'><span>15</span> min</button>
                <button className='card-btn'><span>20</span> min</button>
                <button className='card-btn'><span>25</span> min</button>
            </div>
        </div>
    );
};

export default BreakTime;