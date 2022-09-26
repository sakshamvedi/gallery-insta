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
    setcount(count+1);
}
if(count == 0)
{
   return(
       <div className="borderimage">
           <img onClick={handle} src='https://cdn-icons-png.flaticon.com/512/5773/5773168.png' className='icons'></img>
           <img src='fly1.png' className='img'></img>
       <Timer/>
       </div>
   )
}
if(count==1)
{
    return(
        <div className='borderimage'>
            <img  onClick={handle} src='https://cdn-icons-png.flaticon.com/512/5773/5773168.png' className='icons'></img>
            <img src='fly2.png' className='img'></img>
            <Timer/>
        </div>
    )
}
else{
   return(
       <>
        <Circle />
  <Crousel/>
  <Timer/>
  <Card/>
       </>
   )
}



}

export default Flyer