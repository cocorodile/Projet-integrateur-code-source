import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


function RSVP() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      console.log();
      emailjs.sendForm('service_8ce1qya', 'template_iw5z45r', form.current, 'user_cdDNS8wNwI2j7N0W8PEOr')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }, window.location.reload());
    };

  return (
    <div
      id='rsvp'
      className='section-padding bg-img bg-fixed'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40 rounded'>
            {' '}
            <span className='oliven-title-meta text-center'>Participerez-vous?</span>
            <h2 className='oliven-title text-center'>Confirmation s.v.p</h2>
            <br />
            <form 
              className='row'
              ref={form}
              onSubmit={sendEmail}
            >
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    name="name"
                    className='form-control'
                    placeholder='Nom et Prénom'
                    required
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input 
                    type='email' 
                    name="user_email"
                    className='form-control' 
                    placeholder='Email' 
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    cols='30'
                    rows='7'
                    className='form-control'
                    placeholder="Veuillez confirmer la présence des personnes qui participeront s'il vous plait en inscrivant les noms qui apparaissent sur la carte d'invitation. Veuillez également choisir les menus souhaités pour chaque invité et une petite liste de chanson! Merci :)"
                  ></textarea>
                </div>
              </div>
              <div className='col-md-12 text-center'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='ENVOYER' />{' '}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSVP
