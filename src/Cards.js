import React from 'react'
import axios from 'axios'
import Moment from 'react-moment';
import Timer from './Timer';

function Cards() {
    const [heart,noheart] = React.useState("");
    const [like,dislike] = React.useState("far fa-heart");
    const[diya,nodiya] = React.useState("https://cdn-icons-png.flaticon.com/512/4336/4336999.png");
    const [count,newcount] = React.useState(Math.floor(Math.random() * 10) + 98);
    function change(event)
    {
       event.preventDefault();
        if(like === "far fa-heart")
        {
         dislike("");
         noheart("❤️")
         newcount(count+1);
        }
        else{
            dislike("far fa-heart");
            noheart("")
            newcount(count-1);
        }
    
    }
    function xcode(event)
    {
        event.preventDefault();
        if(diya === "https://cdn-icons-png.flaticon.com/512/4336/4336999.png")
        {
         nodiya("https://cdn-icons-png.flaticon.com/512/3438/3438612.png");
        }
        else
        
        {
            nodiya("https://cdn-icons-png.flaticon.com/512/4336/4336999.png");
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
    <div className='header'>

{


    images.slice(0).reverse().map(image => (
        
    <div className="instagram-card">
       
      <div className="header">
        <div className="user">
          <img className="avatar" src="light.jpg" />
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
          <a className="action-icon icon-left" href="#" onClick={change}>
            <i className={like} />
            {heart}     
            </a>
          <a className="action-icon icon-left" href="mailto:iet@rmlau.ac.in"><i class="far fa-comment"></i></a>
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