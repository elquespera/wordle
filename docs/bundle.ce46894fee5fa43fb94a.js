/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyboard": () => (/* binding */ keyboard)
/* harmony export */ });
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language */ "./src/language.js");
/* harmony import */ var _puzzle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./puzzle */ "./src/puzzle.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Keyboard = /*#__PURE__*/function () {
  function Keyboard() {
    var _this = this;

    _classCallCheck(this, Keyboard);

    _defineProperty(this, "_lay", void 0);

    _defineProperty(this, "_keys", []);

    //Add keypress event listener
    window.addEventListener('keydown', function (e) {
      var div = _this.findKeyDiv(e.key);

      if (div) {
        _this.press(e.key); // Key press animation


        div.classList.add('pressed');
        setTimeout(function () {
          return div.classList.remove('pressed');
        }, 200);
        e.preventDefault();
      }
    });
  } //generate keyboard from layout


  _createClass(Keyboard, [{
    key: "switch",
    value: function _switch() {
      var _this2 = this;

      var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _language__WEBPACK_IMPORTED_MODULE_0__.currentLayout;

      var createKeyDiv = function createKeyDiv(key) {
        var special = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var keyDiv = document.createElement('button');
        keyDiv.className = "key key-".concat(key);
        keyDiv.innerHTML = special ? '' : key;
        keyDiv.keyValue = key;
        keyDiv.addEventListener('click', function (e) {
          return _this2.press(key);
        });

        _this2._keys.push(keyDiv);

        return keyDiv;
      };

      this._keys = [];
      var keyboardFragment = new DocumentFragment();
      layout.keys.forEach(function (row, ind) {
        var rowDiv = document.createElement('div');
        rowDiv.className = "row row-".concat(ind);
        row.split('').forEach(function (key) {
          return rowDiv.appendChild(createKeyDiv(key));
        });

        if (ind === layout.keys.length - 1) {
          rowDiv.insertBefore(createKeyDiv('enter', true), rowDiv.children[0]);
          rowDiv.appendChild(createKeyDiv('backspace', true));
        }

        keyboardFragment.appendChild(rowDiv);
      });
      var maxKeys = Math.max.apply(Math, _toConsumableArray(layout.keys.map(function (x, i, arr) {
        return i === arr.length - 1 ? x.length + 3 : x.length;
      })));
      console.log(maxKeys);
      document.documentElement.style.setProperty('--keyboard-max-keys', maxKeys);
      document.querySelector('.keyboard').replaceChildren(keyboardFragment);
    } //Find Key Div

  }, {
    key: "findKeyDiv",
    value: function findKeyDiv(key) {
      key = key.toLowerCase();
      return this._keys.find(function (x) {
        return x.keyValue === key;
      });
    }
  }, {
    key: "press",
    value: function press(key) {
      if (this.findKeyDiv(key) && _puzzle__WEBPACK_IMPORTED_MODULE_1__.puzzle) {
        _puzzle__WEBPACK_IMPORTED_MODULE_1__.puzzle.keyPressed(key.toLowerCase());
      }
    }
  }]);

  return Keyboard;
}();

var keyboard = new Keyboard();


/***/ }),

/***/ "./src/language.js":
/*!*************************!*\
  !*** ./src/language.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentLayout": () => (/* binding */ currentLayout),
/* harmony export */   "initLanguage": () => (/* binding */ initLanguage),
/* harmony export */   "layouts": () => (/* binding */ layouts),
/* harmony export */   "modalPages": () => (/* binding */ modalPages),
/* harmony export */   "switchLanguage": () => (/* binding */ switchLanguage)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./src/settings.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var modalPages = ['help', 'stats', 'settings'];
var layouts = {
  en: {
    locale: 'en',
    name: 'English',
    keys: ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'],
    help: {
      title: 'How to play',
      desc: ["Guess the <strong>WORDLE</strong> in six tries", "Each guess must be a valid five-letter word. Hit the enter button to submit.", "After each guess, the color of the tiles will change to show how close your guess was to the word."],
      examplesTitle: 'Examples',
      examples: {
        correct: {
          word: 'space',
          highlight: 0,
          msg: "The letter <strong>S</strong> is in the word and in the correct spot."
        },
        present: {
          word: 'abide',
          highlight: 2,
          msg: "The letter <strong>I</strong> is in the word but in the wrong spot."
        },
        'not-present': {
          word: 'wrong',
          highlight: 4,
          msg: "The letter <strong>N</strong> is not in the word in any spot."
        }
      },
      enjoy: 'Enjoy the game!'
    },
    stats: {
      title: 'Statistics',
      played: 'Played',
      won: 'Won',
      guessDist: 'Guess discribution'
    },
    settings: {
      title: 'Settings',
      dark: 'Dark theme',
      contrast: 'High Conrast',
      lang: 'Language'
    }
  },
  es: {
    locale: 'es',
    name: 'Espanol',
    keys: ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'],
    help: {
      title: 'How to play',
      desc: ["Guess the <strong>WORDLE</strong> in six tries", "Each guess must be a valid five-letter word. Hit the enter button to submit.", "After each guess, the color of the tiles will change to show how close your guess was to the word."],
      examplesTitle: 'Examples',
      examples: {
        correct: {
          word: 'space',
          highlight: 0,
          msg: "The letter <strong>S</strong> is in the word and in the correct spot."
        },
        present: {
          word: 'abide',
          highlight: 2,
          msg: "The letter <strong>I</strong> is in the word but in the wrong spot."
        },
        'not-present': {
          word: 'wrong',
          highlight: 4,
          msg: "The letter <strong>N</strong> is not in the word in any spot."
        }
      },
      enjoy: 'Enjoy the game!'
    },
    stats: {
      title: 'Statistics',
      played: 'Played',
      won: 'Won',
      guessDist: 'Guess discribution'
    },
    settings: {
      title: 'Settings',
      dark: 'Dark theme',
      contrast: 'High Conrast',
      lang: 'Language'
    }
  },
  ru: {
    locale: 'ru',
    name: 'Русский',
    keys: ['йцукенгшщзхъ', 'фывапролджэ', 'ячсмитьбюё'],
    help: {
      title: 'Правила игры',
      desc: ["Guess the <strong>WORDLE</strong> in six tries", "Each guess must be a valid five-letter word. Hit the enter button to submit.", "After each guess, the color of the tiles will change to show how close your guess was to the word."],
      examplesTitle: 'Examples',
      examples: {
        correct: {
          word: 'space',
          highlight: 0,
          msg: "The letter <strong>S</strong> is in the word and in the correct spot."
        },
        present: {
          word: 'abide',
          highlight: 2,
          msg: "The letter <strong>I</strong> is in the word but in the wrong spot."
        },
        'not-present': {
          word: 'wrong',
          highlight: 4,
          msg: "The letter <strong>N</strong> is not in the word in any spot."
        }
      },
      enjoy: 'Enjoy the game!'
    },
    stats: {
      title: 'Statistics',
      played: 'Played',
      won: 'Won',
      guessDist: 'Guess discribution'
    },
    settings: {
      title: 'Настройки',
      dark: 'Темная тема',
      contrast: 'Высококонтрастная тема',
      lang: 'Язык'
    }
  }
};
var currentLayout = layouts.en;

