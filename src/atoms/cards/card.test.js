import React from "react";
import renderer from "react-test-renderer";
import Card from "./card";

it("renders correctly when called", () => {
  const tree = renderer
    .create(<Card />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
