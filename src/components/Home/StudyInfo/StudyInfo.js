import React from 'react';

const StudyInfo = ({ breaks }) => {
    return (
        <div>
            <h4 className='mt-5 mb-4'>Study Details</h4>
            <div className='d-flex justify-content-between mb-4'>
                <h6>Study Time</h6>
                <h6>15min</h6>
            </div>
            <div className='d-flex justify-content-between'>
                <h6>Break Time</h6>
                <h6>{breaks}min</h6>
            </div>
            <button className='btn btn-primary'>Activity Completed</button>
        </div>
    );
};

export default StudyInfo;