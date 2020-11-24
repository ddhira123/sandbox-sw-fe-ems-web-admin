import produce from 'immer';
import dashboardReducer from '../reducer';
import {
  changeTab,
  indicatorRequest,
  indicatorSuccess,
  indicatorFailure,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('Dashboard Reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      indicatorIsLoading: false,
      activeTab: 'condition',
      indicator: [],
    };
  });

  it('should return the initialState', () => {
    expect(dashboardReducer(undefined, {})).toEqual(state);
  });

  it('should handle the changeTab action correctly', () => {
    const activeTab = 'cctv';
    const expectedResult = produce(state, draft => {
      draft.activeTab = activeTab;
    });
    expect(dashboardReducer(state, changeTab(activeTab))).toEqual(
      expectedResult,
    );
  });

  it('should handle the indicatorRequest action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.indicatorIsLoading = true;
    });
    expect(dashboardReducer(state, indicatorRequest())).toEqual(expectedResult);
  });

  it('should handle the indicatorSuccess action correctly', () => {
    const indicator = [];
    const expectedResult = produce(state, draft => {
      draft.indicatorIsLoading = false;
      draft.indicator = indicator;
    });
    expect(dashboardReducer(state, indicatorSuccess(indicator))).toEqual(
      expectedResult,
    );
  });

  it('should handle the indicatorFailure action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.indicatorIsLoading = false;
    });
    expect(dashboardReducer(state, indicatorFailure())).toEqual(expectedResult);
  });
});
