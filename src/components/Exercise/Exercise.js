import React, { useState } from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const{img , name , details, age , time } = props.exercise;
    const{handleToAddExTime} = props.exercise;
    // const[added , setAdded] = useState(true);
    
    return (
        <div className='exercise-info'>
         <div>
         <img src={img} alt="" />
            <h2>{name}</h2>
            <p >{details}</p>
            <p>For Age:<b>{age} yrs</b> </p>
            <p>Time Required: <b>{time} sec</b></p>
         </div>
         {/* <button className='btn' onClick={()=>setAdded(!added)}>
            {added ?  "Add To List" : "Added"}
         </button> */}
         <button className='btn' onClick={()=>handleToAddExTime(props.exercise)}>
          Add to List
         </button>

        </div>
    );
};

export default Exercise;