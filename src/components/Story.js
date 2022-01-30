import React from 'react'
import storyImage from '../assets/images/story.jpg'


function Story () {
  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mb-30'>
            <div className='story-img animate-box'>
              <div className='img'>
                {' '}
                <img src={storyImage} className='img-fluid' alt='' />{' '}
              </div>
              <div
                className='story-img-2 story-wedding'
              ></div>
            </div>
          </div>
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Notre Amour.</h4>
            <h3 className='oliven-story-title'>Notre histoire</h3>
            <p>
              Nous nous sommes rencontrés à Montréal au Québec dans une soirée un peu trop arrosé où les souvenirs n'ont pas fait long feu pour Rainui haha! 
              Cette soirée a été un moment de folie entre nous car après s'être présenté, on commençait déjà à se chamailler pour des pas de danse...
            </p>
            <p>
              2 semaines plus tard, on s'était donné rendez-vous dans un restaurant, puis les rencontres se sont multipliés. 
              Depuis ce jour, on est devenu inséparable. Pendant 7 ans on a traversé des hauts et des bas mais notre amour n'a pas changé et a toujours été fort depuis toutes ces années.
              Nous avons fait des voyages incroyables et mémorables, et on peut vous dire que ce n'est que le début!
            </p>
           
            <h4>Le 25 Décembre 2020, Elle a dit Oui!</h4>
            <p>
              Après 6 ans de couple, Rainui a finalement pris la décision de demander Alejandra en mariage.
              La demande s'est déroulé à 01h00 du matin le 25 Décembre 2020. C'était une soirée remplie de joie et d'émotion. <br /> 
              Une grande surprise était prévu pour la famille Guevara car aucun d'eux ne se doutaient de ce qui allait se passer.
              Pour faire la demande et pour n'éveiller aucun soupçon jusqu'à la fin, un petit jeu a été organisé par Rainui. Tout le monde avait les yeux bandés et des écouteurs aux oreilles pour être sûr qu'il n'y ait personne qui gâche la surprise.
              De plus, des invités surprises étaient également présent sur conférence vidéo! <br /> 
              À tour de rôle, Rainui a retiré les bandeaux et les écouteurs de chacun pour leur annoncer la grande nouvelle. Après que les parents aient accordés la main d'Alejandra, 
              Rainui s'est approché d'Alejandra en lui otant son bandeau et ses écouteurs, a sortie la bague et lui a demandé en mariage, et elle lui a dit oui! 
            

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
