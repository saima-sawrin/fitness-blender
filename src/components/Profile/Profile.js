import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [show, toggleShow] = useState(true);
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
          <button className='btn1'> <b> 10 </b></button>
          <button className='btn2'> <b> 15 </b></button>
          <button className='btn3'> <b> 20 </b></button>
          <button className='btn4'> <b> 25 </b></button>
          <button className='btn5'> <b> 30 </b></button>
        </div>
        <div className='details'>
           <h2>Exercise Details</h2>
           <div className='ex-time'>
            <h3> Exercise Time : <input type="text" placeholder='seconds'/></h3>
           </div>
           <div className='brk-time'>
            <h3>Break Time : <input type="text" placeholder='seconds' /> </h3>
           </div>
           <button className='btn-activity' onClick={() => toggleShow(true)}><p>Activity Complete</p></button>
        </div>
        </div>
    );
};

export default Profile;