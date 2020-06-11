import './JustMyLuck.combinationWeighted';
import './JustMyLuck.shuffleInPlace';
import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	permutationWeighted(weightedCollection, k) {
		return this.shuffleInPlace(this.combinationWeighted(weightedCollection, k));
	},
});
