import './JustMyLuck.single';
import JustMyLuck from './JustMyLuck';

import Array_fromExcept from './core/Array/fromExcept';
import Array_prototype_multicombinations from './core/Array/prototype/multicombinations';

JustMyLuck.extend({
	multicombination(collection, count) {
		let array = Array_fromExcept(collection);
		return this.single(Array_prototype_multicombinations(array, count));
	},
});
