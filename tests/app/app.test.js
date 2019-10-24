import { h } from 'preact';
import App from '../../src/components/app';
import { render } from 'preact-render-to-string';

test('renders app rightfully', () => {
    const stringified = render(
        <App />,
    );
    expect(stringified).toMatchSnapshot();
});
