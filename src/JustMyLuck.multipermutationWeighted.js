import './JustMyLuck.singleWeighted';
import JustMyLuck from './JustMyLuck';

import Array_fromExcept from './core/Array/fromExcept';
import Array_prototype_multipermutations from './core/Array/prototype/multipermutations';

JustMyLuck.extend({
	multipermutationWeighted(weightedCollection, count) {
		let weightedArray = Array_fromExcept(weightedCollection);
		return this.singleWeighted(Array_prototype_multipermutations(weightedArray, count).map(v => [
			v.map(v => v[0]),
			v.map(v => v[1]).reduce((r, n) => r + n, 0),
		]));
	},
});
