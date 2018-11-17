"use strict";

var should = require("chai").should();
var fcash = require("../");

describe('#versionGuard', function() {
  it('global._fcash should be defined', function() {
    should.equal(global._fcash, fcash.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      fcash.versionGuard('version');
    }).should.throw('More than one instance of fcash');
  });
});
