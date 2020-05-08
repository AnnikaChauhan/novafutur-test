import React from "react";
import CurrentWeather from "./CurrentWeather.jsx";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

const mockData = {
    city: "London",
    currentWeather: "",
    time: ""
}

describe('CurrentWeather', () => {
    let component;

    beforeEach(() => {
        component = mount(<CurrentWeather city={mockData.city} weather={mockData.currentWeather} time={mockData.time} />);
    });

    it('should render a single section tag to contain the component', () => {
        expect(component.find('section').length).toBe(1);
    });

    it('should render three p tags - one for the city, one for time, one for the autofill for notfound weather', () => {
        expect(component.find('p').length).toBe(3);
    });

    it('should receive data as passed down through props from the parent', () => {
        expect(component.props().city).toEqual(mockData.city);
    });

    it('should render the data it receives by props', () => {
        expect(component.text()).toContain(mockData.city);
    });
});