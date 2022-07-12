import React from 'react'
import './ViewsImgStyle.css'

function ViewsImg({bgImg, text}) {
  return (
    <div className="views-location">
      <img src={bgImg} alt='island' />
      <div className="overlay">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ViewsImg