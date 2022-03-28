/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entity/single-responsibility-principle/email-service.ts":
/*!*********************************************************************!*\
  !*** ./src/entity/single-responsibility-principle/email-service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EmailService = void 0;\nclass EmailService {\n    constructor(config = {\n        from: 'email@email.com',\n        to: '',\n        content: ''\n    }) {\n        this.config = config;\n    }\n    static send() {\n        console.log('Sended...');\n    }\n}\nexports.EmailService = EmailService;\n\n\n//# sourceURL=webpack://solid/./src/entity/single-responsibility-principle/email-service.ts?");

/***/ }),

/***/ "./src/entity/single-responsibility-principle/item.ts":
/*!************************************************************!*\
  !*** ./src/entity/single-responsibility-principle/item.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Item = void 0;\nclass Item {\n    constructor(_name = '', _value = 0) {\n        this._name = _name;\n        this._value = _value;\n    }\n    get name() {\n        return this.name;\n    }\n    set name(value) {\n        this._name = value;\n    }\n    get value() {\n        return this._value;\n    }\n    set value(value) {\n        this._value = value;\n    }\n    isValid() {\n        if (!this._name)\n            return false;\n        if (this._value <= 0)\n            return false;\n        return true;\n    }\n}\nexports.Item = Item;\n\n\n//# sourceURL=webpack://solid/./src/entity/single-responsibility-principle/item.ts?");

/***/ }),

/***/ "./src/entity/single-responsibility-principle/order.ts":
/*!*************************************************************!*\
  !*** ./src/entity/single-responsibility-principle/order.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Order = void 0;\nconst shopping_cart_1 = __webpack_require__(/*! ./shopping-cart */ \"./src/entity/single-responsibility-principle/shopping-cart.ts\");\nclass Order {\n    constructor(_status = 'open', _shoopingCart = new shopping_cart_1.ShoppingCart(), _amount = 0) {\n        this._status = _status;\n        this._shoopingCart = _shoopingCart;\n        this._amount = _amount;\n    }\n    get status() {\n        return this._status;\n    }\n    set status(value) {\n        this._status = value;\n    }\n    get shoopingCart() {\n        return this._shoopingCart;\n    }\n    get amount() {\n        return this._amount;\n    }\n    set amount(value) {\n        this._amount = value;\n    }\n    close() {\n        if (this.shoopingCart.isValid()) {\n            this.status = 'closed';\n            return true;\n        }\n        return false;\n    }\n}\nexports.Order = Order;\n\n\n//# sourceURL=webpack://solid/./src/entity/single-responsibility-principle/order.ts?");

/***/ }),

/***/ "./src/entity/single-responsibility-principle/shopping-cart.ts":
/*!*********************************************************************!*\
  !*** ./src/entity/single-responsibility-principle/shopping-cart.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ShoppingCart = void 0;\nclass ShoppingCart {\n    constructor(itens = []) {\n        this.itens = itens;\n    }\n    getItens() {\n        return this.itens;\n    }\n    addItem(item) {\n        this.itens.push(item);\n    }\n    isValid() {\n        return !!this.itens.length;\n    }\n}\nexports.ShoppingCart = ShoppingCart;\n\n\n//# sourceURL=webpack://solid/./src/entity/single-responsibility-principle/shopping-cart.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst order_1 = __webpack_require__(/*! ./entity/single-responsibility-principle/order */ \"./src/entity/single-responsibility-principle/order.ts\");\nconst item_1 = __webpack_require__(/*! ./entity/single-responsibility-principle/item */ \"./src/entity/single-responsibility-principle/item.ts\");\nconst email_service_1 = __webpack_require__(/*! ./entity/single-responsibility-principle/email-service */ \"./src/entity/single-responsibility-principle/email-service.ts\");\nconst item1 = new item_1.Item();\nitem1.name = 'Camisa 01';\nitem1.value = 33.90;\nconst item2 = new item_1.Item();\nitem2.name = 'Camisa 02';\nitem2.value = 35.99;\nconst order = new order_1.Order();\norder.shoopingCart.addItem(item1);\norder.shoopingCart.addItem(item2);\nconsole.log(order);\nconsole.log(order.shoopingCart.getItens());\nconst amount = order.shoopingCart.getItens().reduce((acc, item) => {\n    acc += item.value;\n    return acc;\n}, 0);\nconsole.log('Order amount: ', amount);\nconsole.log('Cart is valid? ', order.shoopingCart.isValid());\nconsole.log('Order status: ', order.status);\nif (order.close()) {\n    console.log('Order OK...');\n    email_service_1.EmailService.send();\n}\n\n\n//# sourceURL=webpack://solid/./src/index.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;