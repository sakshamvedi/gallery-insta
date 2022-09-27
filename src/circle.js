import React from 'react'


function Circle() {
  const [value,newvalue]= React.useState(true);
  function recent()
  {
     if(value == true)
     {
       newvalue(false);
     }
     else{
       newvalue(true);
     }
  }


if(value == true)
{
  
  return (   
    <div className="wrapper">
      <button onClick={recent}>*</button>
    <div className="left-col">
      <div className="status-wrapper">
        <div className="status-card">
          <div className="profile-pic">
              <a href='st1.jpeg'>
            <img src="st1.jpeg" alt="" />
            </a>
          </div>
          <p className="username"></p>
        </div>
        <div className="status-card">
          <div className="profile-pic">
          <a href='st2.jpeg'>
            <img src="st2.jpeg" alt="" />
            </a>
          </div>
          <p className="username"></p>
        </div>
        <div className="status-card">
          <div className="profile-pic">
          <a href='st3.jpeg'>
            <img src="st3.jpeg" alt="" />
            </a>
          </div>
          <p className="username"></p>
        </div>
        <div className="status-card">
          <div className="profile-pic">
          <a href='st4.jpeg'>
            <img src="st4.jpeg" alt="" />
            </a>
          </div>
          <p className="username"></p>
        </div>
        <div className="status-card">
          <div className="profile-pic">
          <a href='st5.jpeg'>
            <img src="st5.jpeg" alt="" />
            </a>
          </div>
          <p className="username"></p>
        </div>
        <div className="status-card">
          <div className="profile-pic">
          <a href='st6.jpeg'>
            <img src="st6.jpeg" alt="" />
            </a>
          </div>
          <p className="username"></p>
        </div>
        <div className="status-card">
          <div className="profile-pic">
          <a href='st7.jpeg'>
            <img src="st7.jpeg" alt="" />
            </a>
          </div>
          <p className="username"></p>
        </div>
        <div className="status-card">
          <div className="profile-pic">
          <a href='st8.jpeg'>
            <img src="st8.jpeg" alt="" />
            </a>
          </div>
          <p className="username"></p>
        </div>
        <div className="status-card">
          <div className="profile-pic">
          <a href='st9.jpeg'>
            <img src="st9.jpeg" alt="" />
            </a>
          </div>
          <p className="username"></p>
        </div>
      </div>
    </div>
  </div>
  ) 
}

else{
  return(
  <button onClick={recent}>click</button>
  )
} 


}

export default Circle