/*eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { ShowStockData } from '../redux/Reducer';

function StockExchangeData() {
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ShowStockData());
  }, []);
  const Navigate = useNavigate();

  return (

    <div className="chosen_data">

      <button type="button" className="">
        {' '}
        <IoIosArrowBack onClick={() => { Navigate('/home'); }} />
      </button>
      <div className="symbol_name">
        {stocks.symbol ? (
          <h4>
            {stocks.symbol}

          </h4>
        ) : 'Chosen Item'}

      </div>

      <div className="detailsDiv">

        <p>
          {' '}
          Ask price(usd) :
          {' '}
          <span>{stocks.askPrice}</span>
        </p>
        {' '}
        <p>
          {' '}
          Bid price(usd) :
          {' '}
          <span>{stocks.bidPrice}</span>
        </p>
        {' '}
        <p>
          {' '}
          Last price(usd) :
          {' '}
          <span>{stocks.lastPrice}</span>
        </p>
        {' '}
        <p>
          {' '}
          Open price(usd)  :
          {' '}
          <span>{stocks.openPrice}</span>
        </p>
        {' '}
        <p>
          {' '}
          High price(usd) :
          {' '}
          <span>{stocks.highPrice}</span>
        </p>
        {' '}
        <p>
          {' '}
          Low price(usd)  :
          {' '}
          <span>{stocks.lowPrice}</span>
        </p>
        {' '}
        <p>
          {' '}
          Volume :
          {' '}
          <span>{stocks.volume}</span>
        </p>
        {' '}
        <p>
          {' '}
          Quote volume :
          {' '}
          <span>{stocks.quoteVolume}</span>
        </p>
        <p>
          {' '}
          Previous close :
          {' '}
          <span>{stocks.lastQty}</span>
        </p>
        {' '}
        <p>
          {' '}
          Change   :
          {' '}
          <span>{stocks.priceChangePercent}</span>
        </p>
        {' '}
        <p>
          {' '}
          Change percent (%):
          {' '}
          <span>{stocks.changePercent}</span>
        </p>
        {' '}
        <p>
          {' '}
          Price  change percent (%) :
          {' '}
          <span>{stocks.priceChangePercent}</span>
        </p>
      </div>
      {console.log(stocks)}
    </div>

  );
}

export default StockExchangeData;
