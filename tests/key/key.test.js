import { h } from 'preact';
import Key from '../../src/components/Key/index';
import { mount } from 'enzyme';

let clickedNumber;
/**
 * @param {number} n
 * @returns {void}
 */
const clickHandler = (n) => { clickedNumber = n; };

test('onPress to be called', () => {
    const passedNumber = 137;
    const context = mount(<Key onPress={clickHandler} number={passedNumber} />);

    context.find('button').simulate('click');

    expect(clickedNumber).toBe(passedNumber);
});
