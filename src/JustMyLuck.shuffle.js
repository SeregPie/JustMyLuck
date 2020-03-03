import './JustMyLuck.shuffleInPlace';
import JustMyLuck from './JustMyLuck';

import Array_from from './core/Array/from';

JustMyLuck.extend({
	shuffle(collection) {
		return this.shuffleInPlace(Array_from(collection));
	},
});
