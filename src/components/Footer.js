import React from 'react'
import Logo from '../assets/images/logo.png'

function Footer () {
  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a href='/'>
                <img src={Logo} alt='' />
                <span>
                  Alejandra <small>&</small> Rainui
                </span>
              </a>
            </h2>
            <p className='copyright'>25 Juin 2022 – Fairmont Montebello, Québec, Canada <br /> &#169; Photos par KARAFILMS </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
