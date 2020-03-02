import './JustMyLuck.shuffleInPlace';
import JustMyLuck from './JustMyLuck';

import Array_from from './core/Array/from';

JustMyLuck.extend({
	shuffle(collection) {
		let array = Array_from(collection);
		return this.shuffleInPlace(array);
	},
});
