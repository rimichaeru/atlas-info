import React from "react";
import { render } from "@testing-library/react";
import China from "./China";

describe("China tests", () => {
  it("should render", () => {
    expect(render(<China />)).toBeTruthy();
  });
});
