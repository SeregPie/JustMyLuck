import './JustMyLuck.integer';
import JustMyLuck from './JustMyLuck';

JustMyLuck.extend({
	shuffleInPlace(array) {
		let i = array.length;
		while (i > 1) {
			let j = this.integer(0, i);
			i--;
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	},
});
