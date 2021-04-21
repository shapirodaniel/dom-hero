// first import supresses a parcel typeerror
import 'regenerator-runtime/runtime';
import axios from 'axios';
import App from './app';

const currentData = async () => {
	const { data } = await axios.get(
		'https://uselessfacts.jsph.pl/random.json?language=en'
	);
	return data.text.replace(/\\/gi, '');
};

const fakeUpdater = async () => {
	App.update({ ...App.props, text: await currentData() });
};

setInterval(fakeUpdater, 3000);
