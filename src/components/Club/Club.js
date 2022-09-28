import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import Ques from '../Ques/Ques';



import './Club.css'
import Exercise from './Exercise/Exercise';

const Club = () => {
    
    const [exercises , setExercise] =  useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])
   
    return (
        <div className='club-container'>
        
            <div className='exercise-container'>
            {
                exercises.map(exercise=> <Exercise
                exercise = {exercise}
                key = {exercise.id}>
            
                </Exercise>)
                
               }
            </div>
            <div className='profile-container'>
              {
                <Profile>
                    
                </Profile>
              }
            </div>
            <div className='q/A'>
              <Ques></Ques>
            </div>
        </div>
    );
};

export default Club;