var switchLanguage = function switchLanguage() {
  var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentLayout;
  modalPages.forEach(function (pName) {
    var pane = document.querySelector('#' + pName);
    var paneFrag = new DocumentFragment();
    paneFrag.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('h3', layout[pName].title));

    switch (pName) {
      case 'help':
        paneFrag.append.apply(paneFrag, _toConsumableArray(layout.help.desc.map(function (d) {
          return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('p', d);
        })).concat([(0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '', 'hr'), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('h4', layout.help.examplesTitle)]));
        Object.values(layout.help.examples).forEach(function (example, ind) {
          var item = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '', 'puzzle');
          example.word.split('').forEach(function (letter, i) {
            var card = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', letter, 'card');

            if (i === example.highlight) {
              card.classList.add(Object.keys(layout.help.examples)[ind]);
            }

            item.appendChild(card);
          });
          paneFrag.append(item, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('p', example.msg));
        });
        paneFrag.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '', 'hr'), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('h4', layout.help.enjoy));
        break;

      case 'stats':
        var scoreTable = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '', 'score-table');
        scoreTable.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', 0, 'played score'), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', 0, 'won score'), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', layout.stats.played, 'score-label'), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', layout.stats.won, 'score-label'));
        var guessDist = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '', 'guess-dist');

        for (var i = 1; i <= 6; i++) {
          guessDist.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', i, 'score'), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', 0, 'score-bar'));
        }

        paneFrag.append(scoreTable, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '', 'hr'), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('h3', layout.stats.guessDist), guessDist);
        break;

      case 'settings':
        {
          var table = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '', 'settings-table');
          var darkMode = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div');
          darkMode.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', layout.settings.dark), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '<span></span>', 'check-box dark-mode'));
          var contrastMode = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div');
          contrastMode.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', layout.settings.contrast), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '<span></span>', 'check-box contrast-mode'));
          var language = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div');
          var ul = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('ul', '', 'language-selector');
          Object.values(layouts).forEach(function (l) {
            return ul.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('li', l.name, '', l.locale));
          });
          language.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', layout.settings.lang), ul);
          table.append(darkMode, contrastMode, language);
          paneFrag.append(table);
          break;
        }
    }

    pane.replaceChildren(paneFrag);
    currentLayout = layout;
    _keyboard__WEBPACK_IMPORTED_MODULE_2__.keyboard["switch"](currentLayout);
    (0,_settings__WEBPACK_IMPORTED_MODULE_1__.initSettings)();
  });
};

var initLanguage = function initLanguage() {
  switchLanguage(currentLayout);
};



/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language */ "./src/language.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Modal = /*#__PURE__*/function () {
  function Modal() {
    var _this = this;

    _classCallCheck(this, Modal);

    _defineProperty(this, "_open", false);

    _defineProperty(this, "_closeBtn", (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.close-btn'));

    _defineProperty(this, "_puzzle", void 0);

    window.addEventListener('click', function (e) {
      if (e.target === (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.modal-overlay')) {
        _this.hide();
      }
    });
    window.addEventListener('keydown', function (event) {
      if (event.key == 'Escape') {
        _this.hide();
      } else {
        if (_this._open) event.stopImmediatePropagation();
      }
    });
    _language__WEBPACK_IMPORTED_MODULE_0__.modalPages.forEach(function (page) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)(".".concat(page, "-btn")).addEventListener('click', function (e) {
        return _this.show(page);
      });
    });

    this._closeBtn.addEventListener('click', function () {
      return _this.hide();
    });
  }

  _createClass(Modal, [{
    key: "puzzle",
    get: function get() {
      return this._puzzle;
    },
    set: function set(p) {
      this._puzzle = p;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this._open = !this._open;

      if (this._open) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.modal-overlay').style.display = 'flex';
        setTimeout(function () {
          (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.modal').classList.add('open');
        }, 10);
      } else {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.modal').classList.remove('open');
        setTimeout(function () {
          (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.modal-overlay').style.display = 'none';
        }, 300);
      }
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'help';

      if (!this._open) {
        //Calculate & display statistics
        if (msg === 'stats' && this.puzzle) {
          document.querySelector('.played.score').innerHTML = this.puzzle.stats.played;
          document.querySelector('.won.score').innerHTML = this.puzzle.wonCount;
          var scoreBins = document.querySelectorAll('.guess-dist>.score-bar');
          scoreBins.forEach(function (bin, i) {
            var count = _this2.puzzle.stats.dist[i] || 0;
            var width = count === 0 ? 'fit-content' : count / _this2.puzzle.maxWin * 100 + '%';
            bin.style.width = width;
            bin.innerHTML = count;
          });
        }

        _language__WEBPACK_IMPORTED_MODULE_0__.modalPages.map(function (pname) {
          return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)(".".concat(pname));
        }).forEach(function (pane) {
          if (pane.id === msg) {
            pane.style.display = 'flex';
          } else {
            pane.style.display = 'none';
          }
        });
        this.toggle();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this._open) this.toggle();
    }
  }, {
    key: "showError",
    value: function showError(error) {
      var errorDiv = document.querySelector('.error-msg');
      errorDiv.innerHTML = error;
      errorDiv.style.transition = 'opacity 0.5s';
      errorDiv.classList.add('visible');
      setTimeout(function () {
        return errorDiv.classList.remove('visible');
      }, 2000);
    }
  }]);

  return Modal;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Modal());

/***/ }),

