import assert from 'assert';
import chai from 'chai';
import App from '../src/app';
var expect = chai.expect;

describe('Frontend', function() {
  describe('App', function() {
    it('should exist', function() {
      expect(App).to.exist;
    });
    it('should have a render method', function() {
      expect(App.prototype.render).to.be.a('Function');
    });
  });
});