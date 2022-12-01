export const baseUrl = 'https://api.binance.com/api/v3/ticker/24hr';
export const GetStockData = (data) => ({
  type: 'GET_STOCK_DATA',
  payload: data,
});

export const StockData = (symbol) => ({
  type: 'STOCK_DATA',
  payload: symbol,
});

export const ShowStockData = (item) => async (dispatch) => {
  try {
    dispatch(StockData(item));
  } catch (err) {
    return err;
  }
  return null;
};

export const FetchStockData = () => async (dispatch) => {
  const res = await fetch(baseUrl);
  const data = await res.json();

  dispatch(GetStockData(data.slice(0, 16)))
    .catch((error) => { console.log(error); });
};

export default function StockReducer(state = [], action) {
  switch (action.type) {
    case 'GET_STOCK_DATA':
      return action.payload;
    case 'STOCK_DATA':
      return action.payload;

    default:
      return state;
  }
}
