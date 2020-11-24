import {
  CHANGE_TAB,
  INDICATOR_REQUEST,
  INDICATOR_SUCCESS,
  INDICATOR_FAILURE,
} from '../constants';
import {
  changeTab,
  indicatorRequest,
  indicatorSuccess,
  indicatorFailure,
} from '../actions';

describe('Dashboard Actions', () => {
  describe('changeTab', () => {
    it('should return the correct type', () => {
      const activeTab = 'energy';
      const expectedResult = {
        type: CHANGE_TAB,
        activeTab,
      };
      expect(changeTab(activeTab)).toEqual(expectedResult);
    });
  });

  describe('indicatorRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: INDICATOR_REQUEST,
      };
      expect(indicatorRequest()).toEqual(expectedResult);
    });
  });

  describe('indicatorSuccess', () => {
    it('should return the correct type and the passed indicator', () => {
      const indicator = [];
      const expectedResult = {
        type: INDICATOR_SUCCESS,
        indicator,
      };
      expect(indicatorSuccess(indicator)).toEqual(expectedResult);
    });
  });

  describe('indicatorFailure', () => {
    it('should return the correct type and the passed error message', () => {
      const error = 'error message';
      const expectedResult = {
        type: INDICATOR_FAILURE,
        error,
      };
      expect(indicatorFailure(error)).toEqual(expectedResult);
    });
  });
});
