import React from 'react'

function Organization () {
  return (
    <div id='organization' className='organization section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Mariage</span>
            <h2 className='oliven-title'>Organisation</h2>
          </div>
        </div>
        <div className='row bord-box bg-img' data-background='images/slider.jpg'>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>01</h2>
            <h6 className='title'>Ceremonie</h6>
            <p>
              La cérémonie se déroulera au Fairmont, le château Montebello à 18h30, à l'extérieur proche du fleuve. Il y aura des panneaux pour vous indiquez le chemin.
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>02</h2>
            <h6 className='title'>Cocktail et Dîner</h6>
            <p>
              Le cocktail et le diner vous seront offert après 19h30 au Clubhouse qui est situé à 2 min de l'hôtel. Une navette de transport sera disponible.
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>03</h2>
            <h6 className='title'>Couper le gâteau</h6>
            <p>
              Lorsque le moment viendra, nous couperons et servirons le gâteau. Par la suite, les jeux vont commencer pour monter l'ambiance!
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>04</h2>
            <h6 className='title'>Party</h6>
            <p>
              Après 23h00, ce sera l'heure de faire la fête! On fera les foufous avec la musique à fond jusqu'à 3h00 du matin.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organization
