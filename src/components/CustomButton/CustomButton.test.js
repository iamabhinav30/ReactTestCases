
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon' ;

import CustomButton from "./CustomButton";

describe("CustomButton component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <CustomButton btnLabel={"Update"} clickHandler={jest.fn()} />
    );
  
    expect(wrapper).toMatchSnapshot();
  });

  it("should call setNewCityName on click", () => {
    const spy = sinon.spy();

    const wrapper = mount(
      <CustomButton btnLabel={"Update"} clickHandler={spy} />
    );
    wrapper
      .find("button")
      .first()
      .simulate("click");
      
    expect(spy.calledOnce).toBe(true);
  });
});