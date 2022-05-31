
import React from 'react';
import { shallow } from 'enzyme';
import Article from './Article';

const props = {
  title: "React Wins",
  teaser: "Teaser",
  publishDate: "2020-09-12",
};

describe("Testing Article Hoc", () => {
  it("should render title", () => {
    const wrapper = shallow(<Article {...props} />);
    expect(wrapper.find('h2').text()).toEqual(props.title);
  });

  it("should render teaser", () => {
    const wrapper = shallow(<Article {...props} />);
    expect(wrapper.find('h4').text()).toEqual(props.teaser);
  });
  
});

// describe('Article', () => {
    
//     const wrapper = shallow(<Article title={'Hello'}></Article>);
//     const article = wrapper.find("h2");

// test("should render children inside a h2 tag", () => {
    
//     expect(article).toHaveLength(1);
//     expect(article.text()).toEqual("Hello");
//   });
  
// })