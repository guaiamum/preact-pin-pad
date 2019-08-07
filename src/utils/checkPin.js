const encodedPin = '1234';

const salt = (pin) => pin;

export default (pin) => salt(pin) === encodedPin;