/***/ "./src/puzzle.js":
/*!***********************!*\
  !*** ./src/puzzle.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "puzzle": () => (/* binding */ puzzle)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Puzzle = /*#__PURE__*/function () {
  function Puzzle() {
    _classCallCheck(this, Puzzle);

    _defineProperty(this, "_cardDivs", []);

    _defineProperty(this, "_solution", 'space');

    _defineProperty(this, "_currentSolution", []);

    _defineProperty(this, "_stats", {
      played: 20,
      dist: {
        1: 3,
        3: 7,
        4: 3,
        5: 3
      }
    });

    var puzzleFrag = new DocumentFragment();
    var row = [];

    for (var i = 1; i <= 5 * 6; i++) {
      var card = document.createElement('div');
      card.className = "card row-".concat(Math.floor(i / 6));
      puzzleFrag.appendChild(card);
      row.push(card);

      if (row.length >= 5) {
        this._cardDivs.push(row);

        row = [];
      }
    }

    document.querySelector('#puzzle').replaceChildren(puzzleFrag);
    this.reset();
  }

  _createClass(Puzzle, [{
    key: "solution",
    get: function get() {
      return this._solution;
    } // Current matrix operations

  }, {
    key: "matrix",
    get: function get() {
      return this._currentSolution;
    }
  }, {
    key: "lastRowNumber",
    get: function get() {
      return this.matrix.length - 1;
    }
  }, {
    key: "lastRow",
    get: function get() {
      return this.matrix[this.lastRowNumber];
    } // Statistics

  }, {
    key: "stats",
    get: function get() {
      var _this = this;

      Object.keys(this._stats.dist).forEach(function (key) {
        _this._stats.dist[key] = parseInt(_this._stats.dist[key]);
      });
      return this._stats;
    }
  }, {
    key: "wonCount",
    get: function get() {
      return Object.values(this.stats.dist).reduce(function (t, v) {
        return t + v;
      }, 0);
    }
  }, {
    key: "maxWin",
    get: function get() {
      return Object.values(this.stats.dist).reduce(function (t, v) {
        return v > t ? v : t;
      }, 0);
    }
  }, {
    key: "addWin",
    value: function addWin(bin) {
      this.stats.dist[bin] = (this.stats.dist[bin] || 0) + 1;
    } // Reset & update letters

  }, {
    key: "reset",
    value: function reset() {
      this._currentSolution = [];
      this.update();

      this._cardDivs.flat().forEach(function (card) {
        card.classList.remove('not-present', 'present', 'correct', 'current');
        console.log(card.className);
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      this._cardDivs.forEach(function (row, i) {
        return row.forEach(function (div, j) {
          div.innerHTML = _this2.matrix[i] ? _this2.matrix[i][j] || '' : '';
        });
      });

      if (this.matrix.length > 0 && this._cardDivs[this.lastRowNumber]) {
        this._cardDivs[this.lastRowNumber].forEach(function (card) {
          if (card.innerHTML === '') {
            card.classList.remove('current');
          } else {
            card.classList.add('current');
          }
        });
      }
    }
  }, {
    key: "isWordValid",
    value: function isWordValid(word) {
      return true;
    }
  }, {
    key: "checkLetters",
    value: function checkLetters(row) {
      var _this3 = this;

      this.matrix[row].forEach(function (letter, i) {
        var className = 'not-present';

        if (_this3.solution.includes(letter)) {
          if (_this3.solution[i] === letter) {
            className = 'correct';
          } else {
            className = 'present';
          }
        }

        _this3._cardDivs[row][i].classList.add(className);

        _this3._cardDivs[row][i].classList.remove('current');
      });
    }
  }, {
    key: "checkStatus",
    value: function checkStatus() {
      var lastRow = this._currentSolution[this._currentSolution.length - 1];
      console.log(lastRow);

      if (lastRow && lastRow.join('') === this.solution) {
        this.addWin(this._currentSolution.length - 1);
        this.reset();
        _modal__WEBPACK_IMPORTED_MODULE_0__["default"].show('stats');
      }
    }
  }, {
    key: "shakeRow",
    value: function () {
      var _shakeRow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(row) {
        var toggleClass, i;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                row = this._cardDivs[row];

                if (row) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", false);

              case 3:
                toggleClass = function toggleClass() {
                  return new Promise(function (resolve) {
                    setTimeout(function () {
                      row.forEach(function (x) {
                        return x.classList.toggle('shift1');
                      });
                      row.forEach(function (x) {
                        return x.classList.toggle('shift2');
                      });
                      resolve('');
                    }, 80);
                  });
                };

                row.forEach(function (x) {
                  return x.classList.add('shift1');
                });
                i = 0;

              case 6:
                if (!(i < 5)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 9;
                return toggleClass();

              case 9:
                i++;
                _context.next = 6;
                break;

              case 12:
                row.forEach(function (x) {
                  return x.classList.remove('shift1', 'shift2');
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function shakeRow(_x) {
        return _shakeRow.apply(this, arguments);
      }

      return shakeRow;
    }()
  }, {
    key: "animateLetter",
    value: function () {
      var _animateLetter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(letter) {
        var inOut;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                inOut = function inOut(out) {
                  return new Promise(function (resolve) {
                    setTimeout(function () {
                      letter.classList.toggle('in', !out);
                      letter.classList.toggle('out', out);
                      resolve('');
                    }, 80);
                  });
                };

                letter.classList.add('out');
                _context2.next = 4;
                return inOut(false);

              case 4:
                _context2.next = 6;
                return inOut(true);

              case 6:
                letter.classList.remove('in', 'out');

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function animateLetter(_x2) {
        return _animateLetter.apply(this, arguments);
      }

      return animateLetter;
    }()
  }, {
    key: "keyPressed",
    value: function keyPressed(key) {
      switch (key) {
        case 'enter':
          if (this.lastRow && this.lastRow.length === 5) {
            if (this.isWordValid(this.lastRow.join(''))) {
              if (this.matrix.length < 6) {
                this.checkLetters(this.lastRowNumber);
                this.checkStatus();
                this.matrix.push([]);
                this.update();
              }
            }
          } else {
            this.shakeRow(this.lastRowNumber);
            _modal__WEBPACK_IMPORTED_MODULE_0__["default"].showError('Not enough letters');
          }

          break;

        case 'backspace':
          if (this.lastRow && this.lastRow.length > 0) {
            this.lastRow.pop();
            this.update();
          } else {
            this.shakeRow(this.lastRowNumber);
            _modal__WEBPACK_IMPORTED_MODULE_0__["default"].showError('No letters to erase');
          }

          break;

        default:
          if (this.matrix.length === 0) {
            this.matrix.push([]);
          }

          if (this.lastRow.length < 5) {
            this.lastRow.push(key);
            this.update();
            this.animateLetter(this._cardDivs[this.lastRowNumber][this.lastRow.length - 1]);
          } else {
            _modal__WEBPACK_IMPORTED_MODULE_0__["default"].showError('Five letter max');
            this.shakeRow(this.lastRowNumber);
          }

      }
    }
  }]);

  return Puzzle;
}();

var puzzle = new Puzzle();


/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initSettings": () => (/* binding */ initSettings)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language */ "./src/language.js");



var initSettings = function initSettings() {
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.check-box', document, true).forEach(function (checkbox) {
    checkbox.addEventListener('click', function (e) {
      e.currentTarget.classList.toggle('checked');
    });
  });
  var langs = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.language-selector>li', document, true);

  var checkStatus = function checkStatus() {
    langs.forEach(function (item) {
      if (item.id === _language__WEBPACK_IMPORTED_MODULE_1__.currentLayout.locale) {
        item.classList.add('checked');
      } else {
        item.classList.remove('checked');
      }
    });
  };

  checkStatus();
  langs.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.currentTarget.id !== _language__WEBPACK_IMPORTED_MODULE_1__.currentLayout.locale) {
        (0,_language__WEBPACK_IMPORTED_MODULE_1__.switchLanguage)(_language__WEBPACK_IMPORTED_MODULE_1__.layouts[e.currentTarget.id]);
        checkStatus();
      }
    });
  });
};



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "newEl": () => (/* binding */ newEl)
/* harmony export */ });
//jQuery-like Selector
var $ = function $(selector) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return all ? parent.querySelectorAll(selector) : parent.querySelector(selector);
}; //Create new Element

