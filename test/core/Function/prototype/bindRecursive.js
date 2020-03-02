module.exports = function(that) {
	let recur = function(...args) {
		return that.call(this, recur, ...args);
	};
	return recur;
};
