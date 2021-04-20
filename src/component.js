import { v4 as uuidv4 } from 'uuid';
import DOMPurify from 'dompurify';
const parser = new DOMParser();

export class Component {
	constructor(props = {}, lazyGetOwnHTML = () => null, shouldUpdate = false) {
		this.props = props;
		this.lazyGetOwnHTML = lazyGetOwnHTML;
		this.key;
		this.ownTree;
		this.shouldUpdate = shouldUpdate;
	}

	buildComponentTree() {
		if (!key) this.key = uuidv4();

		let newRoot = document.createElement('div');
		newRoot.setAttribute('key', this.key);

		const newOwnHTML = DOMPurify.sanitize(
			parser.parseFromString(this.lazyGetOwnHTML())
		);

		newRoot.appendChild(newOwnHTML);

		this.ownTree = newRoot;
	}

	setProps(newProps) {
		this.props = newProps;
	}

	// render method will be called continuously
	// shouldUpdate flag will have been set for any
	// component whose incoming data (props) have changed
	// or whose lazyGetOwnHTML has changed
	render() {
		if (this.shouldUpdate) {
			this.buildComponentTree();
			this.shouldUpdate = false;
			return this.ownTree;
		}
	}
}
