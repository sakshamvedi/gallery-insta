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
    newtime(dd+21);
}
else{
    newtime(dd-21);
}
}

  return (
    <div className='timer'> <marquee> {time-1} Days Left for deepotsav</marquee>
    </div>
  )
}

export default Timer