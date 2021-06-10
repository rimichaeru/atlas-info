import React from "react";
import { render } from "@testing-library/react";
import Other from "./Other";

describe("Other tests", () => {
  it("should render", () => {
    expect(render(<Other />)).toBeTruthy();
  });
});
