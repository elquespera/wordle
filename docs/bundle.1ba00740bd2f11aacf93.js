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
      document.documentElement.style.setProperty('--keyboard-max-keys', maxKeys);
      document.querySelector('.keyboard').replaceChildren(keyboardFragment);
    } //reset hightlighted keys styles

  }, {
    key: "reset",
    value: function reset() {
      this._keys.forEach(function (key) {
        return key.classList.remove('correct', 'present', 'not-present');
      });
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
/* harmony export */   "layouts": () => (/* reexport default export from named module */ _translations_json__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "modalPages": () => (/* binding */ modalPages),
/* harmony export */   "switchLanguage": () => (/* binding */ switchLanguage)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./src/settings.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
/* harmony import */ var _puzzle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./puzzle */ "./src/puzzle.js");
/* harmony import */ var _translations_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translations.json */ "./src/translations.json");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var modalPages = ['help', 'stats', 'settings', 'reset'];
var currentLayout = _translations_json__WEBPACK_IMPORTED_MODULE_4__.en;

var switchLanguage = function switchLanguage() {
  var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentLayout;
  modalPages.forEach(function (pName) {
    var pane = document.querySelector('#' + pName);
    var paneFrag = new DocumentFragment();

    if (pName === 'stats') {
      var statusDiv = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '', 'game-status-message');
      var puzzleDiv = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '', 'puzzle');

      for (var i = 0; i < _puzzle__WEBPACK_IMPORTED_MODULE_3__.wordLength; i++) {
        puzzleDiv.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '', 'card'));
      }

      statusDiv.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('h3'), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('p', layout.stats.correctAnswer), puzzleDiv);
      paneFrag.append(statusDiv);
    }

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

        for (var _i = 1; _i <= 6; _i++) {
          guessDist.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', _i, 'score'), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', 0, 'score-bar'));
        }

        paneFrag.append(scoreTable, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '', 'hr'), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('h3', layout.stats.guessDist), guessDist);
        break;

      case 'settings':
        {
          var table = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '', 'settings-table');
          var darkMode = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div');
          darkMode.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', layout.settings.dark), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '<span></span>', 'check-box dark-mode', 'dark-theme'));
          var contrastMode = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div');
          contrastMode.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', layout.settings.contrast), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '<span></span>', 'check-box contrast-mode', 'high-contrast-theme'));
          var language = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div');
          var ul = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('ul', '', 'language-selector');
          Object.values(_translations_json__WEBPACK_IMPORTED_MODULE_4__).forEach(function (l) {
            return ul.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('li', l.name, '', l.locale));
          });
          language.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', layout.settings.lang), ul);
          table.append(darkMode, contrastMode, language);
          paneFrag.append(table);
          break;
        }

      case 'reset':
        {
          var yesno = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('div', '', 'yes-no');
          yesno.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('button', layout.reset.yes, 'text-btn', 'reset-yes-btn'), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('button', layout.reset.no, 'text-btn', 'reset-no-btn'));
          paneFrag.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.newEl)('p', layout.reset.question), yesno);
          break;
        }
    }

    pane.replaceChildren(paneFrag);
  });
  currentLayout = layout;
  _keyboard__WEBPACK_IMPORTED_MODULE_2__.keyboard["switch"](currentLayout);
  (0,_settings__WEBPACK_IMPORTED_MODULE_1__.initSettings)();
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language */ "./src/language.js");
/* harmony import */ var _puzzle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./puzzle */ "./src/puzzle.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Modal = /*#__PURE__*/function () {
  function Modal() {
    var _this = this;

    _classCallCheck(this, Modal);

    _defineProperty(this, "_open", false);

    _defineProperty(this, "_closeBtn", (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.close-btn'));

    window.addEventListener('click', function (e) {
      if (e.target === (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.modal-overlay')) {
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
    _language__WEBPACK_IMPORTED_MODULE_1__.modalPages.forEach(function (page) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)(".".concat(page, "-btn")).addEventListener('click', function (e) {
        return _this.show(page);
      });
    });

    this._closeBtn.addEventListener('click', function () {
      return _this.hide();
    });
  }

  _createClass(Modal, [{
    key: "toggle",
    value: function toggle() {
      this._open = !this._open;

      if (this._open) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.modal-overlay').style.display = 'flex';
        setTimeout(function () {
          (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.modal').classList.add('open');
        }, 10);
      } else {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.modal').classList.remove('open');
        setTimeout(function () {
          (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.modal-overlay').style.display = 'none';
        }, 300);
      }
    }
  }, {
    key: "show",
    value: function show() {
      var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'help';
      var winStatus = arguments.length > 1 ? arguments[1] : undefined;

      if (!this._open) {
        //Calculate & display statistics and show win/loose msg
        switch (msg) {
          case 'stats':
            var gameStatus = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.game-status-message');
            gameStatus.style.display = winStatus ? 'flex' : 'none';

            if (winStatus) {
              if (winStatus === 'win') {
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('h3', gameStatus).innerHTML = _language__WEBPACK_IMPORTED_MODULE_1__.currentLayout.stats.wonTitle;
              } else {
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('h3', gameStatus).innerHTML = _language__WEBPACK_IMPORTED_MODULE_1__.currentLayout.stats.loseTitle;
              }

              (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.card', gameStatus, true).forEach(function (card, i) {
                card.innerHTML = _puzzle__WEBPACK_IMPORTED_MODULE_2__.puzzle.solution[i];
              });
            }

            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.played.score').innerHTML = _puzzle__WEBPACK_IMPORTED_MODULE_2__.puzzle.stats.played;
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.won.score').innerHTML = _puzzle__WEBPACK_IMPORTED_MODULE_2__.puzzle.wonCount;
            var scoreBins = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.guess-dist>.score-bar', document, true);
            scoreBins.forEach(function (bin, i) {
              var count = _puzzle__WEBPACK_IMPORTED_MODULE_2__.puzzle.stats.dist[i] || 0;
              var width = count === 0 ? 'fit-content' : count / _puzzle__WEBPACK_IMPORTED_MODULE_2__.puzzle.maxWin * 100 + '%';
              bin.style.width = width;
              bin.innerHTML = count;
            });
            break;
        }

        _language__WEBPACK_IMPORTED_MODULE_1__.modalPages.map(function (pname) {
          return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)(".".concat(pname));
        }).forEach(function (pane) {
          pane.style.display = pane.id === msg ? 'flex' : 'none';
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
      var errorDiv = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.error-msg');
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
/* harmony export */   "puzzle": () => (/* binding */ puzzle),
/* harmony export */   "puzzleLength": () => (/* binding */ puzzleLength),
/* harmony export */   "revealCard": () => (/* binding */ revealCard),
/* harmony export */   "wordLength": () => (/* binding */ wordLength)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language */ "./src/language.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
/* harmony import */ var _assets_words_words_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/words/words-en.json */ "./src/assets/words/words-en.json");
/* harmony import */ var _assets_words_words_es_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/words/words-es.json */ "./src/assets/words/words-es.json");
/* harmony import */ var _assets_words_words_ru_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/words/words-ru.json */ "./src/assets/words/words-ru.json");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var words = {
  en: _assets_words_words_en_json__WEBPACK_IMPORTED_MODULE_3__,
  es: _assets_words_words_es_json__WEBPACK_IMPORTED_MODULE_4__,
  ru: _assets_words_words_ru_json__WEBPACK_IMPORTED_MODULE_5__
};
var wordLength = 5;
var puzzleLength = 6;

var Puzzle = /*#__PURE__*/function () {
  function Puzzle() {
    _classCallCheck(this, Puzzle);

    _defineProperty(this, "_cardDivs", []);

    _defineProperty(this, "_solution", void 0);

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

    for (var i = 1; i <= wordLength * puzzleLength; i++) {
      var card = document.createElement('div');
      card.className = "card row-".concat(Math.floor(i / puzzleLength));
      puzzleFrag.appendChild(card);
      row.push(card);

      if (row.length >= wordLength) {
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
      this._solution = this.dict()[Math.floor(Math.random() * this.dict().length)];
      this.update();

      this._cardDivs.flat().forEach(function (card) {
        card.classList.remove('not-present', 'present', 'correct', 'current');
      });

      _keyboard__WEBPACK_IMPORTED_MODULE_2__.keyboard.reset();
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
    key: "dict",
    value: function dict() {
      return words[_language__WEBPACK_IMPORTED_MODULE_1__.currentLayout.locale];
    }
  }, {
    key: "wordExists",
    value: function wordExists(word) {
      return this.dict().includes(word);
    }
  }, {
    key: "checkLetters",
    value: function () {
      var _checkLetters = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(row) {
        var i, letter, className;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < this.matrix[row].length)) {
                  _context.next = 13;
                  break;
                }

                letter = this.matrix[row][i];
                className = 'not-present';

                if (this.solution.includes(letter)) {
                  if (this.solution[i] === letter) {
                    className = 'correct';
                  } else {
                    className = 'present';
                  }
                }

                _keyboard__WEBPACK_IMPORTED_MODULE_2__.keyboard.findKeyDiv(letter).classList.add(className);
                _context.next = 8;
                return revealCard(this._cardDivs[row][i]);

              case 8:
                this._cardDivs[row][i].classList.add(className);

                this._cardDivs[row][i].classList.remove('current');

              case 10:
                i++;
                _context.next = 1;
                break;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkLetters(_x) {
        return _checkLetters.apply(this, arguments);
      }

      return checkLetters;
    }()
  }, {
    key: "checkStatus",
    value: function checkStatus() {
      if (this.lastRow.join('') === this.solution) {
        this.addWin(this.lastRowNumber);
        this.reset();
        _modal__WEBPACK_IMPORTED_MODULE_0__["default"].show('stats', 'win');
      } else if (this.lastRowNumber >= puzzleLength) {
        this.reset();
        _modal__WEBPACK_IMPORTED_MODULE_0__["default"].show('stats', 'lose');
      }
    }
  }, {
    key: "shakeRow",
    value: function () {
      var _shakeRow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(row) {
        var toggleClass, i;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                row = this._cardDivs[row];

                if (row) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", false);

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
                if (!(i < wordLength)) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 9;
                return toggleClass();

              case 9:
                i++;
                _context2.next = 6;
                break;

              case 12:
                row.forEach(function (x) {
                  return x.classList.remove('shift1', 'shift2');
                });

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function shakeRow(_x2) {
        return _shakeRow.apply(this, arguments);
      }

      return shakeRow;
    }()
  }, {
    key: "animateLetter",
    value: function () {
      var _animateLetter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(letter) {
        var inOut;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
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
                _context3.next = 4;
                return inOut(false);

              case 4:
                _context3.next = 6;
                return inOut(true);

              case 6:
                letter.classList.remove('in', 'out');

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function animateLetter(_x3) {
        return _animateLetter.apply(this, arguments);
      }

      return animateLetter;
    }()
  }, {
    key: "keyPressed",
    value: function () {
      var _keyPressed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(key) {
        var _this3 = this;

        var shake;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                shake = function shake(msg) {
                  _this3.shakeRow(_this3.lastRowNumber);

                  _modal__WEBPACK_IMPORTED_MODULE_0__["default"].showError(msg);
                };

                _context4.t0 = key;
                _context4.next = _context4.t0 === 'enter' ? 4 : _context4.t0 === 'backspace' ? 18 : 20;
                break;

              case 4:
                if (!(this.lastRow.length === wordLength)) {
                  _context4.next = 16;
                  break;
                }

                if (!this.wordExists(this.lastRow.join(''))) {
                  _context4.next = 13;
                  break;
                }

                _context4.next = 8;
                return this.checkLetters(this.lastRowNumber);

              case 8:
                this.matrix.push([]);
                this.checkStatus();
                this.update();
                _context4.next = 14;
                break;

              case 13:
                shake("Word doesn't exist");

              case 14:
                _context4.next = 17;
                break;

              case 16:
                shake('Not enough letters');

              case 17:
                return _context4.abrupt("break", 22);

              case 18:
                if (this.lastRow && this.lastRow.length > 0) {
                  this.lastRow.pop();
                  this.update();
                } else {
                  shake('No letters to erase');
                }

                return _context4.abrupt("break", 22);

              case 20:
                if (this.matrix.length === 0) {
                  this.matrix.push([]);
                }

                if (this.lastRow.length < wordLength) {
                  this.lastRow.push(key);
                  this.update();
                  this.animateLetter(this._cardDivs[this.lastRowNumber][this.lastRow.length - 1]);
                } else {
                  shake('Five letter max');
                }

              case 22:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function keyPressed(_x4) {
        return _keyPressed.apply(this, arguments);
      }

      return keyPressed;
    }()
  }]);

  return Puzzle;
}();

var revealCard = function revealCard(card) {
  return new Promise(function (resolve) {
    card.style.transition = 'none';
    card.style.transform = 'rotateX(180deg)';
    setTimeout(function () {
      card.style.transition = 'transform 1s ease-out';
      card.style.transform = 'rotateX(0deg)';
      setTimeout(function () {
        resolve('');
      }, 300);
    }, 50);
  });
};

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
/* harmony import */ var _translations_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations.json */ "./src/translations.json");
/* harmony import */ var _puzzle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./puzzle */ "./src/puzzle.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./src/modal.js");






var initSettings = function initSettings() {
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.check-box', document, true).forEach(function (checkbox) {
    checkbox.addEventListener('click', function (e) {
      checkbox.classList.toggle('checked');
      document.body.classList.toggle(checkbox.id, checkbox.classList.contains('checked'));
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
        (0,_language__WEBPACK_IMPORTED_MODULE_1__.switchLanguage)(_translations_json__WEBPACK_IMPORTED_MODULE_2__[e.currentTarget.id]);
        checkStatus();
        _puzzle__WEBPACK_IMPORTED_MODULE_3__.puzzle.reset();
      }
    });
  }); //Reset dialog event bindings

  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#reset-yes-btn').addEventListener('click', function () {
    _puzzle__WEBPACK_IMPORTED_MODULE_3__.puzzle.reset();
    _modal__WEBPACK_IMPORTED_MODULE_4__["default"].hide();
  });
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#reset-no-btn').addEventListener('click', function () {
    return _modal__WEBPACK_IMPORTED_MODULE_4__["default"].hide();
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/github.svg */ "./src/assets/github.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/help.svg */ "./src/assets/help.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/reset.svg */ "./src/assets/reset.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/chart.svg */ "./src/assets/chart.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/settings.svg */ "./src/assets/settings.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/enter.svg */ "./src/assets/enter.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/backspace.svg */ "./src/assets/backspace.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/close.svg */ "./src/assets/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  --main-color: black;\n  --background-color: white;\n  --overlay-color: rgba(255, 255, 255, 0.6);\n  --shadow-color: rgba(0, 0, 0, 0.5);\n  --border-color: #CCC;\n  --text-btn-color: white;\n  --accent-color1: #6aaa64;\n  --accent-color2: #c9b458;\n  --accent-color3: rgb(120, 124, 126);\n  --accent-color4: rgb(229, 229, 229);\n  --puzzle-current-color: rgb(135, 138, 140);\n  --puzzle-active-color: var(--background-color);\n}\n\nbody.dark-theme {\n  --main-color: white;\n  --background-color: black;\n  --overlay-color: rgba(0, 0, 0, 0.6);\n  --shadow-color: rgba(255, 255, 255, 0.5);\n}\nbody.dark-theme .icon-btn {\n  filter: invert(1);\n}\n\nbody.high-contrast-theme {\n  --accent-color1: orange;\n  --accent-color2: steelblue;\n}\n\nheader {\n  height: max(25px, min(60px, 13vw));\n  font-size: calc(max(25px, min(60px, 13vw)) / 3);\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 1em;\n}\nheader .menu {\n  display: flex;\n  position: relative;\n  align-items: center;\n  gap: 1em;\n}\nheader .menu .github-btn {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\nheader .menu .help-btn {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\nheader .menu .reset-btn {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\nheader .menu .stats-btn {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  transform: rotate(-90deg);\n}\nheader .menu .stats-btn:hover {\n  transform: none;\n}\nheader .menu .settings-btn {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\nheader .menu .settings-btn:hover {\n  transform: rotate(200deg);\n}\nheader h1 {\n  font-family: \"Oswald\";\n  font-size: 2em;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\n\n.puzzle {\n  font-size: calc(min(92vw - 0.4em - 20px, 320px) / 5 * 0.6);\n  display: grid;\n  grid-template-columns: repeat(5, calc(min(92vw - 0.4em - 20px, 320px) / 5));\n  grid-template-rows: repeat(6, calc(min(92vw - 0.4em - 20px, 320px) / 5));\n  justify-content: center;\n  align-content: center;\n  gap: 0.1em;\n}\n.puzzle .card {\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid var(--border-color);\n  transition: transform 0.08s ease-out;\n}\n.puzzle .card.current.in {\n  transform: scale(0.9);\n}\n.puzzle .card.current.out {\n  transform: scale(1.1);\n}\n.puzzle .card.shift1 {\n  transform: translate(-0.3rem, 0);\n}\n.puzzle .card.shift2 {\n  transform: translate(0.3rem, 0);\n}\n.puzzle .reveal {\n  transform: rotateY(180deg);\n}\n.puzzle .current {\n  border-color: var(--puzzle-current-color);\n  transition: transform 0.08s ease-in;\n}\n.puzzle .not-present {\n  background-color: var(--accent-color3);\n  border-color: var(--accent-color3);\n}\n.puzzle .present {\n  background-color: var(--accent-color2);\n  border-color: var(--accent-color2);\n}\n.puzzle .correct {\n  background-color: var(--accent-color1);\n  border-color: var(--accent-color1);\n}\n.puzzle .not-present, .puzzle .present, .puzzle .correct {\n  color: var(--puzzle-active-color);\n}\n\n:root {\n  --keyboard-max-keys: 10;\n}\n\n.keyboard {\n  margin-bottom: 1em;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  gap: 0.3em;\n  height: calc((min(60px, min(50px, (100vw - 0.3em * var(--keyboard-max-keys)) / var(--keyboard-max-keys)) * 1.7) + 0.3em) * 3);\n  font-size: min(18px, min(50px, (100vw - 0.3em * var(--keyboard-max-keys)) / var(--keyboard-max-keys)) / 2);\n}\n.keyboard .row {\n  display: flex;\n  flex-flow: row nowrap;\n  gap: 0.3em;\n}\n.keyboard .row .key {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-size: 1em;\n  text-transform: uppercase;\n  width: min(50px, (100vw - 0.3em * var(--keyboard-max-keys)) / var(--keyboard-max-keys));\n  height: min(60px, min(50px, (100vw - 0.3em * var(--keyboard-max-keys)) / var(--keyboard-max-keys)) * 1.7);\n  background-color: #CCC;\n  border-radius: 0.3em;\n  touch-action: manipulation;\n  outline: none;\n}\n.keyboard .row .key:hover {\n  background-color: #DDD;\n}\n.keyboard .row .key:active, .keyboard .row .key.pressed {\n  background-color: #999;\n}\n.keyboard .row .key.key-enter, .keyboard .row .key.key-backspace {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1em;\n  width: calc(min(50px, (100vw - 0.3em * var(--keyboard-max-keys)) / var(--keyboard-max-keys)) * 1.5);\n}\n.keyboard .row .key.key-enter {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.keyboard .row .key.key-backspace {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.keyboard .row .key.present {\n  background-color: var(--accent-color2);\n}\n.keyboard .row .key.not-present {\n  background-color: var(--accent-color3);\n}\n.keyboard .row .key.correct {\n  background-color: var(--accent-color1);\n}\n.keyboard .row .key.present, .keyboard .row .key.not-present, .keyboard .row .key.correct {\n  color: var(--puzzle-active-color);\n}\n\n.modal-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  z-index: 2;\n  background-color: var(--overlay-color);\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.modal-overlay .modal {\n  display: flex;\n  flex-flow: column nowrap;\n  background-color: var(--background-color);\n  box-shadow: 0 0 0.8em var(--shadow-color);\n  height: auto;\n  padding: 1em;\n  border-radius: 0.2em;\n  z-index: 10;\n  margin-top: 120vh;\n  opacity: 0;\n  transition: margin-top 0.2s ease-in-out, opacity 0.2s ease-in-out;\n}\n.modal-overlay .modal .close-btn {\n  align-self: flex-end;\n  right: 0px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n.modal-overlay .modal .pane {\n  display: flex;\n  flex-flow: column nowrap;\n  min-width: max(40vw, 260px);\n  min-height: max(20vh, 200px);\n  max-width: 85vw;\n  max-height: 85vh;\n  padding-bottom: 1.5em;\n  overflow-y: auto;\n}\n.modal-overlay .modal .pane h3 {\n  align-self: center;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  text-align: center;\n  margin-bottom: 2em;\n}\n.modal-overlay .modal .pane h4 {\n  margin-bottom: 1em;\n}\n.modal-overlay .modal .pane p {\n  margin-bottom: 1em;\n}\n.modal-overlay .modal .pane .hr {\n  width: 100%;\n  border-bottom: 1px solid var(--border-color);\n  margin-bottom: 2em;\n}\n.modal-overlay .modal .pane.stats h3 {\n  margin-bottom: 1em;\n}\n.modal-overlay .modal .pane.stats .game-status-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 5em;\n}\n.modal-overlay .modal .pane.stats .score-table {\n  display: grid;\n  grid-template-columns: repeat(2, max-content);\n  grid-template-rows: repeat(2, max-content);\n  column-gap: 1em;\n  justify-items: center;\n  justify-content: center;\n  margin-bottom: 1em;\n}\n.modal-overlay .modal .pane.stats .score-table .score {\n  font-size: 3.5em;\n}\n.modal-overlay .modal .pane.stats .score-table .score-label {\n  font-size: 1rem;\n}\n.modal-overlay .modal .pane.stats .guess-dist {\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  gap: 0.3em 0.5em;\n  font-size: 0.8em;\n  align-items: center;\n  margin: 0 1em;\n}\n.modal-overlay .modal .pane.stats .guess-dist .score {\n  text-align: end;\n}\n.modal-overlay .modal .pane.stats .guess-dist .score-bar {\n  padding: 0.1em 0.3em;\n  width: fit-content;\n  background-color: var(--accent-color3);\n  color: var(--puzzle-active-color);\n}\n.modal-overlay .modal .pane.reset .yes-no {\n  display: flex;\n  gap: 2em;\n  justify-content: center;\n  align-items: center;\n  margin-top: 3em;\n}\n.modal-overlay .modal .puzzle {\n  justify-content: start;\n  font-size: calc(min(92vw - 0.4em - 20px, 320px) / 5 * 0.6 * 0.7);\n  grid-template-columns: repeat(5, calc(min(92vw - 0.4em - 20px, 320px) / 5 * 0.7));\n  grid-template-rows: calc(min(92vw - 0.4em - 20px, 320px) / 5 * 0.7);\n  margin-bottom: 4px;\n}\n.modal-overlay .modal .pane.settings .settings-table {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 1em;\n}\n.modal-overlay .modal .pane.settings .settings-table ul.language-selector {\n  display: flex;\n  flex-flow: column nowrap;\n}\n.modal-overlay .modal .pane.settings .settings-table ul.language-selector li {\n  padding: 0.3em 0.6em;\n  border-radius: 0.1em;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.modal-overlay .modal .pane.settings .settings-table ul.language-selector li::before {\n  content: \"\";\n  display: inline-block;\n  height: 0.8em;\n  width: 0.2em;\n  margin-right: 0.4em;\n  border-radius: 0.1em;\n  transition: background-color 0.2s;\n}\n.modal-overlay .modal .pane.settings .settings-table ul.language-selector li.checked::before {\n  background-color: var(--accent-color1);\n}\n.modal-overlay .modal .pane.settings .settings-table ul.language-selector li:hover {\n  background-color: var(--accent-color4);\n}\n.modal-overlay .modal .pane.settings .settings-table > div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1em 0;\n  border-bottom: 1px solid var(--border-color);\n  gap: 1.5em;\n}\n.modal-overlay .modal .pane.settings .check-box {\n  position: relative;\n  width: 3em;\n  height: 1.5em;\n  padding: 0.2em;\n  background-color: rgb(194, 194, 194);\n  justify-self: end;\n  border-radius: 999px;\n  cursor: pointer;\n}\n.modal-overlay .modal .pane.settings .check-box > span {\n  display: block;\n  width: 1.1em;\n  height: 1.1em;\n  background-color: white;\n  border-radius: 100%;\n  transition: margin-left 0.3s ease-in-out;\n}\n.modal-overlay .modal .pane.settings .check-box.checked {\n  background-color: var(--accent-color1);\n}\n.modal-overlay .modal .pane.settings .check-box.checked > span {\n  margin-left: 1.4em;\n}\n.modal-overlay .modal .pane.reset #reset-yes-btn {\n  background-color: var(--accent-color1);\n}\n.modal-overlay .modal .pane.reset #reset-no-btn {\n  background-color: var(--accent-color2);\n}\n.modal-overlay .modal.open {\n  opacity: 1;\n  margin-top: 0px;\n}\n\n.error-msg {\n  position: absolute;\n  top: 5em;\n  left: 50%;\n  transform: translateX(-50%);\n  height: auto;\n  background-color: black;\n  color: #FFF;\n  width: max-content;\n  max-width: 90%;\n  padding: 0.5em 0.7em;\n  border-radius: 0.3em;\n  box-shadow: 0 0 0.4em rgb(0, 0, 0);\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.error-msg.visible {\n  opacity: 1;\n}\n\n*, body, ul, li {\n  margin: 0px;\n  padding: 0px;\n  border: 0px;\n}\n\nul {\n  list-style: none;\n}\n\nbody, * {\n  box-sizing: border-box;\n  font-family: \"Roboto\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n}\n\nh2, h3, h4 {\n  font-weight: 600;\n}\n\n* {\n  height: 100%;\n}\n\nbody {\n  background-color: var(--background-color);\n  color: var(--main-color);\n}\n\nbutton {\n  background-color: transparent;\n  cursor: pointer;\n  font-weight: 400;\n}\n\n.text-btn {\n  color: var(--text-btn-color);\n  background-color: var(--accent-color3);\n  padding: 0.8em;\n  min-width: 12ch;\n  border-radius: 0.3em;\n}\n\n.icon-btn {\n  font-size: inherit;\n  width: 1.5em;\n  height: 1.5em;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  opacity: 0.7;\n  transition: opacity 0.2s, transform 0.2s;\n}\n\n.icon-btn:hover {\n  opacity: 1;\n  transform: translateY(-2px);\n}\n\n.container {\n  position: relative;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 16px;\n  height: calc(100% - max(25px, min(60px, 13vw)));\n}", "",{"version":3,"sources":["webpack://./src/styles/_vars.scss","webpack://./src/styles/main.scss","webpack://./src/styles/header.scss","webpack://./src/styles/puzzle.scss","webpack://./src/styles/keyboard.scss","webpack://./src/styles/modal.scss"],"names":[],"mappings":"AAoBA;EACI,mBAAA;EACA,yBAAA;EACA,yCAAA;EACA,kCAAA;EACA,oBAAA;EACA,uBAAA;EAEA,wBAAA;EACA,wBAAA;EACA,mCAAA;EACA,mCAAA;EAEA,0CAAA;EACA,8CAAA;ACnBJ;;ADwBA;EACI,mBAAA;EACA,yBAAA;EACA,mCAAA;EACA,wCAAA;ACrBJ;ADyBI;EACI,iBAAA;ACvBR;;AD6BA;EACI,uBAAA;EACA,0BAAA;AC1BJ;;ACxBA;EACI,kCAAA;EACA,+CAAA;EACA,aAAA;EACA,WAAA;EACA,8BAAA;EACA,mBAAA;EACA,cAAA;AD2BJ;AC1BI;EACI,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,QAAA;AD4BR;AC3BQ;EACI,yDAAA;AD6BZ;AC3BQ;EACI,yDAAA;AD6BZ;AC3BQ;EACI,yDAAA;AD6BZ;AC3BQ;EACI,yDAAA;EACA,yBAAA;AD6BZ;AC3BQ;EACI,eAAA;AD6BZ;AC3BQ;EACI,yDAAA;AD6BZ;AC3BQ;EACI,yBAAA;AD6BZ;AC1BI;EACI,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;AD4BR;;AEtDA;EACI,0DAAA;EACA,aAAA;EACA,2EAAA;EACA,wEAAA;EACA,uBAAA;EACA,qBAAA;EACA,UAtBS;AF+Eb;AEvDI;EACI,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,qCAAA;EACA,oCAAA;AFyDR;AEtDI;EACI,qBAAA;AFwDR;AEtDI;EACI,qBAAA;AFwDR;AEtDI;EACI,gCAAA;AFwDR;AEtDI;EACI,+BAAA;AFwDR;AErDI;EACI,0BAAA;AFuDR;AEpDI;EACI,yCH7Ce;EG8Cf,mCAAA;AFsDR;AEpDI;EACI,sCHpDQ;EGqDR,kCHrDQ;AC2GhB;AEpDI;EACI,sCHzDQ;EG0DR,kCH1DQ;ACgHhB;AEpDI;EACI,sCH9DQ;EG+DR,kCH/DQ;ACqHhB;AEnDI;EACI,iCH7Dc;ACkHtB;;AG7HA;EACI,uBAAA;AHgIJ;;AGlGA;EACI,kBAAA;EACA,aAAA;EACA,wBAAA;EACA,mBAAA;EACA,UAhCM;EAiCN,6HAAA;EACA,0GAAA;AHqGJ;AGpGI;EACI,aAAA;EACA,qBAAA;EACA,UAtCE;AH4IV;AGrGQ;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;EACA,yBAAA;EACA,uFAAA;EACA,yGAAA;EACA,sBA9CW;EA+CX,oBAAA;EACA,0BAAA;EACA,aAAA;AHuGZ;AGrGQ;EACI,sBAlDiB;AHyJ7B;AGrGQ;EACI,sBAtDkB;AH6J9B;AGrGQ;EACI,4BAAA;EACA,2BAAA;EACA,oBAAA;EACA,mGAAA;AHuGZ;AGrGQ;EACI,yDAAA;AHuGZ;AGrGQ;EACI,yDAAA;AHuGZ;AGrGQ;EACI,sCJtEI;AC6KhB;AGrGQ;EACI,sCJxEI;AC+KhB;AGrGQ;EACI,sCJ7EI;ACoLhB;AGrGQ;EACI,iCJ1EU;ACiLtB;;AItLA;EACI,aAAA;EACA,kBAAA;EACA,MAAA;EACA,UAAA;EACA,sCLXY;EKYZ,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AJyLJ;AIxLI;EACI,aAAA;EACA,wBAAA;EACA,yCLrBW;EKsBX,yCAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;EACA,WAAA;EACA,iBAAA;EACA,UAAA;EACA,iEAAA;AJ0LR;AIvLQ;EACI,oBAAA;EACA,UAAA;EACA,yDAAA;AJyLZ;AIvLQ;EACI,aAAA;EACA,wBAAA;EACA,2BAAA;EACA,4BAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,gBAAA;AJyLZ;AIxLY;EACI,kBAAA;EACA,yBAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;AJ0LhB;AIxLY;EACI,kBAAA;AJ0LhB;AIxLY;EACI,kBAAA;AJ0LhB;AIxLY;EACI,WAAA;EACA,4CAAA;EACA,kBAAA;AJ0LhB;AIrLY;EACI,kBAAA;AJuLhB;AIrLY;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AJuLhB;AIrLY;EACI,aAAA;EACA,6CAAA;EACA,0CAAA;EACA,eAAA;EACA,qBAAA;EACA,uBAAA;EACA,kBAAA;AJuLhB;AItLgB;EACI,gBAAA;AJwLpB;AItLgB;EACI,eAAA;AJwLpB;AIpLY;EACI,aAAA;EACA,sCAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,aAAA;AJsLhB;AIrLgB;EACI,eAAA;AJuLpB;AIrLgB;EACI,oBAAA;EACA,kBAAA;EACA,sCLjGJ;EKkGI,iCL9FE;ACqRtB;AIjLY;EACI,aAAA;EACA,QAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;AJmLhB;AItKQ;EACI,sBAAA;EACA,gEAAA;EACA,iFAAA;EACA,mEAAA;EACA,kBAAA;AJwKZ;AIpKY;EACI,aAAA;EACA,wBAAA;EACA,QAAA;AJsKhB;AIpKgB;EACI,aAAA;EACA,wBAAA;AJsKpB;AIrKoB;EACI,oBAAA;EACA,oBAAA;EACA,eAAA;EACA,iCAAA;AJuKxB;AIrKoB;EACI,WAAA;EACA,qBAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;EACA,iCAAA;AJuKxB;AIrKoB;EACI,sCL7JR;ACoUhB;AIrKoB;EACI,sCL7JR;ACoUhB;AInKY;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,cAAA;EACA,4CAAA;EACA,UAAA;AJqKhB;AIjKY;EACI,kBAAA;EACA,UAAA;EACA,aAAA;EACA,cAAA;EACA,oCApLH;EAqLG,iBAAA;EACA,oBAAA;EACA,eAAA;AJmKhB;AIjKY;EACI,cAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,wCAAA;AJmKhB;AIjKY;EACI,sCLjMA;ACoWhB;AIjKY;EACI,kBAAA;AJmKhB;AI/JY;EACI,sCLzMA;AC0WhB;AI/JY;EACI,sCL3MA;AC4WhB;AI7JI;EACI,UAAA;EACA,eAAA;AJ+JR;;AI3JA;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,2BAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,cAAA;EACA,oBAAA;EACA,oBAAA;EACA,kCAAA;EACA,UAAA;EACA,wBAAA;AJ8JJ;;AI3JA;EACI,UAAA;AJ8JJ;;AAlYA;EACI,WAAA;EACA,YAAA;EACA,WAAA;AAqYJ;;AAnYA;EACI,gBAAA;AAsYJ;;AApYA;EACI,sBAAA;EACA,mDAAA;EACA,gBDPkB;AC8YtB;;AApYA;EACI,gBAAA;AAuYJ;;AApYA;EACI,YAAA;AAuYJ;;AApYA;EACI,yCDjCe;ECkCf,wBDnCS;AC0ab;;AApYA;EACI,6BAAA;EACA,eAAA;EACA,gBD1BkB;ACiatB;;AApYA;EACI,4BDxCa;ECyCb,sCDrCY;ECsCZ,cAAA;EACA,eAAA;EACA,oBAAA;AAuYJ;;AAnYA;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,4BAAA;EACA,2BAAA;EACA,wBAAA;EACA,YAAA;EACA,wCAAA;AAsYJ;;AAnYA;EACI,UAAA;EACA,2BAAA;AAsYJ;;AAnYA;EACI,kBAAA;EACA,aAAA;EACA,wBAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;EACA,+CAAA;AAsYJ","sourcesContent":["$main-color: var(--main-color);\n$background-color: var(--background-color);\n$overlay-color: var(--overlay-color);\n$shadow-color: var(--shadow-color);\n$border-color: var(--border-color);\n$text-btn-color: var(--text-btn-color);\n\n$accent-color1: var(--accent-color1);\n$accent-color2: var(--accent-color2);\n$accent-color3: var(--accent-color3);\n$accent-color4: var(--accent-color4);\n\n$puzzle-current-color: var(--puzzle-current-color);\n$puzzle-active-color: var(--puzzle-active-color);\n\n$default-font-weight: 400;\n\n\n// Default Theme\n\nbody {\n    --main-color: black;\n    --background-color: white;\n    --overlay-color: rgba(255, 255, 255, 0.6);\n    --shadow-color: rgba(0, 0, 0, 0.5);\n    --border-color: #CCC;\n    --text-btn-color: white;\n\n    --accent-color1: #6aaa64;\n    --accent-color2: #c9b458;\n    --accent-color3: rgb(120, 124, 126);\n    --accent-color4: rgb(229, 229, 229);\n\n    --puzzle-current-color: rgb(135, 138, 140);    \n    --puzzle-active-color: var(--background-color);\n}\n\n// Dark Theme \n\nbody.dark-theme {\n    --main-color: white;\n    --background-color: black;\n    --overlay-color: rgba(0, 0, 0, 0.6);\n    --shadow-color: rgba(255, 255, 255, 0.5);\n\n\n    // Invert colors for icon buttons\n    .icon-btn {\n        filter: invert(1);\n    }\n}\n\n// High Contrast Theme\n\nbody.high-contrast-theme {\n    --accent-color1: orange;\n    --accent-color2: steelblue;    \n}","@use 'vars';\n@use 'header';\n@use 'puzzle';\n@use 'keyboard';\n@use 'modal';\n\n@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');\n\n\n// Reset\n*, body, ul, li {\n    margin: 0px;\n    padding: 0px;\n    border: 0px;\n}\nul {\n    list-style: none;\n}\nbody, * {\n    box-sizing: border-box;\n    font-family: 'Roboto', Arial, Helvetica, sans-serif;\n    font-weight: vars.$default-font-weight;\n}\n\nh2, h3, h4 {\n    font-weight: 600;\n}\n\n* {\n    height: 100%;\n}\n\nbody {\n    background-color: vars.$background-color;\n    color: vars.$main-color;\n}\n\nbutton {\n    background-color: transparent;\n    cursor: pointer;\n    font-weight: vars.$default-font-weight;\n}\n\n.text-btn {\n    color: vars.$text-btn-color;\n    background-color: vars.$accent-color3;\n    padding: 0.8em;\n    min-width: 12ch;\n    border-radius: 0.3em;\n}\n\n\n.icon-btn {\n    font-size: inherit;\n    width: 1.5em;\n    height: 1.5em;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    opacity: 0.7;\n    transition: opacity 0.2s, transform 0.2s;\n}\n\n.icon-btn:hover {\n    opacity: 1;\n    transform: translateY(-2px);\n}\n\n.container {\n    position: relative;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 16px;\n    height: calc(100% - header.header-height());    \n}","$background: #fff;\n\n@function header-height() {\n    @return max(25px, min(60px, 13vw));\n}\n\nheader {\n    height: header-height();\n    font-size: calc(header-height() / 3);\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;    \n    padding: 0 1em;\n    .menu {\n        display: flex;\n        position: relative;\n        align-items: center;\n        gap: 1em;\n        .github-btn {\n            background-image: url('../assets/github.svg');\n        }\n        .help-btn {\n            background-image: url('../assets/help.svg');\n        }\n        .reset-btn {\n            background-image: url('../assets/reset.svg');\n        }\n        .stats-btn {\n            background-image: url('../assets/chart.svg');\n            transform: rotate(-90deg);\n        }\n        .stats-btn:hover {\n            transform: none;\n        }\n        .settings-btn {\n            background-image: url('../assets/settings.svg');\n        }\n        .settings-btn:hover {\n            transform: rotate(200deg);\n        }\n    }\n    h1 {\n        font-family: 'Oswald';\n        font-size: 2em;\n        font-weight: 500;\n        display: flex;\n        align-items: center;\n    }    \n}","@use \"vars\";\n\n//Sizes\n$puzzle-word-legnth: 5;\n$puzzle-max-width: 320px;\n$puzzle-border: 2px;\n$puzzle-gap: 0.1em;\n\n//Calculate flexible card size\n@function card-size() {\n    $res: calc(min(calc(\n        92vw - $puzzle-gap * ($puzzle-word-legnth - 1) - \n        $puzzle-border * $puzzle-word-legnth * 2) \n        , $puzzle-max-width));\n    @return calc($res / $puzzle-word-legnth);\n}\n//Calculate card font size\n@function card-font-size() {\n    @return calc(card-size() * 0.6);\n}\n\n.puzzle {\n    font-size: card-font-size();\n    display: grid;\n    grid-template-columns: repeat(5, card-size());\n    grid-template-rows: repeat(6, card-size());\n    justify-content: center;\n    align-content: center;\n    gap: $puzzle-gap;\n    \n    .card {\n        text-transform: uppercase;\n        display: flex;\n        justify-content: center;\n        align-items: center;                \n        border: $puzzle-border solid vars.$border-color; \n        transition: transform 0.08s ease-out;\n    }\n    \n    .card.current.in {\n        transform: scale(0.9);\n    }\n    .card.current.out {\n        transform: scale(1.1);\n    }    \n    .card.shift1 {\n        transform: translate(-0.3rem, 0);\n    }\n    .card.shift2 {\n        transform: translate(+0.3rem, 0);\n    }\n\n    .reveal {\n        transform: rotateY(180deg);\n    }\n\n    .current {\n        border-color: vars.$puzzle-current-color;\n        transition: transform 0.08s ease-in;\n    }\n    .not-present {\n        background-color: vars.$accent-color3;\n        border-color: vars.$accent-color3;\n    }\n    .present {\n        background-color: vars.$accent-color2;\n        border-color: vars.$accent-color2;\n    }\n    .correct {\n        background-color: vars.$accent-color1;\n        border-color: vars.$accent-color1;\n    }\n    \n    .not-present, .present, .correct {\n        color: vars.$puzzle-active-color;\n    }    \n}","@use 'vars';\n\n:root {\n    --keyboard-max-keys: 10;\n}\n\n$key-gap: 0.3em;\n\n$key-background-color: #CCC;\n$key-active-background-color: #999;\n$key-hover-background-color: #DDD;\n\n$keyboard-max-key-width: 50px;\n$keyboard-max-key-height: 60px;\n\n@function key-width() {\n    @return min($keyboard-max-key-width, \n                (100vw - $key-gap * var(--keyboard-max-keys)) / var(--keyboard-max-keys));\n}\n@function key-width-special() {\n    @return calc(key-width() * 1.5);\n}\n@function key-height() {\n    @return min($keyboard-max-key-height, key-width() * 1.7);\n}\n@function keyboard-height() {\n    @return calc((key-height() + $key-gap) * 3);\n}\n@function keyboard-font-size() {\n    @return min(18px, key-width() / 2);\n}\n\n\n.keyboard {\n    margin-bottom: 1em;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    gap: $key-gap;\n    height: keyboard-height();\n    font-size: keyboard-font-size();\n    .row {\n        display: flex;\n        flex-flow: row nowrap;\n        gap: $key-gap;\n        .key {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            cursor: pointer;\n            font-size: 1em;\n            text-transform: uppercase;\n            width: key-width();\n            height: key-height();\n            background-color: $key-background-color;\n            border-radius: 0.3em;\n            touch-action: manipulation;\n            outline: none;\n        }            \n        .key:hover {\n            background-color: $key-hover-background-color;\n        }\n        .key:active, .key.pressed {\n            background-color: $key-active-background-color;\n        }\n        .key.key-enter, .key.key-backspace {\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: 1em;\n            width: key-width-special();\n        }\n        .key.key-enter {    \n            background-image: url('../assets/enter.svg');\n        }        \n        .key.key-backspace {\n            background-image: url('../assets/backspace.svg');\n        }\n        .key.present {\n            background-color: vars.$accent-color2;\n        }\n        .key.not-present {\n            background-color: vars.$accent-color3;\n        }\n        .key.correct {\n            background-color: vars.$accent-color1;\n        }        \n        .key.present, .key.not-present, .key.correct {\n            color: vars.$puzzle-active-color;\n        }    \n    \n    }\n}","@use 'vars';\n@use 'puzzle';\n\n\n$letter-size: 2em;\n\n$light-gray: rgb(194, 194, 194);\n\n.modal-overlay {\n    display: none;\n    position: absolute; \n    top: 0;    \n    z-index: 2;\n    background-color: vars.$overlay-color;  \n    width: 100%;\n    height: 100%; \n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    .modal {\n        display: flex;\n        flex-flow: column nowrap;\n        background-color: vars.$background-color;\n        box-shadow: 0 0 0.8em vars.$shadow-color;\n        height: auto;\n        padding: 1em;\n        border-radius: 0.2em;\n        z-index: 10;\n        margin-top: 120vh;\n        opacity: 0;\n        transition: margin-top 0.2s ease-in-out, \n                    opacity 0.2s ease-in-out;\n\n        .close-btn {\n            align-self: flex-end;\n            right: 0px;\n            background-image: url('../assets/close.svg');\n        }\n        .pane {\n            display: flex;\n            flex-flow: column nowrap;\n            min-width: max(40vw, 260px);\n            min-height: max(20vh, 200px);\n            max-width: 85vw;\n            max-height: 85vh;\n            padding-bottom: 1.5em;\n            overflow-y: auto;\n            h3 {\n                align-self: center;\n                text-transform: uppercase;\n                letter-spacing: 0.08em;\n                text-align: center;\n                margin-bottom: 2em;\n            }\n            h4 {\n                margin-bottom: 1em;\n            }\n            p {\n                margin-bottom: 1em;\n            }\n            .hr {\n                width: 100%;\n                border-bottom: 1px solid vars.$border-color;\n                margin-bottom: 2em;\n            }\n\n        }\n        .pane.stats {\n            h3 {\n                margin-bottom: 1em;\n            }\n            .game-status-message {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                margin-bottom: 5em;\n            }\n            .score-table {\n                display: grid;\n                grid-template-columns: repeat(2, max-content);\n                grid-template-rows: repeat(2, max-content);\n                column-gap: 1em;\n                justify-items: center;\n                justify-content: center;\n                margin-bottom: 1em;\n                .score {\n                    font-size: 3.5em;\n                }\n                .score-label {\n                    font-size: 1rem;\n                }\n\n            }\n            .guess-dist {\n                display: grid;\n                grid-template-columns: max-content 1fr;\n                gap: 0.3em 0.5em;\n                font-size: 0.8em;\n                align-items: center;\n                margin: 0 1em;\n                .score {\n                    text-align: end;\n                }\n                .score-bar {\n                    padding: 0.1em 0.3em;\n                    width: fit-content;\n                    background-color: vars.$accent-color3;\n                    color: vars.$puzzle-active-color;\n                }\n            }\n        }\n\n        .pane.reset {\n            .yes-no {\n                display: flex;\n                gap: 2em;\n                justify-content: center;\n                align-items: center;\n                margin-top: 3em;\n            }\n        }\n\n\n        $shrink: 0.7;\n        @function card-size() {\n            @return calc(puzzle.card-size() * $shrink);\n        }\n        @function card-font-size() {\n            @return calc(puzzle.card-font-size() * $shrink);\n        }\n\n        .puzzle {\n            justify-content: start;\n            font-size: card-font-size();\n            grid-template-columns: repeat(5, card-size());   \n            grid-template-rows: card-size();\n            margin-bottom: 4px;        \n        } \n        \n        .pane.settings {\n            .settings-table {\n                display: flex;\n                flex-flow: column nowrap;\n                gap: 1em;\n\n                ul.language-selector {\n                    display: flex;\n                    flex-flow: column nowrap;\n                    li {\n                        padding: 0.3em 0.6em;\n                        border-radius: 0.1em;\n                        cursor: pointer;\n                        transition: background-color 0.2s;\n                    }\n                    li::before {\n                        content: '';\n                        display: inline-block;\n                        height: 0.8em;\n                        width: 0.2em;\n                        margin-right: 0.4em;\n                        border-radius: 0.1em;\n                        transition: background-color 0.2s;\n                    }\n                    li.checked::before {\n                        background-color: vars.$accent-color1;\n                    }\n                    li:hover {\n                        background-color: vars.$accent-color4;\n                    }                    \n                }\n            }\n            .settings-table > div {\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n                padding: 1em 0;\n                border-bottom: 1px solid vars.$border-color;\n                gap: 1.5em;\n            }\n\n\n            .check-box {\n                position: relative;\n                width: 3em;\n                height: 1.5em;\n                padding: 0.2em;\n                background-color: $light-gray;\n                justify-self: end;\n                border-radius: 999px;\n                cursor: pointer;\n            }\n            .check-box > span {\n                display: block;\n                width: 1.1em;\n                height: 1.1em;\n                background-color: white;\n                border-radius: 100%;\n                transition: margin-left 0.3s ease-in-out;\n            }\n            .check-box.checked {\n                background-color: vars.$accent-color1;\n            }\n            .check-box.checked > span {\n                margin-left: 1.4em;\n            }\n        }\n        .pane.reset {\n            #reset-yes-btn {\n                background-color: vars.$accent-color1;\n            }\n            #reset-no-btn {\n                background-color: vars.$accent-color2;\n            }\n        }\n    }\n    .modal.open {\n        opacity: 1;\n        margin-top: 0px;\n    }\n}    \n\n.error-msg {\n    position: absolute;\n    top: 5em;\n    left: 50%;\n    transform: translateX(-50%);\n    height: auto;\n    background-color: black;\n    color: #FFF;\n    width: max-content;\n    max-width: 90%;\n    padding: 0.5em 0.7em;\n    border-radius: 0.3em;\n    box-shadow: 0 0 0.4em rgba(0, 0, 0, 1);\n    opacity: 0;\n    transition: opacity 0.5s;\n}\n\n.error-msg.visible {\n    opacity: 1; \n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/reset.svg":
/*!******************************!*\
  !*** ./src/assets/reset.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reset.svg";

/***/ }),

/***/ "./src/assets/settings.svg":
/*!*********************************!*\
  !*** ./src/assets/settings.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "settings.svg";

/***/ }),

