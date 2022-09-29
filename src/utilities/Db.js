const saveToStorage = (time)=>{

    localStorage.setItem('breaktime', time)
 
 }
 
 const getStorage =()=>{
    const newValue = localStorage.getItem('breaktime');
    return newValue;
 }
 
 export {saveToStorage,getStorage}
 