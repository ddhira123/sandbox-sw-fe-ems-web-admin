import produce from 'immer';
import appReducer from '../reducer';
import { logoutRequest, logoutSuccess, logoutFailure } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('App Reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
    };
  });

  it('should return the initialState', () => {
    expect(appReducer(undefined, {})).toEqual(state);
  });

  it('should handle the logoutRequest action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
    });
    expect(appReducer(state, logoutRequest())).toEqual(expectedResult);
  });

  it('should handle the logoutSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
    });
    expect(appReducer(state, logoutSuccess())).toEqual(expectedResult);
  });

  it('should handle the logoutFailure action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
    });
    expect(appReducer(state, logoutFailure())).toEqual(expectedResult);
  });
});
