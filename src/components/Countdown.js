import React, { useEffect, useState } from 'react'

function Countdown () {
  
  // useEffect(() => {
    
  //     const second = 1000,
  //           minute = second * 60,
  //           hour = minute * 60,
  //           day = hour * 24;
  //     let birthday = "Jun 25, 2022 00:00:00",
  //         countDown = new Date(birthday).getTime(),
  //         x = setInterval(function() {    
  //           let now = new Date().getTime(),
  //               distance = countDown - now;
    
  //           document.getElementById("days").innerText = Math.floor(distance / (day));
  //           document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
  //           document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
  //           document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    
  //           //do something later when date is reached
  //           if (distance < 0) {
  //             let headline = document.getElementById("headline"),
  //                 countdown = document.getElementById("countdown"),
  //                 content = document.getElementById("content");
    
  //             headline.innerText = "Aujourd'hui, c'est le grand jour!";
  //             countdown.style.display = "none";
  //             content.style.display = "block";
    
  //             clearInterval(x);
  //           }
  //           //seconds
  //         }, 0);
  //         return null;
      
  // }, [])
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-06-25`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div
      id='countdown'
      className='section-padding bg-img bg-fixed'
      data-background='images/banner-1.jpg' >
      <div className='container'>
        <div className='row'>
          <div className='section-head col-md-12'>
            <h4> Notre union se fera dans</h4>
          </div>
        </div>
        <div className='row'>
          <div id="countDown" className='col-md-12'>
            
              
              {timerComponents.length ? timerComponents : <span>'C'est le grand jour!'</span>}
              
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
