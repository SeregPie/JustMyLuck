import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	chance(p) {
		if (p > 0) {
			if (p < 1) {
				return this.random() < p;
			}
			return true;
		}
		return false;
	},
});
