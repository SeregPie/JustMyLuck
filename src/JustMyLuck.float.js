import './JustMyLuck.boolean';
import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	float(min, max, inclusive = false) {
		if (inclusive) {
			if (min === max) {
				return min;
			}
			let x;
			let f = (() => {
				x = this.float(min, max);
				return x === min;
			});
			if (f() || f()) {
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
