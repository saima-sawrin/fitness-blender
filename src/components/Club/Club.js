import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Profile from '../Profile/Profile';
import Ques from '../Ques/Ques';
import './Club.css'


const Club = () => {
    
    const [exercises , setExercise] =  useState([]);
    // const [profile , setProfile] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setExercise(data) ,)
    },[])
  
    return (
        <div className='club-container'>
        
            <div className='exercise-container'>
            {
             exercises.map(exercise => <Exercise exercise={exercise}
             key = {exercise.id}></Exercise> )
                
               }
            </div>
            <div className='profile-container'>
              {
                <Profile>
                    
                </Profile>
              }
            </div>
            <div className='quesContainer'>
              <Ques></Ques>
            </div>
        </div>
    );
};

export default Club;