import React from 'react'

function crousel() {
  return (
    <div
    id="carouselExampleControls"
    className="carousel slide"
    data-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="ginger.gif" alt="First slide" />
      </div>
   
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
  
  )
}

export default crousel