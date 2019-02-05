var test = function(x) {
  if (x < 0) {
    return false;
  }
  var ns = [];
  var input = x;
  while (input > 0) {
    var tem = parseInt(input / 10);
    var digit = input - tem * 10;
    ns.push(digit);
    input = tem;
  }
  var sn = ns.slice();
  sn.reverse();
  if ((sn==ns)) return true;
  else return false;
};

console.log(test(121));
