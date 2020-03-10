import './JustMyLuck.shuffleInPlace';
import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	shuffle(collection) {
		return this.shuffleInPlace(Array.from(collection));
	},
});
