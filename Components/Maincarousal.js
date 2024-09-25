import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import amazon2 from '../Image/amazon2.jpg'
import amazon from '../Image/amazon6.jpg'
import amazon3 from '../Image/amzon3.jpg'
import amazon4 from '../Image/amazon4.jpg'
import amazon5 from '../Image/amzon5.jpg'
import amazon7 from '../Image/amazon7.webp'






// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

const items = [
    
    <div className="carousel-item mt-4 object-cover w-[100%] bg-black md:h-72 h-54">
      <img src={amazon7} alt="Drink" />
    </div>,
    <div className="carousel-item  mt-4 object-cover h-72  ">
      <img
        src={amazon2}
        alt="Drink" />
    </div>,
    <div className="carousel-item  mt-4 object-cover h-72 ">
      <img
        src={amazon3}
        alt="Drink" />
    </div>,
    <div className="carousel-item object-cover h-72 mt-4">
      <img
        src={amazon4}
        alt="Drink" />
    </div>,
    <div className="carousel-item  object-cover h-72 mt-4  ">
      <img src={amazon5} alt="Drink" />
    </div>,
    
  
];

const Maincarousal = () => (
   
    <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
  
);

export default Maincarousal;
