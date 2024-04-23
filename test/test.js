import { trimAllStrings, booleanToSymbol } from '../index.js';
import { expect } from 'chai';

describe('booleanToSymbol', () => {
    it('should return ✔ when true is passed', () => {
        expect(booleanToSymbol(true)).to.equal('✔');
    });

    it('should return X when false is passed', () => {
        expect(booleanToSymbol(false)).to.equal('X');
    });
});

describe('trimAllStrings', () => {
    it('should trim all string values in a flat object', () => {
      const input = { a: ' hello ', b: 'world ' };
      const expected = { a: 'hello', b: 'world' };
      expect(trimAllStrings(input)).to.deep.equal(expected);
    });
  
    it('should trim strings in nested objects', () => {
      const input = { a: ' foo ', b: { c: ' bar ', d: 'baz ' } };
      const expected = { a: 'foo', b: { c: 'bar', d: 'baz' } };
      expect(trimAllStrings(input)).to.deep.equal(expected);
    });
  
    it('should trim strings in nested arrays', () => {
      const input = { a: [' foo ', ' bar '], b: { c: [' baz ', '   qux'] } };
      const expected = { a: ['foo', 'bar'], b: { c: ['baz', 'qux'] } };
      expect(trimAllStrings(input)).to.deep.equal(expected);
    });
  
    it('should handle mixed types without changing non-string values', () => {
      const input = { a: 1, b: ' hello ', c: true, d: { e: ' world ', f: 2 } };
      const expected = { a: 1, b: 'hello', c: true, d: { e: 'world', f: 2 } };
      expect(trimAllStrings(input)).to.deep.equal(expected);
    });
  
    it('should handle objects with nested arrays of objects', () => {
      const input = { a: [{ b: ' foo ' }, { c: ' bar ', d: [ ' baz ', { e: ' qux ' } ] }] };
      const expected = { a: [{ b: 'foo' }, { c: 'bar', d: ['baz', { e: 'qux' }] }] };
      expect(trimAllStrings(input)).to.deep.equal(expected);
    });
});