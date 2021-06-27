import { v4 as uuidv4 } from 'uuid';

/*

	props: Map {
		propNameString: prop,
		callbackFn: [nodeKey, handlerName]
		...
	}

	handlerName is a valid eventListener type string
	ex., onclick, onblur, onfocusin, etc.

	nodeKey is a unique, DOM-valid node identifier string

	* we're using Map because we know that every fn in props will necessarily
		be an eventHandler, since any other func we would want to invoke
		will be accessible on the eventListener closure, so we wouldn't include it in props!
*/

export class Component {
	constructor(jsx) {
		this.jsx = jsx;
		this.key = uuidv4();
		this.props = new Map();
		this.markup;
	}

	attachEventHandlers() {
		for (let [key, value] of this.props)
			if (key instanceof Function) {
				const [nodeKey, handlerName] = value;
				this.markup
					.querySelector(`key=['${nodeKey}']`)
					.addEventListener(handlerName, key);
			}
	}

	embed(targetNode) {
		this.attachEventHandlers();
		targetNode.children.length && targetNode.contains(this.markup)
			? targetNode.replaceChild(targetNode.lastElementChild, this.markup)
			: targetNode.appendChild(this.markup);
	}

	useProp(propNameString) {
		// supports lazyEval props, prop: () => prop
		const prop = this.props.get(propNameString);
		return prop instanceof Function ? prop() : prop;
	}
}
