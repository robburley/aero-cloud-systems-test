import React from 'react';
import * as enzyme from 'enzyme';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from "react-redux";
import store from "../store";
import App from "../App";

enzyme.configure({adapter: new Adapter()});

let wrapper;

beforeEach(() => {
    wrapper = mount(
        <Provider store={store}>
            <App/>
        </Provider>
    )
});

it('displays 5 stars', () => {
    expect(wrapper.find('.filter-star').length).toEqual(5)
});

it('displays 3 facility filters', () => {
    expect(wrapper.find('.facility-filter').length).toEqual(3)
});