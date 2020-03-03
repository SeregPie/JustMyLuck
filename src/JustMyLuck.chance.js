import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	chance(p) {
		return this.random() < p;
	},
});
