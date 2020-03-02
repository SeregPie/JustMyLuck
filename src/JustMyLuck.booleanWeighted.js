import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	booleanWeighted(weight) {
		return (1 - this.random()) * (1 + weight) > 1;
	},
});
