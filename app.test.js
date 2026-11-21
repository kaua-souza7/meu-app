const test = require ('node:test');
const assert = require ('node:assert');
const { somar } = require ('./index');

test('soma 2 + 3 da 5', () => {
     assert.strictEqual(somar(2, 3), 5);
})
