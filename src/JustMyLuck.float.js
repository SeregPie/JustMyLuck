import './JustMyLuck.boolean';
import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	float(min, max, inclusive = false) {
		if (inclusive) {
			if (min === max) {
				return min;
			}
			let x;
			if ([0, 0].some(() => {
				x = this.float(min, max);
				return x === min;
			})) {
				if (this.boolean()) {
					x = max;
				}
			}
			return x;
		}
		if (min < max) {
			let x = min + (max - min) * this.random();
			return (x < max) ? x : min;
		}
		throw new RangeError();
	},
});
