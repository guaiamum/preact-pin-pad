import { h } from 'preact';
// import pure from 'pure-component';

export default ({ text, ...otherProps }) => (
    <button type="button" class="key" {...otherProps}>{ text }</button>
);
