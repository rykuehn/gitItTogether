import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import ConnectedApp, { App } from '../client/app/components/app';
import { issues, CREATE_ISSUES_LIST } from '../client/app/actions/actions_pages';
import { totalPagesReducer } from '../client/app/reducers/reducer_pages';
import mockData from '../client/app/mock';

describe('Heading renders correctly', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toMatchSnapshot();
});

describe('app shallow render', () => {
  const initialState = { pageCount: 0 };
  const mockStore = configureStore();
  let component;

  beforeEach(() => {
    let store = mockStore(initialState);
    component = mount(<Provider store={store}><ConnectedApp /></Provider>);
  });

  it('render smart component', () => {
     expect(component.find(ConnectedApp).length).toEqual(1);
  });
});

describe('Reducers', () => {
  it('Total Pages Reducer', () => {
    let initialState = { pageCount: 0 };
    initialState = totalPagesReducer(initialState, {
      type: CREATE_ISSUES_LIST,
      payload: {
        data: mockData,
        numOfPages: 2,
        issuesPerPage: 25,
      } });

    expect(initialState).toEqual(2);
  });
});
