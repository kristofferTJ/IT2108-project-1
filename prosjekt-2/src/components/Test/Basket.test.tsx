import React from 'react';
import renderer from 'react-test-renderer';

import Basket from '../Installations/Basket';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Basket />).toJSON();
  expect(tree).toMatchSnapshot();
});
