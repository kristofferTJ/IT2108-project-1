import React from 'react';
import renderer from 'react-test-renderer';

import Burger from '../../components/Burgermenu/Burger';

it("renders correctly when there are no items", () => {
    const tree = renderer.create(<Burger isOpen={false} setOpen={() => {}}/>).toJSON();
    expect(tree).toMatchSnapshot();
});