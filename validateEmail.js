// 32.2
// describe("validateEmail", function () {
//     describe('valid string', function() {
//         it('not empty string', function () {
//             assert.equal(validateEmail(''), false);
//         });
//         it('typeof string', function () {
//             assert.equal(validateEmail(222), false, 'number error');
//             assert.equal(validateEmail(true), false, 'boolean error');
//             assert.equal(validateEmail({}), false, 'object error');
//         });
//         it('not empty string', function () {
//             assert.equal(validateEmail('    '), false);
//         });
//     describe ('valid data', function (){
//         it('Don\'t have the @ or @ the first character', function () {
//             assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
//             assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character')
//         })
//     });
//     })
//     })
// function validateEmail(email) {
//     if (email == '') return false
//     if (typeof email != 'string') return false
//     if (!email.split('').includes('@') || email.split('') [0] == '@') return false
//     return true
// }
// function validateEmail(email) {
//     if (email == '') return false;
//     if (typeof email != 'string') return false;
//     if (email.length < 5) return false;
//     if (!email.includes('@') || email[0] == '@') return false;
//     return true;
// }
// 32.3

// describe("validateEmail", function () {
//     describe('valid string', function () {
//         it('not empty string', function () {
//             assert.equal(validateEmail(''), false);
//         });
//         it('typeof string', function () {
//             assert.equal(validateEmail(222), false, 'number error');
//             assert.equal(validateEmail(true), false, 'boolean error');
//             assert.equal(validateEmail({}), false, 'object error');
//         });
//         it('not empty string', function () {
//             assert.equal(validateEmail('    '), false);
//         });
//         it('string with less than 5 characters', function () {
//             assert.equal(validateEmail('abc'), false, 'less than 5 characters');
//         });
//         it('string with more than 5 characters', function () {
//             assert.equal(validateEmail('abcdefg'), true, 'more than 5 characters');
//         });
//     });

//     describe('valid data', function () {
//         it('Don\'t have the @ or @ the first character', function () {
//             assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
//             assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character');
//         });

//         it('Has only one @ symbol', function () {
//             assert.isFalse(validateEmail('email@gmail.com@example.com'), 'Multiple @ symbols');
//             assert.isTrue(validateEmail('email@gmail.com'), 'One @ symbol');
//         });
//     });
// });

// function validateEmail(email) {
//     if (email == '') return false;
//     if (typeof email != 'string') return false;
//     if (email.length < 5) return false;
//     if (!email.includes('@') || email[0] == '@') return false;
//     if (email.split('@').length !== 2) return false;
//     return true;
// }
// 32.4
// let assert = chai.assert;

describe("validateEmail", function () {
    describe('valid string', function () {
        it('not empty string', function () {
            assert.equal(validateEmail(''), false);
        });
        it('typeof string', function () {
            assert.equal(validateEmail(222), false, 'number error');
            assert.equal(validateEmail(true), false, 'boolean error');
            assert.equal(validateEmail({}), false, 'object error');
        });
        it('not empty string', function () {
            assert.equal(validateEmail('    '), false);
        });
        it('string with less than 5 characters', function () {
            assert.equal(validateEmail('abc'), false, 'less than 5 characters');
        });
        it('string with more than 5 characters', function () {
            assert.equal(validateEmail('abcdefg'), true, 'more than 5 characters');
        });
    });

    describe('valid data', function () {
        it('Don\'t have the @ or @ the first character', function () {
            assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
            assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character');
        });

        it('Has only one @ symbol', function () {
            assert.isFalse(validateEmail('email@gmail.com@example.com'), 'Multiple @ symbols');
            assert.isTrue(validateEmail('email@gmail.com'), 'One @ symbol');
        });

        it('Has a . after @, but not .@', function () {
            assert.isTrue(validateEmail('e.mail@gmail.com'), 'Valid email');
            assert.isFalse(validateEmail('e.mail@gmailcom'), 'Invalid email');
            assert.isFalse(validateEmail('e.mail.@gmail.com'), 'Invalid email');
        });
    });
});

function validateEmail(email) {
    if (email == '') return false;
    if (typeof email != 'string') return false;
    if (email.length < 5) return false;
    if (!email.includes('@') || email[0] == '@') return false;
    if (email.split('@').length !== 2) return false;
    if (email.indexOf('.') === -1 || email.indexOf('.') < email.indexOf('@') + 1 || email.indexOf('.') === email.length - 1) return false;
    return true;
}
