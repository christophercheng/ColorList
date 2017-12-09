import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import deepFreeze from 'deep-freeze';
import initialData from '../src/redux/ColorData';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.React = React;
global.testColors = deepFreeze(initialData.colors);
