import './JustMyLuck.float';
import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	integer(min, max, inclusive = false) {
		min = Math.ceil(min);
		max = Math.floor(max);
		if (inclusive) {
			max++;
		}
		if (max - min === 1) {
			return min;
		}
		return Math.floor(this.float(min, max));
	},
});
