const assert = require('assert');
const { add } = require('./index');

// Test case
assert.strictEqual(add(2, 3), 5, '2 + 3 should equal 5');
console.log('✅ All tests passed!');
