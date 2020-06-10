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
	assert.deepEqual(JustMyLuck.string('', -4), '');
	assert.deepEqual(JustMyLuck.string('', 0), '');
	assert.deepEqual(JustMyLuck.string('', 1), '');
	assert.deepEqual(JustMyLuck.string('a', -4), '');
	assert.deepEqual(JustMyLuck.string('a', 0), '');
	assert.deepEqual(JustMyLuck.string('a', 1), 'a');
	assert.deepEqual(JustMyLuck.string('a', 3), 'aaa');
	assert.deepEqual(JustMyLuck.string('abc', -4), '');
	assert.deepEqual(JustMyLuck.string('abc', 0), '');
};
