import React from 'react'
import './ViewsStyle.css'

import Barbados from '../../assets/barbados.jpg'
import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Island from '../../assets/island.jpg'
import Island2 from '../../assets/island2.jpg'
import Bahamas from '../../assets/bahamas.jpg'

import ViewsImg from '../ViewsImg/ViewsImg'

function Views() {
  return (
    <div className="views">
      <ViewsImg bgImg={Barbados} text="Barbados" />
    </div>
  )
}

export default Views