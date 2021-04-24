import { propsRegistry, Component } from '../core';
import { Nav } from './';

let props = {};

const appMarkup = () => `
		${Nav.embed()}
`;

const App = new Component(props, appMarkup);

export default App;
