import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	boolean() {
		return this.random() < 1/2;
	},
});
