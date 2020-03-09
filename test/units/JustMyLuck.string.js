let assert = require('assert').strict;

let JustMyLuck = require('../../index');

module.exports = function() {
	{
		let alphabet = JustMyLuck.alphanumeric;
		let length = 32;
		Array.from({length: 100}).forEach(() => {
			let string = JustMyLuck.string(alphabet, length);
			assert.equal(string.length, length);
			assert([...string].every(char => alphabet.includes(char)));
		});
	}
	assert.equal(JustMyLuck.string('', 1), '');
	assert.equal(JustMyLuck.string('a', 3), 'aaa');
	assert.equal(JustMyLuck.string('abc', 0), '');
	assert.equal(JustMyLuck.string('abc', -1), '');
};
