import Number_isSafeInteger from './isSafeInteger';
import Number_prototype_isNonNegative from './prototype/isNonNegative';

export default function(value) {
	return Number_isSafeInteger(value) && Number_prototype_isNonNegative(value);
}
