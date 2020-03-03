import './JustMyLuck.combination';
import './JustMyLuck.shuffleInPlace';
import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	permutation(collection, maxCount) {
		return this.shuffleInPlace(this.combination(collection, maxCount));
	},
});
