import Store from '../src/Store';

describe('Store', () => {
  it('should has a default state as an empty object', () => {
    const store = new Store();
    expect(store.state).toEqual({});
  });

  describe('.update', () => {
    it('should emit will_update and update events', () => {
      const store = new Store();
      store.state = { will: 'update' };
      const willUpdate = jest.fn();
      const update = jest.fn();
      store.on('will_update', willUpdate);
      store.on('update', update);
      const callback = jest.fn(state => ({ ...state, did: 'update' }));
      store.update(callback);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(willUpdate).toHaveBeenCalledWith({ will: 'update' });
      expect(update).toHaveBeenCalledWith({ will: 'update', did: 'update' });
    });
  });
});
