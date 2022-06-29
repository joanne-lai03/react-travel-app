import React from 'react'
import './ImgCarouselStyle.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import Barbados from '../../assets/barbados.jpg'
import BoraBora from '../../assets/borabora.jpg'
import Antigua from '../../assets/antigua.jpg'
import Trinidad from '../../assets/island.jpg'
import Grenada from '../../assets/island2.jpg'

function ImgCarousel() {
  return (
    <div name="carousel" className="container">
      <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
          <div>
              <img src={Barbados} alt="Barbados" />
          </div>
          <div>
              <img src={BoraBora} alt="Bora Bora" />
          </div>
          <div>
              <img src={Antigua} alt="Antigua" />
          </div>
          <div>
              <img src={Trinidad} alt="Trinidad" />
          </div>
          <div>
              <img src={Grenada} alt="Grenada" />
          </div>
      </Carousel>
    </div>
  )
}

export default ImgCarousel