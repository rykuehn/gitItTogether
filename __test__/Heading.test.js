import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Heading } from '../client/app/components/heading';

it('Heading renders correctly', () => {
  const tree = renderer.create(<Heading />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('shallow render of Heading Componenet', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Heading />);
  });

  it('contains header title Issues', () => {
    expect(component.contains(<h1 className="headingTitle"> Github Issues </h1>)).toBe(true);
  });
});
