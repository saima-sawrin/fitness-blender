import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const{img , name , details, age , time} = props.exercise;
    return (
        <div className='exercise-info'>
         <div>
         <img src={img} alt="" />
            <h2>{name}</h2>
            <p >{details}</p>
            <p>For Age:<b>{age} yrs</b> </p>
            <p>Time Required: <b>{time} sec</b></p>
         </div>
         <button className='btn'>
            <p>Add To Lists</p>
         </button>

        </div>
    );
};

export default Exercise;