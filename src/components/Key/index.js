import { h } from 'preact';
import pure from '../../utils/pure';

/**
 * @param {Object} props
 * @returns {void}
 */
export default pure(({ number, onPress, ...otherProps }) => (
    <div class="key-w">
        <button
            {...otherProps}
            type="button"
            class="key"
            onClick={(ev) => { onPress(number); }}
        >
            { number }
        </button>
    </div>
));
