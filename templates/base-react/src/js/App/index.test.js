import React from 'react';
import App from '.';

describe('<App />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />)
    });
    it('should render successfully', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should have component message', function() {
        expect(wrapper.find('.app__wrapper').text()).toEqual('Base App Created.');
    });
});
