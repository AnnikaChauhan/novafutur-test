import React from "react";
import ProgressBar from "./ProgressBar";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

describe('ProgressBar', () => {
    let component;

    beforeEach(() => {
        component = mount(<ProgressBar />);
    });

    it('should render a single section tag to contain the component', () => {
        expect(component.find('section').length).toBe(1);
    });

    it('should render a p tag for the timer', () => {
        expect(component.find('p').length).toBe(1);
    });

    it('should render a div tag for the progressbar', () => {
        expect(component.find('div').length).toBe(1);
    });

    it('should render a span tag for the inside of the progressbar', () => {
        expect(component.find('span').length).toBe(1);
    });

})