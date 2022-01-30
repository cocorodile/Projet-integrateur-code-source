import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'

function Sidebar () {

  
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  }

  

  return (
    <>
      <a href='/' onClick={openMenu} className={`js-oliven-nav-toggle oliven-nav-toggle${show ? ' active': ''}`}>
        <i></i>
      </a>
      <aside id='oliven-aside'>
        <div className='oliven-logo'>
          <a href='/'>
            <img src={Logo} alt='' />
            <span> Alejandra <small><br/> <div class="lds-heart"> <div></div></div><br/></small> Rainui</span>
            <h6>25.06.2022</h6>
          </a>
        </div>
        
        <nav className='oliven-main-menu'>
          <ul>
            <li>
              <a href='#home'>Accueil</a>
            </li>
            <li>
              <a href='#couple'>Couple</a>
            </li>
            <li>
              <a href='#story'>Notre histoire</a>
            </li>
            <li>
              <a href='#organization'>Organisation</a>
            </li>
            <li>
              <a href='#gallery'>Gallerie</a>
            </li>
            <li>
              <a href='#whenwhere'>Quand & où</a>
            </li>
            <li>
              <a href='#rsvp'>Confirmation présence (contact)</a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
            Mariage Alejandra & Rainui
            <br />
            25 Juin 2022 – Fairmont Montebello, Québec, Canada
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
