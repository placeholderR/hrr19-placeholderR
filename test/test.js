import assert from 'assert';
import chai from 'chai';
import Stage from '../client/stage';
var expect = chai.expect;

describe('Frontend', function() {
  describe('Stage', function() {
    it('should exist', function() {
      expect(Stage).to.exist;
    });
    it('should have a render method', function() {
      expect(Stage.prototype.render).to.be.a('Function');
    });
  });
});