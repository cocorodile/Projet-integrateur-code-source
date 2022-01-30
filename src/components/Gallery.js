import React from 'react'
import gallery1 from '../assets/images/7.jpg'
import gallery2 from '../assets/images/2.jpg'
import gallery3 from '../assets/images/3.jpg'
import gallery4 from '../assets/images/4.jpg'
import gallery5 from '../assets/images/5.jpg'
import gallery6 from '../assets/images/6.jpg'


function Gallery () {

  return (
    <div id='gallery' className='section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Gallerie</span>
            <h2 className='oliven-title'>Quelques photos de nous</h2>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row gallery-filter mt-3'>
          <div className='col-md-4 gallery-item ceremony'>

            

              <div className="gallery-box">
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery1}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Veux-tu m'épouser?</h4>
                </div>
              </div>
            
          </div>
          <div className='col-md-4 gallery-item party'>
            
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery2}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Simple mais magnifique!</h4>{' '}
                </div>
              </div>
            
          </div>
          <div className='col-md-4 gallery-item ceremony'>
            
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery3}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Des fous rires </h4>{' '}
                </div>
              </div>
           
          </div>
          <div className='col-md-4 gallery-item party'>
            
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery4}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Encore des fous rires!</h4>{' '}
                </div>
              </div>
            
          </div>
          <div className='col-md-4 gallery-item ceremony'>
            
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery5}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Et encore des fous rires!</h4>{' '}
                </div>
              </div>
            
          </div>
          <div className='col-md-4 gallery-item party'>
            
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery6}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Je t'aime!</h4>{' '}
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}


export default Gallery
