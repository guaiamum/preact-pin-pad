import { encrypt } from 'salteen';

const encoder = encrypt('mysaltycracker');
const encodedPin = encoder('1234');

export default (pin) => encoder(pin) === encodedPin;
