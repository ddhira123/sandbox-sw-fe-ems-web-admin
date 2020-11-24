import {
  selectDashboard,
  makeSelectActiveTab,
  makeSelectIndicator,
  makeSelectIndicatorIsLoading,
} from '../selectors';

describe('selectDashboard', () => {
  it('should select the dashboard state', () => {
    const dashboard = {
      indicatorIsLoading: false,
      activeTab: 'condition',
      indicator: [],
    };
    const mockedState = {
      dashboard,
    };
    expect(selectDashboard(mockedState)).toEqual(dashboard);
  });
});

describe('makeSelectActiveTab', () => {
  const activeTabSelector = makeSelectActiveTab();
  it('should select active tab', () => {
    const activeTab = 'cctv';
    const mockedState = {
      dashboard: {
        activeTab,
      },
    };
    expect(activeTabSelector(mockedState)).toEqual(activeTab);
  });
});

describe('makeSelectIndicator', () => {
  const indicatorSelector = makeSelectIndicator();
  it('should select indicator', () => {
    const indicator = [];
    const mockedState = {
      dashboard: {
        indicator,
      },
    };
    expect(indicatorSelector(mockedState)).toEqual(indicator);
  });
});

describe('makeSelectIndicatorIsLoading', () => {
  const indicatorIsLoadingSelector = makeSelectIndicatorIsLoading();
  it('should select indicatorIsLoading', () => {
    const indicatorIsLoading = true;
    const mockedState = {
      dashboard: {
        indicatorIsLoading,
      },
    };
    expect(indicatorIsLoadingSelector(mockedState)).toEqual(indicatorIsLoading);
  });
});
