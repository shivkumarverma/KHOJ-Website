import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

const items = [
    <div className="item lg:h-96" data-value="1"><img className="" src="https://picsum.photos/1920/800?random=1"/></div>,
     <div className="item lg:h-96" data-value="1"><img className="" src="https://picsum.photos/1920/800?random=2"/></div>,
      <div className="item lg:h-96" data-value="1"><img className="" src="https://picsum.photos/1920/800?random=3"/></div>,
       <div className="item lg:h-96" data-value="1"><img className="" src="https://picsum.photos/1920/800?random=4"/></div>,
    
]




const Carousel = () => (
    <AliceCarousel 
        autoPlay
        autoHeight
    //    autoWidth
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        // disableDotsControls
        disableButtonsControls
        items={items}
         responsive={responsive}
        padding={50}
    />
);

export default Carousel;
