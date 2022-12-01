import store from '../redux/Store';

describe('symbols redux tests', () => {
  it('Should initially set symbols to an empty array', () => {
    const state = store.getState().stocks;
    expect(state).toEqual([]);
  });
});
