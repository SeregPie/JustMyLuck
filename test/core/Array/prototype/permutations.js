let Function_prototype_bindRecursive = require('../../Function/prototype/bindRecursive');

module.exports = function(that, length) {
	if (that.length < length) {
		return [];
	}
	return Function_prototype_bindRecursive((recur, array, length) => {
		if (--length < 0) {
			return [[]];
		}
		let permutations = [];
		array.forEach((value, index, array) => {
			array = array.slice();
			array.splice(index, 1);
			recur(array, length).forEach(permutation => {
				permutation.unshift(value);
				permutations.push(permutation);
			});
		});
		return permutations;
	})(that, length);
};
