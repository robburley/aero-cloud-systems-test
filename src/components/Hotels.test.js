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

it('displays 4 hotels', () => {
    expect(wrapper.find('tbody > tr').length).toEqual(4)
});
