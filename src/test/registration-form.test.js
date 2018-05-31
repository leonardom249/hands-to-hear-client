import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import {RegistrationForm} from '../components/registration-form';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Not connected RegistrationForm to render without crashing', () => {
    it('renders without crashing', () => {
        const handleSubmit=jest.fn();
        const dispatch=jest.fn();
        shallow(<RegistrationForm dispatch={dispatch} handleSubmit={handleSubmit}/>);
    });

    it('Renders the <form>', () => {
        const handleSubmit=jest.fn();
        const dispatch=jest.fn();
        const wrapper = shallow(<RegistrationForm dispatch={dispatch} handleSubmit={handleSubmit}/>);
        expect(wrapper.hasClass('login-form')).toEqual(true);
    });
});