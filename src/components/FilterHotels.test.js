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

it('its the hotel list when stars and facilities are clicked', () => {
    const thirdStar = wrapper.find('.filter-star').at(3);
    const gymFacilities = wrapper.find('.facility-filter').last();

    //click 3rd star
    thirdStar.simulate('click');

    //click gym filter
    gymFacilities.simulate('click');

    expect(wrapper.find('tbody > tr').length).toEqual(2)
});





