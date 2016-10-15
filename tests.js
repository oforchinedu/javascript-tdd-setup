'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/Sum_of_primes.js');

describe("Test sum of prime numbers less than or equal to a number", function(){
  it("should return undefined for numbers less than 2", function(){
    assert(
      lib.sumOfPrimes(1) === undefined
      );
  })
  it("should return undefined for string input ", function(){
    assert(
      lib.sumOfPrimes("") === undefined
      );
  })
  it("should return undefined for array input", function(){
    var arraylst = [1,2,3,4]
    assert(lib.sumOfPrimes(arraylst) == undefined);
  })
  it("should return undefined for no input", function(){
    assert(
      lib.sumOfPrimes("") === undefined
      );
  })
  it("should return undefined for decimal numbers", function(){
    assert(
      lib.sumOfPrimes(0.4) === undefined
      );
  })
  it("should return undefined for negative numbers", function(){
    assert(
      lib.sumOfPrimes(-1) === undefined
      );
  })
  it("should return 2 if the number is 2", function(){
    assert(lib.sumOfPrimes(2) === 2)
  })
  it("it should return 77 if the number is 20", function(){
    assert(
      lib.sumOfPrimes(20) === 77
      );
  })
  it("it should return 1161 if the number is 101", function(){
    assert(
      lib.sumOfPrimes(101) == 1161
      );
  })
  it("should return undefined if number is 1", function(){
    assert(
      lib.sumOfPrimes(1) == undefined
      );
  })
});
