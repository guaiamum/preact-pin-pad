import { h, Component, Fragment } from 'preact';
import Button from './Button';
import checkPin from '../utils/checkPin';

const MAX_FAILED_ATT = 3;
const buttonSet = new Array(10).fill(null).map((e, idx) => idx < 9 ? (idx + 1) : 0);

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
            console.log('failed');
            if (++this.failedAttempts >= MAX_FAILED_ATT) {
                this.lockDevice();
                return;
            }
            this.setState({ result: 'ERROR' });
        }
        this.resetAppTimeout();
    }

    resetAppTimeout=(delay = 3000) => {
        // do it with ... every second and then reset
        setTimeout(
            () => {
                this.setState({ result: '', isLocked: false });
                this.pin = '';
            },
            delay,
        );
    }

    lockDevice =() => {
        this.setState({ result: 'LOCKED', isLocked: true });
        this.resetAppTimeout(30000);
        this.failedAttempts = 0;
    }

    /**
     * @param {Object} props
     * @param {Object} state
     * @returns {JSX}
     */
    render (props, { result, isLocked }) {
        console.log('rendered', this.pin, `isLocked: ${isLocked}`);
        return (
            <Fragment>
                <div class="vsr">{ result }</div>
                <div class="keypad">
                    {
                        buttonSet.map((number) =>
                            <Button
                                disabled={isLocked}
                                text={number}
                                onClick={() => { this.clickHandler(number); }}
                            />,
                        )
                    }
                </div>
            </Fragment>
        );
    }
}
