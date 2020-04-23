import React from "react";
import renderer from "react-test-renderer";
import MInput from "./inputs";
import MTextarea from "./textarea";

describe("describe the different inputs", () => {
  it("Renders correctly when called", () => {
    const tree = renderer.create(<MInput />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Renders correctly when called", () => {
    const tree = renderer.create(<MTextarea />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
