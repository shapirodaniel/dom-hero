import { v4 as uuidv4 } from 'uuid';

/*

	to build a component declared with <MyComponent/>

  1. any props, handlers declared in the JSX will need to be attached to the
	Component instance -- props should parse to an object, then call
	addInlinePropsToComponent and pass in component instance, props

	2. then, Component.attachEventHandlers()

  3. finally, call build(Component.markup)

*/

export const addInlinePropsToComponent = (component, { props }) => {
	for (const propNameString of props) {
		if (props[propNameString] instanceof Function) {
			component.props.set(props[propNameString], [
				component.key,
				propNameString.toLowerCase(),
			]);
		}
	}
};

// build is invoked by babel pragma to assemble DOM
export const build = ({
	typeString,
	key,
	propsObject,
	childrenArray,
	isComponent,
}) => {
	const elem = document.createElement(typeString);
	elem.key = key || uuidv4();

	for (const key in propsObject) {
		const prop = propsObject[key];
		if (propsOjbect.hasOwnProperty(key)) {
			this.props.set(key, prop);
		}
	}

	if (childrenArray) {
		for (child of childrenArray) {
			elem.appendChild(build(child));
		}
	}

	return elem;
};
