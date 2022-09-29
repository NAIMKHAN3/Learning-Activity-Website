import React from 'react';
import './Card.css'

const Card = (props) => {

    const { name, img, Time, id } = props.card;
    const { handleMin } = props
    return (
        <div className='card-containar mb-4'>
            <div className="card card-img">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Time  required : {Time} min</h6>
                    <button onClick={() => { handleMin(Time) }} className='btn btn-primary'>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Card;