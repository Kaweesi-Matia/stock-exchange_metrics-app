import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { FetchStockData, ShowStockData } from '../redux/Reducer';

function DisplayAll() {
  const Stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const Navigate = useNavigate();
  useEffect(() => {
    dispatch(FetchStockData());
  }, []);
  const obtainDetails = (symbol) => {
    dispatch(ShowStockData(symbol));
  };
  return (
    <>
      <div>
        <h3 className="main-heading"> Crypto currency market data</h3>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
          className="input"
        />
      </div>
      <div className="information">
        {Stocks.length > 1
          ? Stocks.filter(
            (Stock) => Stock.symbol
              .toLowerCase()
              .includes(search.toLowerCase())
                || Stock.symbol
                  .toLowerCase()
                  .includes(search.toLowerCase()),
          ).map((stock) => (
            <div key={stock.symbol} className="columnDiv">
              <button
                className=""
                type="button"
                onClick={() => {
                  obtainDetails(stock);
                  Navigate('/particulars');
                }}
              >
                {stock.symbol}
              </button>
            </div>
          ))
          : 'still loading'}
      </div>
    </>
  );
}
export default DisplayAll;
