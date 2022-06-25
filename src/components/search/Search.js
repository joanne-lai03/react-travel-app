import React from 'react'
import './SearchStyle.css'

import Gold from '../../assets/gold.png'

function Search() {
  return (
    <div className='search'>
      <div className="container">
        <div className="left">
          <h2>Luxury resort vacations for two people</h2>
          <p>Come experience the very pinnacle of luxury Caribbean vacations for couples at Paradise Resorts. Our all-inclusive beach resorts, set along the most gorgeous tropical settings and exquisite beaches in the Caribbean Islands offer tranquility and stunning views right on your door step. All resorts feature all-day gourmet dining, unique bars serving premium liquors and wine and a variety of water sports including certified scuba diving. If you are planning a wedding, Paradise is the leader in Caribbean destination weddings and honeymoon packages.</p>
        <div className="search-col-2">
          <div className="box">
            <div>
              <img src={Gold} alt='gold travel award' style={{marginRight: '1rem'}}/>
            </div>
            <div>
              <h3>WORLD'S LEADING</h3>
              <p>ALL INCLUSIVE COMPANY FOR 20 CONSECUTIVE YEARS</p>
            </div>
          </div>
          <div className="box">
            <div>
              <h3>NO ONE INCLUDES MORE</h3>
              <p>ALL INCLUSIVE COMPANY FOR 20 CONSECUTIVE YEARS</p>
              <button>View Packages</button>
            </div>
          </div>
        </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className='save'>GET AN ADDITIONAL 10% OFF</h4>
            <p className="timer">12 HOURS LEFT</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search