/***/ "./src/assets/words/words-en.json":
/*!****************************************!*\
  !*** ./src/assets/words/words-en.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('["aahed","aalii","aargh","aarti","abaca","abaci","aback","abacs","abaft","abaka","abamp","aband","abase","abash","abask","abate","abaya","abbas","abbed","abbes","abbey","abbot","abcee","abeam","abear","abele","abers","abets","abhor","abide","abies","abled","abler","ables","ablet","ablow","abmho","abode","abohm","aboil","aboma","aboon","abord","abore","abort","about","above","abram","abray","abrim","abrin","abris","absey","absit","abuna","abune","abuse","abuts","abuzz","abyes","abysm","abyss","acais","acari","accas","accoy","acerb","acers","aceta","achar","ached","aches","achoo","acids","acidy","acing","acini","ackee","acker","acmes","acmic","acned","acnes","acock","acold","acorn","acred","acres","acrid","acros","acted","actin","acton","actor","acute","acyls","adage","adapt","adaws","adays","adbot","addax","added","adder","addio","addle","adeem","adept","adhan","adieu","adios","adits","adman","admen","admin","admit","admix","adobe","adobo","adopt","adore","adorn","adown","adoze","adrad","adred","adsum","aduki","adult","adunc","adust","advew","adyta","adzed","adzes","aecia","aedes","aegis","aeons","aerie","aeros","aesir","afald","afara","afars","afear","affix","afire","aflaj","afoot","afore","afoul","afrit","afros","after","again","agama","agami","agape","agars","agast","agate","agave","agaze","agene","agent","agers","agger","aggie","aggri","aggro","aggry","aghas","agila","agile","aging","agios","agism","agist","agita","aglee","aglet","agley","agloo","aglow","aglus","agmas","agoge","agone","agons","agony","agood","agree","agria","agrin","agros","agued","agues","aguna","aguti","ahead","aheap","ahent","ahigh","ahind","ahing","ahint","ahold","ahull","ahuru","aidas","aided","aider","aides","aidoi","aidos","aiery","aigas","aight","ailed","aimed","aimer","ainee","ainga","aioli","aired","airer","airns","airth","airts","aisle","aitch","aitus","aiver","aiyee","aizle","ajies","ajiva","ajuga","ajwan","akees","akela","akene","aking","akita","akkas","alaap","alack","alamo","aland","alane","alang","alans","alant","alapa","alaps","alarm","alary","alate","alays","albas","albee","album","alcid","alcos","aldea","alder","aldol","aleck","alecs","alefs","aleft","aleph","alert","alews","aleye","alfas","algae","algal","algas","algid","algin","algor","algum","alias","alibi","alien","alifs","align","alike","aline","alist","alive","aliya","alkie","alkos","alkyd","alkyl","allay","allee","allel","alley","allis","allod","allot","allow","alloy","allyl","almah","almas","almeh","almes","almud","almug","alods","aloed","aloes","aloft","aloha","aloin","alone","along","aloof","aloos","aloud","alowe","alpha","altar","alter","altho","altos","alula","alums","alure","alvar","alway","amahs","amain","amass","amate","amaut","amaze","amban","amber","ambit","amble","ambos","ambry","ameba","ameer","amend","amene","amens","ament","amias","amice","amici","amide","amido","amids","amies","amiga","amigo","amine","amino","amins","amirs","amiss","amity","amlas","amman","ammon","ammos","amnia","amnic","amnio","amoks","amole","among","amort","amour","amove","amowt","amped","ample","amply","ampul","amrit","amuck","amuse","amyls","anana","anata","ancho","ancle","ancon","andro","anear","anele","anent","angas","angel","anger","angle","anglo","angry","angst","anigh","anile","anils","anima","anime","animi","anion","anise","anker","ankhs","ankle","ankus","anlas","annal","annas","annat","annex","annoy","annul","anoas","anode","anole","anomy","ansae","antae","antar","antas","anted","antes","antic","antis","antra","antre","antsy","anura","anvil","anyon","aorta","apace","apage","apaid","apart","apayd","apays","apeak","apeek","apers","apert","apery","apgar","aphid","aphis","apian","aping","apiol","apish","apism","apnea","apode","apods","apoop","aport","appal","appay","appel","apple","apply","appro","appui","appuy","apres","apron","apses","apsis","apsos","apted","apter","aptly","aquae","aquas","araba","araks","arame","arars","arbas","arbor","arced","archi","arcos","arcus","ardeb","ardor","ardri","aread","areae","areal","arear","areas","areca","aredd","arede","arefy","areic","arena","arene","arepa","arere","arete","arets","arett","argal","argan","argil","argle","argol","argon","argot","argue","argus","arhat","arias","ariel","ariki","arils","ariot","arise","arish","arked","arled","arles","armed","armer","armet","armil","armor","arnas","arnut","aroba","aroha","aroid","aroma","arose","arpas","arpen","arrah","arras","array","arret","arris","arrow","arroz","arsed","arses","arsey","arsis","arson","artal","artel","artic","artis","artsy","aruhe","arums","arval","arvee","arvos","aryls","asana","ascon","ascot","ascus","asdic","ashed","ashen","ashes","ashet","aside","asked","asker","askew","askoi","askos","aspen","asper","aspic","aspie","aspis","aspro","assai","assam","assay","asses","asset","assez","assot","aster","astir","astun","asura","asway","aswim","asyla","ataps","ataxy","atigi","atilt","atimy","atlas","atman","atmas","atmos","atocs","atoke","atoks","atoll","atoms","atomy","atone","atony","atopy","atria","atrip","attap","attar","attic","atuas","audad","audio","audit","auger","aught","augur","aulas","aulic","auloi","aulos","aumil","aunes","aunts","aunty","aurae","aural","aurar","auras","aurei","aures","auric","auris","aurum","autos","auxin","avail","avale","avant","avast","avels","avens","avers","avert","avgas","avian","avine","avion","avise","aviso","avize","avoid","avows","avyze","await","awake","award","aware","awarn","awash","awato","awave","aways","awdls","aweel","aweto","awful","awing","awmry","awned","awner","awoke","awols","awork","axels","axial","axile","axils","axing","axiom","axion","axite","axled","axles","axman","axmen","axoid","axone","axons","ayahs","ayaya","ayelp","aygre","ayins","ayont","ayres","ayrie","azans","azide","azido","azine","azlon","azoic","azole","azons","azote","azoth","azuki","azure","azurn","azury","azygy","azyme","azyms","baaed","baals","babas","babel","babes","babka","baboo","babul","babus","bacca","bacco","baccy","bacha","bachs","backs","bacon","baddy","badge","badly","baels","baffs","baffy","bafts","bagel","baggy","baghs","bagie","bahts","bahus","bahut","bails","bairn","baisa","baith","baits","baiza","baize","bajan","bajra","bajri","bajus","baked","baken","baker","bakes","bakra","balas","balds","baldy","baled","baler","bales","balks","balky","balls","bally","balms","balmy","baloo","balsa","balti","balun","balus","bambi","banak","banal","banco","bancs","banda","bandh","bands","bandy","baned","banes","bangs","bania","banjo","banks","banns","bants","bantu","banty","banya","bapus","barbe","barbs","barby","barca","barde","bardo","bards","bardy","bared","barer","bares","barfi","barfs","barge","baric","barks","barky","barms","barmy","barns","barny","baron","barps","barra","barre","barro","barry","barye","basal","basan","based","basen","baser","bases","basho","basic","basij","basil","basin","basis","basks","bason","basse","bassi","basso","bassy","basta","baste","basti","basto","basts","batch","bated","bates","bathe","baths","batik","baton","batta","batts","battu","batty","bauds","bauks","baulk","baurs","bavin","bawds","bawdy","bawks","bawls","bawns","bawrs","bawty","bayed","bayer","bayes","bayle","bayou","bayts","bazar","bazoo","beach","beads","beady","beaks","beaky","beals","beams","beamy","beano","beans","beany","beard","beare","bears","beast","beath","beats","beaty","beaus","beaut","beaux","bebop","becap","becke","becks","bedad","bedel","bedes","bedew","bedim","bedye","beech","beedi","beefs","beefy","beeps","beers","beery","beets","befit","befog","begad","began","begar","begat","begem","beget","begin","begot","begum","begun","beige","beigy","being","beins","bekah","belah","belar","belay","belch","belee","belga","belie","belle","bells","belly","belon","below","belts","bemad","bemas","bemix","bemud","bench","bends","bendy","benes","benet","benga","benis","benne","benni","benny","bento","bents","benty","bepat","beray","beres","beret","bergs","berko","berks","berme","berms","berob","berry","berth","beryl","besat","besaw","besee","beses","beset","besit","besom","besot","besti","bests","betas","beted","betel","betes","beths","betid","beton","betta","betty","bevel","bever","bevor","bevue","bevvy","bewet","bewig","bezel","bezes","bezil","bezzy","bhais","bhaji","bhang","bhats","bhels","bhoot","bhuna","bhuts","biach","biali","bialy","bibbs","bibes","bible","biccy","bicep","bices","biddy","bided","bider","bides","bidet","bidis","bidon","bield","biers","biffo","biffs","biffy","bifid","bigae","biggs","biggy","bigha","bight","bigly","bigos","bigot","bijou","biked","biker","bikes","bikie","bilbo","bilby","biled","biles","bilge","bilgy","bilks","bills","billy","bimah","bimas","bimbo","binal","bindi","binds","biner","bines","binge","bingo","bings","bingy","binit","binks","bints","biogs","biome","biont","biota","biped","bipod","birch","birds","birks","birle","birls","biros","birrs","birse","birsy","birth","bises","bisks","bisom","bison","biter","bites","bitos","bitou","bitsy","bitte","bitts","bitty","bivia","bivvy","bizes","bizzo","bizzy","blabs","black","blade","blads","blady","blaer","blaes","blaff","blags","blahs","blain","blame","blams","bland","blank","blare","blart","blase","blash","blast","blate","blats","blatt","blaud","blawn","blaws","blays","blaze","bleak","blear","bleat","blebs","blech","bleed","bleep","blees","blend","blent","blert","bless","blest","blets","bleys","blimp","blimy","blind","bling","blini","blink","blins","bliny","blips","bliss","blist","blite","blits","blitz","blive","bloat","blobs","block","blocs","blogs","bloke","blond","blood","blook","bloom","bloop","blore","blots","blown","blows","blowy","blubs","blude","bluds","bludy","blued","bluer","blues","bluet","bluey","bluff","bluid","blume","blunk","blunt","blurb","blurs","blurt","blush","blype","boabs","boaks","board","boars","boart","boast","boats","bobac","bobak","bobas","bobby","bobol","bobos","bocca","bocce","bocci","boche","bocks","boded","bodes","bodge","bodhi","bodle","boeps","boets","boeuf","boffo","boffs","bogan","bogey","boggy","bogie","bogle","bogue","bogus","bohea","bohos","boils","boing","boink","boite","boked","bokeh","bokes","bokos","bolar","bolas","bolds","boles","bolix","bolls","bolos","bolts","bolus","bomas","bombe","bombo","bombs","bonce","bonds","boned","boner","bones","boney","bongo","bongs","bonie","bonks","bonne","bonny","bonus","bonza","bonze","booai","booay","boobs","booby","boody","booed","boofy","boogy","boohs","books","booky","bools","booms","boomy","boong","boons","boord","boors","boose","boost","booth","boots","booty","booze","boozy","boppy","borak","boral","boras","borax","borde","bords","bored","boree","borel","borer","bores","borgo","boric","borks","borms","borna","borne","boron","borts","borty","bortz","bosie","bosks","bosky","bosom","boson","bossy","bosun","botas","botch","botel","botes","bothy","botte","botts","botty","bouge","bough","bouks","boule","boult","bound","bouns","bourd","bourg","bourn","bouse","bousy","bouts","bovid","bowat","bowed","bowel","bower","bowes","bowet","bowie","bowls","bowne","bowrs","bowse","boxed","boxen","boxer","boxes","boxla","boxty","boyar","boyau","boyed","boyfs","boygs","boyla","boyos","boysy","bozos","braai","brace","brach","brack","bract","brads","braes","brags","braid","brail","brain","brake","braks","braky","brame","brand","brane","brank","brans","brant","brash","brass","brast","brats","brava","brave","bravi","bravo","brawl","brawn","braws","braxy","brays","braza","braze","bread","break","bream","brede","breds","breed","breem","breer","brees","breid","breis","breme","brens","brent","brere","brers","breve","brews","breys","briar","bribe","brick","bride","brief","brier","bries","brigs","briki","briks","brill","brims","brine","bring","brink","brins","briny","brios","brise","brisk","briss","brith","brits","britt","brize","broad","broch","brock","brods","brogh","brogs","broil","broke","brome","bromo","bronc","brond","brood","brook","brool","broom","broos","brose","brosy","broth","brown","brows","brugh","bruin","bruit","brule","brume","brung","brunt","brush","brusk","brust","brute","bruts","buats","buaze","bubal","bubas","bubba","bubbe","bubby","bubus","buchu","bucko","bucks","bucku","budas","buddy","budge","budis","budos","buffa","buffe","buffi","buffo","buffs","buffy","bufos","bufty","buggy","bugle","buhls","buhrs","buiks","build","built","buist","bukes","bulbs","bulge","bulgy","bulks","bulky","bulla","bulls","bully","bulse","bumbo","bumfs","bumph","bumps","bumpy","bunas","bunce","bunch","bunco","bunde","bundh","bunds","bundt","bundu","bundy","bungs","bungy","bunia","bunje","bunjy","bunko","bunks","bunns","bunny","bunts","bunty","bunya","buoys","buppy","buran","buras","burbs","burds","buret","burfi","burgh","burgs","burin","burka","burke","burks","burls","burly","burns","burnt","buroo","burps","burqa","burro","burrs","burry","bursa","burse","burst","busby","bused","buses","bushy","busks","busky","bussu","busti","busts","busty","butch","buteo","butes","butle","butoh","butte","butts","butty","butut","butyl","buxom","buyer","buzzy","bwana","bwazi","byded","bydes","byked","bykes","bylaw","byres","byrls","byssi","bytes","byway","caaed","cabal","cabas","cabby","caber","cabin","cable","cabob","caboc","cabre","cacao","cacas","cache","cacks","cacky","cacti","caddy","cadee","cades","cadet","cadge","cadgy","cadie","cadis","cadre","caeca","caese","cafes","caffs","caged","cager","cages","cagey","cagot","cahow","caids","cains","caird","cairn","cajon","cajun","caked","cakes","cakey","calfs","calid","calif","calix","calks","calla","calls","calms","calmy","calos","calpa","calps","calve","calyx","caman","camas","camel","cameo","cames","camis","camos","campi","campo","camps","campy","camus","canal","candy","caned","caneh","caner","canes","cangs","canid","canna","canns","canny","canoe","canon","canso","canst","canto","cants","canty","capas","caped","caper","capes","capex","caphs","capiz","caple","capon","capos","capot","capri","capul","caput","carap","carat","carbo","carbs","carby","cardi","cards","cardy","cared","carer","cares","caret","carex","cargo","carks","carle","carls","carns","carny","carob","carol","carom","caron","carpi","carps","carrs","carry","carse","carta","carte","carts","carve","carvy","casas","casco","cased","cases","casks","casky","caste","casts","casus","catch","cater","cates","catty","cauda","cauks","cauld","caulk","cauls","caums","caups","cauri","causa","cause","cavas","caved","cavel","caver","caves","cavie","cavil","cawed","cawks","caxon","cease","ceaze","cebid","cecal","cecum","cedar","ceded","ceder","cedes","cedis","ceiba","ceili","ceils","celeb","cella","celli","cello","cells","celom","celts","cense","cento","cents","centu","ceorl","cepes","cerci","cered","ceres","cerge","ceria","ceric","cerne","ceroc","ceros","certs","certy","cesse","cesta","cesti","cetes","cetyl","cezve","chace","chack","chaco","chado","chads","chafe","chaff","chaft","chain","chair","chais","chalk","chals","champ","chams","chana","chang","chank","chant","chaos","chape","chaps","chapt","chara","chard","chare","chark","charm","charr","chars","chart","chary","chase","chasm","chats","chave","chavs","chawk","chaws","chaya","chays","cheap","cheat","check","cheek","cheep","cheer","chefs","cheka","chela","chelp","chemo","chems","chere","chert","chess","chest","cheth","chevy","chews","chewy","chiao","chias","chibs","chica","chich","chick","chico","chics","chide","chief","chiel","chiks","child","chile","chili","chill","chimb","chime","chimo","chimp","china","chine","ching","chino","chins","chips","chirk","chirl","chirm","chiro","chirp","chirr","chirt","chiru","chits","chive","chivs","chivy","chizz","chock","choco","chocs","chode","chogs","choil","choir","choke","choko","choky","chola","choli","cholo","chomp","chons","choof","chook","choom","choon","chops","chord","chore","chose","chota","chott","chout","choux","chowk","chows","chubs","chuck","chufa","chuff","chugs","chump","chums","chunk","churl","churn","churr","chuse","chute","chuts","chyle","chyme","chynd","cibol","cided","cider","cides","ciels","cigar","ciggy","cilia","cills","cimar","cimex","cinch","cinct","cines","cinqs","cions","cippi","circa","circs","cires","cirls","cirri","cisco","cissy","cists","cital","cited","citer","cites","cives","civet","civic","civie","civil","civvy","clach","clack","clade","clads","claes","clags","claim","clame","clamp","clams","clang","clank","clans","claps","clapt","claro","clart","clary","clash","clasp","class","clast","clats","claut","clave","clavi","claws","clays","clean","clear","cleat","cleck","cleek","cleep","clefs","cleft","clegs","cleik","clems","clepe","clept","clerk","cleve","clews","click","clied","clies","cliff","clift","climb","clime","cline","cling","clink","clint","clipe","clips","clipt","clits","cloak","cloam","clock","clods","cloff","clogs","cloke","clomb","clomp","clone","clonk","clons","cloop","cloot","clops","close","clote","cloth","clots","cloud","clour","clous","clout","clove","clown","clows","cloye","cloys","cloze","clubs","cluck","clued","clues","cluey","clump","clung","clunk","clype","cnida","coach","coact","coady","coala","coals","coaly","coapt","coarb","coast","coate","coati","coats","cobbs","cobby","cobia","coble","cobra","cobza","cocas","cocci","cocco","cocks","cocky","cocoa","cocos","codas","codec","coded","coden","coder","codes","codex","codon","coeds","coffs","cogie","cogon","cogue","cohab","cohen","cohoe","cohog","cohos","coifs","coign","coils","coins","coirs","coits","coked","cokes","colas","colby","colds","coled","coles","coley","colic","colin","colls","colly","colog","colon","color","colts","colza","comae","comal","comas","combe","combi","combo","combs","comby","comer","comes","comet","comfy","comic","comix","comma","commo","comms","commy","compo","comps","compt","comte","comus","conch","condo","coned","cones","coney","confs","conga","conge","congo","conia","conic","conin","conks","conky","conne","conns","conte","conto","conus","convo","cooch","cooed","cooee","cooer","cooey","coofs","cooks","cooky","cools","cooly","coomb","cooms","coomy","coops","coopt","coost","coots","cooze","copal","copay","coped","copen","coper","copes","coppy","copra","copse","copsy","coqui","coral","coram","corbe","corby","cords","cored","corer","cores","corey","corgi","coria","corks","corky","corms","corni","corno","corns","cornu","corny","corps","corse","corso","cosec","cosed","coses","coset","cosey","cosie","costa","coste","costs","cotan","coted","cotes","coths","cotta","cotts","couch","coude","cough","could","count","coupe","coups","courb","courd","coure","cours","court","couta","couth","coved","coven","cover","coves","covet","covey","covin","cowal","cowan","cowed","cower","cowks","cowls","cowps","cowry","coxae","coxal","coxed","coxes","coxib","coyau","coyed","coyer","coyly","coypu","cozed","cozen","cozes","cozey","cozie","craal","crabs","crack","craft","crags","craic","craig","crake","crame","cramp","crams","crane","crank","crans","crape","craps","crapy","crare","crash","crass","crate","crave","crawl","craws","crays","craze","crazy","creak","cream","credo","creds","creed","creek","creel","creep","crees","creme","crems","crena","crepe","creps","crept","crepy","cress","crest","crewe","crews","crias","cribs","crick","cried","crier","cries","crime","crimp","crims","crine","crios","cripe","crips","crise","crisp","crith","crits","croak","croci","crock","crocs","croft","crogs","cromb","crome","crone","cronk","crons","crony","crook","crool","croon","crops","crore","cross","crost","croup","crout","crowd","crown","crows","croze","cruck","crude","crudo","cruds","crudy","cruel","crues","cruet","cruft","crumb","crump","crunk","cruor","crura","cruse","crush","crust","crusy","cruve","crwth","cryer","crypt","ctene","cubby","cubeb","cubed","cuber","cubes","cubic","cubit","cuddy","cuffo","cuffs","cuifs","cuing","cuish","cuits","cukes","culch","culet","culex","culls","cully","culms","culpa","culti","cults","culty","cumec","cumin","cundy","cunei","cunit","cunts","cupel","cupid","cuppa","cuppy","curat","curbs","curch","curds","curdy","cured","curer","cures","curet","curfs","curia","curie","curio","curli","curls","curly","curns","curny","currs","curry","curse","cursi","curst","curve","curvy","cusec","cushy","cusks","cusps","cuspy","cusso","cusum","cutch","cuter","cutes","cutey","cutie","cutin","cutis","cutto","cutty","cutup","cuvee","cuzes","cwtch","cyano","cyans","cyber","cycad","cycas","cycle","cyclo","cyder","cylix","cymae","cymar","cymas","cymes","cymol","cynic","cysts","cytes","cyton","czars","daals","dabba","daces","dacha","dacks","dadah","dadas","daddy","dados","daffs","daffy","dagga","daggy","dagos","dahls","daiko","daily","daine","daint","dairy","daisy","daker","daled","dales","dalis","dalle","dally","dalts","daman","damar","dames","damme","damns","damps","dampy","dance","dancy","dandy","dangs","danio","danks","danny","dants","daraf","darbs","darcy","dared","darer","dares","darga","dargs","daric","daris","darks","darns","darre","darts","darzi","dashi","dashy","datal","dated","dater","dates","datos","datto","datum","daube","daubs","dauby","dauds","dault","daunt","daurs","dauts","daven","davit","dawah","dawds","dawed","dawen","dawks","dawns","dawts","dayan","daych","daynt","dazed","dazer","dazes","deads","deair","deals","dealt","deans","deare","dearn","dears","deary","deash","death","deave","deaws","deawy","debag","debar","debby","debel","debes","debit","debts","debud","debug","debur","debus","debut","debye","decad","decaf","decal","decan","decay","decko","decks","decor","decos","decoy","decry","dedal","deeds","deedy","deely","deems","deens","deeps","deere","deers","deets","deeve","deevs","defat","defer","deffo","defis","defog","degas","degum","degus","deice","deids","deify","deign","deils","deism","deist","deity","deked","dekes","dekko","delay","deled","deles","delfs","delft","delis","dells","delly","delos","delph","delta","delts","delve","deman","demes","demic","demit","demob","demoi","demon","demos","dempt","demur","denar","denay","dench","denes","denet","denim","denis","dense","dents","deoxy","depot","depth","derat","deray","derby","dered","deres","derig","derma","derms","derns","derny","deros","derro","derry","derth","dervs","desex","deshi","desis","desks","desse","deter","detox","deuce","devas","devel","devil","devis","devon","devos","devot","dewan","dewar","dewax","dewed","dexes","dexie","dhaba","dhaks","dhals","dhikr","dhobi","dhole","dholl","dhols","dhoti","dhows","dhuti","diact","dials","diane","diary","diazo","dibbs","diced","dicer","dices","dicey","dicht","dicks","dicky","dicot","dicta","dicts","dicty","diddy","didie","didos","didst","diebs","diels","diene","diets","diffs","dight","digit","dikas","diked","diker","dikes","dikey","dildo","dilli","dills","dilly","dimbo","dimer","dimes","dimly","dimps","dinar","dined","diner","dines","dinge","dingo","dings","dingy","dinic","dinks","dinky","dinna","dinos","dints","diode","diols","diota","dippy","dipso","diram","direr","dirge","dirke","dirks","dirls","dirts","dirty","disas","disci","disco","discs","dishy","disks","disme","dital","ditas","ditch","dited","dites","ditsy","ditto","ditts","ditty","ditzy","divan","divas","dived","diver","dives","divis","divna","divos","divot","divvy","diwan","dixie","dixit","diyas","dizen","dizzy","djinn","djins","doabs","doats","dobby","dobes","dobie","dobla","dobra","dobro","docht","docks","docos","docus","doddy","dodge","dodgy","dodos","doeks","doers","doest","doeth","doffs","dogan","doges","dogey","doggo","doggy","dogie","dogma","dohyo","doilt","doily","doing","doits","dojos","dolce","dolci","doled","doles","dolia","dolls","dolly","dolma","dolor","dolos","dolts","domal","domed","domes","domic","donah","donas","donee","doner","donga","dongs","donko","donna","donne","donny","donor","donsy","donut","doobs","dooce","doody","dooks","doole","dools","dooly","dooms","doomy","doona","doorn","doors","doozy","dopas","doped","doper","dopes","dopey","dorad","dorba","dorbs","doree","dores","doric","doris","dorks","dorky","dorms","dormy","dorps","dorrs","dorsa","dorse","dorts","dorty","dosai","dosas","dosed","doseh","doser","doses","dosha","dotal","doted","doter","dotes","dotty","douar","doubt","douce","doucs","dough","douks","doula","douma","doums","doups","doura","douse","douts","doved","doven","dover","doves","dovie","dowar","dowds","dowdy","dowed","dowel","dower","dowie","dowle","dowls","dowly","downa","downs","downy","dowps","dowry","dowse","dowts","doxed","doxes","doxie","doyen","doyly","dozed","dozen","dozer","dozes","drabs","drack","draco","draff","draft","drags","drail","drain","drake","drama","drams","drank","drant","drape","draps","drats","drave","drawl","drawn","draws","drays","dread","dream","drear","dreck","dreed","dreer","drees","dregs","dreks","drent","drere","dress","drest","dreys","dribs","drice","dried","drier","dries","drift","drill","drily","drink","drips","dript","drive","droid","droil","droit","droke","drole","droll","drome","drone","drony","droob","droog","drook","drool","droop","drops","dropt","dross","drouk","drove","drown","drows","drubs","drugs","druid","drums","drunk","drupe","druse","drusy","druxy","dryad","dryas","dryer","dryly","dsobo","dsomo","duads","duals","duans","duars","dubbo","ducal","ducat","duces","duchy","ducks","ducky","ducts","duddy","duded","dudes","duels","duets","duett","duffs","dufus","duing","duits","dukas","duked","dukes","dukka","dulce","dules","dulia","dulls","dully","dulse","dumas","dumbo","dumbs","dumka","dumky","dummy","dumps","dumpy","dunam","dunce","dunch","dunes","dungs","dungy","dunks","dunno","dunny","dunsh","dunts","duomi","duomo","duped","duper","dupes","duple","duply","duppy","dural","duras","dured","dures","durgy","durns","duroc","duros","duroy","durra","durrs","durry","durst","durum","durzi","dusks","dusky","dusts","dusty","dutch","duvet","duxes","dwaal","dwale","dwalm","dwams","dwang","dwarf","dwaum","dweeb","dwell","dwelt","dwile","dwine","dyads","dyers","dying","dykon","dynel","dynes","dzhos","eager","eagle","eagre","ealed","eales","eaned","eards","eared","earls","early","earns","earnt","earst","earth","eased","easel","easer","eases","easle","easts","eaten","eater","eathe","eaved","eaves","ebbed","ebbet","ebons","ebony","ebook","ecads","eched","eches","echos","eclat","ecrus","edema","edged","edger","edges","edict","edify","edile","edits","educe","educt","eejit","eensy","eerie","eeven","eevns","effed","egads","egers","egest","eggar","egged","egger","egmas","egret","ehing","eider","eidos","eight","eigne","eiked","eikon","eilds","eisel","eject","ejido","eking","ekkas","elain","eland","elans","elate","elbow","elchi","elder","eldin","elect","elegy","elemi","elfed","elfin","eliad","elide","elint","elite","elmen","eloge","elogy","eloin","elope","elops","elpee","elsin","elude","elute","elvan","elven","elver","elves","emacs","email","embar","embay","embed","ember","embog","embow","embox","embus","emcee","emeer","emend","emerg","emery","emeus","emics","emirs","emits","emmas","emmer","emmet","emmew","emmys","emoji","emong","emote","emove","empts","empty","emule","emure","emyde","emyds","enact","enarm","enate","ended","ender","endew","endow","endue","enema","enemy","enews","enfix","eniac","enjoy","enlit","enmew","ennog","ennui","enoki","enols","enorm","enows","enrol","ensew","ensky","ensue","enter","entia","entry","enure","enurn","envoi","envoy","enzym","eorls","eosin","epact","epees","ephah","ephas","ephod","ephor","epics","epoch","epode","epopt","epoxy","epris","equal","eques","equid","equip","erase","erbia","erect","erevs","ergon","ergos","ergot","erhus","erica","erick","erics","ering","erned","ernes","erode","erose","erred","error","erses","eruct","erugo","erupt","eruvs","erven","ervil","escar","escot","esile","eskar","esker","esnes","essay","esses","ester","estoc","estop","estro","etage","etape","etats","etens","ethal","ether","ethic","ethne","ethos","ethyl","etics","etnas","ettin","ettle","etude","etuis","etwee","etyma","eughs","euked","eupad","euros","eusol","evade","evens","event","evert","every","evets","evhoe","evict","evils","evite","evohe","evoke","ewers","ewest","ewhow","ewked","exact","exalt","exams","excel","exeat","execs","exeem","exeme","exert","exfil","exies","exile","exine","exing","exist","exits","exode","exome","exons","expat","expel","expos","extol","extra","exude","exuls","exult","exurb","eyass","eyers","eying","eyots","eyras","eyres","eyrie","eyrir","ezine","fabby","fable","faced","facer","faces","facet","facia","facta","facts","faddy","faded","fader","fades","fadge","fados","faena","faery","faffs","faffy","fagin","faiks","fails","faine","fains","faint","fairs","fairy","faith","faked","faker","fakes","fakey","fakie","fakir","falaj","falls","false","famed","fames","fanal","fancy","fands","fanes","fanga","fango","fangs","fanks","fanny","fanon","fanos","fanum","faqir","farad","farce","farci","farcy","fards","fared","farer","fares","farle","farls","farms","faros","farro","farse","farts","fasci","fasti","fasts","fatal","fated","fates","fatly","fatso","fatty","fatwa","faugh","fauld","fault","fauna","fauns","faurd","fauts","fauve","favas","favel","faver","faves","favor","favus","fawns","fawny","faxed","faxes","fayed","fayer","fayne","fayre","fazed","fazes","feals","feare","fears","feart","fease","feast","feats","feaze","fecal","feces","fecht","fecit","fecks","fedex","feebs","feeds","feels","feens","feers","feese","feeze","fehme","feign","feint","feist","felch","felid","fella","fells","felly","felon","felts","felty","femal","femes","femme","femmy","femur","fence","fends","fendy","fenis","fenks","fenny","fents","feods","feoff","feral","ferer","feres","feria","ferly","fermi","ferms","ferns","ferny","ferry","fesse","festa","fests","festy","fetal","fetas","fetch","feted","fetes","fetid","fetor","fetta","fetts","fetus","fetwa","feuar","feuds","feued","fever","fewer","feyed","feyer","feyly","fezes","fezzy","fiars","fiats","fiber","fibro","fices","fiche","fichu","ficin","ficos","ficus","fides","fidge","fidos","fiefs","field","fiend","fient","fiere","fiers","fiery","fiest","fifed","fifer","fifes","fifis","fifth","fifty","figgy","fight","figos","fiked","fikes","filar","filch","filed","filer","files","filet","filii","filks","fille","fillo","fills","filly","filmi","films","filmy","filos","filth","filum","final","finca","finch","finds","fined","finer","fines","finis","finks","finny","finos","fiord","fiqhs","fique","fired","firer","fires","firie","firks","firms","firns","firry","first","firth","fiscs","fishy","fisks","fists","fisty","fitch","fitly","fitna","fitte","fitts","fiver","fives","fixed","fixer","fixes","fixit","fizzy","fjeld","fjord","flabs","flack","flaff","flags","flail","flair","flake","flaks","flaky","flame","flamm","flams","flamy","flane","flank","flans","flaps","flare","flary","flash","flask","flats","flava","flawn","flaws","flawy","flaxy","flays","fleam","fleas","fleck","fleek","fleer","flees","fleet","flegs","fleme","flesh","fleur","flews","flexi","flexo","fleys","flick","flics","flied","flier","flies","flimp","flims","fling","flint","flips","flirs","flirt","flisk","flite","flits","flitt","float","flobs","flock","flocs","floes","flogs","flong","flood","floor","flops","flora","flors","flory","flosh","floss","flota","flote","flour","flout","flown","flows","flubs","flued","flues","fluey","fluff","fluid","fluke","fluky","flume","flump","flung","flunk","fluor","flurr","flush","flute","fluty","fluyt","flyby","flyer","flype","flyte","foals","foams","foamy","focal","focus","foehn","fogey","foggy","fogie","fogle","fogou","fohns","foids","foils","foins","foist","folds","foley","folia","folic","folie","folio","folks","folky","folly","fomes","fonda","fonds","fondu","fones","fonly","fonts","foods","foody","fools","foots","footy","foram","foray","forbs","forby","force","fordo","fords","forel","fores","forex","forge","forgo","forks","forky","forme","forms","forte","forth","forts","forty","forum","forza","forze","fossa","fosse","fouat","fouds","fouer","fouet","foule","fouls","found","fount","fours","fouth","fovea","fowls","fowth","foxed","foxes","foxie","foyer","foyle","foyne","frabs","frack","fract","frags","frail","fraim","frame","franc","frank","frape","fraps","frass","frate","frati","frats","fraud","fraus","frays","freak","freed","freer","frees","freet","freit","fremd","frena","freon","frere","fresh","frets","friar","fribs","fried","frier","fries","frigs","frill","frise","frisk","frist","frith","frits","fritt","fritz","frize","frizz","frock","froes","frogs","frond","frons","front","frore","frorn","frory","frosh","frost","froth","frown","frows","frowy","froze","frugs","fruit","frump","frush","frust","fryer","fubar","fubby","fubsy","fucks","fucus","fuddy","fudge","fudgy","fuels","fuero","fuffs","fuffy","fugal","fuggy","fugie","fugio","fugle","fugly","fugue","fugus","fujis","fulls","fully","fumed","fumer","fumes","fumet","fundi","funds","fundy","fungi","fungo","fungs","funks","funky","funny","fural","furan","furca","furls","furol","furor","furrs","furry","furth","furze","furzy","fused","fusee","fusel","fuses","fusil","fusks","fussy","fusts","fusty","futon","fuzed","fuzee","fuzes","fuzil","fuzzy","fyces","fyked","fykes","fyles","fyrds","fytte","gabba","gabby","gable","gaddi","gades","gadge","gadid","gadis","gadje","gadjo","gadso","gaffe","gaffs","gaged","gager","gages","gaids","gaily","gains","gairs","gaita","gaits","gaitt","gajos","galah","galas","galax","galea","galed","gales","galls","gally","galop","galut","galvo","gamas","gamay","gamba","gambe","gambo","gambs","gamed","gamer","games","gamey","gamic","gamin","gamma","gamme","gammy","gamps","gamut","ganch","gandy","ganef","ganev","gangs","ganja","ganof","gants","gaols","gaped","gaper","gapes","gapos","gappy","garbe","garbo","garbs","garda","gares","garis","garms","garni","garre","garth","garum","gases","gasps","gaspy","gassy","gasts","gatch","gated","gater","gates","gaths","gator","gauch","gaucy","gauds","gaudy","gauge","gauje","gault","gaums","gaumy","gaunt","gaups","gaurs","gauss","gauze","gauzy","gavel","gavot","gawcy","gawds","gawks","gawky","gawps","gawsy","gayal","gayer","gayly","gazal","gazar","gazed","gazer","gazes","gazon","gazoo","geals","geans","geare","gears","geats","gebur","gecko","gecks","geeks","geeky","geeps","geese","geest","geist","geits","gelds","gelee","gelid","gelly","gelts","gemel","gemma","gemmy","gemot","genal","genas","genes","genet","genic","genie","genii","genip","genny","genoa","genom","genre","genro","gents","genty","genua","genus","geode","geoid","gerah","gerbe","geres","gerle","germs","germy","gerne","gesse","gesso","geste","gests","getas","getup","geums","geyan","geyer","ghast","ghats","ghaut","ghazi","ghees","ghest","ghost","ghoul","ghyll","giant","gibed","gibel","giber","gibes","gibli","gibus","giddy","gifts","gigas","gighe","gigot","gigue","gilas","gilds","gilet","gills","gilly","gilpy","gilts","gimel","gimme","gimps","gimpy","ginch","ginge","gings","ginks","ginny","ginzo","gipon","gippo","gippy","gipsy","girds","girls","girly","girns","giron","giros","girrs","girsh","girth","girts","gismo","gisms","gists","gitch","gites","giust","gived","given","giver","gives","gizmo","glace","glade","glads","glady","glaik","glair","glams","gland","glans","glare","glary","glass","glaum","glaur","glaze","glazy","gleam","glean","gleba","glebe","gleby","glede","gleds","gleed","gleek","glees","gleet","gleis","glens","glent","gleys","glial","glias","glibs","glide","gliff","glift","glike","glime","glims","glint","glisk","glits","glitz","gloam","gloat","globe","globi","globs","globy","glode","glogg","gloms","gloom","gloop","glops","glory","gloss","glost","glout","glove","glows","gloze","glued","gluer","glues","gluey","glugs","glume","glums","gluon","glute","gluts","glyph","gnarl","gnarr","gnars","gnash","gnats","gnawn","gnaws","gnome","gnows","goads","goafs","goals","goary","goats","goaty","goban","gobar","gobbi","gobbo","gobby","gobis","gobos","godet","godly","godso","goels","goers","goest","goeth","goety","gofer","goffs","gogga","gogos","goier","going","gojis","golds","goldy","golem","goles","golfs","golly","golpe","golps","gombo","gomer","gompa","gonad","gonch","gonef","goner","gongs","gonia","gonif","gonks","gonna","gonof","gonys","gonzo","gooby","goods","goody","gooey","goofs","goofy","googs","gooky","goold","gools","gooly","goons","goony","goops","goopy","goors","goory","goose","goosy","gopak","gopik","goral","goras","gored","gores","gorge","goris","gorms","gormy","gorps","gorse","gorsy","gosht","gosse","gotch","goths","gothy","gotta","gouch","gouge","gouks","goura","gourd","gouts","gouty","gowan","gowds","gowfs","gowks","gowls","gowns","goxes","goyim","goyle","graal","grabs","grace","grade","grads","graff","graft","grail","grain","graip","grama","grame","gramp","grams","grana","grand","grans","grant","grape","graph","grapy","grasp","grass","grate","grave","gravs","gravy","grays","graze","great","grebe","grebo","grece","greed","greek","green","grees","greet","grege","grego","grein","grens","grese","greve","grews","greys","grice","gride","grids","grief","griff","grift","grigs","grike","grill","grime","grimy","grind","grins","griot","gripe","grips","gript","gripy","grise","grist","grisy","grith","grits","grize","groan","groat","grody","grogs","groin","groks","groma","grone","groof","groom","grope","gross","grosz","grots","grouf","group","grout","grove","grovy","growl","grown","grows","grrls","grrrl","grubs","grued","gruel","grues","grufe","gruff","grume","grump","grund","grunt","gryce","gryde","gryke","grype","grypt","guaco","guana","guano","guans","guard","guars","guava","gucks","gucky","gudes","guess","guest","guffs","gugas","guide","guids","guild","guile","guilt","guimp","guiro","guise","gulag","gular","gulas","gulch","gules","gulet","gulfs","gulfy","gulls","gully","gulph","gulps","gulpy","gumbo","gumma","gummi","gummy","gumps","gundy","gunge","gungy","gunks","gunky","gunny","guppy","guqin","gurdy","gurge","gurls","gurly","gurns","gurry","gursh","gurus","gushy","gusla","gusle","gusli","gussy","gusto","gusts","gusty","gutsy","gutta","gutty","guyed","guyle","guyot","guyse","gwine","gyals","gyans","gybed","gybes","gyeld","gymps","gynae","gynie","gynny","gynos","gyoza","gypos","gyppo","gyppy","gypsy","gyral","gyred","gyres","gyron","gyros","gyrus","gytes","gyved","gyves","haafs","haars","habit","hable","habus","hacek","hacks","hadal","haded","hades","hadji","hadst","haems","haets","haffs","hafiz","hafts","haggs","hahas","haick","haika","haiks","haiku","hails","haily","hains","haint","hairs","hairy","haith","hajes","hajis","hajji","hakam","hakas","hakea","hakes","hakim","hakus","halal","haled","haler","hales","halfa","halfs","halid","hallo","halls","halma","halms","halon","halos","halse","halts","halva","halve","halwa","hamal","hamba","hamed","hames","hammy","hamza","hanap","hance","hanch","hands","handy","hangi","hangs","hanks","hanky","hansa","hanse","hants","haole","haoma","hapax","haply","happi","happy","hapus","haram","hards","hardy","hared","harem","hares","harim","harks","harls","harms","harns","haros","harps","harpy","harry","harsh","harts","hashy","hasks","hasps","hasta","haste","hasty","hatch","hated","hater","hates","hatha","hauds","haufs","haugh","hauld","haulm","hauls","hault","hauns","haunt","hause","haute","haven","haver","haves","havoc","hawed","hawks","hawms","hawse","hayed","hayer","hayey","hayle","hazan","hazed","hazel","hazer","hazes","heads","heady","heald","heals","heame","heaps","heapy","heard","heare","hears","heart","heast","heath","heats","heave","heavy","heben","hebes","hecht","hecks","heder","hedge","hedgy","heeds","heedy","heels","heeze","hefte","hefts","hefty","heids","heigh","heils","heirs","heist","hejab","hejra","heled","heles","helio","helix","hello","hells","helms","helos","helot","helps","helve","hemal","hemes","hemic","hemin","hemps","hempy","hence","hench","hends","henge","henna","henny","henry","hents","hepar","herbs","herby","herds","heres","herls","herma","herms","herns","heron","heros","herry","herse","hertz","herye","hesps","hests","hetes","heths","heuch","heugh","hevea","hewed","hewer","hewgh","hexad","hexed","hexer","hexes","hexyl","heyed","hiant","hicks","hided","hider","hides","hiems","highs","hight","hijab","hijra","hiked","hiker","hikes","hikoi","hilar","hilch","hillo","hills","hilly","hilts","hilum","hilus","himbo","hinau","hinds","hinge","hings","hinky","hinny","hints","hiois","hiply","hippo","hippy","hired","hiree","hirer","hires","hissy","hists","hitch","hithe","hived","hiver","hives","hizen","hoaed","hoagy","hoard","hoars","hoary","hoast","hobby","hobos","hocks","hocus","hodad","hodja","hoers","hogan","hogen","hoggs","hoghs","hohed","hoick","hoied","hoiks","hoing","hoise","hoist","hokas","hoked","hokes","hokey","hokis","hokku","hokum","holds","holed","holes","holey","holks","holla","hollo","holly","holme","holms","holon","holos","holts","homas","homed","homer","homes","homey","homie","homme","honan","honda","honds","honed","honer","hones","honey","hongi","hongs","honks","honky","honor","hooch","hoods","hoody","hooey","hoofs","hooka","hooks","hooky","hooly","hoons","hoops","hoord","hoors","hoosh","hoots","hooty","hoove","hopak","hoped","hoper","hopes","hoppy","horah","horal","horas","horde","horis","horks","horme","horns","horny","horse","horst","horsy","hosed","hosel","hosen","hoser","hoses","hosey","hosta","hosts","hotch","hotel","hoten","hotly","hotty","houff","houfs","hough","hound","houri","hours","house","houts","hovea","hoved","hovel","hoven","hover","hoves","howbe","howdy","howes","howff","howfs","howks","howls","howre","howso","hoxed","hoxes","hoyas","hoyed","hoyle","hubby","hucks","hudna","hudud","huers","huffs","huffy","huger","huggy","huhus","huias","hulas","hules","hulks","hulky","hullo","hulls","hully","human","humas","humfs","humic","humid","humor","humph","humps","humpy","humus","hunch","hunks","hunky","hunts","hurds","hurls","hurly","hurra","hurry","hurst","hurts","hushy","husks","husky","husos","hussy","hutch","hutia","huzza","huzzy","hwyls","hydra","hydro","hyena","hyens","hygge","hying","hykes","hylas","hyleg","hyles","hylic","hymen","hymns","hynde","hyoid","hyped","hyper","hypes","hypha","hyphy","hypos","hyrax","hyson","hythe","iambi","iambs","ibrik","icers","iched","iches","ichor","icier","icily","icing","icker","ickle","icons","ictal","ictic","ictus","idant","ideal","ideas","idees","ident","idiom","idiot","idled","idler","idles","idola","idols","idyll","idyls","iftar","igapo","igged","igloo","iglus","ihram","ikans","ikats","ikons","ileac","ileal","ileum","ileus","iliac","iliad","ilial","ilium","iller","illth","image","imago","imams","imari","imaum","imbar","imbed","imbue","imide","imido","imids","imine","imino","immew","immit","immix","imped","impel","impis","imply","impot","impro","imshi","imshy","inane","inapt","inarm","inbox","inbye","incel","incle","incog","incur","incus","incut","indew","index","india","indie","indol","indow","indri","indue","inept","inerm","inert","infer","infix","infos","infra","ingan","ingle","ingot","inion","inked","inker","inkle","inlay","inlet","inned","inner","innit","inorb","input","inrun","inset","inspo","intel","inter","intil","intis","intra","intro","inula","inure","inurn","inust","invar","inwit","iodic","iodid","iodin","ionic","iotas","ippon","irade","irate","irids","iring","irked","iroko","irone","irons","irony","isbas","ishes","isled","isles","islet","isnae","issei","issue","istle","itchy","items","ither","ivied","ivies","ivory","ixias","ixnay","ixora","ixtle","izard","izars","izzat","jaaps","jabot","jacal","jacks","jacky","jaded","jades","jafas","jaffa","jagas","jager","jaggs","jaggy","jagir","jagra","jails","jaker","jakes","jakey","jalap","jalop","jambe","jambo","jambs","jambu","james","jammy","jamon","janes","janns","janny","janty","japan","japed","japer","japes","jarks","jarls","jarps","jarta","jarul","jasey","jaspe","jasps","jatos","jauks","jaunt","jaups","javas","javel","jawan","jawed","jaxie","jazzy","jeans","jeats","jebel","jedis","jeels","jeely","jeeps","jeers","jeeze","jefes","jeffs","jehad","jehus","jelab","jello","jells","jelly","jembe","jemmy","jenny","jeons","jerid","jerks","jerky","jerry","jesse","jests","jesus","jetes","jeton","jetty","jeune","jewed","jewel","jewie","jhala","jiaos","jibba","jibbs","jibed","jiber","jibes","jiffs","jiffy","jiggy","jigot","jihad","jills","jilts","jimmy","jimpy","jingo","jinks","jinne","jinni","jinns","jirds","jirga","jirre","jisms","jived","jiver","jives","jivey","jnana","jobed","jobes","jocko","jocks","jocky","jocos","jodel","joeys","johns","joins","joint","joist","joked","joker","jokes","jokey","jokol","joled","joles","jolls","jolly","jolts","jolty","jomon","jomos","jones","jongs","jonty","jooks","joram","jorum","jotas","jotty","jotun","joual","jougs","jouks","joule","jours","joust","jowar","jowed","jowls","jowly","joyed","jubas","jubes","jucos","judas","judge","judgy","judos","jugal","jugum","juice","juicy","jujus","juked","jukes","jukus","julep","jumar","jumbo","jumby","jumps","jumpy","junco","junks","junky","junta","junto","jupes","jupon","jural","jurat","jurel","jures","juror","justs","jutes","jutty","juves","juvie","kaama","kabab","kabar","kabob","kacha","kacks","kadai","kades","kadis","kafir","kagos","kagus","kahal","kaiak","kaids","kaies","kaifs","kaika","kaiks","kails","kaims","kaing","kains","kakas","kakis","kalam","kales","kalif","kalis","kalpa","kamas","kames","kamik","kamis","kamme","kanae","kanas","kandy","kaneh","kanes","kanga","kangs","kanji","kants","kanzu","kaons","kapas","kaphs","kapok","kapow","kappa","kapus","kaput","karas","karat","karks","karma","karns","karoo","karos","karri","karst","karsy","karts","karzy","kasha","kasme","katal","katas","katis","katti","kaugh","kauri","kauru","kaury","kaval","kavas","kawas","kawau","kawed","kayak","kayle","kayos","kazis","kazoo","kbars","kebab","kebar","kebob","kecks","kedge","kedgy","keech","keefs","keeks","keels","keema","keeno","keens","keeps","keets","keeve","kefir","kehua","keirs","kelep","kelim","kells","kelly","kelps","kelpy","kelts","kelty","kembo","kembs","kemps","kempt","kempy","kenaf","kench","kendo","kenos","kente","kents","kepis","kerbs","kerel","kerfs","kerky","kerma","kerne","kerns","keros","kerry","kerve","kesar","kests","ketas","ketch","ketes","ketol","kevel","kevil","kexes","keyed","keyer","khadi","khafs","khaki","khans","khaph","khats","khaya","khazi","kheda","kheth","khets","khoja","khors","khoum","khuds","kiaat","kiack","kiang","kibbe","kibbi","kibei","kibes","kibla","kicks","kicky","kiddo","kiddy","kidel","kidge","kiefs","kiers","kieve","kievs","kight","kikoi","kiley","kilim","kills","kilns","kilos","kilps","kilts","kilty","kimbo","kinas","kinda","kinds","kindy","kines","kings","kinin","kinks","kinky","kinos","kiore","kiosk","kipes","kippa","kipps","kirby","kirks","kirns","kirri","kisan","kissy","kists","kited","kiter","kites","kithe","kiths","kitty","kitul","kivas","kiwis","klang","klaps","klett","klick","klieg","kliks","klong","kloof","kluge","klutz","knack","knags","knaps","knarl","knars","knaur","knave","knawe","knead","kneed","kneel","knees","knell","knelt","knife","knish","knits","knive","knobs","knock","knoll","knops","knosp","knots","knout","knowe","known","knows","knubs","knurl","knurr","knurs","knuts","koala","koans","koaps","koban","kobos","koels","koffs","kofta","kogal","kohas","kohen","kohls","koine","kojis","kokam","kokas","koker","kokra","kokum","kolas","kolos","kombu","konbu","kondo","konks","kooks","kooky","koori","kopek","kophs","kopje","koppa","korai","koras","korat","kores","korma","koros","korun","korus","koses","kotch","kotos","kotow","koura","kraal","krabs","kraft","krais","krait","krang","krans","kranz","kraut","krays","kreep","kreng","krewe","krill","krona","krone","kroon","krubi","krunk","ksars","kubie","kudos","kudus","kudzu","kufis","kugel","kuias","kukri","kukus","kulak","kulan","kulas","kulfi","kumis","kumys","kuris","kurre","kurta","kurus","kusso","kutas","kutch","kutis","kutus","kuzus","kvass","kvell","kwela","kyack","kyaks","kyang","kyars","kyats","kybos","kydst","kyles","kylie","kylin","kylix","kyloe","kynde","kynds","kypes","kyrie","kytes","kythe","laari","labda","label","labia","labis","labor","labra","laced","lacer","laces","lacet","lacey","lacks","laddy","laded","laden","lader","lades","ladle","laers","laevo","lagan","lager","lahal","lahar","laich","laics","laids","laigh","laika","laiks","laird","lairs","lairy","laith","laity","laked","laker","lakes","lakhs","lakin","laksa","laldy","lalls","lamas","lambs","lamby","lamed","lamer","lames","lamia","lammy","lamps","lanai","lanas","lance","lanch","lande","lands","lanes","lanks","lanky","lants","lapel","lapin","lapis","lapje","lapse","larch","lards","lardy","laree","lares","large","largo","laris","larks","larky","larns","larnt","larum","larva","lased","laser","lases","lassi","lasso","lassu","lassy","lasts","latah","latch","lated","laten","later","latex","lathe","lathi","laths","lathy","latke","latte","latus","lauan","lauch","lauds","laufs","laugh","laund","laura","laval","lavas","laved","laver","laves","lavra","lavvy","lawed","lawer","lawin","lawks","lawns","lawny","laxed","laxer","laxes","laxly","layed","layer","layin","layup","lazar","lazed","lazes","lazos","lazzi","lazzo","leach","leads","leady","leafs","leafy","leaks","leaky","leams","leans","leant","leany","leaps","leapt","leare","learn","lears","leary","lease","leash","least","leats","leave","leavy","leaze","leben","leccy","ledes","ledge","ledgy","ledum","leear","leech","leeks","leeps","leers","leery","leese","leets","leeze","lefte","lefts","lefty","legal","leger","leges","legge","leggo","leggy","legit","lehrs","lehua","leirs","leish","leman","lemed","lemel","lemes","lemma","lemme","lemon","lemur","lends","lenes","lengs","lenis","lenos","lense","lenti","lento","leone","leper","lepid","lepra","lepta","lered","leres","lerps","leses","lests","letch","lethe","letup","leuch","leuco","leuds","leugh","levas","levee","level","lever","leves","levin","levis","lewis","lexes","lexis","lezes","lezza","lezzy","liana","liane","liang","liard","liars","liart","libel","liber","libra","libri","lichi","licht","licit","licks","lidar","lidos","liefs","liege","liens","liers","lieus","lieve","lifer","lifes","lifts","ligan","liger","ligge","light","ligne","liked","liken","liker","likes","likin","lilac","lills","lilos","lilts","liman","limas","limax","limba","limbi","limbo","limbs","limby","limed","limen","limes","limey","limit","limma","limns","limos","limpa","limps","linac","linch","linds","lindy","lined","linen","liner","lines","liney","linga","lingo","lings","lingy","linin","links","linky","linns","linny","linos","lints","linty","linum","linux","lions","lipas","lipes","lipid","lipin","lipos","lippy","liras","lirks","lirot","lisks","lisle","lisps","lists","litai","litas","lited","liter","lites","lithe","litho","liths","litre","lived","liven","liver","lives","livid","livor","livre","llama","llano","loach","loads","loafs","loams","loamy","loans","loast","loath","loave","lobar","lobby","lobed","lobes","lobos","lobus","local","loche","lochs","locie","locis","locks","locos","locum","locus","loden","lodes","lodge","loess","lofts","lofty","logan","loges","loggy","logia","logic","logie","login","logoi","logon","logos","lohan","loids","loins","loipe","loirs","lokes","lolls","lolly","lolog","lomas","lomed","lomes","loner","longa","longe","longs","looby","looed","looey","loofa","loofs","looie","looks","looky","looms","loons","loony","loops","loopy","loord","loose","loots","loped","loper","lopes","loppy","loral","loran","lords","lordy","lorel","lores","loric","loris","lorry","losed","losel","losen","loser","loses","lossy","lotah","lotas","lotes","lotic","lotos","lotsa","lotta","lotte","lotto","lotus","loued","lough","louie","louis","louma","lound","louns","loupe","loups","loure","lours","loury","louse","lousy","louts","lovat","loved","lover","loves","lovey","lovie","lowan","lowed","lower","lowes","lowly","lownd","lowne","lowns","lowps","lowry","lowse","lowts","loxed","loxes","loyal","lozen","luach","luaus","lubed","lubes","lubra","luces","lucid","lucks","lucky","lucre","ludes","ludic","ludos","luffa","luffs","luged","luger","luges","lulls","lulus","lumas","lumbi","lumen","lumme","lummy","lumps","lumpy","lunar","lunas","lunch","lunes","lunet","lunge","lungi","lungs","lunks","lunts","lupin","lupus","lurch","lured","lurer","lures","lurex","lurgi","lurgy","lurid","lurks","lurry","lurve","luser","lushy","lusks","lusts","lusty","lusus","lutea","luted","luter","lutes","luvvy","luxed","luxer","luxes","lweis","lyams","lyard","lyart","lyase","lycea","lycee","lycra","lying","lymes","lymph","lynes","lyres","lyric","lysed","lyses","lysin","lysis","lysol","lyssa","lyted","lytes","lythe","lytic","lytta","maaed","maare","maars","mabes","macas","macaw","maced","macer","maces","mache","machi","macho","machs","macks","macle","macon","macro","madam","madge","madid","madly","madre","maerl","mafia","mafic","mages","maggs","magic","magma","magot","magus","mahoe","mahua","mahwa","maids","maiko","maiks","maile","maill","mails","maims","mains","maire","mairs","maise","maist","maize","major","makar","maker","makes","makis","makos","malam","malar","malas","malax","males","malic","malik","malis","malls","malms","malmy","malts","malty","malus","malva","malwa","mamas","mamba","mambo","mamee","mamey","mamie","mamma","mammy","manas","manat","mandi","maneb","maned","maneh","manes","manet","manga","mange","mango","mangs","mangy","mania","manic","manis","manky","manly","manna","manor","manos","manse","manta","manto","manty","manul","manus","mapau","maple","maqui","marae","marah","maras","march","marcs","mardy","mares","marge","margs","maria","marid","marka","marks","marle","marls","marly","marms","maron","maror","marra","marri","marry","marse","marsh","marts","marvy","masas","mased","maser","mases","mashy","masks","mason","massa","masse","massy","masts","masty","masus","matai","match","mated","mater","mates","matey","maths","matin","matlo","matte","matts","matza","matzo","mauby","mauds","mauls","maund","mauri","mausy","mauts","mauve","mauzy","maven","mavie","mavin","mavis","mawed","mawks","mawky","mawns","mawrs","maxed","maxes","maxim","maxis","mayan","mayas","maybe","mayed","mayor","mayos","mayst","mazed","mazer","mazes","mazey","mazut","mbira","meads","meals","mealy","meane","means","meant","meany","meare","mease","meath","meats","meaty","mebos","mecca","mechs","mecks","medal","media","medic","medii","medle","meeds","meers","meets","meffs","meins","meint","meiny","meith","mekka","melas","melba","melds","melee","melic","melik","mells","melon","melts","melty","memes","memos","menad","mends","mened","menes","menge","mengs","mensa","mense","mensh","menta","mento","menus","meous","meows","merch","mercs","mercy","merde","mered","merel","merer","meres","merge","meril","meris","merit","merks","merle","merls","merry","merse","mesal","mesas","mesel","meses","meshy","mesic","mesne","meson","messy","mesto","metal","meted","meter","metes","metho","meths","metic","metif","metis","metol","metre","metro","meuse","meved","meves","mewed","mewls","meynt","mezes","mezze","mezzo","mhorr","miaou","miaow","miasm","miaul","micas","miche","micht","micks","micky","micos","micra","micro","middy","midge","midgy","midis","midst","miens","mieve","miffs","miffy","mifty","miggs","might","mihas","mihis","miked","mikes","mikra","mikva","milch","milds","miler","miles","milfs","milia","milko","milks","milky","mille","mills","milor","milos","milpa","milts","milty","miltz","mimed","mimeo","mimer","mimes","mimic","mimsy","minae","minar","minas","mince","mincy","minds","mined","miner","mines","minge","mings","mingy","minim","minis","minke","minks","minny","minor","minos","mints","minty","minus","mired","mires","mirex","mirid","mirin","mirks","mirky","mirly","miros","mirth","mirvs","mirza","misch","misdo","miser","mises","misgo","misos","missa","missy","mists","misty","mitch","miter","mites","mitis","mitre","mitts","mixed","mixen","mixer","mixes","mixte","mixup","mizen","mizzy","mneme","moans","moats","mobby","mobes","mobey","mobie","moble","mocha","mochi","mochs","mochy","mocks","modal","model","modem","moder","modes","modge","modii","modus","moers","mofos","moggy","mogul","mohel","mohos","mohrs","mohua","mohur","moile","moils","moira","moire","moist","moits","mojos","mokes","mokis","mokos","molal","molar","molas","molds","moldy","moled","moles","molla","molls","molly","molto","molts","molys","momes","momma","mommy","momus","monad","monal","monas","monde","mondo","moner","money","mongo","mongs","monic","monie","monks","monos","monte","month","monty","moobs","mooch","moods","moody","mooed","mooks","moola","mooli","mools","mooly","moong","moons","moony","moops","moors","moory","moose","moots","moove","moped","moper","mopes","mopey","moppy","mopsy","mopus","morae","moral","moras","morat","moray","morel","mores","moria","morne","morns","moron","morph","morra","morro","morse","morts","mosed","moses","mosey","mosks","mosso","mossy","moste","mosts","moted","motel","moten","motes","motet","motey","moths","mothy","motif","motis","motor","motte","motto","motts","motty","motus","motza","mouch","moues","mould","mouls","moult","mound","mount","moups","mourn","mouse","moust","mousy","mouth","moved","mover","moves","movie","mowas","mowed","mower","mowra","moxas","moxie","moyas","moyle","moyls","mozed","mozes","mozos","mpret","mucho","mucic","mucid","mucin","mucks","mucky","mucor","mucro","mucus","muddy","mudge","mudir","mudra","muffs","mufti","mugga","muggs","muggy","muhly","muids","muils","muirs","muist","mujik","mulch","mulct","muled","mules","muley","mulga","mulie","mulla","mulls","mulse","mulsh","mumms","mummy","mumps","mumsy","mumus","munch","munga","munge","mungo","mungs","munis","munts","muntu","muons","mural","muras","mured","mures","murex","murid","murks","murky","murls","murly","murra","murre","murri","murrs","murry","murti","murva","musar","musca","mused","muser","muses","muset","musha","mushy","music","musit","musks","musky","musos","musse","mussy","musth","musts","musty","mutch","muted","muter","mutes","mutha","mutis","muton","mutts","muxed","muxes","muzak","muzzy","mvule","myall","mylar","mynah","mynas","myoid","myoma","myope","myops","myopy","myrrh","mysid","mythi","myths","mythy","myxos","mzees","naams","naans","nabes","nabis","nabks","nabla","nabob","nache","nacho","nacre","nadas","nadir","naeve","naevi","naffs","nagas","naggy","nagor","nahal","naiad","naifs","naiks","nails","naira","nairu","naive","naked","naker","nakfa","nalas","naled","nalla","named","namer","names","namma","namus","nanas","nance","nancy","nandu","nanna","nanny","nanos","nanua","napas","naped","napes","napoo","nappa","nappe","nappy","naras","narco","narcs","nards","nares","naric","naris","narks","narky","narre","nasal","nashi","nasty","natal","natch","nates","natis","natty","nauch","naunt","naval","navar","navel","naves","navew","navvy","nawab","nazes","nazir","nazis","nduja","neafe","neals","neaps","nears","neath","neats","nebek","nebel","necks","neddy","needs","needy","neeld","neele","neemb","neems","neeps","neese","neeze","negro","negus","neifs","neigh","neist","neive","nelis","nelly","nemas","nemns","nempt","nenes","neons","neper","nepit","neral","nerds","nerdy","nerka","nerks","nerol","nerts","nertz","nerve","nervy","nests","netes","netop","netts","netty","neuks","neume","neums","nevel","never","neves","nevus","newbs","newed","newel","newer","newie","newly","newsy","newts","nexts","nexus","ngaio","ngana","ngati","ngoma","ngwee","nicad","nicer","niche","nicht","nicks","nicol","nidal","nided","nides","nidor","nidus","niece","niefs","nieve","nifes","niffs","niffy","nifty","niger","nighs","night","nihil","nikab","nikah","nikau","nills","nimbi","nimbs","nimps","niner","nines","ninja","ninny","ninon","ninth","nipas","nippy","niqab","nirls","nirly","nisei","nisse","nisus","niter","nites","nitid","niton","nitre","nitro","nitry","nitty","nival","nixed","nixer","nixes","nixie","nizam","nkosi","noahs","nobby","noble","nobly","nocks","nodal","noddy","nodes","nodus","noels","noggs","nohow","noils","noily","noint","noirs","noise","noisy","noles","nolls","nolos","nomad","nomas","nomen","nomes","nomic","nomoi","nomos","nonas","nonce","nones","nonet","nongs","nonis","nonny","nonyl","noobs","nooit","nooks","nooky","noons","noops","noose","nopal","noria","noris","norks","norma","norms","north","nosed","noser","noses","nosey","notal","notch","noted","noter","notes","notum","nould","noule","nouls","nouns","nouny","noups","novae","novas","novel","novum","noway","nowed","nowls","nowts","nowty","noxal","noxes","noyau","noyed","noyes","nubby","nubia","nucha","nuddy","nuder","nudes","nudge","nudie","nudzh","nuffs","nugae","nuked","nukes","nulla","nulls","numbs","numen","nummy","nunny","nurds","nurdy","nurls","nurrs","nurse","nutso","nutsy","nutty","nyaff","nyala","nying","nylon","nymph","nyssa","oaked","oaken","oaker","oakum","oared","oases","oasis","oasts","oaten","oater","oaths","oaves","obang","obeah","obeli","obese","obeys","obias","obied","obiit","obits","objet","oboes","obole","oboli","obols","occam","occur","ocean","ocher","oches","ochre","ochry","ocker","ocrea","octad","octal","octan","octas","octet","octyl","oculi","odahs","odals","odder","oddly","odeon","odeum","odism","odist","odium","odors","odour","odyle","odyls","ofays","offal","offed","offer","offie","oflag","often","ofter","ogams","ogeed","ogees","oggin","ogham","ogive","ogled","ogler","ogles","ogmic","ogres","ohias","ohing","ohmic","ohone","oidia","oiled","oiler","oinks","oints","ojime","okapi","okays","okehs","okras","oktas","olden","older","oldie","oleic","olein","olent","oleos","oleum","olios","olive","ollas","ollav","oller","ollie","ology","olpae","olpes","omasa","omber","ombre","ombus","omega","omens","omers","omits","omlah","omovs","omrah","oncer","onces","oncet","oncus","onely","oners","onery","onion","onium","onkus","onlay","onned","onset","ontic","oobit","oohed","oomph","oonts","ooped","oorie","ooses","ootid","oozed","oozes","opahs","opals","opens","opepe","opera","opine","oping","opium","oppos","opsin","opted","opter","optic","orach","oracy","orals","orang","orant","orate","orbed","orbit","orcas","orcin","order","ordos","oread","orfes","organ","orgia","orgic","orgue","oribi","oriel","orixa","orles","orlon","orlop","ormer","ornis","orpin","orris","ortho","orval","orzos","oscar","oshac","osier","osmic","osmol","ossia","ostia","otaku","otary","other","ottar","otter","ottos","oubit","oucht","ouens","ought","ouija","oulks","oumas","ounce","oundy","oupas","ouped","ouphe","ouphs","ourie","ousel","ousts","outby","outdo","outed","outer","outgo","outre","outro","outta","ouzel","ouzos","ovals","ovary","ovate","ovels","ovens","overs","overt","ovine","ovist","ovoid","ovoli","ovolo","ovule","owche","owies","owing","owled","owler","owlet","owned","owner","owres","owrie","owsen","oxbow","oxers","oxeye","oxide","oxids","oxies","oxime","oxims","oxlip","oxter","oyers","ozeki","ozone","ozzie","paals","paans","pacas","paced","pacer","paces","pacey","pacha","packs","pacos","pacta","pacts","paddy","padis","padle","padma","padre","padri","paean","paedo","paeon","pagan","paged","pager","pages","pagle","pagod","pagri","paiks","pails","pains","paint","paire","pairs","paisa","paise","pakka","palas","palay","palea","paled","paler","pales","palet","palis","palki","palla","palls","pally","palms","palmy","palpi","palps","palsa","palsy","pampa","panax","pance","panda","pands","pandy","paned","panel","panes","panga","pangs","panic","panim","panko","panne","panni","pansy","panto","pants","panty","paoli","paolo","papal","papas","papaw","paper","papes","pappi","pappy","parae","paras","parch","pardi","pards","pardy","pared","paren","pareo","parer","pares","pareu","parev","parge","pargo","paris","parka","parki","parks","parky","parle","parly","parma","parol","parps","parra","parrs","parry","parse","parti","parts","party","parve","parvo","paseo","pases","pasha","pashm","paska","paspy","passe","pasta","paste","pasts","pasty","patch","pated","paten","pater","pates","paths","patin","patio","patka","patly","patsy","patte","patty","patus","pauas","pauls","pause","pavan","paved","paven","paver","paves","pavid","pavin","pavis","pawas","pawaw","pawed","pawer","pawks","pawky","pawls","pawns","paxes","payed","payee","payer","payor","paysd","peace","peach","peage","peags","peaks","peaky","peals","peans","peare","pearl","pears","peart","pease","peats","peaty","peavy","peaze","pebas","pecan","pechs","pecke","pecks","pecky","pedal","pedes","pedis","pedro","peece","peeks","peels","peens","peeoy","peepe","peeps","peers","peery","peeve","peggy","peghs","peins","peise","peize","pekan","pekes","pekin","pekoe","pelas","pelau","peles","pelfs","pells","pelma","pelon","pelta","pelts","penal","pence","pends","pendu","pened","penes","pengo","penie","penis","penks","penna","penne","penni","penny","pents","peons","peony","pepla","pepos","peppy","pepsi","perai","perce","perch","percs","perdu","perdy","perea","peres","peril","peris","perks","perky","perms","perns","perog","perps","perry","perse","perst","perts","perve","pervo","pervs","pervy","pesky","pesos","pesto","pests","pesty","petal","petar","peter","petit","petre","petri","petti","petto","petty","pewee","pewit","peyse","phage","phang","phare","pharm","phase","pheer","phene","pheon","phese","phial","phish","phizz","phlox","phoca","phone","phono","phons","phony","photo","phots","phpht","phuts","phyla","phyle","piani","piano","pians","pibal","pical","picas","piccy","picks","picky","picot","picra","picul","piece","piend","piers","piert","pieta","piets","piety","piezo","piggy","pight","pigmy","piing","pikas","pikau","piked","piker","pikes","pikey","pikis","pikul","pilae","pilaf","pilao","pilar","pilau","pilaw","pilch","pilea","piled","pilei","piler","piles","pilis","pills","pilot","pilow","pilum","pilus","pimas","pimps","pinas","pinch","pined","pines","piney","pingo","pings","pinko","pinks","pinky","pinna","pinny","pinon","pinot","pinta","pinto","pints","pinup","pions","piony","pious","pioye","pioys","pipal","pipas","piped","piper","pipes","pipet","pipis","pipit","pippy","pipul","pique","pirai","pirls","pirns","pirog","pisco","pises","pisky","pisos","pissy","piste","pitas","pitch","piths","pithy","piton","pitot","pitta","piums","pivot","pixel","pixes","pixie","pized","pizes","pizza","plaas","place","plack","plage","plaid","plain","plait","plane","plank","plans","plant","plaps","plash","plasm","plast","plate","plats","platt","platy","playa","plays","plaza","plead","pleas","pleat","plebe","plebs","plena","pleon","plesh","plews","plica","plied","plier","plies","plims","pling","plink","ploat","plods","plong","plonk","plook","plops","plots","plotz","plouk","plows","ploye","ploys","pluck","plues","pluff","plugs","plumb","plume","plump","plums","plumy","plunk","pluot","plush","pluto","plyer","poach","poaka","poake","poboy","pocks","pocky","podal","poddy","podex","podge","podgy","podia","poems","poeps","poesy","poets","pogey","pogge","pogos","pohed","poilu","poind","point","poise","pokal","poked","poker","pokes","pokey","pokie","polar","poled","poler","poles","poley","polio","polis","polje","polka","polks","polls","polly","polos","polts","polyp","polys","pombe","pomes","pommy","pomos","pomps","ponce","poncy","ponds","pones","poney","ponga","pongo","pongs","pongy","ponks","ponts","ponty","ponzu","pooch","poods","pooed","poofs","poofy","poohs","pooja","pooka","pooks","pools","poons","poops","poopy","poori","poort","poots","poove","poovy","popes","poppa","poppy","popsy","porae","poral","porch","pored","porer","pores","porge","porgy","porin","porks","porky","porno","porns","porny","porta","ports","porty","posed","poser","poses","posey","posho","posit","posse","posts","potae","potch","poted","potes","potin","potoo","potsy","potto","potts","potty","pouch","pouff","poufs","pouke","pouks","poule","poulp","poult","pound","poupe","poupt","pours","pouts","pouty","powan","power","powin","pownd","powns","powny","powre","poxed","poxes","poynt","poyou","poyse","pozzy","praam","prads","prahu","prams","prana","prang","prank","praos","prase","prate","prats","pratt","praty","praus","prawn","prays","predy","preed","preen","prees","preif","prems","premy","prent","preon","preop","preps","presa","prese","press","prest","preve","prexy","preys","prial","price","prick","pricy","pride","pried","prief","prier","pries","prigs","prill","prima","prime","primi","primo","primp","prims","primy","prink","print","prion","prior","prise","prism","priss","privy","prize","proas","probe","probs","prods","proem","profs","progs","proin","proke","prole","proll","promo","proms","prone","prong","pronk","proof","props","prore","prose","proso","pross","prost","prosy","proto","proud","proul","prove","prowl","prows","proxy","proyn","prude","prune","prunt","pruta","pryer","pryse","psalm","pseud","pshaw","psion","psoae","psoai","psoas","psora","psych","psyop","pubco","pubes","pubic","pubis","pucan","pucer","puces","pucka","pucks","puddy","pudge","pudgy","pudic","pudor","pudsy","pudus","puers","puffa","puffs","puffy","puggy","pugil","puhas","pujah","pujas","pukas","puked","puker","pukes","pukey","pukka","pukus","pulao","pulas","puled","puler","pules","pulik","pulis","pulka","pulks","pulli","pulls","pully","pulmo","pulps","pulpy","pulse","pulus","pumas","pumie","pumps","punas","punce","punch","punga","pungs","punji","punka","punks","punky","punny","punto","punts","punty","pupae","pupas","pupil","puppy","pupus","purda","pured","puree","purer","pures","purge","purin","puris","purls","purpy","purrs","purse","pursy","purty","puses","pushy","pusle","putid","puton","putti","putto","putts","putty","puzel","pwned","pyats","pyets","pygal","pygmy","pyins","pylon","pyned","pynes","pyoid","pyots","pyral","pyran","pyres","pyrex","pyric","pyros","pyxed","pyxes","pyxie","pyxis","pzazz","qadis","qaids","qajaq","qanat","qapik","qibla","qophs","qorma","quack","quads","quaff","quags","quail","quair","quais","quake","quaky","quale","qualm","quant","quare","quark","quart","quash","quasi","quass","quate","quats","quayd","quays","qubit","quean","queen","queer","quell","queme","quena","quern","query","quest","queue","queyn","queys","quich","quick","quids","quiet","quiff","quill","quilt","quims","quina","quine","quino","quins","quint","quipo","quips","quipu","quire","quirk","quirt","quist","quite","quits","quoad","quods","quoif","quoin","quoit","quoll","quonk","quops","quota","quote","quoth","qursh","quyte","rabat","rabbi","rabic","rabid","rabis","raced","racer","races","rache","racks","racon","radar","radge","radii","radio","radix","radon","raffs","rafts","ragas","ragde","raged","ragee","rager","rages","ragga","raggs","raggy","ragis","ragus","rahed","rahui","raias","raids","raiks","raile","rails","raine","rains","rainy","raird","raise","raita","raits","rajah","rajas","rajes","raked","rakee","raker","rakes","rakia","rakis","rakus","rales","rally","ralph","ramal","ramee","ramen","ramet","ramie","ramin","ramis","rammy","ramps","ramus","ranas","rance","ranch","rands","randy","ranee","ranga","range","rangi","rangs","rangy","ranid","ranis","ranke","ranks","rants","raped","raper","rapes","raphe","rapid","rappe","rared","raree","rarer","rares","rarks","rased","raser","rases","rasps","raspy","rasse","rasta","ratal","ratan","ratas","ratch","rated","ratel","rater","rates","ratha","rathe","raths","ratio","ratoo","ratos","ratty","ratus","rauns","raupo","raved","ravel","raven","raver","raves","ravey","ravin","rawer","rawin","rawly","rawns","raxed","raxes","rayah","rayas","rayed","rayle","rayne","rayon","razed","razee","razer","razes","razoo","razor","reach","react","readd","reads","ready","reais","reaks","realm","realo","reals","reame","reams","reamy","reans","reaps","rearm","rears","reast","reata","reate","reave","rebar","rebbe","rebec","rebel","rebid","rebit","rebop","rebus","rebut","rebuy","recal","recap","recce","recco","reccy","recit","recks","recon","recta","recti","recto","recur","recut","redan","redds","reddy","reded","redes","redia","redid","redip","redly","redon","redos","redox","redry","redub","redux","redye","reech","reede","reeds","reedy","reefs","reefy","reeks","reeky","reels","reens","reest","reeve","refed","refel","refer","reffo","refis","refit","refix","refly","refry","regal","regar","reges","reggo","regie","regma","regna","regos","regur","rehab","rehem","reifs","reify","reign","reiki","reiks","reink","reins","reird","reist","reive","rejig","rejon","reked","rekes","rekey","relax","relay","relet","relic","relie","relit","rello","reman","remap","remen","remet","remex","remit","remix","renal","renay","rends","renew","reney","renga","renig","renin","renne","renos","rente","rents","reoil","reorg","repay","repeg","repel","repin","repla","reply","repos","repot","repps","repro","reran","rerig","rerun","resat","resaw","resay","resee","reses","reset","resew","resid","resin","resit","resod","resow","resto","rests","resty","resus","retag","retax","retch","retem","retia","retie","retox","retro","retry","reuse","revel","revet","revie","revue","rewan","rewax","rewed","rewet","rewin","rewon","rewth","rexes","rezes","rheas","rheme","rheum","rhies","rhime","rhine","rhino","rhody","rhomb","rhone","rhumb","rhyme","rhyne","rhyta","riads","rials","riant","riata","ribas","ribby","ribes","riced","ricer","rices","ricey","richt","ricin","ricks","rider","rides","ridge","ridgy","ridic","riels","riems","rieve","rifer","riffs","rifle","rifte","rifts","rifty","riggs","right","rigid","rigol","rigor","riled","riles","riley","rille","rills","rimae","rimed","rimer","rimes","rimus","rinds","rindy","rines","rings","rinks","rinse","rioja","riots","riped","ripen","riper","ripes","ripps","risen","riser","rises","rishi","risks","risky","risps","risus","rites","ritts","ritzy","rival","rivas","rived","rivel","riven","river","rives","rivet","riyal","rizas","roach","roads","roams","roans","roars","roary","roast","roate","robed","robes","robin","roble","robot","rocks","rocky","roded","rodeo","rodes","roger","rogue","roguy","rohes","roids","roils","roily","roins","roist","rojak","rojis","roked","roker","rokes","rolag","roles","rolfs","rolls","romal","roman","romeo","romps","ronde","rondo","roneo","rones","ronin","ronne","ronte","ronts","roods","roofs","roofy","rooks","rooky","rooms","roomy","roons","roops","roopy","roosa","roose","roost","roots","rooty","roped","roper","ropes","ropey","roque","roral","rores","roric","rorid","rorie","rorts","rorty","rosed","roses","roset","roshi","rosin","rosit","rosti","rosts","rotal","rotan","rotas","rotch","roted","rotes","rotis","rotls","roton","rotor","rotos","rotte","rouen","roues","rouge","rough","roule","rouls","roums","round","roups","roupy","rouse","roust","route","routh","routs","roved","roven","rover","roves","rowan","rowdy","rowed","rowel","rowen","rower","rowie","rowme","rownd","rowth","rowts","royal","royne","royst","rozet","rozit","ruana","rubai","rubby","rubel","rubes","rubin","ruble","rubli","rubus","ruche","rucks","rudas","rudds","ruddy","ruder","rudes","rudie","rudis","rueda","ruers","ruffe","ruffs","rugae","rugal","rugby","ruggy","ruing","ruins","rukhs","ruled","ruler","rules","rumal","rumba","rumbo","rumen","rumes","rumly","rummy","rumor","rumpo","rumps","rumpy","runch","runds","runed","runes","rungs","runic","runny","runts","runty","rupee","rupia","rural","rurps","rurus","rusas","ruses","rushy","rusks","rusma","russe","rusts","rusty","ruths","rutin","rutty","ryals","rybat","ryked","rykes","rymme","rynds","ryots","ryper","saags","sabal","sabed","saber","sabes","sabha","sabin","sabir","sable","sabot","sabra","sabre","sacks","sacra","saddo","sades","sadhe","sadhu","sadis","sadly","sados","sadza","safed","safer","safes","sagas","sager","sages","saggy","sagos","sagum","saheb","sahib","saice","saick","saics","saids","saiga","sails","saims","saine","sains","saint","sairs","saist","saith","sajou","sakai","saker","sakes","sakia","sakis","sakti","salad","salal","salat","salep","sales","salet","salic","salix","salle","sally","salmi","salol","salon","salop","salpa","salps","salsa","salse","salto","salts","salty","salue","salut","salve","salvo","saman","samas","samba","sambo","samek","samel","samen","sames","samey","samfu","sammy","sampi","samps","sands","sandy","saned","saner","sanes","sanga","sangh","sango","sangs","sanko","sansa","santo","sants","saola","sapan","sapid","sapor","sappy","saran","sards","sared","saree","sarge","sargo","sarin","saris","sarks","sarky","sarod","saros","sarus","saser","sasin","sasse","sassy","satai","satay","sated","satem","sates","satin","satis","satyr","sauba","sauce","sauch","saucy","saugh","sauls","sault","sauna","saunt","saury","saute","sauts","saved","saver","saves","savey","savin","savor","savoy","savvy","sawah","sawed","sawer","saxes","sayed","sayer","sayid","sayne","sayon","sayst","sazes","scabs","scads","scaff","scags","scail","scala","scald","scale","scall","scalp","scaly","scamp","scams","scand","scans","scant","scapa","scape","scapi","scare","scarf","scarp","scars","scart","scary","scath","scats","scatt","scaud","scaup","scaur","scaws","sceat","scena","scend","scene","scent","schav","schmo","schul","schwa","scion","sclim","scody","scoff","scogs","scold","scone","scoog","scoop","scoot","scopa","scope","scops","score","scorn","scots","scoug","scoup","scour","scout","scowl","scowp","scows","scrab","scrae","scrag","scram","scran","scrap","scrat","scraw","scray","scree","screw","scrim","scrip","scrob","scrod","scrog","scrow","scrub","scrum","scuba","scudi","scudo","scuds","scuff","scuft","scugs","sculk","scull","sculp","sculs","scums","scups","scurf","scurs","scuse","scuta","scute","scuts","scuzz","scyes","sdayn","sdein","seals","seame","seams","seamy","seans","seare","sears","sease","seats","seaze","sebum","secco","sechs","sects","sedan","seder","sedes","sedge","sedgy","sedum","seeds","seedy","seeks","seeld","seels","seely","seems","seeps","seepy","seers","sefer","segar","segni","segno","segol","segos","segue","sehri","seifs","seils","seine","seirs","seise","seism","seity","seiza","seize","sekos","sekts","selah","seles","selfs","sella","selle","sells","selva","semee","semen","semes","semie","semis","senas","sends","senes","sengi","senna","senor","sensa","sense","sensi","sente","senti","sents","senvy","senza","sepad","sepal","sepia","sepic","sepoy","septa","septs","serac","serai","seral","sered","serer","seres","serfs","serge","seric","serif","serin","serks","seron","serow","serra","serre","serrs","serry","serum","serve","servo","sesey","sessa","setae","setal","seton","setts","setup","seven","sever","sewan","sewar","sewed","sewel","sewen","sewer","sewin","sexed","sexer","sexes","sexto","sexts","seyen","shack","shade","shads","shady","shaft","shags","shahs","shake","shako","shakt","shaky","shale","shall","shalm","shalt","shaly","shama","shame","shams","shand","shank","shans","shape","shaps","shard","share","shark","sharn","sharp","shash","shaul","shave","shawl","shawm","shawn","shaws","shaya","shays","shchi","sheaf","sheal","shear","sheas","sheds","sheel","sheen","sheep","sheer","sheet","sheik","shelf","shell","shend","shent","sheol","sherd","shere","shero","shets","sheva","shewn","shews","shiai","shied","shiel","shier","shies","shift","shill","shily","shims","shine","shins","shiny","ships","shire","shirk","shirr","shirs","shirt","shish","shiso","shist","shite","shits","shiur","shiva","shive","shivs","shlep","shlub","shmek","shmoe","shoal","shoat","shock","shoed","shoer","shoes","shogi","shogs","shoji","shojo","shola","shone","shook","shool","shoon","shoos","shoot","shope","shops","shore","shorl","shorn","short","shote","shots","shott","shout","shove","showd","shown","shows","showy","shoyu","shred","shrew","shris","shrow","shrub","shrug","shtik","shtum","shtup","shuck","shule","shuln","shuls","shuns","shunt","shura","shush","shute","shuts","shwas","shyer","shyly","sials","sibbs","sibyl","sices","sicht","sicko","sicks","sicky","sidas","sided","sider","sides","sidha","sidhe","sidle","siege","sield","siens","sient","sieth","sieur","sieve","sifts","sighs","sight","sigil","sigla","sigma","signa","signs","sijos","sikas","siker","sikes","silds","siled","silen","siler","siles","silex","silks","silky","sills","silly","silos","silts","silty","silva","simar","simas","simba","simis","simps","simul","since","sinds","sined","sines","sinew","singe","sings","sinhs","sinks","sinky","sinus","siped","sipes","sippy","sired","siree","siren","sires","sirih","siris","siroc","sirra","sirup","sisal","sises","sissy","sista","sists","sitar","sited","sites","sithe","sitka","situp","situs","siver","sixer","sixes","sixmo","sixte","sixth","sixty","sizar","sized","sizel","sizer","sizes","skags","skail","skald","skank","skart","skate","skats","skatt","skaws","skean","skear","skeds","skeed","skeef","skeen","skeer","skees","skeet","skegg","skegs","skein","skelf","skell","skelm","skelp","skene","skens","skeos","skeps","skers","skets","skews","skids","skied","skier","skies","skiey","skiff","skill","skimo","skimp","skims","skink","skins","skint","skios","skips","skirl","skirr","skirt","skite","skits","skive","skivy","sklim","skoal","skody","skoff","skogs","skols","skool","skort","skosh","skran","skrik","skuas","skugs","skulk","skull","skunk","skyed","skyer","skyey","skyfs","skyre","skyrs","skyte","slabs","slack","slade","slaes","slags","slaid","slain","slake","slams","slane","slang","slank","slant","slaps","slart","slash","slate","slats","slaty","slaws","slays","slebs","sleds","sleek","sleep","sleer","sleet","slept","slews","sleys","slice","slick","slide","slier","slily","slime","slims","slimy","sling","slink","slipe","slips","slipt","slish","slits","slive","sloan","slobs","sloes","slogs","sloid","slojd","slomo","sloom","sloop","sloot","slope","slops","slopy","slorm","slosh","sloth","slots","slove","slows","sloyd","slubb","slubs","slued","slues","sluff","slugs","sluit","slump","slums","slung","slunk","slurb","slurp","slurs","sluse","slush","slyer","slyly","slype","smaak","smack","smaik","small","smalm","smalt","smarm","smart","smash","smaze","smear","smeek","smees","smeik","smeke","smell","smelt","smerk","smews","smile","smirk","smirr","smirs","smite","smith","smits","smock","smogs","smoke","smoko","smoky","smolt","smoor","smoot","smore","smorg","smote","smout","smowt","smugs","smurs","smush","smuts","snabs","snack","snafu","snags","snail","snake","snaky","snaps","snare","snarf","snark","snarl","snars","snary","snash","snath","snaws","snead","sneak","sneap","snebs","sneck","sneds","sneed","sneer","snees","snell","snibs","snick","snide","snies","sniff","snift","snigs","snipe","snips","snipy","snirt","snits","snobs","snods","snoek","snoep","snogs","snoke","snood","snook","snool","snoop","snoot","snore","snort","snots","snout","snowk","snows","snowy","snubs","snuck","snuff","snugs","snush","snyes","soaks","soaps","soapy","soare","soars","soave","sobas","sober","socas","soces","socko","socks","socle","sodas","soddy","sodic","sodom","sofar","sofas","softa","softs","softy","soger","soggy","sohur","soils","soily","sojas","sojus","sokah","soken","sokes","sokol","solah","solan","solar","solas","solde","soldi","soldo","solds","soled","solei","soler","soles","solid","solon","solos","solum","solus","solve","soman","somas","sonar","sonce","sonde","sones","songs","sonic","sonly","sonne","sonny","sonse","sonsy","sooey","sooks","sooky","soole","sools","sooms","soops","soote","sooth","soots","sooty","sophs","sophy","sopor","soppy","sopra","soral","soras","sorbo","sorbs","sorda","sordo","sords","sored","soree","sorel","sorer","sores","sorex","sorgo","sorns","sorra","sorry","sorta","sorts","sorus","soths","sotol","souce","souct","sough","souks","souls","soums","sound","soups","soupy","sours","souse","south","souts","sowar","sowce","sowed","sower","sowff","sowfs","sowle","sowls","sowms","sownd","sowne","sowps","sowse","sowth","soyas","soyle","soyuz","sozin","space","spacy","spade","spado","spaed","spaer","spaes","spags","spahi","spail","spain","spait","spake","spald","spale","spall","spalt","spams","spane","spang","spank","spans","spard","spare","spark","spars","spart","spasm","spate","spats","spaul","spawl","spawn","spaws","spayd","spays","spaza","spazz","speak","speal","spean","spear","speat","speck","specs","spect","speed","speel","speer","speil","speir","speks","speld","spelk","spell","spelt","spend","spent","speos","sperm","spets","speug","spews","spewy","spial","spica","spice","spicy","spide","spied","spiel","spier","spies","spiff","spifs","spike","spiky","spile","spill","spilt","spims","spina","spine","spink","spins","spiny","spire","spirt","spiry","spite","spits","spitz","spivs","splat","splay","split","splog","spode","spods","spoil","spoke","spoof","spook","spool","spoom","spoon","spoor","spoot","spore","spork","sport","sposh","spots","spout","sprad","sprag","sprat","spray","spred","spree","sprew","sprig","sprit","sprod","sprog","sprue","sprug","spuds","spued","spuer","spues","spugs","spule","spume","spumy","spunk","spurn","spurs","spurt","sputa","spyal","spyre","squab","squad","squat","squaw","squeg","squib","squid","squit","squiz","stabs","stack","stade","staff","stage","stags","stagy","staid","staig","stain","stair","stake","stale","stalk","stall","stamp","stand","stane","stang","stank","staph","staps","stare","stark","starn","starr","stars","start","stash","state","stats","staun","stave","staws","stays","stead","steak","steal","steam","stean","stear","stedd","stede","steds","steed","steek","steel","steem","steen","steep","steer","steil","stein","stela","stele","stell","steme","stems","stend","steno","stens","stent","steps","stept","stere","stern","stets","stews","stewy","steys","stich","stick","stied","sties","stiff","stilb","stile","still","stilt","stime","stims","stimy","sting","stink","stint","stipa","stipe","stire","stirk","stirp","stirs","stive","stivy","stoae","stoai","stoas","stoat","stobs","stock","stoep","stogy","stoic","stoit","stoke","stole","stoln","stoma","stomp","stond","stone","stong","stonk","stonn","stony","stood","stook","stool","stoop","stoor","stope","stops","stopt","store","stork","storm","story","stoss","stots","stott","stoun","stoup","stour","stout","stove","stown","stowp","stows","strad","strae","strag","strak","strap","straw","stray","strep","strew","stria","strig","strim","strip","strop","strow","stroy","strum","strut","stubs","stuck","stude","studs","study","stuff","stull","stulm","stumm","stump","stums","stung","stunk","stuns","stunt","stupa","stupe","sture","sturt","styed","styes","style","styli","stylo","styme","stymy","styre","styte","suave","subah","subas","subby","suber","subha","succi","sucks","sucky","sucre","sudds","sudor","sudsy","suede","suent","suers","suete","suets","suety","sugan","sugar","sughs","sugos","suhur","suids","suing","suint","suite","suits","sujee","sukhs","sukuk","sulci","sulfa","sulfo","sulks","sulky","sully","sulph","sulus","sumac","sumis","summa","sumos","sumph","sumps","sunis","sunks","sunna","sunns","sunny","sunup","super","supes","supra","surah","sural","suras","surat","surds","sured","surer","sures","surfs","surfy","surge","surgy","surly","surra","sused","suses","sushi","susus","sutor","sutra","sutta","swabs","swack","swads","swage","swags","swail","swain","swale","swaly","swami","swamp","swamy","swang","swank","swans","swaps","swapt","sward","sware","swarf","swarm","swart","swash","swath","swats","swayl","sways","sweal","swear","sweat","swede","sweed","sweel","sweep","sweer","swees","sweet","sweir","swell","swelt","swept","swerf","sweys","swies","swift","swigs","swile","swill","swims","swine","swing","swink","swipe","swire","swirl","swish","swiss","swith","swits","swive","swizz","swobs","swole","swoln","swoon","swoop","swops","swopt","sword","swore","sworn","swots","swoun","swung","sybbe","sybil","syboe","sybow","sycee","syces","sycon","syens","syker","sykes","sylis","sylph","sylva","symar","synch","syncs","synds","syned","synes","synod","synth","syped","sypes","syphs","syrah","syren","syrup","sysop","sythe","syver","taals","taata","tabby","taber","tabes","tabid","tabis","tabla","table","taboo","tabor","tabun","tabus","tacan","taces","tacet","tache","tacho","tachs","tacit","tacks","tacky","tacos","tacts","taels","taffy","tafia","taggy","tagma","tahas","tahrs","taiga","taigs","taiko","tails","tains","taint","taira","taish","taits","tajes","takas","taken","taker","takes","takhi","takin","takis","takky","talak","talaq","talar","talas","talcs","talcy","talea","taler","tales","talks","talky","talls","tally","talma","talon","talpa","taluk","talus","tamal","tamed","tamer","tames","tamin","tamis","tammy","tamps","tanas","tanga","tangi","tango","tangs","tangy","tanhs","tanka","tanks","tanky","tanna","tansy","tanti","tanto","tanty","tapas","taped","tapen","taper","tapes","tapet","tapir","tapis","tappa","tapus","taras","tardo","tardy","tared","tares","targa","targe","tarns","taroc","tarok","taros","tarot","tarps","tarre","tarry","tarsi","tarts","tarty","tasar","tased","taser","tases","tasks","tassa","tasse","tasso","taste","tasty","tatar","tater","tates","taths","tatie","tatou","tatts","tatty","tatus","taube","tauld","taunt","tauon","taupe","tauts","tavah","tavas","taver","tawai","tawas","tawed","tawer","tawie","tawny","tawse","tawts","taxed","taxer","taxes","taxis","taxol","taxon","taxor","taxus","tayra","tazza","tazze","teach","teade","teads","teaed","teaks","teals","teams","tears","teary","tease","teats","teaze","techs","techy","tecta","teddy","teels","teems","teend","teene","teens","teeny","teers","teeth","teffs","teggs","tegua","tegus","tehrs","teiid","teils","teind","teins","telae","telco","teles","telex","telia","telic","tells","telly","teloi","telos","temed","temes","tempi","tempo","temps","tempt","temse","tench","tends","tendu","tenes","tenet","tenge","tenia","tenne","tenno","tenny","tenon","tenor","tense","tenth","tents","tenty","tenue","tepal","tepas","tepee","tepid","tepoy","terai","teras","terce","terek","teres","terfe","terfs","terga","terms","terne","terns","terra","terry","terse","terts","tesla","testa","teste","tests","testy","tetes","teths","tetra","tetri","teuch","teugh","tewed","tewel","tewit","texas","texes","texts","thack","thagi","thaim","thale","thali","thana","thane","thang","thank","thans","thanx","tharm","thars","thaws","thawy","thebe","theca","theed","theek","thees","theft","thegn","theic","thein","their","thelf","thema","theme","thens","theow","there","therm","these","thesp","theta","thete","thews","thewy","thick","thief","thigh","thigs","thilk","thill","thine","thing","think","thins","thiol","third","thirl","thoft","thole","tholi","thong","thorn","thoro","thorp","those","thous","thowl","thrae","thraw","three","threw","thrid","thrip","throb","throe","throw","thrum","thuds","thugs","thuja","thumb","thump","thunk","thurl","thuya","thyme","thymi","thymy","tians","tiara","tiars","tibia","tical","ticca","ticed","tices","tichy","ticks","ticky","tidal","tiddy","tided","tides","tiers","tiffs","tifos","tifts","tiger","tiges","tight","tigon","tikas","tikes","tikis","tikka","tilak","tilde","tiled","tiler","tiles","tills","tilly","tilth","tilts","timbo","timed","timer","times","timid","timon","timps","tinas","tinct","tinds","tinea","tined","tines","tinge","tings","tinks","tinny","tints","tinty","tipis","tippy","tipsy","tired","tires","tirls","tiros","tirrs","titan","titch","titer","tithe","titis","title","titre","titty","titup","tiyin","tiyns","tizes","tizzy","toads","toady","toast","toaze","tocks","tocky","tocos","today","todde","toddy","toeas","toffs","toffy","tofts","tofus","togae","togas","toged","toges","togue","tohos","toile","toils","toing","toise","toits","tokay","toked","token","toker","tokes","tokos","tolan","tolar","tolas","toled","toles","tolls","tolly","tolts","tolus","tolyl","toman","tombs","tomes","tomia","tommy","tomos","tonal","tondi","tondo","toned","toner","tones","toney","tonga","tongs","tonic","tonka","tonks","tonne","tonus","tools","tooms","toons","tooth","toots","topaz","toped","topee","topek","toper","topes","tophe","tophi","tophs","topic","topis","topoi","topos","toppy","toque","torah","toran","toras","torch","torcs","tores","toric","torii","toros","torot","torrs","torse","torsi","torsk","torso","torta","torte","torts","torus","tosas","tosed","toses","toshy","tossy","total","toted","totem","toter","totes","totty","touch","tough","touks","touns","tours","touse","tousy","touts","touze","touzy","towed","towel","tower","towie","towns","towny","towse","towsy","towts","towze","towzy","toxic","toxin","toyed","toyer","toyon","toyos","tozed","tozes","tozie","trabs","trace","track","tract","trade","trads","tragi","traik","trail","train","trait","tramp","trams","trank","tranq","trans","trant","trape","traps","trapt","trash","trass","trats","tratt","trave","trawl","trayf","trays","tread","treat","treck","treed","treen","trees","trefa","treif","treks","trema","trems","trend","tress","trest","trets","trews","treyf","treys","triac","triad","trial","tribe","trice","trick","tride","tried","trier","tries","triff","trigo","trigs","trike","trild","trill","trims","trine","trins","triol","trior","trios","tripe","trips","tripy","trist","trite","troad","troak","troat","trock","trode","trods","trogs","trois","troke","troll","tromp","trona","tronc","trone","tronk","trons","troop","trooz","trope","troth","trots","trout","trove","trows","troys","truce","truck","trued","truer","trues","trugo","trugs","trull","truly","trump","trunk","truss","trust","truth","tryer","tryke","tryma","tryps","tryst","tsade","tsadi","tsars","tsked","tsuba","tsubo","tuans","tuart","tuath","tubae","tubal","tubar","tubas","tubby","tubed","tuber","tubes","tucks","tufas","tuffe","tuffs","tufts","tufty","tugra","tuile","tuina","tuism","tuktu","tules","tulip","tulle","tulpa","tulsi","tumid","tummy","tumor","tumps","tumpy","tunas","tunds","tuned","tuner","tunes","tungs","tunic","tunny","tupek","tupik","tuple","tuque","turbo","turds","turfs","turfy","turks","turme","turms","turns","turnt","turps","turrs","tushy","tusks","tusky","tutee","tutor","tutti","tutty","tutus","tuxes","tuyer","twaes","twain","twals","twang","twank","twats","tways","tweak","tweed","tweel","tween","tweep","tweer","tweet","twerk","twerp","twice","twier","twigs","twill","twilt","twine","twink","twins","twiny","twire","twirl","twirp","twist","twite","twits","twixt","twoer","twyer","tyees","tyers","tying","tyiyn","tykes","tyler","tymps","tynde","tyned","tynes","typal","typed","types","typey","typic","typos","typps","typto","tyran","tyred","tyres","tyros","tythe","tzars","udals","udder","udons","ugali","ugged","uhlan","uhuru","ukase","ulama","ulans","ulcer","ulema","ulmin","ulnad","ulnae","ulnar","ulnas","ulpan","ultra","ulvas","ulyie","ulzie","umami","umbel","umber","umble","umbos","umbra","umbre","umiac","umiak","umiaq","ummah","ummas","ummed","umped","umphs","umpie","umpty","umrah","umras","unais","unapt","unarm","unary","unaus","unbag","unban","unbar","unbed","unbid","unbox","uncap","unces","uncia","uncle","uncos","uncoy","uncus","uncut","undam","undee","under","undid","undos","undue","undug","uneth","unfed","unfit","unfix","ungag","unget","ungod","ungot","ungum","unhat","unhip","unica","unify","union","unite","units","unity","unjam","unked","unket","unkid","unlaw","unlay","unled","unlet","unlid","unlit","unman","unmet","unmew","unmix","unpay","unpeg","unpen","unpin","unred","unrid","unrig","unrip","unsaw","unsay","unsee","unset","unsew","unsex","unsod","untax","untie","until","untin","unwed","unwet","unwit","unwon","unzip","upbow","upbye","updos","updry","upend","upjet","uplay","upled","uplit","upped","upper","upran","uprun","upsee","upset","upsey","uptak","upter","uptie","uraei","urali","uraos","urare","urari","urase","urate","urban","urbex","urbia","urdee","ureal","ureas","uredo","ureic","urena","urent","urged","urger","urges","urial","urine","urite","urman","urnal","urned","urped","ursae","ursid","urson","urubu","urvas","usage","users","usher","using","usnea","usque","usual","usure","usurp","usury","uteri","utile","utter","uveal","uveas","uvula","vacua","vaded","vades","vagal","vague","vagus","vails","vaire","vairs","vairy","vakas","vakil","vales","valet","valid","valis","valor","valse","value","valve","vamps","vampy","vanda","vaned","vanes","vangs","vants","vaped","vaper","vapes","vapid","vapor","varan","varas","vardy","varec","vares","varia","varix","varna","varus","varve","vasal","vases","vasts","vasty","vatic","vatus","vauch","vault","vaunt","vaute","vauts","vawte","vaxes","veale","veals","vealy","veena","veeps","veers","veery","vegan","vegas","veges","vegie","vegos","vehme","veils","veily","veins","veiny","velar","velds","veldt","veles","vells","velum","venae","venal","vends","vendu","veney","venge","venin","venom","vents","venue","venus","verbs","verge","verra","verry","verse","verso","verst","verts","vertu","verve","vespa","vesta","vests","vetch","vexed","vexer","vexes","vexil","vezir","vials","viand","vibes","vibex","vibey","vicar","viced","vices","vichy","video","viers","views","viewy","vifda","viffs","vigas","vigia","vigil","vigor","vilde","viler","villa","villi","vills","vimen","vinal","vinas","vinca","vined","viner","vines","vinew","vinic","vinos","vints","vinyl","viola","viold","viols","viper","viral","vired","vireo","vires","virga","virge","virid","virls","virtu","virus","visas","vised","vises","visie","visit","visne","vison","visor","vista","visto","vitae","vital","vitas","vitex","vitro","vitta","vivas","vivat","vivda","viver","vives","vivid","vixen","vizir","vizor","vleis","vlies","vlogs","voars","vocab","vocal","voces","voddy","vodka","vodou","vodun","voema","vogie","vogue","voice","voids","voila","voile","voips","volae","volar","voled","voles","volet","volks","volta","volte","volti","volts","volva","volve","vomer","vomit","voted","voter","votes","vouch","vouge","voulu","vowed","vowel","vower","voxel","vozhd","vraic","vrils","vroom","vrous","vrouw","vrows","vuggs","vuggy","vughs","vughy","vulgo","vulns","vulva","vutty","vying","waacs","wacke","wacko","wacks","wacky","wadds","waddy","waded","wader","wades","wadge","wadis","wadts","wafer","waffs","wafts","waged","wager","wages","wagga","wagon","wagyu","wahoo","waide","waifs","waift","wails","wains","wairs","waist","waite","waits","waive","wakas","waked","waken","waker","wakes","wakfs","waldo","walds","waled","waler","wales","walie","walis","walks","walla","walls","wally","walty","waltz","wamed","wames","wamus","wands","waned","wanes","waney","wangs","wanks","wanky","wanle","wanly","wanna","wants","wanty","wanze","waqfs","warbs","warby","wards","wared","wares","warez","warks","warms","warns","warps","warre","warst","warts","warty","wases","washy","wasms","wasps","waspy","waste","wasts","watap","watch","water","watts","wauff","waugh","wauks","waulk","wauls","waurs","waved","waver","waves","wavey","wawas","wawes","wawls","waxed","waxen","waxer","waxes","wayed","wazir","wazoo","weald","weals","weamb","weans","wears","weary","weave","webby","weber","wecht","wedel","wedge","wedgy","weeds","weedy","weeke","weeks","weels","weems","weens","weeny","weeps","weepy","weest","weete","weets","wefte","wefts","weids","weigh","weils","weird","weirs","weise","weize","wekas","welch","welds","welke","welks","welkt","wells","welly","welsh","welts","wembs","wends","wenge","wenny","wents","weros","wersh","wests","wetas","wetly","wexed","wexes","whack","whale","whamo","whams","whang","whaps","whare","wharf","whata","whats","whaup","whaur","wheal","whear","wheat","wheel","wheen","wheep","wheft","whelk","whelm","whelp","whens","where","whets","whews","wheys","which","whids","whiff","whift","whigs","while","whilk","whims","whine","whins","whiny","whios","whips","whipt","whirl","whirr","whirs","whish","whisk","whiss","whist","white","whits","whity","whizz","whole","whomp","whoof","whoop","whoot","whops","whorl","whort","whose","whoso","whows","whump","whups","whyda","wicca","wicks","wicky","widdy","widen","wider","wides","widow","width","wield","wiels","wifed","wifes","wifey","wifie","wifty","wigan","wigga","wiggy","wight","wikis","wilco","wilds","wiled","wiles","wilga","wilis","wilja","wills","willy","wilts","wimps","wimpy","wince","winch","winds","windy","wined","wines","winey","winge","wings","wingy","winks","winna","winns","winos","winze","wiped","wiper","wipes","wired","wirer","wires","wirra","wised","wiser","wises","wisha","wisht","wisps","wispy","wists","witan","witch","wited","wites","withe","withs","withy","witty","wived","wiver","wives","wizen","wizes","woads","woald","wocks","wodge","woful","wojus","woken","woker","wokka","wolds","wolfs","wolly","wolve","woman","wombs","womby","women","womyn","wonga","wongi","wonks","wonky","wonts","woods","woody","wooed","wooer","woofs","woofy","woold","wools","wooly","woons","woops","woopy","woose","woosh","wootz","woozy","words","wordy","works","world","worms","wormy","worry","worse","worst","worth","worts","would","wound","woven","wowed","wowee","woxen","wrack","wrang","wraps","wrapt","wrast","wrate","wrath","wrawl","wreak","wreck","wrens","wrest","wrick","wried","wrier","wries","wring","wrist","write","writs","wroke","wrong","wroot","wrote","wroth","wrung","wryer","wryly","wuddy","wudus","wulls","wurst","wuses","wushu","wussy","wuxia","wyled","wyles","wynds","wynns","wyted","wytes","xebec","xenia","xenic","xenon","xeric","xerox","xerus","xoana","xrays","xylan","xylem","xylic","xylol","xylyl","xysti","xysts","yaars","yabas","yabba","yabby","yacca","yacht","yacka","yacks","yaffs","yager","yages","yagis","yahoo","yaird","yakka","yakow","yales","yamen","yampy","yamun","yangs","yanks","yapok","yapon","yapps","yappy","yarak","yarco","yards","yarer","yarfa","yarks","yarns","yarrs","yarta","yarto","yates","yauds","yauld","yaups","yawed","yawey","yawls","yawns","yawny","yawps","ybore","yclad","ycled","ycond","ydrad","ydred","yeads","yeahs","yealm","yeans","yeard","yearn","years","yeast","yecch","yechs","yechy","yedes","yeeds","yeesh","yeggs","yelks","yells","yelms","yelps","yelts","yenta","yente","yerba","yerds","yerks","yeses","yesks","yests","yesty","yetis","yetts","yeuks","yeuky","yeven","yeves","yewen","yexed","yexes","yfere","yield","yiked","yikes","yills","yince","yipes","yippy","yirds","yirks","yirrs","yirth","yites","yitie","ylems","ylike","ylkes","ymolt","ympes","yobbo","yobby","yocks","yodel","yodhs","yodle","yogas","yogee","yoghs","yogic","yogin","yogis","yoick","yojan","yoked","yokel","yoker","yokes","yokul","yolks","yolky","yomim","yomps","yonic","yonis","yonks","yoofs","yoops","yores","yorks","yorps","youks","young","yourn","yours","yourt","youse","youth","yowed","yowes","yowie","yowls","yowza","yrapt","yrent","yrivd","yrneh","ysame","ytost","yuans","yucas","yucca","yucch","yucko","yucks","yucky","yufts","yugas","yuked","yukes","yukky","yukos","yulan","yules","yummo","yummy","yumps","yupon","yuppy","yurta","yurts","yuzus","zabra","zacks","zaida","zaidy","zaire","zakat","zaman","zambo","zamia","zanja","zante","zanza","zanze","zappy","zarfs","zaris","zatis","zaxes","zayin","zazen","zeals","zebec","zebra","zebub","zebus","zedas","zeins","zendo","zerda","zerks","zeros","zests","zesty","zetas","zexes","zezes","zhomo","zibet","ziffs","zigan","zilas","zilch","zilla","zills","zimbi","zimbs","zinco","zincs","zincy","zineb","zines","zings","zingy","zinke","zinky","zippo","zippy","ziram","zitis","zizel","zizit","zlote","zloty","zoaea","zobos","zobus","zocco","zoeae","zoeal","zoeas","zoism","zoist","zombi","zonae","zonal","zonda","zoned","zoner","zones","zonks","zooea","zooey","zooid","zooks","zooms","zoons","zooty","zoppa","zoppo","zoril","zoris","zorro","zouks","zowee","zowie","zulus","zupan","zupas","zuppa","zurfs","zuzim","zygal","zygon","zymes","zymic"]');

/***/ }),

