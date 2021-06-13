import React from "react";
import { render } from "@testing-library/react";
import BarChart from "./BarChart";

describe("BarChart tests", () => {
  it("should render", () => {
    expect(render(<BarChart />)).toBeTruthy();
  });
});
