import Array_from from './from';
import Array_isLike from './isLike';

export default function(value) {
	return Array_isLike(value) ? value : Array_from(value);
}
