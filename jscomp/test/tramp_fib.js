// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function fib(n, k) {
  if (n === 0 || n === 1) {
    return k(1);
  } else {
    return {
      TAG: "Suspend",
      _0: () => fib(n - 1 | 0, v0 => fib(n - 2 | 0, v1 => k(v0 + v1 | 0)))
    };
  }
}

let u = fib(10, x => ({
  TAG: "Continue",
  _0: x
}));

function iter(_bounce) {
  while (true) {
    let bounce = _bounce;
    if (bounce.TAG === "Continue") {
      return bounce._0;
    }
    _bounce = bounce._0();
    continue;
  };
}

function isEven(n) {
  if (n !== 0) {
    if (n !== 1) {
      return {
        TAG: "Suspend",
        _0: () => isOdd(n - 1 | 0)
      };
    } else {
      return {
        TAG: "Continue",
        _0: false
      };
    }
  } else {
    return {
      TAG: "Continue",
      _0: true
    };
  }
}

function isOdd(n) {
  if (n !== 0) {
    if (n !== 1) {
      return isEven(n - 1 | 0);
    } else {
      return {
        TAG: "Continue",
        _0: true
      };
    }
  } else {
    return {
      TAG: "Continue",
      _0: false
    };
  }
}

eq("File \"tramp_fib.res\", line 53, characters 3-10", iter(u), 89);

eq("File \"tramp_fib.res\", line 55, characters 3-10", iter(isEven(20000)), true);

Mt.from_pair_suites("File \"tramp_fib.res\", line 57, characters 20-27", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.fib = fib;
exports.u = u;
exports.iter = iter;
exports.isEven = isEven;
exports.isOdd = isOdd;
/* u Not a pure module */
