import { reducers } from '../../src/reducers';

test('reducers', () => {
  let state;
  state = reducers.cityReducer({ city: 'Buenos Aires,ar' }, { type: 'SET_CITY', value: 'Bogota,col' });
  expect(state).toEqual({ city: 'Bogota,col' });
});
