import './JustMyLuck.pickIndex';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';

JustMyLuck.extend({
	pick(collection) {
		let array = Array_fromExceptLike(collection);
		return array[this.pickIndex(array)];
	},
	single(...args) {
		return this.pick(...args);
	},
});
