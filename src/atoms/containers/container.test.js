import React from 'react';
import renderer from 'react-test-renderer';
import Container from './container';

it("renders correctly when corrected", () => {
    const tree = renderer
        .create(<Container />)
        .toJSON();

    expect(tree).toMatchSnapshot();
})