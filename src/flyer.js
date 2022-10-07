import React from 'react'
import './App.css';
import Bottom from "./Bottom"
import Card from './Cards'
import Timer from './Timer';
import Crousel from './crousel';
import Circle from './circle';
function Flyer() {  
    const [count,setcount] = React.useState("0");
function handle()
{
    setcount(count+2);
}
if(count == 7)
{
   return(
       <div className="borderimage">
           <img src='updated.png' className='img'></img>
      
       <Timer/>
       <button  className="btn btn-primary col px-md-5"    onClick={handle}>Continue</button>
       </div>
   )
}
if(count==8)
{
    return(
        <div className='borderimage'>
           
            <img src='fly2.png' className='img'></img>
            <Timer/>
            <button  className="btn btn-primary col px-md-5"    onClick={handle}>Continue</button>
            
        </div>
    )
}
else{
   return(
       <>
    
  <Crousel/>
  <Timer/>
  <Card/>
       </>
   )
}



}

export default Flyer