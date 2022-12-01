import store from '../redux/Store';

describe('countries redux state tests', () => {
  it('Should initially set countries to an empty array', () => {
    const state = store.getState().stocks;
    expect(state).toEqual([]);
  });
});
