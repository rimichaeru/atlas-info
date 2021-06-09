import React from "react";
import { render } from "@testing-library/react";
import BriefCard from "./BriefCard";

describe("BriefCard tests", () => {
  it("should render", () => {
    expect(render(<BriefCard />)).toBeTruthy();
  });
});
