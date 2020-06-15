import './JustMyLuck.integer';
import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	pickIndex(array) {
		return this.integer(0, array.length);
	},
});
