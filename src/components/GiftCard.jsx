import React from 'react';
// Image import
import gift from '../assets/gift.gif';  // path अनुसार adjust गर्नुहोस्

const GiftCard = () => {
  return (
    <div>
      <h2>My Gift</h2>
      <img src={gift} alt="Gift" />
    </div>
  );
};

export default GiftCard;
