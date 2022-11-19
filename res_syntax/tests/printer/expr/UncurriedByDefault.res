let cApp = foo(3)
let uApp = foo(. 3)

let cFun = x => 3
let uFun = (.x) => 3
let mixFun = (a, .b, c) => (d, e, f) => (g, .h) => 4
let bracesFun = (. x) => y => x+y
let cFun2 = (x, y) => 3
let uFun2 = (. x, y) => 3

type cTyp = string => int
type uTyp = (. string) => int
type mixTyp = (string, .string, string) => (string, string, string) => (string, .string) => int
type bTyp = (. string) => string => int
type cTyp2 = (string, string) => int
type uTyp2 = (.string, string) => int
type cu = unit => int
type cp = () => int
type cuu = unit => unit => int
type cpu = () => unit => int
type cup = unit => () => int
type cpp = () => () => int
type cu2 = (unit, unit) => unit
type cp2 = ((), ()) => unit
type uu = (. unit) => int
type up = (. ()) => int
type uuu = (. unit) => (. unit) => int
type upu = (. ()) => (. unit) => int
type uup = (. unit) => (. ()) => int
type upp = (. ()) => (. ()) => int
type uu2 = (. unit, unit) => unit
type up2 = (. (), ()) => unit

type cnested = (string => unit) => unit
type unested = (. (. string) => unit) => unit

let pipe = a->foo(. b, c)

let _ = setTimeout(. (. ()) => {
  resolve(. 1)
}, 100)

let _ = setTimeout(() => {
  resolve(1)
}, 100)

@@uncurried

let cApp = foo(. 3)
let uApp = foo(3)

let cFun = (. x) => 3
let uFun = x => 3
let mixFun = (.a) => (b, c) => (.d, e, f) => (.g) => h => 4
let bracesFun = x => (. y) => x+y
let cFun2 = (. x, y) => 3
let uFun2 = (x, y) => 3
let cFun2Dots = (.x, .y) => 3 // redundant dot on y

type cTyp = (. string) => int
type uTyp = string => int
type mixTyp = (.string) => (string, string) => (.string, string, string, string) => string => int
type bTyp = string => (. string) => int
type cTyp2 = (. string, string) => int
type uTyp2 = (string, string) => int
type cu = (. unit) => int
type cp = (. ()) => int
type cuu = (. unit) => (. unit) => int
type cpu = (. ()) => (. unit) => int
type cup = (. unit) => (. ()) => int
type cpp = (. ()) => (. ()) => int
type cu2 = (. unit, unit) => unit
type cp2 = (. (), ()) => unit
type uu = unit => int
type up = () => int
type uuu = unit => unit => int
type upu = () => unit => int
type uup = unit => () => int
type upp = () => () => int
type uu2 = (unit, unit) => unit
type up2 = ((), ()) => unit

type cnested = (. (. string) => unit) => unit
type unested = (string => unit) => unit

let pipe = a->foo(b, c)

let _ = setTimeout(() => {
  resolve(1)
}, 100)

let _ = setTimeout(. (. ()) => {
  resolve(. 1)
}, 100)
