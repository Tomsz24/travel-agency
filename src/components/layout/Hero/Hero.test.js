import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';

describe('Component Hero', () => {
  it('should render without crashing', () => {
    const component = shallow(<Hero titleText='Lorem ipsum' imageSrc="image" />);
    expect(component).toBeTruthy();
  });

  it('should throw error without requires props', () => {
    expect(() => shallow(<Hero />)).toThrow();
  });

  it('should render correct title', () => {
    const expectTitle = 'Lorem ipsum';
    const expectImage = 'image.jpg';
    const component = shallow(<Hero titleText={expectTitle} imageSrc={expectImage} />);

    const renderTitle = component.find('.title').text();
    expect(renderTitle).toEqual(expectTitle);
    expect(component.find('.image').prop('src')).toEqual(expectImage);
  });

  it('renders correct classNames', () => {
    const mockVariants = 'small dummy';
    const component = shallow(<Hero titleText='Lorem' imageSrc='image.jpg' variant={mockVariants} />);
    expect(component.hasClass('component')).toBe(true);
    expect(component.hasClass('small')).toBe(true);
    expect(component.hasClass('dummy')).toBe(true);
  });
});