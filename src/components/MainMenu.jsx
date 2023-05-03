import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { mainMof, modifiedTgLink } from '../utils/const.js';
import { FaTelegram } from 'react-icons/fa';

const MainMenu = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    
      <div
      data-aos="fade-left"
      className='main-menu dfa'
    >
      <div className='container ta'>
        <p className='main-text dfaj raleway col-444'> <strong> {mainMof}</strong> </p>
        <div className='main-menu-div'>
          <a {...modifiedTgLink} target="_blank" >
            <FaTelegram className='tg-link' />
            <p className='content-text'>Bizning telegram sahifamiz!</p>
          </a>
        </div>
      </div>
    </div>  
  )
}

export default MainMenu
