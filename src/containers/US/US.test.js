import React from "react";
import { render } from "@testing-library/react";
import US from "./US";

describe("US tests", () => {
  it("should render", () => {
    expect(render(<US />)).toBeTruthy();
  });
});
