import { h } from 'preact';
import Key from './index';
import { mount } from 'enzyme';

let clickedNumber;
/**
 * @param {number} n
 * @returns {void}
 */
const clickHandler = (n) => { clickedNumber = n; };

test('onPress to be called', () => {
    const numberPassed = 137;
    const context = mount(<Key onPress={clickHandler} number={numberPassed} />);

    context.find('button').simulate('click');

    expect(clickedNumber).toBe(numberPassed);
});
