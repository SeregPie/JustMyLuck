import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	booleanWeighted(weight) {
		if (weight > 0) {
			if (weight < Infinity) {
				return (1 - this.random()) * (1 + weight) > 1;
			}
			return true;
		}
		return false;
	},
});
