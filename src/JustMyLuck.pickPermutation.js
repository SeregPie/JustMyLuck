import './JustMyLuck.pickCombination';
import './JustMyLuck.shuffleInPlace';
import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	pickPermutation(collection, k) {
		return this.shuffleInPlace(this.pickCombination(collection, k));
	},
	permutation(...args) {
		return this.pickPermutation(...args);
	},
});