/***/ "./src/assets/words/words-es.json":
/*!****************************************!*\
  !*** ./src/assets/words/words-es.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('["abajo","abeja","abono","abril","abrir","acaso","acera","acero","acida","acoso","actúa","acudo","acuso","adobo","agria","agrio","aguda","agudo","aguja","ajena","ajeno","albur","alero","aleta","algún","aliar","altar","alzar","alíen","amado","ameba","amiga","amigo","andar","andes","anexo","angel","ansia","antro","anual","apaga","apaña","apiño","apnea","apodo","apoyo","aquel","araña","arden","arder","arena","arepa","armar","aroma","arpía","arpón","arroz","asado","ataúd","atril","atroz","avena","avión","ayuda","azada","aérea","aéreo","bahía","baila","bajar","balsa","bamba","bambú","banal","banco","banda","bando","barba","barca","barco","barro","barón","batir","batón","bañar","beber","bella","bello","belén","besar","bicho","bidet","bingo","blusa","bolsa","bolso","bomba","bombo","botar","boxeo","bravo","braza","brazo","broma","bromo","bruja","brujo","bruto","buena","bueno","bufón","burla","burro","busco","busto","buzón","bóxer","cabal","caber","cable","cabra","cacao","cacho","cagar","caida","caigo","cairo","cajón","calca","caldo","calle","calma","calor","calvo","calza","cameo","campo","canal","canje","canoa","canon","canto","caoba","capaz","capta","capto","carga","cargo","carié","carne","carpa","carta","casco","caspa","cauce","causa","cauto","cavar","cazar","caída","cañón","cedro","cegar","celta","cenar","censo","cerca","cerco","cerda","cerdo","cerro","cesta","cesto","chica","chico","chile","china","chino","chivo","choca","chula","chulo","ciega","ciego","cielo","cifra","cifro","cinco","circo","cismo","cisne","citar","civil","clara","claro","clase","clave","clavo","cloro","cobra","cobre","coche","cocoa","cofre","coger","colmo","color","combo","comer","congo","copia","coral","corre","corta","corto","costa","crear","creer","crema","criar","cromo","cruce","crudo","cruel","cuero","cueva","culta","culto","cupón","curro","cursi","curso","curva","danza","dañar","deber","decir","deseo","dicta","dieta","digno","diodo","diosa","disco","doblo","dogma","doler","dolor","donar","dosis","drama","droga","ducha","dudar","duelo","dueña","dulce","dupla","duque","dátil","débil","dócil","dólar","dónut","ebrio","enana","enano","encia","enero","erizo","error","espía","esquí","estoy","exijo","faena","falda","falla","fallo","falsa","falso","falta","farol","fauna","fauno","favor","fecha","feliz","feria","feroz","fetal","fibra","fiera","firma","firme","fisco","flaca","flaco","flama","floja","flora","flota","fluir","flujo","flúor","folio","forja","forma","forro","fotón","frase","freno","fresa","freír","frita","fruta","fruto","fuego","fuera","fugar","fumar","furia","furor","fusil","futón","fácil","fémur","fénix","fósil","gallo","gamba","ganar","gansa","ganso","gasto","genia","gnomo","golfo","golpe","gorda","gorra","gotea","goteo","grama","grano","grasa","gripe","guapa","guapo","guiar","guion","hebra","hecho","helar","helio","herir","hiato","hielo","hiena","himno","hincó","hogar","hojea","hongo","honor","honra","horda","horno","hotel","hueco","hueso","huevo","huida","humor","hurto","hábil","icono","ictus","ideal","ilesa","ileso","impar","india","indio","ingle","jabón","japón","jaque","jarra","jaula","joder","juego","jugar","julio","junio","junta","junto","karma","kayak","kenia","koala","labio","labor","laica","latir","latín","latón","leche","lecho","legal","legua","lenta","lento","leona","lepra","letal","letra","liana","libra","libre","libro","liceo","lider","ligar","limón","linda","lirio","lista","litio","litro","llaga","llama","llenó","local","logro","lucha","lucho","lucir","luego","lugar","lunar","lápiz","láser","látex","lémur","líder","línea","macho","madre","mafia","magia","magma","magna","magno","magra","magro","malta","mamba","mambo","mamut","manco","mando","mango","mansa","manso","manta","manía","marca","marco","marea","marzo","mayor","media","medio","medir","menor","menta","mente","mesón","metal","meter","metro","miedo","minar","miope","misil","mixta","mixto","modal","modas","mojar","moler","momia","monja","monje","monte","monto","moral","morir","mosca","motel","motor","motín","mudar","mueca","muela","muero","mujer","multa","mundo","mural","museo","musgo","módem","móvil","nadal","nadar","nadie","narco","nariz","negar","negra","negro","nieto","nieve","ninja","nivel","nobel","noble","noche","norma","norte","novia","novio","nuera","nueve","nuevo","nunca","oasis","obesa","obeso","obvia","obvio","ocaso","ocupa","odiar","oeste","oigan","orden","orina","oruga","ostra","otoño","oveja","ovulo","oxido","ozono","pacto","padre","pagar","palco","palma","palmo","panal","panda","panel","papel","pared","parte","parto","pasar","paseó","pasta","patio","pausa","pauta","pañal","peaje","pecar","pecho","pedir","pegar","peine","pelar","pelea","perla","perra","perro","pesar","pesca","pezón","piano","pieza","pinza","piojó","pista","pitar","pizca","pizza","placa","plaga","plana","plano","plata","plato","playa","plaza","plena","pleno","plomo","pluma","poder","poema","poeta","polar","polea","polen","polio","pollo","polvo","posar","prado","praga","presa","preso","prima","primo","prisa","pulpa","pulpo","pulso","punta","punto","puñal","pádel","pívot","píxel","quedo","queja","quema","queso","quien","rabia","racha","radar","radio","rango","rapel","rasgo","rasta","ratón","rayón","razón","razón","recta","recto","regar","regio","regla","reina","reino","relax","reloj","remar","revés","rezar","riego","rifle","rigor","rimar","risas","ritmo","rival","robar","roble","robot","rocio","rodar","rodeo","rollo","rombo","romeo","rompe","rompo","ronda","rotar","rotor","rubia","rubio","rueda","rugby","ruido","ruina","rumbo","rumor","rural","rusia","sabio","sabor","sacar","salir","salmo","salsa","salud","salvo","samba","sanar","sauna","savia","secta","sedar","segar","según","selva","seria","serie","serio","sesgo","sexto","señal","señor","sidra","siega","siego","siete","sifón","signo","silla","simio","sismo","sitio","sobra","solar","soplo","sorda","sordo","soñar","subir","sucia","sucio","sudar","sudor","suelo","suena","suero","sueña","sueño","sufro","suiza","sushi","sutil","tabla","talar","tango","tapiz","tarde","tarea","tarot","techo","tecla","tedio","tejer","temor","tempo","tenaz","tener","tengo","tenis","tenor","termo","terna","tesis","tesón","texto","teñir","tibio","tigre","tilde","tinta","tinte","tirar","titan","tocar","toldo","tonta","tonto","toque","torre","torso","torta","total","traga","traje","trama","tramo","traza","tribu","tropa","troya","trozo","tumor","turba","turco","turno","túnel","union","usted","usual","vació","vacío","valla","valle","vapor","varón","vejez","vello","veloz","venda","viaje","vibra","vieja","viejo","vigor","villa","viral","virar","virgo","vista","visto","viuda","viudo","vivir","volar","votar","vídeo","yelmo","yerba","zebra","zorra","zorro","zurda","zurdo","ábaco","ácida","ácido","álbum","ámbar","ángel","ánimo","árabe","árbol","átomo","épica","épico","ética","ético","éxito","ígneo","ópera","óvalo","óxido","única","único","útero"]');

/***/ }),

