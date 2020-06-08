import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	boolean() {
		return this.random() < 0.5;
	},
});
