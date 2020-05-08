import React from "react";
import App from "./App.jsx";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = mount(<App />);
  });

  it('should render the CurrentWeather component', () => {
    expect(component.find('CurrentWeather').length).toBe(1);
  });

  it('should render the ProgressBar component', () => {
    expect(component.find('ProgressBar').length).toBe(1);
  });

  it('should render the Forecasts component', () => {
    expect(component.find('Forecasts').length).toBe(1);
  });
});