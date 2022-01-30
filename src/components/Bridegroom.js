import React from 'react'
import Bride from '../assets/images/bride.jpg'
import Groom from '../assets/images/groom.jpg'


function Bridegroom () {
  return (
    <div id='couple' className='bridegroom clear section-padding bg-pink'>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-6'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='img2'>
                {' '}
                <img src={Bride} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Alejandra Guevara <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Bride</span>
                  <p>
                    Alejandra est originaire de la Colombie et vit au Canada depuis 2006. 
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img'>
                {' '}
                <img src={Groom} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Rainui Herault <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Groom</span>
                  <p>
                    Rainui est originaire de la Polynésie Française et vit au Canada depuis 2011.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-12 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title'>Vont se marrier!</h3>
            <h4 className='oliven-couple-subtitle'>
              25 Juin 2022 – Fairmont Montebello, Québec, Canada
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bridegroom
