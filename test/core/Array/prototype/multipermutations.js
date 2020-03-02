let Function_prototype_bindRecursive = require('../../Function/prototype/bindRecursive');

module.exports = function(that, length) {
	return Function_prototype_bindRecursive((recur, array, length) => {
		if (--length < 0) {
			return [[]];
		}
		let permutations = [];
		array.forEach(value => {
			recur(array, length).forEach(permutation => {
				permutation.unshift(value);
				permutations.push(permutation);
			});
		});
		return permutations;
	})(that, length);
};
