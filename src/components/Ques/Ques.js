import React from 'react';
import './Ques.css'

const Ques = () => {
    return (
      
            <div className='container' >
              <h1>Q/A</h1>
              <div className='qItem'>
                {/* question-1 */}
            <div >
              <h2 >
                <button className="ques" type="button" >
                What are the differences between props and state?
                </button>
              </h2>
                <div className="answer">Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</div>
             
            </div>
             {/* question-2 */}
             <div >
              <h2 >
                <button className="ques" type="button" >
                How does a React application work?
                </button>
              </h2>
                <div className="answer">A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks.</div>
             
            </div>
            {/* question-3*/}
            <div >
              <h2 >
                <button className="ques" type="button" >
                What does useEffect do?
                </button>
              </h2>
                <div className="answer">By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</div>
             
            </div>
               </div>
        </div>

    );
};

export default Ques;