var newEl = function newEl(tagName) {
  var innerHTML = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var el = document.createElement(tagName);
  el.innerHTML = innerHTML;
  el.className = className;
  el.id = id;
  return el;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/help.svg */ "./src/assets/help.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/chart.svg */ "./src/assets/chart.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/github.svg */ "./src/assets/github.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/settings.svg */ "./src/assets/settings.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/enter.svg */ "./src/assets/enter.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/backspace.svg */ "./src/assets/backspace.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/close.svg */ "./src/assets/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\n  height: max(25px, min(60px, 13vw));\n  font-size: calc(max(25px, min(60px, 13vw)) / 3);\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 1em;\n}\nheader .menu {\n  display: flex;\n  position: relative;\n  align-items: center;\n  gap: 1em;\n}\nheader .menu .help-btn {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\nheader .menu .stats-btn {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  transform: rotate(-90deg);\n}\nheader .menu .stats-btn:hover {\n  transform: none;\n}\nheader .menu .github-btn {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\nheader .menu .settings-btn {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\nheader .menu .settings-btn:hover {\n  transform: rotate(200deg);\n}\nheader h1 {\n  font-size: 2em;\n  display: flex;\n  align-items: center;\n}\n\n.puzzle {\n  font-size: calc(min(92vw - 0.4em - 20px, 320px) / 5 * 0.6);\n  display: grid;\n  grid-template-columns: repeat(5, calc(min(92vw - 0.4em - 20px, 320px) / 5));\n  grid-template-rows: repeat(6, calc(min(92vw - 0.4em - 20px, 320px) / 5));\n  justify-content: center;\n  align-content: center;\n  gap: 0.1em;\n}\n.puzzle .card {\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #CCC;\n  transition: transform 0.08s ease-out;\n}\n.puzzle .card.current.in {\n  transform: scale(0.9);\n}\n.puzzle .card.current.out {\n  transform: scale(1.1);\n}\n.puzzle .card.shift1 {\n  transform: translate(-0.3rem, 0);\n}\n.puzzle .card.shift2 {\n  transform: translate(0.3rem, 0);\n}\n.puzzle .current {\n  border-color: rgb(135, 138, 140);\n  transition: transform 0.08s ease-in;\n}\n.puzzle .not-present {\n  background-color: rgb(120, 124, 126);\n  border-color: rgb(120, 124, 126);\n}\n.puzzle .present {\n  background-color: #c9b458;\n  border-color: #c9b458;\n}\n.puzzle .correct {\n  background-color: #6aaa64;\n  border-color: #6aaa64;\n}\n.puzzle .not-present, .puzzle .present, .puzzle .correct {\n  color: #FFF;\n}\n\n:root {\n  --keyboard-max-keys: 10;\n}\n\n.keyboard {\n  margin-bottom: 1em;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  gap: 0.3em;\n  height: calc((min(60px, min(50px, (100vw - 0.3em * var(--keyboard-max-keys)) / var(--keyboard-max-keys)) * 1.7) + 0.3em) * 3);\n  font-size: min(18px, min(50px, (100vw - 0.3em * var(--keyboard-max-keys)) / var(--keyboard-max-keys)) / 2);\n}\n.keyboard .row {\n  display: flex;\n  flex-flow: row nowrap;\n  gap: 0.3em;\n}\n.keyboard .row .key {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-size: 1em;\n  text-transform: uppercase;\n  width: min(50px, (100vw - 0.3em * var(--keyboard-max-keys)) / var(--keyboard-max-keys));\n  height: min(60px, min(50px, (100vw - 0.3em * var(--keyboard-max-keys)) / var(--keyboard-max-keys)) * 1.7);\n  background-color: #CCC;\n  border-radius: 0.3em;\n  touch-action: manipulation;\n  outline: none;\n}\n.keyboard .row .key:hover {\n  background-color: #DDD;\n}\n.keyboard .row .key:active, .keyboard .row .key.pressed {\n  background-color: #999;\n}\n.keyboard .row .key.key-enter, .keyboard .row .key.key-backspace {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1em;\n  width: calc(min(50px, (100vw - 0.3em * var(--keyboard-max-keys)) / var(--keyboard-max-keys)) * 1.5);\n}\n.keyboard .row .key.key-enter {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n.keyboard .row .key.key-backspace {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n.modal-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  z-index: 2;\n  background-color: rgba(255, 255, 255, 0.6);\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.modal-overlay .modal {\n  display: flex;\n  flex-flow: column nowrap;\n  background-color: #fff;\n  box-shadow: 0 0 0.8em rgba(0, 0, 0, 0.5);\n  height: auto;\n  padding: 1em;\n  border-radius: 0.2em;\n  z-index: 10;\n  margin-top: 120vh;\n  opacity: 0;\n  transition: margin-top 0.2s ease-in-out, opacity 0.2s ease-in-out;\n}\n.modal-overlay .modal .close-btn {\n  align-self: flex-end;\n  right: 0px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.modal-overlay .modal .pane {\n  display: flex;\n  flex-flow: column nowrap;\n  min-width: 40vw;\n  min-height: 20vh;\n  max-width: 90vw;\n  max-height: 90vh;\n  padding-bottom: 1.5em;\n  overflow-y: auto;\n}\n.modal-overlay .modal .pane h3 {\n  align-self: center;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  text-align: center;\n  margin-bottom: 2em;\n}\n.modal-overlay .modal .pane h4 {\n  margin-bottom: 1em;\n}\n.modal-overlay .modal .pane p {\n  font-weight: normal;\n  margin-bottom: 1em;\n}\n.modal-overlay .modal .pane .hr {\n  width: 100%;\n  border-bottom: 1px solid #CCC;\n  margin-bottom: 2em;\n}\n.modal-overlay .modal .pane.stats h3 {\n  margin-bottom: 1em;\n}\n.modal-overlay .modal .pane.stats .score-table {\n  display: grid;\n  grid-template-columns: repeat(2, max-content);\n  grid-template-rows: repeat(2, max-content);\n  column-gap: 1em;\n  justify-items: center;\n  justify-content: center;\n  margin-bottom: 1em;\n}\n.modal-overlay .modal .pane.stats .score-table .score {\n  font-size: 3.5em;\n  font-weight: normal;\n}\n.modal-overlay .modal .pane.stats .score-table .score-label {\n  font-size: 1rem;\n  font-weight: normal;\n}\n.modal-overlay .modal .pane.stats .guess-dist {\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  gap: 0.3em 0.5em;\n  font-size: 0.8em;\n  align-items: center;\n  margin: 0 1em;\n}\n.modal-overlay .modal .pane.stats .guess-dist .score {\n  font-weight: normal;\n  text-align: end;\n}\n.modal-overlay .modal .pane.stats .guess-dist .score-bar {\n  padding: 0.1em 0.3em;\n  width: fit-content;\n  background-color: rgb(120, 124, 126);\n  color: #FFF;\n}\n.modal-overlay .modal .pane.help .puzzle {\n  justify-content: start;\n  font-size: calc(min(92vw - 0.4em - 20px, 320px) / 5 * 0.6 * 0.7);\n  grid-template-columns: repeat(5, calc(min(92vw - 0.4em - 20px, 320px) / 5 * 0.7));\n  grid-template-rows: calc(min(92vw - 0.4em - 20px, 320px) / 5 * 0.7);\n  margin-bottom: 4px;\n}\n.modal-overlay .modal .pane.settings .settings-table {\n  display: flex;\n  flex-flow: column nowrap;\n  font-weight: normal;\n  gap: 1em;\n}\n.modal-overlay .modal .pane.settings .settings-table ul.language-selector {\n  display: flex;\n  flex-flow: column nowrap;\n}\n.modal-overlay .modal .pane.settings .settings-table ul.language-selector li {\n  padding: 0.3em 0.6em;\n  border-radius: 0.1em;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.modal-overlay .modal .pane.settings .settings-table ul.language-selector li::before {\n  content: \"\";\n  display: inline-block;\n  height: 0.8em;\n  width: 0.2em;\n  margin-right: 0.4em;\n  border-radius: 0.1em;\n  transition: background-color 0.2s;\n}\n.modal-overlay .modal .pane.settings .settings-table ul.language-selector li.checked::before {\n  background-color: rgb(245, 121, 58);\n}\n.modal-overlay .modal .pane.settings .settings-table ul.language-selector li:hover {\n  background-color: rgb(194, 194, 194);\n}\n.modal-overlay .modal .pane.settings .settings-table > div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1em 0;\n  border-bottom: 1px solid rgb(194, 194, 194);\n}\n.modal-overlay .modal .pane.settings .check-box {\n  position: relative;\n  width: 3em;\n  height: 1.5em;\n  padding: 0.2em;\n  background-color: rgb(194, 194, 194);\n  justify-self: end;\n  border-radius: 999px;\n  cursor: pointer;\n}\n.modal-overlay .modal .pane.settings .check-box > span {\n  display: block;\n  width: 1.1em;\n  height: 1.1em;\n  background-color: white;\n  border-radius: 100%;\n  transition: margin-left 0.3s ease-in-out;\n}\n.modal-overlay .modal .pane.settings .check-box.checked {\n  background-color: rgb(245, 121, 58);\n}\n.modal-overlay .modal .pane.settings .check-box.checked > span {\n  margin-left: 1.4em;\n}\n.modal-overlay .modal.open {\n  opacity: 1;\n  margin-top: 0px;\n}\n\n.error-msg {\n  position: absolute;\n  top: 5em;\n  margin: 0 auto;\n  height: auto;\n  background-color: black;\n  color: #FFF;\n  padding: 0.8em;\n  border-radius: 0.3em;\n  box-shadow: 0 0 0.8em rgb(0, 0, 0);\n  opacity: 0;\n}\n\n.error-msg.visible {\n  opacity: 1;\n  transition: opacity 0.5s;\n}\n\n*, body, ul, li {\n  margin: 0px;\n  padding: 0px;\n  border: 0px;\n}\n\nul {\n  list-style: none;\n}\n\nbody, * {\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 600;\n}\n\n* {\n  height: 100%;\n}\n\nbutton {\n  background-color: transparent;\n}\n\n.icon-btn {\n  cursor: pointer;\n  font-size: inherit;\n  width: 1.5em;\n  height: 1.5em;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  opacity: 0.7;\n  transition: opacity 0.2s, transform 0.2s;\n}\n\n.icon-btn:hover {\n  opacity: 1;\n  transform: translateY(-2px);\n}\n\n.container {\n  position: relative;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 16px;\n  height: calc(100% - max(25px, min(60px, 13vw)));\n}\n\n.error-msg {\n  position: absolute;\n  top: 5em;\n  margin: 0 auto;\n  height: auto;\n  background-color: black;\n  color: #FFF;\n  padding: 0.8em;\n  border-radius: 0.3em;\n  box-shadow: 0 0 0.8em rgb(0, 0, 0);\n  opacity: 0;\n}\n\n.error-msg.visible {\n  opacity: 1;\n  transition: opacity 0.5s;\n}", "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/styles/main.scss","webpack://./src/styles/puzzle.scss","webpack://./src/styles/keyboard.scss","webpack://./src/styles/modal.scss"],"names":[],"mappings":"AAMA;EACI,kCAAA;EACA,+CAAA;EACA,aAAA;EACA,WAAA;EACA,8BAAA;EACA,mBAAA;EACA,cAAA;ACLJ;ADMI;EACI,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,QAAA;ACJR;ADKQ;EACI,yDAAA;ACHZ;ADKQ;EACI,yDAAA;EACA,yBAAA;ACHZ;ADKQ;EACI,eAAA;ACHZ;ADKQ;EACI,yDAAA;ACHZ;ADKQ;EACI,yDAAA;ACHZ;ADKQ;EACI,yBAAA;ACHZ;ADMI;EACI,cAAA;EACA,aAAA;EACA,mBAAA;ACJR;;ACXA;EACI,0DAAA;EACA,aAAA;EACA,2EAAA;EACA,wEAAA;EACA,uBAAA;EACA,qBAAA;EACA,UA9BS;AD4Cb;ACZI;EACI,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,oCAAA;ADcR;ACXI;EACI,qBAAA;ADaR;ACXI;EACI,qBAAA;ADaR;ACXI;EACI,gCAAA;ADaR;ACXI;EACI,+BAAA;ADaR;ACXI;EACI,gCA9CQ;EA+CR,mCAAA;ADaR;ACXI;EACI,oCAtDY;EAuDZ,gCAvDY;ADoEpB;ACXI;EACI,yBAzDQ;EA0DR,qBA1DQ;ADuEhB;ACXI;EACI,yBA5DQ;EA6DR,qBA7DQ;AD0EhB;ACVI;EACI,WAhEO;AD4Ef;;AEvFA;EACI,uBAAA;AF0FJ;;AE5DA;EACI,kBAAA;EACA,aAAA;EACA,wBAAA;EACA,mBAAA;EACA,UAhCM;EAiCN,6HAAA;EACA,0GAAA;AF+DJ;AE9DI;EACI,aAAA;EACA,qBAAA;EACA,UAtCE;AFsGV;AE/DQ;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;EACA,yBAAA;EACA,uFAAA;EACA,yGAAA;EACA,sBA9CW;EA+CX,oBAAA;EACA,0BAAA;EACA,aAAA;AFiEZ;AE/DQ;EACI,sBAlDiB;AFmH7B;AE/DQ;EACI,sBAtDkB;AFuH9B;AE/DQ;EACI,4BAAA;EACA,2BAAA;EACA,oBAAA;EACA,mGAAA;AFiEZ;AE/DQ;EACI,yDAAA;AFiEZ;AE/DQ;EACI,yDAAA;AFiEZ;;AG9HA;EACI,aAAA;EACA,kBAAA;EACA,MAAA;EACA,UAAA;EACA,0CAVM;EAWN,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AHiIJ;AGhII;EACI,aAAA;EACA,wBAAA;EACA,sBApBK;EAqBL,wCAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;EACA,WAAA;EACA,iBAAA;EACA,UAAA;EACA,iEAAA;AHkIR;AG/HQ;EACI,oBAAA;EACA,UAAA;EACA,yDAAA;AHiIZ;AG/HQ;EACI,aAAA;EACA,wBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,gBAAA;AHiIZ;AGhIY;EACI,kBAAA;EACA,yBAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;AHkIhB;AGhIY;EACI,kBAAA;AHkIhB;AGhIY;EACI,mBAAA;EACA,kBAAA;AHkIhB;AGhIY;EACI,WAAA;EACA,6BAAA;EACA,kBAAA;AHkIhB;AG7HY;EACI,kBAAA;AH+HhB;AG7HY;EACI,aAAA;EACA,6CAAA;EACA,0CAAA;EACA,eAAA;EACA,qBAAA;EACA,uBAAA;EACA,kBAAA;AH+HhB;AG9HgB;EACI,gBAAA;EACA,mBAAA;AHgIpB;AG9HgB;EACI,eAAA;EACA,mBAAA;AHgIpB;AG5HY;EACI,aAAA;EACA,sCAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,aAAA;AH8HhB;AG7HgB;EACI,mBAAA;EACA,eAAA;AH+HpB;AG7HgB;EACI,oBAAA;EACA,kBAAA;EACA,oCAzGI;EA0GJ,WAzGL;AHwOf;AGnHY;EACI,sBAAA;EACA,gEAAA;EACA,iFAAA;EACA,mEAAA;EACA,kBAAA;AHqHhB;AGjHY;EACI,aAAA;EACA,wBAAA;EACA,mBAAA;EACA,QAAA;AHmHhB;AGjHgB;EACI,aAAA;EACA,wBAAA;AHmHpB;AGlHoB;EACI,oBAAA;EACA,oBAAA;EACA,eAAA;EACA,iCAAA;AHoHxB;AGlHoB;EACI,WAAA;EACA,qBAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;EACA,iCAAA;AHoHxB;AGlHoB;EACI,mCAlJN;AHsQlB;AGlHoB;EACI,oCApJX;AHwQb;AGhHY;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,cAAA;EACA,2CAAA;AHkHhB;AG9GY;EACI,kBAAA;EACA,UAAA;EACA,aAAA;EACA,cAAA;EACA,oCAtKH;EAuKG,iBAAA;EACA,oBAAA;EACA,eAAA;AHgHhB;AG9GY;EACI,cAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,wCAAA;AHgHhB;AG9GY;EACI,mCArLE;AHqSlB;AG9GY;EACI,kBAAA;AHgHhB;AG5GI;EACI,UAAA;EACA,eAAA;AH8GR;;AG1GA;EACI,kBAAA;EACA,QAAA;EACA,cAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,kCAAA;EACA,UAAA;AH6GJ;;AG1GA;EACI,UAAA;EACA,wBAAA;AH6GJ;;AAhUA;EACI,WAAA;EACA,YAAA;EACA,WAAA;AAmUJ;;AAjUA;EACI,gBAAA;AAoUJ;;AAlUA;EACI,sBAAA;EACA,yCAAA;EACA,gBAAA;AAqUJ;;AAlUA;EACI,YAAA;AAqUJ;;AAjUA;EACI,6BAAA;AAoUJ;;AA/TA;EACI,eAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,4BAAA;EACA,2BAAA;EACA,wBAAA;EACA,YAAA;EACA,wCAAA;AAkUJ;;AA/TA;EACI,UAAA;EACA,2BAAA;AAkUJ;;AA/TA;EACI,kBAAA;EACA,aAAA;EACA,wBAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;EACA,+CAAA;AAkUJ;;AA/TA;EACI,kBAAA;EACA,QAAA;EACA,cAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,kCAAA;EACA,UAAA;AAkUJ;;AA/TA;EACI,UAAA;EACA,wBAAA;AAkUJ","sourcesContent":["$background: #fff;\n\n@function header-height() {\n    @return max(25px, min(60px, 13vw));\n}\n\nheader {\n    height: header-height();\n    font-size: calc(header-height() / 3);\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;    \n    padding: 0 1em;\n    .menu {\n        display: flex;\n        position: relative;\n        align-items: center;\n        gap: 1em;\n        .help-btn {\n            background-image: url('../assets/help.svg');\n        }\n        .stats-btn {\n            background-image: url('../assets/chart.svg');\n            transform: rotate(-90deg);\n        }\n        .stats-btn:hover {\n            transform: none;\n        }\n        .github-btn {\n            background-image: url('../assets/github.svg');\n        }\n        .settings-btn {\n            background-image: url('../assets/settings.svg');\n        }\n        .settings-btn:hover {\n            transform: rotate(200deg);\n        }\n    }\n    h1 {\n        font-size: 2em;\n        display: flex;\n        align-items: center;\n    }    \n}","\n@use 'header';\n@use 'puzzle';\n@use 'keyboard';\n@use 'modal';\n\n// Reset\n*, body, ul, li {\n    margin: 0px;\n    padding: 0px;\n    border: 0px;\n}\nul {\n    list-style: none;\n}\nbody, * {\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 600;\n}\n\n* {\n    height: 100%;\n}\n\n\nbutton {\n    background-color: transparent;\n}\n\n\n\n.icon-btn {\n    cursor: pointer;\n    font-size: inherit;\n    width: 1.5em;\n    height: 1.5em;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    opacity: 0.7;\n    transition: opacity 0.2s, transform 0.2s;\n}\n\n.icon-btn:hover {\n    opacity: 1;\n    transform: translateY(-2px);\n}\n\n.container {\n    position: relative;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 16px;\n    height: calc(100% - header.header-height());    \n}\n\n.error-msg {\n    position: absolute;\n    top: 5em;\n    margin: 0 auto;\n    height: auto;\n    background-color: black;\n    color: #FFF;\n    padding: 0.8em;\n    border-radius: 0.3em;\n    box-shadow: 0 0 0.8em rgba(0, 0, 0, 1);\n    opacity: 0;\n}\n\n.error-msg.visible {\n    opacity: 1;\n    transition: opacity 0.5s;   \n}     ","//Sizes\n$puzzle-word-legnth: 5;\n$puzzle-max-width: 320px;\n$puzzle-border: 2px;\n$puzzle-gap: 0.1em;\n\n//Colors\n$puzzle-border-color: #CCC;\n$not-present-color: rgb(120, 124, 126);\n$present-color: #c9b458;\n$correct-color: #6aaa64;\n$active-color: #FFF;\n$current-color: rgb(135, 138, 140);\n\n//Calculate flexible card size\n@function card-size() {\n    $res: calc(min(calc(\n        92vw - $puzzle-gap * ($puzzle-word-legnth - 1) - \n        $puzzle-border * $puzzle-word-legnth * 2) \n        , $puzzle-max-width));\n    @return calc($res / $puzzle-word-legnth);\n}\n//Calculate card font size\n@function card-font-size() {\n    @return calc(card-size() * 0.6);\n}\n\n.puzzle {\n    font-size: card-font-size();\n    display: grid;\n    grid-template-columns: repeat(5, card-size());\n    grid-template-rows: repeat(6, card-size());\n    justify-content: center;\n    align-content: center;\n    gap: $puzzle-gap;\n    \n    .card {\n        text-transform: uppercase;\n        display: flex;\n        justify-content: center;\n        align-items: center;                \n        border: $puzzle-border solid $puzzle-border-color; \n        transition: transform 0.08s ease-out;\n    }\n\n    .card.current.in {\n        transform: scale(0.9);\n    }\n    .card.current.out {\n        transform: scale(1.1);\n    }    \n    .card.shift1 {\n        transform: translate(-0.3rem, 0);\n    }\n    .card.shift2 {\n        transform: translate(+0.3rem, 0);\n    }\n    .current {\n        border-color: $current-color;\n        transition: transform 0.08s ease-in;\n    }\n    .not-present {\n        background-color: $not-present-color;\n        border-color: $not-present-color;\n    }\n    .present {\n        background-color: $present-color;\n        border-color: $present-color;\n    }\n    .correct {\n        background-color: $correct-color;\n        border-color: $correct-color;\n    }\n    \n    .not-present, .present, .correct {\n        color: $active-color;\n    }    \n}",":root {\n    --keyboard-max-keys: 10;\n}\n\n$key-gap: 0.3em;\n\n$key-background-color: #CCC;\n$key-active-background-color: #999;\n$key-hover-background-color: #DDD;\n\n$keyboard-max-key-width: 50px;\n$keyboard-max-key-height: 60px;\n\n@function key-width() {\n    @return min($keyboard-max-key-width, \n                (100vw - $key-gap * var(--keyboard-max-keys)) / var(--keyboard-max-keys));\n}\n@function key-width-special() {\n    @return calc(key-width() * 1.5);\n}\n@function key-height() {\n    @return min($keyboard-max-key-height, key-width() * 1.7);\n}\n@function keyboard-height() {\n    @return calc((key-height() + $key-gap) * 3);\n}\n@function keyboard-font-size() {\n    @return min(18px, key-width() / 2);\n}\n\n\n.keyboard {\n    margin-bottom: 1em;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    gap: $key-gap;\n    height: keyboard-height();\n    font-size: keyboard-font-size();\n    .row {\n        display: flex;\n        flex-flow: row nowrap;\n        gap: $key-gap;\n        .key {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            cursor: pointer;\n            font-size: 1em;\n            text-transform: uppercase;\n            width: key-width();\n            height: key-height();\n            background-color: $key-background-color;\n            border-radius: 0.3em;\n            touch-action: manipulation;\n            outline: none;\n        }            \n        .key:hover {\n            background-color: $key-hover-background-color;\n        }\n        .key:active, .key.pressed {\n            background-color: $key-active-background-color;\n        }\n        .key.key-enter, .key.key-backspace {\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: 1em;\n            width: key-width-special();\n        }\n        .key.key-enter {    \n            background-image: url('../assets/enter.svg');\n        }        \n        .key.key-backspace {\n            background-image: url('../assets/backspace.svg');\n        }\n    }\n}","@use 'puzzle';\n\n$puzzle-border: #CCC;\n$not-present-backgroud: rgb(120, 124, 126);\n$active-color: #FFF;\n$letter-size: 2em;\n$background: #fff;\n$overlay: rgba(255, 255, 255, 0.6);\n\n$highlight-color: rgb(245, 121, 58);\n$light-gray: rgb(194, 194, 194);\n\n.modal-overlay {\n    display: none;\n    position: absolute; \n    top: 0;    \n    z-index: 2;\n    background-color: $overlay;  \n    width: 100%;\n    height: 100%; \n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    .modal {\n        display: flex;\n        flex-flow: column nowrap;\n        background-color: $background;\n        box-shadow: 0 0 0.8em rgba(0, 0, 0, 0.5);\n        height: auto;\n        padding: 1em;\n        border-radius: 0.2em;\n        z-index: 10;\n        margin-top: 120vh;\n        opacity: 0;\n        transition: margin-top 0.2s ease-in-out, \n                    opacity 0.2s ease-in-out;\n\n        .close-btn {\n            align-self: flex-end;\n            right: 0px;\n            background-image: url('../assets/close.svg');\n        }\n        .pane {\n            display: flex;\n            flex-flow: column nowrap;\n            min-width: 40vw;\n            min-height: 20vh;\n            max-width: 90vw;\n            max-height: 90vh;\n            padding-bottom: 1.5em;\n            overflow-y: auto;\n            h3 {\n                align-self: center;\n                text-transform: uppercase;\n                letter-spacing: 0.08em;\n                text-align: center;\n                margin-bottom: 2em;\n            }\n            h4 {\n                margin-bottom: 1em;\n            }\n            p {\n                font-weight: normal;\n                margin-bottom: 1em;\n            }\n            .hr {\n                width: 100%;\n                border-bottom: 1px solid $puzzle-border;\n                margin-bottom: 2em;\n            }\n\n        }\n        .pane.stats {\n            h3 {\n                margin-bottom: 1em;\n            } \n            .score-table {\n                display: grid;\n                grid-template-columns: repeat(2, max-content);\n                grid-template-rows: repeat(2, max-content);\n                column-gap: 1em;\n                justify-items: center;\n                justify-content: center;\n                margin-bottom: 1em;\n                .score {\n                    font-size: 3.5em;\n                    font-weight: normal;\n                }\n                .score-label {\n                    font-size: 1rem;\n                    font-weight: normal;\n                }\n\n            }\n            .guess-dist {\n                display: grid;\n                grid-template-columns: max-content 1fr;\n                gap: 0.3em 0.5em;\n                font-size: 0.8em;\n                align-items: center;\n                margin: 0 1em;\n                .score {\n                    font-weight: normal;\n                    text-align: end;\n                }\n                .score-bar {\n                    padding: 0.1em 0.3em;\n                    width: fit-content;\n                    background-color: $not-present-backgroud;\n                    color: $active-color;\n                }\n            }\n        }\n        $shrink: 0.7;\n        @function card-size() {\n            @return calc(puzzle.card-size() * $shrink);\n        }\n        @function card-font-size() {\n            @return calc(puzzle.card-font-size() * $shrink);\n        }\n        .pane.help {\n            .puzzle {\n                justify-content: start;\n                font-size: card-font-size();\n                grid-template-columns: repeat(5, card-size());   \n                grid-template-rows: card-size();\n                margin-bottom: 4px;        \n            } \n        }\n        .pane.settings {\n            .settings-table {\n                display: flex;\n                flex-flow: column nowrap;\n                font-weight: normal;\n                gap: 1em;\n\n                ul.language-selector {\n                    display: flex;\n                    flex-flow: column nowrap;\n                    li {\n                        padding: 0.3em 0.6em;\n                        border-radius: 0.1em;\n                        cursor: pointer;\n                        transition: background-color 0.2s;\n                    }\n                    li::before {\n                        content: '';\n                        display: inline-block;\n                        height: 0.8em;\n                        width: 0.2em;\n                        margin-right: 0.4em;\n                        border-radius: 0.1em;\n                        transition: background-color 0.2s;\n                    }\n                    li.checked::before {\n                        background-color: $highlight-color;\n                    }\n                    li:hover {\n                        background-color: $light-gray;\n                    }                    \n                }\n            }\n            .settings-table > div {\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n                padding: 1em 0;\n                border-bottom: 1px solid $light-gray;\n            }\n\n\n            .check-box {\n                position: relative;\n                width: 3em;\n                height: 1.5em;\n                padding: 0.2em;\n                background-color: $light-gray;\n                justify-self: end;\n                border-radius: 999px;\n                cursor: pointer;\n            }\n            .check-box > span {\n                display: block;\n                width: 1.1em;\n                height: 1.1em;\n                background-color: white;\n                border-radius: 100%;\n                transition: margin-left 0.3s ease-in-out;\n            }\n            .check-box.checked {\n                background-color: $highlight-color;\n            }\n            .check-box.checked > span {\n                margin-left: 1.4em;\n            }\n        }\n    }\n    .modal.open {\n        opacity: 1;\n        margin-top: 0px;\n    }\n}    \n\n.error-msg {\n    position: absolute;\n    top: 5em;\n    margin: 0 auto;\n    height: auto;\n    background-color: black;\n    color: #FFF;\n    padding: 0.8em;\n    border-radius: 0.3em;\n    box-shadow: 0 0 0.8em rgba(0, 0, 0, 1);\n    opacity: 0;\n}\n\n.error-msg.visible {\n    opacity: 1;\n    transition: opacity 0.5s;   \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/backspace.svg":
/*!**********************************!*\
  !*** ./src/assets/backspace.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "backspace.svg";

/***/ }),

