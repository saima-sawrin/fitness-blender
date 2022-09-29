import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Profile from '../Profile/Profile';
import Ques from '../Ques/Ques';
import './Club.css'


const Club = () => {
    
    const [exercises , setExercise] =  useState([]);
    const [cart,setTime] = useState([]);
 
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])

    const addTimeHandle = (exercise)=>{
      console.log(exercise.time);
   
      setTime([...cart,exercise]);

     }
  
    
    return (
        <div className='club-container'>
        
            <div className='exercise-container'>
            {
             exercises.map(exercise => <Exercise
              addTimeHandle={addTimeHandle}
               exercise={exercise}
             key = {exercise.id}
             ></Exercise> )
                
               }
            </div>
            <div className='profile-container'>
              {
                
                <Profile cart={cart}>
                    
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