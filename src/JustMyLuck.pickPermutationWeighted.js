import './JustMyLuck.pickCombinationWeighted';
import './JustMyLuck.shuffleInPlace';
import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	pickPermutationWeighted(weightedCollection, k) {
		return this.shuffleInPlace(this.pickCombinationWeighted(weightedCollection, k));
	},
	permutationWeighted(...args) {
		return this.pickPermutationWeighted(...args);
	},
});
