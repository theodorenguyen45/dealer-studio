import React from 'react';
import './App.scss';

import CardLayout from '@/components/CardLayout';
import Banner from '@/components/Banner';

const App = () => (
  <>
    <img className="image" src="/dealer-studio/assets/city.jpg" alt="City" />
    <Banner />
    <CardLayout />
    <img className="image" src="/dealer-studio/assets/ford.jpg" alt="Ford car" />
  </>
);

export default App;
