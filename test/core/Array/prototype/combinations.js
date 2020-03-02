let Function_prototype_bindRecursive = require('../../Function/prototype/bindRecursive');

module.exports = function(that, length) {
	if (that.length < length) {
		return [];
	}
	return Function_prototype_bindRecursive((recur, array, length) => {
		if (--length < 0) {
			return [[]];
		}
		let combinations = [];
		array = array.slice();
		while (array.length - length) {
			let value = array.shift();
			recur(array, length).forEach(combination => {
				combination.unshift(value);
				combinations.push(combination);
			});
		}
		return combinations;
	})(that, length);
};
