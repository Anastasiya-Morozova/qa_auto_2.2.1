function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
  x -= y;
  return x;
}

function divideBalanceByAccounts(x, y, v) {
  x += v;
  x /= y;
  return x;
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

function incrementNumber(x){
 return ++x
}

function decrementNumber(x){
  return --x
 }

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000));
console.log(getRestAfterDivision(7000, 3));
console.log(incrementNumber(10));
console.log(decrementNumber(10));