/***/ "./src/assets/words/words-ru.json":
/*!****************************************!*\
  !*** ./src/assets/words/words-ru.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('["аарон","аббас","аббат","абвер","абдул","абель","абзац","аборт","абрам","абрах","абрек","абрис","абхаз","авалс","аванс","авать","авель","авеню","авось","аврал","аврор","автор","автра","агата","агеев","агент","аглый","агнец","агния","адаме","адамс","адача","аддис","аддон","адель","адепт","аджан","адлер","админ","адрес","аждый","азарт","азиат","айзек","айрин","акаев","акать","акико","акиро","актер","актив","актор","актёр","акула","акциз","акция","алекс","алена","алеся","алеть","алеша","алжир","алиби","алиев","алина","алиса","алита","алить","алкаш","алкид","аллан","аллах","аллен","аллея","аллюр","алмаз","алмат","алрос","алтай","алтын","альба","альдо","алька","альма","альпы","альфа","алёна","алёша","амбал","амбар","амбер","амвон","амеба","амели","аметр","аминь","ампир","анапа","анард","анаша","анвар","ангар","ангел","англо","ангол","ангро","андре","анзор","анима","аниме","анита","анить","аннал","аннан","аннет","анонс","антей","антип","антон","анунн","анфас","анька","анюта","аорта","арабо","арбат","арбуз","арвид","аргон","аргос","аргун","аргус","ареал","арена","арест","ариец","арина","аркан","арлин","арман","армен","армин","армия","арсен","артем","артур","артём","архив","аршин","асеев","аскар","аскет","аслан","аспид","астан","астап","астер","астма","астор","астра","аська","атака","атлас","атлет","атолл","аттак","аудио","аудит","аузан","аушев","афган","афера","афина","афины","афиша","ахать","ахерн","ахилл","ахмад","ахмат","ахмед","ахмет","ацтек","ачать","ашрам","баать","бабай","бабий","бабин","бабич","бабка","бабки","бабло","багаж","багир","багор","бадди","баден","бадер","бадри","бадья","базар","базен","базис","байда","байер","байка","балда","балет","балин","балка","балло","бамба","банан","банда","банка","барак","баран","барби","бардо","баржа","барин","барка","барни","барнс","барон","барри","барто","барыш","басня","басов","басок","баста","батай","батон","батум","батут","батый","бауэр","баффи","бахай","бахча","бачок","башка","башня","башта","бгуир","бдить","беата","бегло","бегом","бегун","бедно","бедро","бейли","бекас","бекон","белаз","белка","белла","белль","белов","белок","белые","белый","белье","бельё","бенни","бенуа","бердо","берег","берет","берия","берка","берло","бернс","берри","берта","берём","берёт","бесси","бетон","бетси","бетти","бидон","бизон","бийск","билан","билет","билиа","билли","билль","бинго","биржа","бирка","бирма","бирон","бирюз","бисер","битва","битлз","битов","битум","битый","битье","битюг","благо","блажь","бланк","бланш","блейд","блейз","блейк","блеск","блисс","блица","блоха","блуза","блюдо","блядь","блять","бляха","бобби","бобер","бобик","богач","бодро","бодун","божие","божий","божия","божок","боинг","бойко","бойня","бокал","боков","более","болид","бомба","бомер","бонна","бонни","бонус","бордо","борец","борис","боров","борон","босой","босяк","ботва","бочка","бочок","бошка","браво","брага","брамс","брана","бранд","брань","брать","браун","брейк","брейн","бремя","бренд","брест","бреть","брехт","брешь","бриан","бридж","бритт","брить","бровь","бронх","бронь","броня","брошь","брукс","бруно","брысь","брэнд","брюки","брюхо","бубен","бугай","бугор","будда","будка","будни","будто","буйно","буква","букер","букет","букин","булат","булка","буллз","бумер","бунин","бунич","бунша","буран","бурда","бурка","бурно","бурун","бурый","бусин","бутик","бутов","бутон","буфер","буфет","бухта","быдло","быков","былин","былое","былой","былый","бытие","бычий","бычок","бьюик","бэкон","бюсси","бёдра","вааще","вагин","вагит","вагон","вадик","вадим","важно","вакар","валар","валер","валет","валик","валка","валов","валуа","валуй","валун","вальс","валют","ванда","вание","ванин","ванна","варка","варяг","васек","васин","васко","ватка","вафля","вахта","ваший","ваять","вбить","вброд","вверх","ввиду","вволю","ввысь","вгтрк","вдали","вдаль","вдвое","вдова","вдоль","вдруг","вебер","вегас","ведро","ведёт","везде","везти","везёт","велик","венгр","венец","веник","венок","вепрь","верба","верди","верин","верка","верно","верой","верст","верфь","верхи","веско","весло","весна","вести","весть","ветвь","ветер","ветка","вечер","вечно","вещий","веять","взвод","вздор","вздох","взлет","взлом","взмах","взнос","взрыв","взято","взять","видак","видео","видик","видно","визир","визит","вийти","вилка","вилла","вилли","винда","винер","винни","винно","винцо","винчи","виола","вираж","вирус","вирши","виски","висла","висок","витек","витой","виток","витте","витёк","вихрь","вишна","вишня","вклад","вкось","вкруг","вкупе","влага","влево","влечь","влить","влксм","вмест","внизу","внове","вновь","внять","вобла","вобще","вовек","вовик","вовка","вовне","вовсе","вовсю","водил","водка","водно","вожак","вождь","вожжа","возвр","возле","возня","воить","война","войно","войти","вокал","волан","волга","волго","волей","волин","волна","волок","волос","волхв","вольт","вольф","вопль","ворей","ворон","ворот","ворох","ворье","вотум","вошёл","воють","вояка","впору","впрок","враки","врата","врать","врека","время","вроде","врозь","врыть","всего","вслед","вслух","всход","всюду","всяко","втора","втрое","вуаль","вудро","вулич","вульф","вциом","вчера","вширь","вшить","въезд","выбор","вывих","вывод","вывоз","выгод","выгон","выдох","выдра","выезд","вызов","выйти","выкуп","вылет","вылов","вынос","выпад","выпас","вырез","выход","вычет","вышка","вьюга","вэдом","вязка","вялый","вятка","вящий","гаага","габор","гаван","гавно","гагра","гадко","газик","газон","гаити","гайдн","гайка","галер","галин","галич","галка","галоп","галуа","галун","гамак","гамма","гамов","ганди","ганин","гапон","гараж","гарем","гарет","гарик","гарин","гарри","гасан","гаусс","гашек","гашиш","гашка","гбайт","гвалт","гвидо","гдеть","гевин","гейне","гейтс","гейша","гелий","гелия","гелос","гемон","гений","генис","генка","геном","генри","генуя","георг","герат","герда","герой","гесер","гесса","гетто","гибдд","гибко","гидра","гиена","гипер","гирин","гитис","глава","главк","гладь","глаша","гленн","глина","глист","глоба","глубь","глупо","глухо","глушь","глыба","глядь","гметр","гнать","гнида","гниль","гнить","гнуть","гоббс","говно","говор","гоген","гогот","годар","годик","годок","голан","голда","голев","голем","голец","голль","голов","голод","голос","голуб","голый","гольф","гольц","гомер","гомик","гомон","гонец","гонка","гонки","гонор","горда","гордо","горец","горин","горка","горки","горло","горно","город","горох","горск","гость","готье","гошка","грамм","гранд","грант","грань","грасс","грать","графа","греза","грейс","греко","грета","греть","греча","гречь","грива","гриль","гримм","гриня","грипп","грить","гриша","грише","гроза","гросс","гроши","грубо","груда","грудь","грунт","групп","груша","грыжа","гряда","грязь","губка","гувер","гудок","гулаг","гулко","гуляш","гумно","гунар","гупер","гурий","гурик","гурия","гуров","гусар","гусев","гусли","густо","гущин","давай","давид","давка","давно","давос","дайте","далай","далее","дамба","дамка","дания","данко","данон","данте","дарий","даром","дарси","дарья","дацан","дачка","дашка","даёшь","дбъем","дварф","дверь","двина","ддить","дебби","дебет","дебил","дебор","дебри","дебют","девиз","девка","девон","дедал","дедка","дедов","дедок","дейли","декан","декор","дележ","делец","делла","делон","дельт","дельф","демея","демин","демка","демон","демос","денди","денег","денек","дение","денис","денно","дерби","дерев","дерек","десна","детка","дефис","дешев","деять","джана","джать","джейд","джейк","джейн","джеки","джеми","джемс","джесс","джефф","джива","дживс","джилл","джина","джинн","джино","джинс","джоан","джобс","джойс","джоли","джони","джонс","джоэл","джуда","джуди","джули","дзать","дзинь","дзный","дзюдо","диана","диван","дивно","дидро","диего","диета","дикий","дикки","дикси","дилан","дилер","диман","димин","димка","димон","димыч","динар","динка","дирак","диско","дитер","длань","длина","длить","днако","днепр","днище","добби","добро","довод","догма","додик","дождь","дозор","доить","дойка","дойти","долго","долее","долли","долой","дольф","доман","домен","домик","домна","домой","донат","донец","донна","донни","донор","донос","донья","дорис","доска","досуг","досье","дотла","доход","дочка","дошёл","драйв","драка","драко","драма","драть","древо","дрейк","дрейф","дрель","дрема","дрить","дробь","дрова","дрожь","дрозд","друза","друид","дрянь","дубай","дубин","дубль","дубна","дубок","дугин","дудин","дудка","дудки","дужка","дукат","думец","дунай","дупло","дурак","дурно","дуров","дутов","дутый","душка","душно","душок","дуэль","дхарм","дыбом","дымка","дымок","дырка","дышло","дэббь","дэвид","дэвис","дэнни","дюбуа","дюжий","дюмон","дюран","дюруа","дядин","дятел","ебать","ебить","евнух","еврей","европ","евсей","егерь","едина","едкий","ежели","езира","ейчас","елать","елена","елень","ельзя","елька","ельня","емеля","емкий","еперь","ервый","ергей","ерема","ересь","ермак","ерный","ерсия","ершов","есаул","еслиб","ессно","етить","ефрем","ефрон","ехать","ешить","еыщлф","жабры","жадно","жажда","жакет","жалко","жанна","жарко","жаров","жатва","ждать","ждёшь","желез","желоб","желто","желчь","желый","жение","женин","жених","жерар","жердь","жерло","жером","жесть","жетон","живец","живой","живот","живём","живёт","жиган","жизнь","жилет","жилец","жилка","жилой","жилье","жильё","жираф","жирно","жирок","жисть","житие","житок","житье","жозеф","жокей","жолио","жорес","жорик","жорка","жрать","жрица","жуков","жулик","журка","жутко","жучка","жучок","забег","забой","забор","завал","завес","завет","завод","завоз","завуч","завёл","загар","загон","загул","задел","задор","заезд","зажим","зажчь","зазор","зазря","заика","зайка","зайти","заказ","закат","закон","залив","залог","замах","замер","замка","замок","замуж","замша","занос","запад","запал","запас","запах","запой","запор","заппа","зараз","зарем","зарок","заряд","засим","засов","засос","затем","затея","затон","затор","зафод","захар","захир","заход","зачем","зачет","зачин","зачёт","зашёл","звать","звезд","звено","зверь","звёзд","здесь","зебра","зевок","зелье","земль","земля","земть","зенин","зенит","зенон","зерно","зесть","зефир","зидан","зимин","зинка","зиять","злата","злато","злить","злоба","знамя","знать","зовёт","зойка","зомби","зонов","зорга","зорин","зорка","зорко","зотов","зреть","зримо","зрить","зубек","зубец","зубов","зубок","зуева","зураб","зыбин","зыков","зычно","зябко","иаков","ибить","ибсен","ивать","ивлев","ивняк","иврит","игнат","игнор","игорь","игрек","игрок","идеал","идеть","идиот","идёте","идёшь","иегов","иерей","иешуа","извив","извне","извод","извоз","изгиб","изгой","излет","излом","износ","изъян","изыск","иисус","икать","икона","икота","илиас","илона","ильза","ильзе","ильин","ильич","илька","ильяс","илюха","илюша","имать","иметь","имидж","имран","иначе","ингуш","индир","индия","индус","индюк","инжир","интер","интим","инуть","иоанн","иосиф","иоффе","ирвин","ирена","ирина","ирить","ириша","ирный","иртыш","исаак","исаев","исаия","исайи","исайя","исать","исида","искра","искус","ислам","испуг","иссык","истец","истин","исток","истра","истый","исход","исхом","итать","итого","иться","иудей","иудея","ифрит","ихние","ихний","ицхак","ичего","ищеев","йемен","йодль","йозеф","йорок","йосеф","йохан","кабак","кабан","кабул","кавер","каган","кагор","кадет","кадис","кадка","кадры","кадык","кадыр","казак","казах","казна","казнь","казус","кайма","кайуа","кайша","какао","каков","какой","какот","както","калач","калаш","калий","калиф","калле","камаз","камал","камин","кампф","камыш","канал","канар","канат","канва","канна","канны","канон","каноэ","канун","капец","капля","капот","капут","капха","карат","карга","карел","карен","карий","карин","карло","карма","карня","карта","касим","каска","касса","касси","каста","катар","катер","катин","катка","каток","катон","катыс","кафка","качка","качок","кашин","кашка","кащей","каюта","кбайт","квант","кварк","кварц","кваша","квест","квинт","квота","кгора","кевин","кедра","кейнс","кейси","келли","кельн","кельт","келья","келюс","кение","кения","кепка","керри","керчь","кефир","кешка","кибер","кивок","кидти","киево","кизия","киоск","киото","кипер","кипур","кирка","киров","кисет","киска","кисло","кисть","китай","китеж","китти","кихот","кишка","клава","кладь","клайд","клара","кларк","класс","клаус","клево","клейн","клерк","клеть","клещи","клика","клинт","клипа","клифф","клише","клоун","клуни","клюев","клюка","кляйн","кляча","книга","книзу","князь","кобра","ковер","ковёр","коган","когда","кодак","кодек","кодла","кожух","козак","козел","козий","козин","козлы","козни","козёл","койка","койот","кокон","кокос","колба","колер","колес","колея","колин","колит","колли","колок","колон","колос","колье","кольт","колян","колёс","комар","комет","комик","комод","комок","конан","конго","конев","конек","конец","конка","конни","конно","конон","конор","контр","конус","конфа","конюс","конюх","копие","копия","копна","копыл","копье","копья","коран","корее","кореш","корея","корин","корка","корма","короб","корфу","космы","косов","косой","коста","кость","костя","косый","косяк","котел","котик","котов","котор","кофей","кофта","кочан","кочка","кошка","кощей","кража","крайс","кракс","краса","крафт","кредо","крейг","креон","крест","криво","крить","кровь","кроль","кроме","крона","кросс","кроха","круга","крузо","круиз","круки","крупа","круто","круча","крыло","крыса","крыть","крыша","кряду","ксана","ксеня","ксюха","ксюша","ктото","кубик","кубок","кудри","кузен","кузин","кузов","кукиш","кукла","кулак","кулек","кулер","кулик","кулич","кулон","культ","кумир","кумыс","купер","купец","купля","купол","купон","купцы","кураж","курай","курва","курий","курок","курск","курсы","кусок","кусто","кутеж","кухня","куцый","кучер","кучка","кучма","кучно","кушак","куэйд","кцент","кэлум","кэрол","кэрри","кювет","кямал","лабаз","лавин","лавка","лавра","лавры","лагун","ладан","ладен","ладно","ладог","ладья","лазер","лайза","лайка","лайра","лакан","лакей","лакун","ламер","лампа","ланда","ланит","лапин","лапка","лаппо","лапть","лапша","ларек","ларец","ларик","ларин","ларри","ласка","лассо","ласти","латин","латыш","лаура","лаури","лацис","лаять","лгать","левак","левее","левин","левит","левка","левша","левый","легат","легко","ледок","лежак","лежка","лезть","лейба","лейбл","лейка","лейла","лейрд","лелик","лемех","лемма","лемур","ление","ленин","ленка","ленни","лента","леони","лепет","лепка","лепта","лесин","леска","лесли","лесок","лесть","летка","летно","летов","летом","летун","леший","лешик","лешка","лзать","лиана","ливан","ливия","лидер","лидия","лидка","лиепа","лиззи","лиззь","лизин","лизка","ликер","ликки","лилек","лилит","лилия","лиман","лимит","лимон","лимфа","линда","линза","линия","линка","линни","линус","линух","липка","лирик","лисий","литва","литий","литой","литтл","литье","лихач","лихва","лихой","лицей","личка","лично","лишай","лишек","ллойд","лобби","лобик","лобов","лобок","ловец","ловко","ловля","логан","логик","логин","логос","лодка","ложка","ложно","локки","локон","лолит","ломик","ломка","лонго","лондо","лопес","лопух","лоран","лорен","лорис","лорка","лосев","лоток","лотос","лохов","лохой","лоция","лошак","луара","лубок","лужин","лужок","лузер","лузов","луиза","лукас","лукач","лукин","лукич","лунин","лунка","лунок","лурье","лусия","лухан","лучик","лучок","лучше","лыжня","лысов","лысый","львов","льший","льюис","лэйбл","лэйзи","любви","любек","любка","любой","любый","люгер","людка","людно","люпин","лютер","лютик","лютня","лютый","ляжка","лямка","ляхов","лёшка","мавра","магда","магид","магия","магма","мадам","мадди","мадер","мажор","мазка","мазня","мазок","мазур","мазут","майер","майка","майкл","майлз","майлс","майор","макак","макар","макет","маков","макро","макси","малек","малер","малец","малик","малин","малко","малое","малфа","малый","малыш","маляр","маман","мамин","мамка","манан","манас","манат","манга","манго","манеж","манер","мание","мания","манка","манна","манси","манто","мантр","марат","марго","мардж","марек","маржа","марий","марик","марин","марио","марис","мария","марка","марко","маркс","марля","марта","марти","марфа","марша","марья","маска","масло","масон","масса","масти","масть","масуд","матер","матка","матти","матье","матюк","маунт","мафия","махно","мачта","машин","машка","мгимо","мегрэ","медея","медиа","медик","медяк","между","мезон","мейбл","мейер","мекка","мелко","мелок","менее","менно","мераб","мерин","мерка","мерно","мерри","мерси","мерфи","месса","мести","место","местр","месть","месье","месяц","метан","метис","метка","метко","метла","метля","метод","метро","мечта","мешок","миасс","мигом","мидас","мидия","мидти","мизер","мизес","миква","микки","милай","милан","милая","милка","милла","милли","милль","милов","милок","милый","минер","минет","минин","минор","минос","минск","минус","миома","мираж","мирза","мирно","мирок","мирон","мирра","миска","митин","митяй","михал","мишин","мишка","мишко","мишна","млеть","ммоль","мнить","много","мобил","могор","моддо","модем","модно","модус","может","можно","мозги","мойка","мойша","мойше","мокро","молва","молли","молот","молох","молча","монах","монро","монте","монти","моони","мопед","морда","морзе","морин","морис","мориц","мория","мороз","морок","моряк","мосье","мотив","мотка","моток","мотор","мохов","мочка","мошка","мощно","мразь","мувик","мудак","мудро","мужик","музей","мулен","мулин","мулла","мульт","муляж","мумия","мурад","мурат","мурза","мурка","муром","мусин","мусор","мутко","мутно","муфта","мухин","мушка","мчать","мшэра","мымра","мысль","мытье","мышка","мышца","мэРин","мэгги","мэдди","мэйзи","мэнни","мэрия","мэрфи","мэтью","мюмла","мюрат","мягко","мятеж","мятый","мячик","мёдом","набат","набег","набок","набор","навар","навек","навес","навет","навка","навоз","навои","навык","наган","нагло","нагой","надел","надин","надир","надой","наезд","нажим","назад","назар","назло","наиль","наина","найти","наказ","накал","накат","налет","налим","налог","намаз","намек","намёк","нанси","наоми","напев","напор","нарва","нарды","народ","нарты","нарыв","наряд","насар","насос","насть","настя","натан","натах","натка","наука","нафик","нахал","нахер","нация","начал","наший","нашёл","наяву","небес","невод","негде","недра","недуг","нежно","нейро","нейти","некий","некто","нелид","нелла","нелли","неман","немец","немка","немой","ненец","непал","непир","нерон","нести","несть","несёт","нетто","нефть","неход","нечто","нешто","нигде","нигер","низко","никак","никки","никой","никон","никра","никто","нильс","нимфа","нинка","нитка","ницца","ницше","ничей","ничто","ничья","нищая","нищий","нметр","новак","новик","новое","новый","ножик","ножка","ножны","нокия","нолик","номер","нонна","норка","норма","норов","носик","носов","носок","ность","нотка","ночка","нощно","ноэль","нудно","нужда","нужно","нукер","нутро","нцент","нынче","нытик","нытье","нэнси","нюанс","нюрка","оазис","обвал","обвод","обгон","обжиг","обжор","обзор","обида","обить","обком","облак","облет","облик","облом","обман","обмен","образ","обрез","оброк","обруч","обрыв","обрый","обряд","обувь","обуза","обуть","обход","общак","общее","общий","объем","объём","обыск","овать","оверт","овный","овощи","овраг","овсем","овцын","огайо","огнев","огнём","огонь","огрех","огюст","одать","одеть","одный","одурь","ожить","оземь","озеро","озить","озноб","океан","окись","оккам","оклад","оклик","оковы","около","окрас","окрик","округ","оксид","октав","октор","окунь","олеко","олень","олеся","олеша","олимп","олифа","олный","олово","ольга","олька","олько","ольха","ольше","омега","омлет","омыть","онега","оникс","онять","опала","опека","опель","опера","опиат","опись","опить","опиум","оплот","опора","опрос","оптик","опция","опять","орава","орать","орган","оргия","орден","ордер","ореол","орест","орион","орлан","орлов","орошо","орсон","орфей","орхан","осаго","осада","осень","осетр","осина","оскал","оскар","оскол","ослик","осман","особа","особо","особь","осока","остап","остер","остин","остов","остро","осыпь","отара","отбой","отбор","отвал","отвар","отвес","ответ","отвод","отгул","отдел","отдых","отель","отеть","отечь","отжим","отзыв","отказ","откат","откос","откуп","отлет","отлив","отлов","отмен","отпад","отпор","отрез","отрог","отрок","отрыв","отряд","отсев","отсек","отток","оттон","отход","отцов","отчет","отчий","отчим","отчёт","отшиб","отъем","оффис","офшор","охать","охват","охота","очему","очень","очерк","очить","очный","ощупь","пабло","павел","павич","падеж","падла","падре","пазик","пайка","пакет","палас","палат","палач","палаш","палец","палка","палуб","палый","палыч","памир","панам","панда","панин","панно","панов","паоло","папик","папин","папка","папуа","парад","париж","парик","парис","парка","паром","парта","парус","парча","паста","пасти","пасть","пасха","патат","патер","патио","патэк","пауза","пауло","пауль","пауэр","пафос","пахан","пахра","пацан","пачка","пашин","пашка","пашня","паять","певец","пегас","пегаш","пегги","пегий","педик","педро","пейдж","пекин","пекло","пелон","пенал","пенат","пенек","пенза","пение","пенис","пенка","пенни","пенок","пенье","пепел","пеппи","пепси","перед","перес","перец","перма","пермь","перри","перси","перст","перун","перье","песах","песец","песик","песнь","песня","песок","петер","петин","петля","петри","петро","петух","печка","пеший","пешка","пещер","пивко","пивок","пидар","пидор","пижон","пизда","пикап","пикет","пилар","пилат","пилка","пилон","пилот","пинка","пинок","пипец","пират","пирог","писак","писец","питер","питие","питон","питье","пифия","пихта","пицца","плавт","пламя","планк","пласт","плата","плато","плаха","плебс","плева","плеер","плейс","племя","плеск","плеть","плечо","плешь","плита","плоть","плохо","плыть","пнуть","побег","побои","повар","повод","повёл","погон","подле","подло","подол","поезд","пожар","позже","позна","позор","позыв","поиск","поить","пойло","пойма","пойти","показ","покер","покои","покой","покос","полет","полив","полин","полип","полис","полит","полка","полли","полна","полно","полог","полоз","полон","полый","полюс","поляк","полёт","помет","помин","помои","помол","помор","помпа","понеж","понос","попка","попов","поппи","попса","порез","порка","порно","порог","порой","порок","порох","порри","порта","порто","порту","порча","порше","порыв","посад","посев","после","посло","посол","посох","посул","посыл","потек","поток","потом","потоп","поход","почва","почем","почет","почин","почка","почта","почти","почто","пошиб","пошив","пошло","пошёл","поэма","правд","право","прага","прайм","прайс","прана","прать","предо","прека","пресс","прием","прима","принц","притч","прить","причт","приют","приём","проба","прога","проем","проза","произ","пройд","промо","проон","пропп","просо","проты","профи","прочь","пруст","прыть","прядь","пряжа","прямо","псалм","псало","псина","психа","психо","псков","птаха","птица","пуаро","пудра","пульс","пульт","пунин","пункт","пупок","пурга","пусто","пусть","путем","путин","путём","пучок","пушка","пушок","пущай","пущий","пчела","пшено","пылко","пысюк","пытка","пышка","пышно","пьеро","пьеса","пьяни","пьяно","пьянь","пятак","пятая","пятка","пятно","пяток","пятый","рабби","рабин","рабле","работ","равда","равно","радар","радек","раджа","радий","радин","радио","радиф","разве","разин","разно","разок","разом","разум","раиса","райан","райка","райли","район","ракет","ралли","ральф","рамба","рамза","рамка","рамон","рампа","ранее","ранец","ранка","ранчо","расин","расти","растр","расул","рауди","рауль","раунд","рафик","рафис","рахит","рация","рачок","рашид","рвань","рвать","рвота","ргаля","ребек","ребро","ребус","регби","регги","регис","редер","реджи","редко","редут","режим","режис","резак","резво","резец","резка","резко","резня","резон","резун","резус","рейка","рейли","реймс","рекер","релиз","рельс","рембо","ренан","ренат","рента","репин","репка","рерих","рести","ретро","речка","решка","реять","ржать","ривер","риган","ридли","рикки","рикша","римма","ринат","ринго","рипли","риска","ритка","рифма","ришар","робби","робер","робин","робко","робот","ровен","ровно","ровня","роган","рогов","родин","родич","родня","родос","рожок","рожон","розга","розги","розен","рознь","розов","рокер","рокот","ролан","ролик","роллс","рольф","роман","ромео","ромка","ромул","ронда","ронни","ропот","росия","росно","росси","росто","ротик","ротор","рощин","рояль","рсдрп","рсфср","ртуть","рубеж","рубен","рубец","рубин","рубка","рубль","рубоп","ругий","рудик","рудин","рудис","ружье","ружьё","руина","руины","рукав","рулез","рулет","рулон","рулём","румат","румын","рунет","рупия","рупор","русак","русич","русло","русса","руссо","русый","ручей","ручка","рыбак","рыбий","рыбка","рывок","рыжий","рыжик","рыжов","рыков","рынок","рысак","рысца","рытье","рычаг","рьяно","рэйко","рэкет","рэмбо","рэнди","рэсси","рюмин","рюмка","рюрик","рябов","рябой","рядок","рядом","ряска","рёбра","сабль","сабля","саван","савва","савик","савин","саган","садик","садок","салат","салим","салли","салом","салон","салун","салют","самба","самбо","самец","самир","самка","самый","санди","санек","сание","санин","санки","санкт","санта","санчо","саныч","сапер","сапог","сарай","саров","сарра","сартр","сатан","сатин","сатир","сауна","саунд","сафин","сафир","сахар","сачок","сашин","сашка","сашок","сбить","сбоку","сборы","сброд","сброс","сбруя","сбыть","свара","свать","сваха","свежо","сверх","света","свеча","свинг","свист","свита","свить","свифт","своий","свора","свояк","своём","свыше","связь","свято","сглаз","сдать","сдача","сдвиг","сдуру","сдуть","сеанс","север","севка","сегда","седан","седло","седня","седов","седой","седок","сезар","сезон","сеймо","секта","селин","селия","селый","семга","семен","семин","семпл","семье","семья","семён","сенат","сеной","серго","серия","серов","серый","сестр","сесть","сетка","сеять","сжато","сжать","сжечь","сзади","сибур","сивас","сивка","сивый","сигар","сигма","сидни","сидор","сизиф","сизов","сизый","силач","силок","силён","симба","симка","симон","сингл","сингх","синди","синий","синод","синус","синяк","сипло","сирин","сирия","сироп","сирый","сисоп","ситец","сифон","сиэтл","сиять","скала","скарб","скать","скаут","сквер","скетч","склад","склеп","склон","скляр","скоба","ского","сколь","скоро","скотт","скотч","скрип","скука","скула","скунс","скупо","слабо","слава","слайд","слайт","сланж","слать","слева","слеза","слейд","сленг","слепо","слечь","слива","слизь","слить","слово","сломя","слота","слоун","слуга","слыть","слышь","слюна","слюни","слёзы","смарт","смело","смена","смерч","смерш","смесь","смета","сметь","смола","смоль","смотр","смочь","смрад","смута","смысл","смыть","смять","снедь","снейп","снизу","снова","снорк","сноха","снять","собак","собес","собор","совер","совет","совка","совок","содом","созыв","сойка","сойти","сокол","солли","солнц","солод","сомин","сомов","сонат","сонет","сонин","сонно","сопка","сопли","сопло","сопля","сорин","сорок","сорос","сорри","сосед","сосец","соска","сосна","сосок","сосуд","сотка","сотня","сотый","софит","софия","софья","социо","сочно","сошка","сошёл","спазм","спасо","спать","спбгу","спесь","спеть","спина","спирс","спирт","спить","спица","сплав","сплин","сплит","споро","спорт","спрей","спрос","спрут","спуск","сразу","срать","среда","среди","средь","сроду","ссать","ссора","ссуда","стада","стадо","стайн","сталь","станс","старк","старп","старр","старт","стася","стать","ствол","створ","стезя","стейк","стека","стела","стена","стенд","степа","степь","стерн","стерх","стеша","стиви","стиль","стиля","стить","стихи","стоик","столб","столп","столь","стома","стопа","стоун","стояк","страж","страз","стран","страх","стриж","стрим","стрип","стрит","строй","строк","строн","строп","струя","стужа","ступа","стыть","судак","судан","судия","судно","судья","суета","сукин","сукно","сумин","сумка","сумма","супер","сурок","сусло","сутки","сутра","суфия","сухов","сухой","сухум","сучий","сучка","сучок","сушка","сущее","сущий","сфера","схема","сходу","схрон","сцена","сцука","счеты","счёта","счёте","счёту","сшить","съезд","съеть","сынок","сырой","сырок","сырье","сытин","сытно","сытый","сычев","сыщик","сэмми","сэнди","сюжет","сюзан","сюита","табак","табло","табор","табун","тагил","тагор","тазик","таити","таить","тайга","тайка","таймс","тайна","тайно","также","такий","таков","такое","такой","такою","такса","такси","талер","талиб","талия","талон","талый","танах","танго","танец","танин","танис","танит","танка","танок","тантр","тапка","таран","тарас","тарик","тариф","тарту","тарый","татар","тауба","тауэр","тахта","тацит","тачка","таять","тварь","тверь","твист","твоею","твоём","театр","тедди","тезис","тезка","тейео","текст","телек","телец","телик","телка","телок","тембр","темза","темка","темно","тенге","тенор","тепло","терек","терем","терка","термы","терра","терри","тесак","тесей","тесно","тесто","тесть","тетка","техас","техно","течка","течёт","тибет","тигра","тилли","тимка","тимми","тимур","типаж","тираж","тиран","тиски","титан","титов","титул","тихий","тихон","тишин","тишка","ткань","ткать","ткуда","тлеть","тобик","товар","тогда","токио","токмо","толик","толки","толко","толпа","толща","толян","томас","томат","томаш","томек","томик","томин","томка","томми","томно","томск","тоник","тонко","тонна","тонус","топаз","топик","топка","топор","топот","торба","торби","торги","торен","торец","торий","торос","тоска","точка","точно","тошно","тощий","трава","травм","тракт","транс","транш","трапс","трата","траур","трейд","трека","трель","тренд","треск","трест","треть","триер","трико","тромб","тропа","тротт","трояк","троян","труба","труда","трусы","труха","трюмо","тубус","тугий","тугой","тузик","тулон","тулуп","тумак","туман","тумба","тумов","тунец","туник","тунис","тупея","тупик","тупой","тупый","туран","турин","турка","турне","турок","туфля","туфта","тучер","тучка","тушка","тщета","тыква","тында","тычок","тюбик","тюнер","тюрин","тюрок","тюфяк","тягач","тяжба","тяжка","тяжко","тяпка","тёмно","тётка","тётки","уазик","уайти","убить","убого","убыль","убыть","увить","углич","угода","уголь","угоре","угорь","удаль","удача","удерж","удеть","удила","удить","ужели","ужель","узбек","уздцы","узкий","узник","уивер","уизли","уилер","уилли","уитня","уйгур","уйдёт","уклад","уклон","укроп","уксус","улать","улика","улисс","улица","ультр","умать","умело","уметь","умник","умный","умолк","умора","умрёт","умыть","ундин","унтер","унция","уныло","унять","уокер","уолдо","уолли","упечь","упрек","упырь","урбан","уретр","урнов","усама","усечь","усман","успех","устав","устин","устно","устой","уступ","устье","устюг","утеря","утеха","утечь","утиль","утить","уткин","утлый","ухать","ухват","учать","учеба","учить","учший","учёба","учёбу","учёбы","учёта","ушить","ушлый","ушной","ушный","ущерб","уэллс","уэльс","уэсли","уютно","фабио","фавор","фагот","фазан","фаина","файло","факел","факир","фалда","фанат","фанни","фапси","фарид","фасад","фасон","фатим","фауна","фауст","фаянс","федин","федор","федот","федра","фекла","фелис","фенол","ферзь","ферма","ферми","ферри","фетиш","фигня","фидер","физик","фикус","филин","филип","филон","фильм","финал","финик","финиш","финка","финно","фиона","фиорд","фирма","фихта","фишер","фишка","флаер","фланг","флейм","флетч","флинт","флирт","флойд","флора","флюид","фляга","фобия","фокин","фокка","фокус","фомин","фомич","фомка","форбс","форма","форте","форум","фотий","фотик","фотка","фотон","фраер","фраза","франк","франс","франт","франц","фрать","фрахт","фрейд","фрейм","фрейя","френд","френч","фрида","фродо","фромм","фронт","фрося","фрукт","фрэнк","фугас","фужер","фураж","фурия","фурор","фурье","фуфло","фьорд","фюрер","фёдор","хабад","хаген","хаджи","хадис","хазар","хайек","хайка","хайль","хайнц","хайям","хакер","халат","халва","халиф","хамас","хамец","хамид","хамыц","ханжа","ханис","ханка","ханко","ханна","ханта","харви","харля","хармс","харон","харчи","хасан","хасид","хатка","хатха","хачик","хаять","хвала","хвать","хворь","хвост","хедер","хейли","хелен","хенри","хеппи","херес","херли","херня","хетти","хешке","хилла","хилой","хилый","химер","химик","химия","химки","хинди","хиппи","хитон","хитро","хищно","хлеще","хлыст","хмель","хмуро","хмырь","хобби","хобот","хоган","ходжа","ходка","ходок","ходор","хокка","холин","холка","холла","холли","холмс","холод","холоп","холст","холуй","хомут","хомяк","хонда","хорек","хорхе","хоста","хохма","хохол","хохот","храма","хребт","хрека","хрень","христ","хроно","хруст","хрюша","хрясь","худло","худой","хуйня","хулио","хулия","хунта","хутор","хьюго","хэлло","хэппи","цадик","цапля","царев","целан","целка","целое","целый","ценза","центр","цепко","цехин","цигун","цинга","циник","ципко","цитат","цифра","цукки","цыган","цюрих","чабан","чавес","чайка","чакра","чалма","чалый","чапай","чарка","чарлз","чарли","часик","часок","часом","часто","часть","чашка","чаять","чегет","чегой","чейни","челка","челны","челси","чепец","червь","черед","через","череп","черно","чернь","черри","черта","чесно","честь","четки","четко","чехия","чехов","чехол","чечен","чечня","чешир","чешуя","чиано","чижик","чижов","чинно","чипсы","число","чисто","чметр","чрево","чсело","чтиво","чтить","чтобы","чтоль","чувак","чуваш","чугун","чудак","чудес","чудик","чудно","чудом","чужак","чужое","чужой","чукча","чулан","чулок","чумак","чурка","чутко","чуток","чутье","чучел","чушка","чуять","чёрно","чёрта","чёрту","чётко","шабат","шабаш","шавка","шагал","шажок","шайба","шайка","шакал","шакир","шакур","шалаш","шалва","шалун","шалый","шаман","шапка","шарик","шарль","шаров","шарон","шарый","шасси","шатер","шатко","шатов","шаттл","шатун","шафер","шахид","шахов","шахта","шашка","шварц","швейк","шейка","шейла","шелли","шельф","шепот","шерил","шериф","шерри","шесть","шибко","шивер","шилов","шимон","ширак","ширли","ширма","шитье","шифер","шишка","шкала","шквал","школа","шкура","шланг","шлейф","шлюха","шляпа","шмель","шмидт","шнапс","шнеур","шойгу","шопен","шорох","шорты","шоссе","шофер","шофёр","шохин","шпага","шпала","шпана","шпеер","шпиль","шпион","шпора","шприц","шрифт","штамм","штамп","штаны","штата","штаты","штейн","штерн","штиль","штифт","штора","шторм","штраф","штрих","штука","штурм","штырь","шубин","шубка","шулер","шулец","шульц","шуман","шумер","шумно","шумок","шурик","шурин","шурка","шуруп","шутер","шутка","шутов","шухер","шухов","шхуна","шэрон","щебет","щегол","щедро","щелка","щенка","щенок","щепка","щетка","щечка","щипцы","щиток","щукин","щучий","эванс","эвери","эверь","эгида","эдвин","эдгар","эдикт","эдный","эдуар","эйдос","эйлер","эйлин","эйлиф","эклер","экран","эксия","эксмо","экспа","экспо","элвис","элейн","элиан","элиза","элина","элиот","элита","эллен","эллин","эллис","элмер","элтон","эльба","эльза","элька","эльма","эльфа","элюня","эмаль","эмили","эмиль","энвер","энджи","эндрю","эннис","энный","энрон","энсон","эпоха","эразм","эраст","эрвин","эрзац","эрика","эрлих","эрнст","эрроу","эскиз","эссен","эстер","эстет","эсхил","этайн","этель","этиан","этика","этить","этнос","этьен","эфиоп","эфрон","эфрос","эштон","юбить","юджин","юдина","южнее","южный","юзать","юксар","юлиан","юлить","юлька","юнгер","юникс","юнион","юниор","юнкер","юнона","юноша","юрген","юрист","юркий","юркун","юрфак","юрьев","юрьич","яаков","яблок","явить","явный","ягода","ягуар","ядвиг","яичка","яичко","якобы","якорь","ямать","ямщик","янсон","японо","яранг","яркий","ярлык","ярцев","ясень","ясный","яство"]');

/***/ }),

