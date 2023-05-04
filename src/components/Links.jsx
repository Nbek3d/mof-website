import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick';
import { links } from '../utils/const';

const Links = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots custom-dots',
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: 'ease-out',
    };

    return (
        <div className='m-bot-40 container'>

            <h3 className='head-text ta'>Foydali Xavolalar</h3>

            <div className='m-top-20'>
                <Slider {...settings} className='slick-slider'>
                    {
                        links.map((item) => (
                            <div key={item.id} className='slick-slide links-slider dfj ta m-bot-10 '>
                                <a href={item.link} className='dfaj gap-5 '>
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className='logo-link' />
                                    <p className='content-text col-444'>{item.name}</p>
                                </a>
                            </div>
                        )
                        )}
                </Slider>
            </div>
        </div>
    )
}

export default Links
