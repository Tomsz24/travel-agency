import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  const expectLink = '/trip/abc';
  const expectImg = 'image.jpg';
  const expectName = 'dummy';
  const tags = ['dummy1', 'dummy2', 'dummy3'];
  const cost = '100$';
  const days = 1;

  const component = shallow(<TripSummary id='abc' tags={tags} image={expectImg} name={expectName} cost={cost} days={days} />);

  it('should show correct link', () => {
    expect(component.find('Link').prop('to')).toEqual(expectLink);
  });

  it('should render correct props in img', () => {
    expect(component.find('img').prop('src')).toEqual(expectImg);
    expect(component.find('img').prop('alt')).toEqual(expectName);
  });

  it('should correct render props name, cost, days', () => {
    expect(component.props()).toBeTruthy();
  });

  it('should throw err if required porps are not provided', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render span from array', () => {
    expect(component.find('.tag').at(0).text()).toEqual(`${tags[0]}`);
    expect(component.find('.tag').at(1).text()).toEqual(`${tags[1]}`);
    expect(component.find('.tag').at(2).text()).toEqual(`${tags[2]}`);
  });

  it('should not render span if tags is falsy', () => {
    const component = shallow(
      <TripSummary
        id="id"
        image="image.jpg"
        name="name"
        cost="dolar"
        days={1}
      />
    );
    expect(component.hasClass('tags')).toBe(false);
  });

});