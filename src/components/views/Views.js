import React from 'react'
import './ViewsStyle.css'

import Barbados from '../../assets/barbados.jpg'
import BoraBora from '../../assets/borabora.jpg'
import Antigua from '../../assets/antigua.jpg'
import Island from '../../assets/island.jpg'
import Island2 from '../../assets/island2.jpg'
import Bahamas from '../../assets/bahamas.jpg'

import ViewsImg from '../ViewsImg/ViewsImg'

function Views() {
  return (
    <div className="views">
      <div className="container">
      <ViewsImg bgImg={Antigua} text="Antigua" />
      <ViewsImg bgImg={Barbados} text="Barbados" />
      <ViewsImg bgImg={BoraBora} text="Bora Bora" />
      <ViewsImg bgImg={Island} text="Trinidad" />
      <ViewsImg bgImg={Island2} text="Grenada" />
      <ViewsImg bgImg={Bahamas} text="Bahamas" />
      </div>
    </div>
  )
}

export default Views