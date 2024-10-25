import React from 'react';
import Button from '@/components/Button';
import './index.scss';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner--content">
        <h2>Welcome to G Automative</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu felis, sagittis eu leo sed, eleifend tincidunt felis. Ut lacus enim, lobortis eu volutpat quis,
          tincidunt et diam. Ut elementum a magna nec tristique.
        </p>

        <Button>Contact Us</Button>
      </div>
    </div>
  );
};

export default Banner;
