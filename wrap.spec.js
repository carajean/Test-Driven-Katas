const {
    expect
} = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it('Returns empty string if empty string was provided', () => {
        expect(wrap("", 10)).to.equal("");
    });

    it('Returns line without line breaks if the max length is greater than the line length', () => {
        expect(wrap("puppies are cute", 20)).to.equal("puppies are cute");
    });

    it('Returns line with one line break preserving whole words if the max length is less than the line length', () => {
        expect(wrap("puppies are cute", 14)).to.equal("puppies are \ncute");
    });

    it('Returns line with multiple line breaks preserving whole words if the max length is less than the line length', () => {
        expect(wrap("puppies are cute, playful, and fluffy", 10)).to.equal("puppies\nare cute, \nplayful, \nand fluffy");
    });
});
