import { Component } from '../core';
import { Logo, NavLink } from './';

let props = {
	navLinks: [
		{
			icon: 'home',
			text: 'home',
		},
		{
			icon: 'groups',
			text: 'about',
		},
		{
			icon: 'question_answer',
			text: 'contact',
		},
	],
};

const navMarkup = () => `
  <nav>
    ${Logo.embed()}
    <div class='navLinksContainer'>
      ${Nav.props.navLinks.map(link => NavLink.embed(link)).join('')}
    </div>
  </nav>
`;

const Nav = new Component(props, navMarkup);

export default Nav;
