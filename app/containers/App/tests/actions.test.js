import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../constants';
import { logoutRequest, logoutSuccess, logoutFailure } from '../actions';

describe('App Actions', () => {
  describe('logoutRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOGOUT_REQUEST,
      };
      expect(logoutRequest()).toEqual(expectedResult);
    });
  });

  describe('logoutSuccess', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOGOUT_SUCCESS,
      };
      expect(logoutSuccess()).toEqual(expectedResult);
    });
  });

  describe('logoutFailure', () => {
    it('should return the correct type and the passed error message', () => {
      const error = 'error message';
      const expectedResult = {
        type: LOGOUT_FAILURE,
        error,
      };
      expect(logoutFailure(error)).toEqual(expectedResult);
    });
  });
});
