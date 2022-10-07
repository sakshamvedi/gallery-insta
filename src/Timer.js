import React from 'react'

function Timer() {
  
const[time,newtime] = React.useState("");

React.useEffect(() => {  
    heera();
  },[]);

function heera()

{
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0')
    if(dd<=30)
{
    dd = 30-dd;
    newtime(dd+23);
}
else{
    newtime(dd-23);
}
}

  return (
    <div className='timer'> <marquee> {time-1} Days Left for deepotsav  [23 October 2022 ]</marquee>
    </div>
  )
}

export default Timer