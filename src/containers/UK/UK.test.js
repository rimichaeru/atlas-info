import React from "react";
import { render } from "@testing-library/react";
import UK from "./UK";

describe("UK tests", () => {
  it("should render", () => {
    expect(render(<UK />)).toBeTruthy();
  });
});
