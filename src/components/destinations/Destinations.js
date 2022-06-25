import React from 'react'
import './DestinationsStyle.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Island from '../../assets/island.jpg'
import Island2 from '../../assets/island2.jpg'
import Bahamas from '../../assets/bahamas.jpg'

function Destinations() {
  return (
    <div className='destinations'>
      <div className="container">
        <h1>All-Inclusive Resorts</h1>
        <h3>On Caribbean's Best Beaches</h3>
        <div className="img-container">
          <img className ='span-3 image-grid-row-2' src={BoraBora} alt="BoraBora" />
          <img src={BoraBora2} alt="BoraBora2" />
          <img src={Island} alt="Island" />
          <img src={Island2} alt="Island2" />
          <img src={Bahamas} alt="Bahamas" />
        </div>
      </div>
    </div>
  )
}

export default Destinations