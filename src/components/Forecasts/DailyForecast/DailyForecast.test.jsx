import React from "react";
import DailyForecast from "./DailyForecast.jsx";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

const mockData = {
    weather: {
        dt: "12345",
        main: {
            temp: "200"
        },
        weather: [{
            description: "clouds",
            icon: "10d"
        }]
    }
}

describe('DailyForecast', () => {
    let component;

    beforeEach(() => {
        component = mount(<DailyForecast item={mockData.weather} />);
    });

    it('should render an article tag', () => {
        expect(component.find('article').length).toBe(1);
    });

    it('should render three div tags for the base layout of the component', () => {
        expect(component.find('div').length).toBe(3);
    });

    it('should render three p tags for the content of the component', () => {
        expect(component.find('p').length).toBe(3);
    });

    it('should render a single image tag for the weather picture in the component', () => {
        expect(component.find('img').length).toBe(1);
    });

    it('should receive data as passed down through props', () => {
        expect(component.props().item).toEqual(mockData.weather);
    });

    it('should render the data it receives through props', () => {
        expect(component.text()).toContain(mockData.weather.weather[0].description);
    });
});