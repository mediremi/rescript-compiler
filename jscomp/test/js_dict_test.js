'use strict';

var Mt                      = require("./mt");
var Block                   = require("../../lib/js/block");
var Js_dict                 = require("../../lib/js/js_dict");
var Js_primitive            = require("../../lib/js/js_primitive");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions");

function obj() {
  return {
          foo: 43,
          bar: "baz"
        };
}

var suites_000 = /* tuple */[
  "get",
  function () {
    return /* Eq */Block.__(0, [
              /* Some */[43],
              Js_primitive.undefined_to_opt({
                      foo: 43,
                      bar: "baz"
                    }["foo"])
            ]);
  }
];

var suites_001 = /* :: */[
  /* tuple */[
    "get - property not in object",
    function () {
      return /* Eq */Block.__(0, [
                /* None */0,
                Js_primitive.undefined_to_opt({
                        foo: 43,
                        bar: "baz"
                      }["baz"])
              ]);
    }
  ],
  /* :: */[
    /* tuple */[
      "unsafe_get",
      function () {
        return /* Eq */Block.__(0, [
                  43,
                  {
                      foo: 43,
                      bar: "baz"
                    }["foo"]
                ]);
      }
    ],
    /* :: */[
      /* tuple */[
        "exnGet - raise correct exn",
        function () {
          try {
            Js_dict.exnGet({
                  foo: 43,
                  bar: "baz"
                }, "baz");
            return /* Ok */Block.__(4, [/* false */0]);
          }
          catch (exn){
            if (exn[0] === Caml_builtin_exceptions.invalid_argument) {
              return /* Ok */Block.__(4, [/* true */1]);
            }
            else {
              return /* Ok */Block.__(4, [/* false */0]);
            }
          }
        }
      ],
      /* :: */[
        /* tuple */[
          "exnGet - valid access",
          function () {
            try {
              return /* Eq */Block.__(0, [
                        43,
                        Js_dict.exnGet({
                              foo: 43,
                              bar: "baz"
                            }, "foo")
                      ]);
            }
            catch (exn){
              return /* Ok */Block.__(4, [/* false */0]);
            }
          }
        ],
        /* :: */[
          /* tuple */[
            "set",
            function () {
              var o = {
                foo: 43,
                bar: "baz"
              };
              o["foo"] = 36;
              return /* Eq */Block.__(0, [
                        /* Some */[36],
                        Js_primitive.undefined_to_opt(o["foo"])
                      ]);
            }
          ],
          /* :: */[
            /* tuple */[
              "keys",
              function () {
                return /* Eq */Block.__(0, [
                          /* array */[
                            "foo",
                            "bar"
                          ],
                          Object.keys({
                                foo: 43,
                                bar: "baz"
                              })
                        ]);
              }
            ],
            /* :: */[
              /* tuple */[
                "empty",
                function () {
                  return /* Eq */Block.__(0, [
                            /* array */[],
                            Object.keys({ })
                          ]);
                }
              ],
              /* [] */0
            ]
          ]
        ]
      ]
    ]
  ]
];

var suites = /* :: */[
  suites_000,
  suites_001
];

Mt.from_pair_suites("js_dict_test.ml", suites);

exports.obj    = obj;
exports.suites = suites;
/*  Not a pure module */
