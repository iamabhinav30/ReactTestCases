import React from "react";
import { shallow } from "enzyme";
import Paragraph from "./paragraph";

describe("Paragraph", () => {
  it("should render children inside a p tag", () => {
    const wrapper = shallow(<Paragraph>This is a line of text.</Paragraph>);
    const paragraph = wrapper.find("p");
    expect(paragraph).toHaveLength(1);
    expect(paragraph.text()).toEqual("This is a line of text.");
  });
});
