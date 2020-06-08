export default class {
	constructor(random) {
		this.random = random;
	}
	static get random() {
		return Math.random;
	}
	static extend(object) {
		Object.entries(object).forEach(([key, value]) => {
			this[key] = value;
			Object.defineProperty(this.prototype, key, {
				get() {
					return this.constructor[key];
				},
			});
		});
	}
}
