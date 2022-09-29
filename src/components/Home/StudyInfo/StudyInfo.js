import React from 'react';
import Swal from 'sweetalert2';

const StudyInfo = ({ breaks, time, setTime }) => {

    let total = 0;
    for (const times of time) {
        total = total + times.Time;
    }
    const Toast = () => {
        Swal.fire(
            'Congratulation',
            'You clicked the button!',
            'success'
        );
    }


    return (
        <div>
            <h4 className='mt-5 mb-4'>Study Details</h4>
            <div className='d-flex justify-content-between mb-4'>
                <h6>Study Time</h6>
                <h6>{total}min</h6>
            </div>
            <div className='d-flex justify-content-between'>
                <h6>Break Time</h6>
                <h6>{breaks}min</h6>
            </div>
            <button onClick={Toast} className='btn btn-primary'>Activity Completed</button>
        </div>
    );
};

export default StudyInfo;