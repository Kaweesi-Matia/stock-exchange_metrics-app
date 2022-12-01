import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import DisplayAll from './displayAll';
import StockExchangeData from './stockExchangeData';

function Wrapper() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DisplayAll />} />
        <Route path="/home" element={<DisplayAll />} />

        <Route path="/particulars" element={<StockExchangeData />} />

      </Routes>

    </div>
  );
}

export default Wrapper;
