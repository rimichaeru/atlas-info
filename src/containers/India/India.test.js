import React from "react";
import { render } from "@testing-library/react";
import India from "./India";

describe("India tests", () => {
  it("should render", () => {
    expect(render(<India />)).toBeTruthy();
  });
});
