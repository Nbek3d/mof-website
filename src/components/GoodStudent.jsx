import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { goodStudent } from '../utils/const';


const GoodStudent = () => {
 
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    dotsClass: 'slick-dots custom-dots',
    appendDots: (dots) => (
      <div>
        <ul>{dots.slice(0, 3)}</ul>
      </div>
    ),
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'ease-out',
  };

  return (
    <div >
      <Slider {...settings} className='slick-slider m-top-20 m-bot-40'>

        {goodStudent.map((item) => (

          <div key={item.id} className='slick-slide'>

            <div className='dfj'>

              <img
                src={item.image}
                alt={item.name}
                className='slider-image'
              />

            </div>

            <h5 className='content-text m-top-10'>
              <strong>{item.name}</strong>
            </h5>

            <p className='min-text col-999 m-top-10'>
              {item.course}
            </p>
            <div className='dfaj content-text col-444 gap-20 m-top-20 m-bot-20'>
              <ImQuotesLeft className='quotes-icon' />
              <p >
                {item.score}
              </p>
              <ImQuotesRight className='quotes-icon' />

            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GoodStudent;
