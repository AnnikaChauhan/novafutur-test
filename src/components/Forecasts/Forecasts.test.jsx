import React from "react";
import Forecasts from "./Forecasts.jsx";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

const mockData = {
    forecastWeather: ""
}

describe('Forecasts', () => {
    let component;

    beforeEach(() => {
        component = mount(<Forecasts weather={mockData.forecastWeather}  />);
    });

    it('should render a single section tag to contain the component', () => {
        expect(component.find('section').length).toBe(1);
    });

    it('should receive data as passed down through props from the parent', () => {
        expect(component.props().weather).toEqual(mockData.forecastWeather);
    });

    it('should render the data it receives by props', () => {
        expect(component.text()).toContain(mockData.forecastWeather);
    });
});