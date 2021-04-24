import { Component } from '../core';

let props = {};

const logoMarkup = () => `<h3>{ logo-here }</h3>`;

const Logo = new Component(props, logoMarkup);

export default Logo;
