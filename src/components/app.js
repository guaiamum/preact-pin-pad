import { h, Component, Fragment } from 'preact';
import Key from './Key';
import { checkPin, getStatusClass } from '../utils';

const MAX_FAILED_ATT = 3;
const keySet = new Array(10).fill(null).map((e, idx) => idx < 9 ? (idx + 1) : 0);

/**
 * @param {number} length
 * @returns {string}
 */
const maskResult = (length) => new Array(length).fill('*').join('');

export default class App extends Component {
    /**
     * @param {Object} props
     * @constructor
     */
    constructor (props) {
        super(props);

        this.failedAttempts = 0;
        this.pin = '';
        this.state = { result: this.pin, isLocked: false };
    }

    /**
     * @param {number} number
     * @returns {void}
     */
    clickHandler = (number) => {
        const { isLocked, result } = this.state;

        if (isLocked || this.pin.length > 3) {
            return;
        }

        this.pin += number;

        if (this.pin.length <= 3) {
            this.setState({ result: maskResult(result.length) + number });
            return;
        }

        if (checkPin(this.pin)) {
            this.setState({ result: 'OK' });
            this.failedAttempts = 0;
        } else {
            if (++this.failedAttempts >= MAX_FAILED_ATT) {
                this.lockDevice();
                return;
            }
            this.setState({ result: 'ERROR' });
        }
        this.resetAppTimeout();
    }

    /**
     * @todo: add loading indicator
     * @param {number} delay
     * @returns {void}
     */
    resetAppTimeout = (delay = 2000) => {
        setTimeout(
            () => {
                this.setState({ result: '', isLocked: false });
                this.pin = '';
            },
            delay,
        );
    }

    /**
     * @returns {void}
     */
    lockDevice = () => {
        this.setState({ result: 'LOCKED', isLocked: true });
        this.resetAppTimeout(30000);
        this.failedAttempts = 0;
    }

    /**
     * @todo: split visor into component
     * @param {Object} props
     * @param {Object} state
     * @returns {JSX}
     */
    render (props, { result, isLocked }) {
        const visorClasses = getStatusClass(result);
        return (
            <Fragment>
                <div class={`vsr${visorClasses ? ' ' + visorClasses : ''}`}>{ result }</div>
                <div class="keypad">
                    {
                        keySet.map((number) =>
                            <Key
                                disabled={isLocked}
                                number={number}
                                onPress={this.clickHandler}
                            />,
                        )
                    }
                </div>
            </Fragment>
        );
    }
}
