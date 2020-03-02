import './JustMyLuck.single';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';

JustMyLuck.extend({
	multipermutation(collection, count) {
		let array = Array_fromExceptLike(collection);
		let result = [];
		while (count > 0) {
			result.push(this.single(array));
			count--;
		}
		return result;
	},
	itemsRepeated(...args) {
		// eslint-disable-next-line no-console
		console.warn('[JustMyLuck] DeprecationWarning: .itemsRepeated is deprecated. Use .multipermutation instead.');
		return this.multipermutation(...args);
	},
	permutationRepeated(...args) {
		// eslint-disable-next-line no-console
		console.warn('[JustMyLuck] DeprecationWarning: .permutationRepeated is deprecated. Use .multipermutation instead.');
		return this.multipermutation(...args);
	},
});
