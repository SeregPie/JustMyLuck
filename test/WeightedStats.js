let util = require('util');

module.exports = class {
	constructor(valuesWeighted) {
		let stats = new Map();
		for (let [value, weight] of valuesWeighted) {
			stats.set(value, [weight, 0]);
		}
		Object.assign(this, {stats});
	}
	inc(value) {
		let {stats} = this;
		if (!stats.has(value)) {
			for (let key of stats.keys()) {
				if (util.isDeepStrictEqual(value, key)) {
					value = key;
					break;
				}
			}
		}
		stats.get(value)[1]++;
	}
	get deviation() {
		let {stats} = this;
		let statsValues = [...stats.values()];
		let sumA = statsValues.map(v => v[0]).reduce((r, n) => r + n);
		let sumB = statsValues.map(v => v[1]).reduce((r, n) => r + n);
		return statsValues.slice(1).reduce((r, [a, b]) => r + Math.abs(a/sumA - b/sumB), 0) / stats.size;
	}
};
