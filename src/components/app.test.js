import { h } from 'preact';
import App from './app';
import { render } from 'preact-render-to-string';

// eslint-disable-next-line max-len
const snapShot = `<div class="vsr"></div><div class="keypad"><div class="key-w"><button type="button" class="key">1</button></div><div class="key-w"><button type="button" class="key">2</button></div><div class="key-w"><button type="button" class="key">3</button></div><div class="key-w"><button type="button" class="key">4</button></div><div class="key-w"><button type="button" class="key">5</button></div><div class="key-w"><button type="button" class="key">6</button></div><div class="key-w"><button type="button" class="key">7</button></div><div class="key-w"><button type="button" class="key">8</button></div><div class="key-w"><button type="button" class="key">9</button></div><div class="key-w"><button type="button" class="key">0</button></div></div>`;

test('renders app rightfully', () => {
    const stringified = render(
        <App number={137} />,
    );
    expect(stringified).toBe(snapShot);
});
