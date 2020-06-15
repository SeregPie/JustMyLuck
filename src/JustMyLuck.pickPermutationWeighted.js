import './JustMyLuck.pickCombinationWeighted';
import './JustMyLuck.shuffleInPlace';
import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	pickPermutationWeighted(weightedCollection, k) {
		return this.shuffleInPlace(this.pickCombinationWeighted(weightedCollection, k));
	},
	permutationWeighted: (() => {
		let warn = true;
		return function(...args) {
			if (warn) {
				console.warn('[JustMyLuck] The function `.permutationWeighted` is deprecated. Please use `.pickPermutationWeighted` instead.');
				warn = false;
			}
			return this.pickPermutationWeighted(...args);
		};
	})(),
});
