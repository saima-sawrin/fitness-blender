import React, { useEffect, useState }  from 'react';
import { getStorage, saveToStorage } from '../../utilities/Db';
import './Profile.css';

const Profile = ({cart}) => {
  

const [value,setValue] = useState([])
// const notify =()=>{
//    toast("Thank you ,");
//    localStorage.clear()
//    setTimeout(() => {
//      window.location.reload();
//    }, 6000);

useEffect(()=>{
   const newValue = getStorage();
       if(newValue){
         setValue(newValue)
       }else{
         setValue('0s')
       }
     },[])
     
const breakTime =(e)=>{
   let breaktime = e.target.innerText;

   setValue(breaktime);
  saveToStorage(breakTime);
  localStorage.setItem(time, value)
 }
 let time=0;
 for(let item of cart){
    time = time + item.time;
 }
 
    return (
        <div className='profile'>
           <div>
           <h1>Saima Sawrin</h1>
            <p>chittagong</p>
           </div>
        <div className='about'>
           <div>
            <h3>50kg <br /><p>weight</p></h3>
           </div>
           <div>
            <h3>5.1<br /><p>Height</p></h3>
           </div>
           <div>
            <h3>25<br /><p>years</p></h3>
           </div>
        </div>
        <div className='break'>
            <h3>Add A Break</h3>
          <button className='btn1' onClick={breakTime}> <b> 10 </b></button>
          <button className='btn2'onClick={breakTime}> <b> 15 </b></button>
          <button className='btn3'onClick={breakTime}> <b> 20 </b></button>
          <button className='btn4'onClick={breakTime}> <b> 25 </b></button>
          <button className='btn5'onClick={breakTime}> <b> 30 </b></button>
        </div>
        <div className='details'>
           <h2>Exercise Details</h2>
           <div className='ex-time'>
            <h3> Exercise Time : ${time} sec</h3>
           </div>
           <div className='brk-time'>
            <h3>Break Time :{value} second </h3>
           </div>
           <button className='btn-activity' ><p>Activity Complete</p></button>
        </div>
        </div>
    );
};

export default Profile;