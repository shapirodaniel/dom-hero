import { Component } from '../core';

let props = {};

const lazyGetOwnHTML = () => {
	const icon = NavLink.useProp('icon');
	const text = NavLink.useProp('text');

	return `
    <div class='navLink'>
      <i class='material-icons'>${icon}</i>
      <span>${text}</span>
    </div>
  `;
};

const NavLink = new Component(props, lazyGetOwnHTML);

export default NavLink;
