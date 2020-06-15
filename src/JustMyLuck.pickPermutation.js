import './JustMyLuck.pickCombination';
import './JustMyLuck.shuffleInPlace';
import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	pickPermutation(collection, k) {
		return this.shuffleInPlace(this.pickCombination(collection, k));
	},
	permutation: (() => {
		let warn = true;
		return function(...args) {
			if (warn) {
				console.warn('[JustMyLuck] The function `.permutation` is deprecated. Please use `.pickPermutation` instead.');
				warn = false;
			}
			return this.pickPermutation(...args);
		};
	})(),
});
