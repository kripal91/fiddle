import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FollowCarousel.css'; // Make sure this CSS file is defined
import FrameComponent1 from './FrameComponent1'; // Make sure this import is correct
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const FollowCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5, // Show 4 frame components at a time
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Follow-carousel-container">
      <Slider {...settings} className="eventcard">
        <FrameComponent1 />
        <FrameComponent1 />
        <FrameComponent1 />
        <FrameComponent1 />
        <FrameComponent1 />
        <FrameComponent1 />
      </Slider>
    </div>
  );
};

export default FollowCarousel;
