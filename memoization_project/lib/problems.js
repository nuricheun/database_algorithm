// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578
function lucasNumberMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 2;
  if (n === 1) return 1;

  let result = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo);
  memo[n] = result;
  return result;
}

// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount, memo = {}) {
  let key = coins.join("") + "-" + amount;
  if (key in memo) return memo[key];
  if (amount === 0) return 0;
  let result =;
  coins.forEach(coin => {
    if (amount >= coin) {
      result.push(1 + minChange(coins, amount - coin, memo));
    }
  });
  let realone = Math.min(...result);
  memo[key] = realone;
  return realone;
}



function aa(str, key){
  console.log(str, key)
  if(key.length === 1 && key === str[0]) return true;
  if(str.length === 1 && key!=str) return false;
  if(str[0]===key[0]){
    aa(str.slice(1), key.slice(1))
  }else{
    aa(str.slice(1), key)
  }
}


module.exports = {
  lucasNumberMemo,
  minChange
};
