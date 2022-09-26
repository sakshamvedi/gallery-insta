import React from 'react'
import axios from 'axios'
function Bottom() {
  const [images, setImages] = React.useState([])
  const [load,noload] = React.useState(true);
  React.useEffect(() => {
    axios.get("https://deeputsav100.herokuapp.com/imagedata/get")
        .then((res) => {
          noload(false);
            setImages(res.data)
        });
}, [])



  return (
    <div className='conts'>
      {
           images.slice(0).reverse().map(image => (
<div>
  <a href={image.image_data}>
  <img  className = "n1" src={image.image_data}  ></img>
  </a>
  </div>
           ))
      }


    </div>
  )
}



export default Bottom