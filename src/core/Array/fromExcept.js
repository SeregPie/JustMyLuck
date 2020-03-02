import Array_from from './from';
import Array_is from './is';

export default function(value) {
	return Array_is(value) ? value : Array_from(value);
}
