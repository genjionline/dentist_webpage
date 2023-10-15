// 32.1
let assert = chai.assert;

function test(input) {
  return input !== '';
}

describe('test', function () {
  it('not empty string', function () {
    assert.equal(test(''), false, 'return not "false"');
  });
});
