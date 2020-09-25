import React from 'react';
import renderer from 'react-test-renderer';


import Main from '../../Main';

it("renders correctly when there are no items", () => {
    const tree = renderer.create(<Main/>).toJSON();
    expect(tree).toMatchSnapshot();
});