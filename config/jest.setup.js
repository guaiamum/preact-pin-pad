import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
import '@babel/polyfill';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import initJsDom from 'jsdom-global';

initJsDom();

configure({ adapter: new Adapter() });

expect.extend({ toMatchImageSnapshot });
