

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/home';
import Parts from '../pages/parts/parts';

const AppRoutes: React.FC = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/parts' element={<Parts />} />
    </Routes>
  );
}

export default AppRoutes;