import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/where-2.jpg'
import where3 from '../assets/images/where-3.jpg'

function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>Quand & Où</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Cérémonie de mariage</h5>
              <p>
                <i className='ti-location-pin'></i> 392 Notre Dame, Montebello - Quebec J0V 1L0 Establishment No: 528485, Canada
              </p>
              <p>
                <i className='ti-time'></i> <span>18h30 – 19h00</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Fête de mariage</h5>
              <p>
                <i className='ti-location-pin'></i> 300 du Chalet Road, Montebello, Quebec, Canada J0V 1L0
              </p>
              <p>
                <i className='ti-time'></i> <span>19h30</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where3} alt='' />
            </div>
            <div className='content'>
              <h5>Logements</h5>
              <p>
                <i className='ti-direction-alt'></i> Quelques hébergements par rapport au lieu de la fête de mariage:
              </p>
              <p>
                <i className='ti-direction'></i> <a href="https://www.fairmont.com/montebello/?goto=fiche_hotel&code_hotel=A566&merchantid=seo-maps-CA-A566&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTIzNjEzNzgtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl">Hôtel Fairmont Montebello (2 min)</a>  <br/> <a href="https://www.aubergemontebello.com/index.html">Auberge Montebello (5min)</a>  < br/> <a href="http://www.motelbeleau.com/index.htm">Motel Bel Eau Inn (5min)</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where
