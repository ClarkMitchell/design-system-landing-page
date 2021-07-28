import { render, screen } from "@testing-library/react";
import generateProps from "fake-props";
import CallToAction from "./CallToAction";

describe("CallToAction component", () => {
  it("accepts a heading and link.", () => {
    const { heading, link } = generateProps(CallToAction);
    render(<CallToAction heading={heading} link={link} />);

    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByText(link.text)).toBeInTheDocument();
  });
});
