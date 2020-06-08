import './JustMyLuck.integer';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';

JustMyLuck.extend({
	single(array) {
		array = Array_fromExceptLike(array);
		return array[this.integer(0, array.length)];
	},
});

/*
[
	'item',
	'pick',
	'pickItem',
	'sample',
	'sampleItem',
].forEach(key => {
	JustMyLuck.extend({
		[key](...args) {
			return this.single(...args);
		},
	});
});
*/
