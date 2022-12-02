/* eslint-disable  */
import React from 'react';

import { render, screen } from '@testing-library/react';
import * as router from 'react-router';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import DisplayAll from '../components/displayAll';
import StockExchangeData from '../components/stockExchangeData';




describe('expected to get a correct output', () => {
    const Navigation = jest.fn();  
    beforeEach(() => {
      jest.spyOn(router, 'useNavigate').mockImplementation(() => Navigation);
    });
    
    test('it must render the page for particulars', () => {
      render(<Provider store={store}><StockExchangeData /></Provider>);
      expect(screen.findAllByText('Price change(usd):')).toMatchSnapshot();
    });
    test('must render the home page', () => {
        render(<Provider store={store}><DisplayAll /></Provider>);
        expect(screen.findAllByText(' Crypto currency market data')).toMatchSnapshot();
      });
   

   
  });
  