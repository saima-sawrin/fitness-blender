import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Profile from '../Profile/Profile';
import Ques from '../Ques/Ques';
import './Club.css'


const Club = () => {
    
    const [exercises , setExercise] =  useState([]);
    const [cart,setTime] = useState([]);
    // const [profile , setProfile] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])

    const addTimeHandle = (exercise)=>{
      console.log(exercise.time);
      // const array = [0, 1, 2, 3, 4, 5];
      setTime([...cart,exercise]);
        //  const newNumber = array.map(arr=>console.log(arr))
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