/***/ "./src/assets/chart.svg":
/*!******************************!*\
  !*** ./src/assets/chart.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chart.svg";

/***/ }),

/***/ "./src/assets/close.svg":
/*!******************************!*\
  !*** ./src/assets/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "close.svg";

/***/ }),

/***/ "./src/assets/enter.svg":
/*!******************************!*\
  !*** ./src/assets/enter.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "enter.svg";

/***/ }),

/***/ "./src/assets/github.svg":
/*!*******************************!*\
  !*** ./src/assets/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "github.svg";

/***/ }),

/***/ "./src/assets/help.svg":
/*!*****************************!*\
  !*** ./src/assets/help.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "help.svg";

/***/ }),

/***/ "./src/assets/settings.svg":
/*!*********************************!*\
  !*** ./src/assets/settings.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "settings.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _puzzle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./puzzle */ "./src/puzzle.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language */ "./src/language.js");




_keyboard__WEBPACK_IMPORTED_MODULE_2__.keyboard.keyFunction = _puzzle__WEBPACK_IMPORTED_MODULE_1__.puzzle.keyPressed; // puzzle.keyboard = keyboard;
// puzzle.modal.puzzle = puzzle;

(0,_language__WEBPACK_IMPORTED_MODULE_3__.initLanguage)();
})();

/******/ })()
;
//# sourceMappingURL=bundle.ce46894fee5fa43fb94a.js.map