let WeightedStats = require('./WeightedStats');

module.exports = class extends WeightedStats {
	constructor(values) {
		let valuesWeighted = new Map();
		for (let value of values) {
			valuesWeighted.set(value, 1);
		}
		super(valuesWeighted);
	}
};
