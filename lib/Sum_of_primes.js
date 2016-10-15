'use strict'

module.exports = {
  sumOfPrimes: function(n) { 
    if (n < 2) {
      return undefined;
    }
    else if (typeof n == 'string') {
      return undefined
    }
    else if (Array.isArray(n)) {
      return undefined
    }
    else if (n % 1 !== 0) {
      return undefined
    }
    else {
      var prime = [];
      for(let p = 2; p <= n; p++){
        if (this.isPrime(p)) {
          prime.push(p);
        }
      }
    }
    let total = prime.reduce(this.sumOfArray)
    return total;
  },

  sumOfArray: function(x,y){
    return x + y
  },

  isPrime: function(n){
    var m = Math.floor(Math.sqrt(n));
    for(let i = 2; i <= m; i++){
      if (n % i === 0) {
        return false
      }
    }
    return true
  }

}
