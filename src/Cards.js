import React from 'react'
import axios from 'axios'
import Moment from 'react-moment';
import Timer from './Timer';

//https://cdn-icons-png.flaticon.com/512/4337/4337071.png   //bhuja
// https://cdn-icons-png.flaticon.com/512/4337/4337071.png   //jalne
//https://cdn-icons-png.flaticon.com/512/4337/4337079.png

function Cards() {
    const [heart,noheart] = React.useState("");
    const [like,dislike] = React.useState("https://cdn-icons-png.flaticon.com/512/126/126473.png");
    const[diya,nodiya] = React.useState("https://cdn-icons-png.flaticon.com/512/4337/4337071.png ");
    const [count,newcount] = React.useState(Math.floor(Math.random() * 10) + 98);
    function change(event)
    {
       event.preventDefault();
        if(like === "https://cdn-icons-png.flaticon.com/512/456/456115.png")
        {
         dislike("https://cdn-icons-png.flaticon.com/512/126/126473.png");
         noheart("")
         newcount(count+1);
        }
        else{
            dislike("https://cdn-icons-png.flaticon.com/512/456/456115.png");
            noheart("")
            newcount(count-1);
        }
    
    }

 //   https://cdn-icons-png.flaticon.com/512/3438/3438612.png //bhujha

    function xcode(event)
    {
        event.preventDefault();
        if(diya === "https://cdn-icons-png.flaticon.com/512/4337/4337071.png")
        {
         nodiya("https://cdn-icons-png.flaticon.com/512/4337/4337079.png");
        }
        else
        {
            nodiya("https://cdn-icons-png.flaticon.com/512/4337/4337071.png");
        }

    }
 
    const [images, setImages] = React.useState([])
  
console.log(images.length);


    React.useEffect(() => {
        axios.get("https://deeputsav100.herokuapp.com/imagedata/get")
            .then((res) => {
               
                setImages(res.data)

            });
    }, [])
    
 
   
  return (

    <>
    <meta charSet="utf-8" />
    
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    />
    <title>Instagram card</title>
    <div className='headers'>
  

{


    images.slice(0).reverse().map(image => (
        
    <div className="instagram-card">
       
      <div className="header">
        <div className="user">
          <img className="avatar" src="diyajalao.jpeg" />
          <a href="light.jpg" target="_blank">
         Deepotsav 
          </a>
        </div>
      </div>
      <div className="imagen">
      <a href = {image.image_data}>
        <img
          src={image.image_data}
          width="100%"
        />
        </a>
      </div>
      <div className="actions">
        <div className="actions-left">
        
            <a className="action-icon icon-left" ><img className='iamge' src = {like} onClick={change} ></img></a>
          <a className="action-icon icon-left" ><img className='iamge' src = {diya} onClick={xcode} ></img></a>
            
    </div>   
      </div>
      <div className="description">
        <p>
              {image.caption}{" "}
          <a className="secondary-a" href="#">
          
          </a>
        </p>
        <a className="secondary-a" href="#">
          <p></p>
        </a>
    
    <Moment className="date"  format='DD-MM-YYYY' >{image.time}</Moment>
<p1 className="sp">|</p1>
    <Moment className = "date" format='hh:mm a'>{image.time}</Moment>
      </div>
  
      
      <div className="footer">
          
     <mark> <p>Ghat No. {image.ghat}</p></mark>
     
      </div>
      <hr class="divisor"/>
    </div>
  
    ))
}
</div>
  </>
  

  )
    }



export default Cards