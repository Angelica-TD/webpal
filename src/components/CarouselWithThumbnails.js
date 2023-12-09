import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const CarouselWithThumbnails = ({ imageNames }) => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const renderSlides = () => {
    return imageNames.map((imageName, index) => (
      <SplideSlide key={index}>
        <img
          src={`http://localhost:3000/uploads/${imageName}`}
          alt={`${imageName} - ${index}`}
        />
      </SplideSlide>
    ));
  };

  const mainOptions = {
    type: 'loop',
    rewind: true,
    pagination: false,
    arrows: false,
    // height: '300px',
    width: '100%',
    fixedWidth: '100%',
    keyboard: true,
  };

  const thumbsOptions = {
    width: '80%',
    fixedWidth: '40px',
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
    focus: 'center',
    perPage: 4,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
    keyboard: true,
  };

  return (
    <div className="thumbnail-carousel-container col-md-4">

      <Splide
        options={mainOptions} 
        ref={mainRef} 
        className="carousel-large-image" 
        aria-label="Product images">
          {renderSlides()}
      </Splide>

      <Splide
        options={thumbsOptions}
        ref={thumbsRef}
        className="carousel-thumbnail"
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
      >
        {renderSlides()}
      </Splide>



    </div>
  );
};

export default CarouselWithThumbnails;
