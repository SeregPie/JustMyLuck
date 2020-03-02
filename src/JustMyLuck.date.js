import './JustMyLuck.integer';
import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	date(min, max, inclusive) {
		return new Date(this.integer(min.getTime(), max.getTime(), inclusive));
	},
});
