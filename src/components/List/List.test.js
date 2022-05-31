

import React from 'react' ;
import { shallow } from 'enzyme' ;



import List from './List';
import Paragraph from '../Paragraph/paragraph';


const itemsArray = [
    { id: 1, body: 'Shopping' }, 
    { id: 2, body: 'Eat' }, 
    { id: 3, body: 'Cook' }
];

describe('List of items', () => {
  it('should render `This list is empty` inside a Paragraph component if items is an empty array', () => {
    const wrapper = shallow(<List items={[]} />)
    const paragraph = wrapper.find(Paragraph)
    expect(paragraph.props().children).toEqual('This list is empty')
  });

  it('should render a list with the body of each item inside a div', () => {

    const wrapper = shallow(<List items={itemsArray} />)
    const items = wrapper.find('div[className="item"]')
    // console.log(items.first().children().debug())
    expect(items).toHaveLength(itemsArray.length)
    expect(items.first().children().text()).toContain('Shopping')
  });

})