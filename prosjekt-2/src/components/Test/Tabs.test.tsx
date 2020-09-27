import React from 'react';
import renderer from 'react-test-renderer';

import Tabs from '../../components/Tabs/Tabs';

it("renders correctly when there are no items", () => {
    const tree = renderer.create(<Tabs/>).toJSON();
    expect(tree).toMatchSnapshot();
});