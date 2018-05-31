import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import {Dashboard} from '../components/Dashboard';

describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
        const dispatch=jest.fn()
        shallow(<Dashboard dispatch={dispatch}/>);
    });

});