import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './EventCarousel.css'; // Make sure this CSS file is defined

import Landing from '../images/Landing.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import moment from 'moment';

const EventCard = ({ imageSrc, date, title, venue, price, linkTo }) => {
  return (
    <Link to={linkTo} className="EventCarouselCardLink">
      <div className="EventCarouselCard">
        <img src={imageSrc} alt="Event Card" />
        <div className="CardDetails">
          <div className="DateTime">
            {moment(date).format('DD MMM')}
          </div>
          <div className="Venue">{venue}</div>
          <h3 className="Title">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

const EventCarousel = () => {
  const cardData = [
    { imageSrc: Landing, date: new Date(), title: 'Event 1', venue: 'Venue 1', price: '$10', linkTo: '/EventDetail' },
    { imageSrc: Landing, date: new Date(), title: 'Event 2', venue: 'Venue 2', price: '$15', linkTo: '/event2' },
    { imageSrc: Landing, date: new Date(), title: 'Event 3', venue: 'Venue 3', price: 'Free', linkTo: '/event3' },
    { imageSrc: Landing, date: new Date(), title: 'Event 4', venue: 'Venue 4', price: 'Free', linkTo: '/event4' },
    { imageSrc: Landing, date: new Date(), title: 'Event 5', venue: 'Venue 4', price: 'Free', linkTo: '/event4' },
    // Add more event data as needed
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
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
    <div className="Event-carousel-container">
      <Slider {...settings} className="eventcard">
        {cardData.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </Slider>
    </div>
  );
};

export default EventCarousel;