/***/ "./src/translations.json":
/*!*******************************!*\
  !*** ./src/translations.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"en":{"locale":"en","name":"English","keys":["qwertyuiop","asdfghjkl","zxcvbnm"],"help":{"title":"How to play","desc":["Guess the <strong>WORDLE</strong> in six tries","Each guess must be a valid five-letter word. Hit the enter button to submit.","After each guess, the color of the tiles will change to show how close your guess was to the word."],"examplesTitle":"Examples","examples":{"correct":{"word":"space","highlight":0,"msg":"The letter <strong>S</strong> is in the word and in the correct spot."},"present":{"word":"abide","highlight":2,"msg":"The letter <strong>I</strong> is in the word but in the wrong spot."},"not-present":{"word":"wrong","highlight":4,"msg":"The letter <strong>N</strong> is not in the word in any spot."}},"enjoy":"Enjoy the game!"},"stats":{"title":"Statistics","wonTitle":"Congratulations, you won!","loseTitle":"Sorry, you lost!","correctAnswer":"The correct answer is: ","played":"Played","won":"Won","guessDist":"Guess discribution"},"settings":{"title":"Settings","dark":"Dark theme","contrast":"High Conrast","lang":"Language"},"reset":{"title":"Reset game","question":"Are you sure you want to reset the game?","yes":"Yes","no":"No"}},"es":{"locale":"es","name":"Español","keys":["qwertyuiop","asdfghjklñ","zxcvbnm"],"help":{"title":"Cómo jugar","desc":["Adivina la <strong>WORDLE</strong> en seis intentos","Cada conjetura debe ser una palabra válida de cinco letras. Pulse el botón Intro para enviar.","Después de cada suposición, el color de las fichas cambiará para mostrar qué tan cerca estuvo su suposición de la palabra."],"examplesTitle":"Ejemplos","examples":{"correct":{"word":"space","highlight":0,"msg":"The letter <strong>S</strong> is in the word and in the correct spot."},"present":{"word":"abide","highlight":2,"msg":"The letter <strong>I</strong> is in the word but in the wrong spot."},"not-present":{"word":"wrong","highlight":4,"msg":"The letter <strong>N</strong> is not in the word in any spot."}},"enjoy":"Disfruta el juego!"},"stats":{"title":"Estadísticas","wonTitle":"¡Felicitaciones, has ganado el juego!","loseTitle":"¡Lo siento, perdiste el juego!","correctAnswer":"La respuesta correcta es: ","played":"Jugadas","won":"Victorias","guessDist":"Distribución de conjeturas"},"settings":{"title":"Ajustes","dark":"Tema oscuro","contrast":"Alto contraste","lang":"Idioma"},"reset":{"title":"Reiniciar el juego","question":"¿Estás seguro de que quieres restablecer el juego?","yes":"Sí","no":"No"}},"ru":{"locale":"ru","name":"Русский","keys":["йцукенгшщзхъ","фывапролджэ","ячсмитьбюё"],"help":{"title":"Правила игры","desc":["Разгадай <strong>WORDLE</strong> за шесть попыток.","Каждая догадка должна быть допустимым словом из пяти букв. Нажми ввод для подтверждения.","После каждого предположения цвет букв будет меняться, чтобы показать, насколько предположение было близко к слову."],"examplesTitle":"Примеры","examples":{"correct":{"word":"вчера","highlight":0,"msg":"Буква <strong>А</strong> находится в разгадываемом слове на правильном месте."},"present":{"word":"шепот","highlight":2,"msg":"Буква <strong>П</strong> есть в разгадываемом слове, но в другом месте."},"not-present":{"word":"весна","highlight":4,"msg":"Буквы <strong>A</strong> нет в разгадываемом слове."}},"enjoy":"Приятной игры!"},"stats":{"title":"Статистика","wonTitle":"Поздравляем, ты выиграл!","loseTitle":"К сожалению ты проиграл!","correctAnswer":"Правильный ответ: ","played":"Сыграно","won":"Побед","guessDist":"Распределение побед"},"settings":{"title":"Настройки","dark":"Темная тема","contrast":"Высококонтрастная тема","lang":"Язык"},"reset":{"title":"Сброс игры","question":"Вы действительно хотите начать игру сначала?","yes":"Да","no":"Нет"}}}');

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
//# sourceMappingURL=bundle.1ba00740bd2f11aacf93.js.map