import React from 'react';
import NewProducts from '../components/NewProducts';

const HomePage = () => {
  return (
    <>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal text-body-emphasis">What's New</h1>
          <p className="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
        </div>
      <NewProducts />
    </>
  );
};

export default HomePage;