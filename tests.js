var test = require('tape');
var badNumbers = require('./');

test('timing test', function (t) {
	t.deepEqual(badNumbers([1, 2, 3], [2]), [1, 3], 'The result should be [3]');
	t.deepEqual(badNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1234], [1, 2, 5, 8, 4, 1234]), [3, 6, 7, 9, 10, 11, 12], 'The result should be [1, 2, 5, 8, 4, 1234]');
	t.deepEqual(badNumbers([7, 5, 2, 2, 2, 1, 5, 3], [5, 2, 2]), [7, 1, 3], 'The result should be [7, 1, 3]');
	t.end();
});
