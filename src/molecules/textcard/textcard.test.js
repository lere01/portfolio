import { render, fireEvent, wait } from '@testing-library/react'
import React from "react";
import "@testing-library/jest-dom";
import TextCard from "./textcard";
// import { FaItalic } from "react-icons/fa";

describe("TextCard", () => {
  it("Gets text", () => {
    const { getByText, getByTestId, container } = render(<TextCard />);
    const texthead = getByTestId("texthead");
    const textbody = getByTestId("textbody");

    expect(texthead.innerHTML).toBe("SUBHEADING");
    expect(textbody.innerHTML).toBe(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eosconsequatur reiciendis non id doloremque hic sequi."
    );
  });
});
