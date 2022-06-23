/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/prototype_5.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/prototype_5.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/prototype_5.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/olesyashevchenko/Documents/github/art/app/javascript/packs/prototype_5.js: Missing semicolon. (116:40)\n\n  114 |     var t = 0,\n  115 |       t0 = 1\n> 116 |     var step = getRandomArbitrary() * 15) + 4\n      |                                         ^\n  117 |\n  118 |     p.draw = () => {\n  119 |       p5.clear()\n    at Parser._raise (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:506:17)\n    at Parser.raiseWithData (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:499:17)\n    at Parser.raise (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:460:17)\n    at Parser.semicolon (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:3677:10)\n    at Parser.parseVarStatement (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:14459:10)\n    at Parser.parseStatementContent (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:14017:21)\n    at Parser.parseStatement (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:13942:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:14567:25)\n    at Parser.parseBlockBody (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:14558:10)\n    at Parser.parseBlock (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:14542:10)\n    at Parser.parseFunctionBody (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:13269:24)\n    at Parser.parseArrowExpression (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:13241:10)\n    at Parser.parseParenAndDistinguishExpression (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:12753:12)\n    at Parser.parseExprAtom (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:12321:23)\n    at Parser.parseExprSubscripts (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:11999:23)\n    at Parser.parseUpdate (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:11979:21)\n    at Parser.parseMaybeUnary (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:11954:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:11751:61)\n    at Parser.parseExprOps (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:11758:23)\n    at Parser.parseMaybeConditional (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:11728:23)\n    at Parser.parseMaybeAssign (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:11688:21)\n    at /Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:11646:39\n    at Parser.allowInAnd (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:13646:16)\n    at Parser.parseMaybeAssignAllowIn (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:11646:17)\n    at Parser.parseVar (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:14654:70)\n    at Parser.parseVarStatement (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:14458:10)\n    at Parser.parseStatementContent (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:14017:21)\n    at Parser.parseStatement (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:13942:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:14567:25)\n    at Parser.parseBlockBody (/Users/olesyashevchenko/Documents/github/art/node_modules/@babel/parser/lib/index.js:14558:10)");

/***/ })

/******/ });
//# sourceMappingURL=prototype_5-ae612e487837da899bcb.js.map