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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./api/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/index.ts":
/*!**********************!*\
  !*** ./api/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Koa = __webpack_require__(/*! koa */ \"koa\");\nvar bodyParser = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./api/routes/index.ts\");\nvar lib_1 = __webpack_require__(/*! ./lib */ \"./api/lib/index.ts\");\nvar app = new Koa();\nvar PORT = process.env.PORT || 3000;\napp.use(bodyParser());\nlib_1.logger.info(\"Mount cards on /api/cards\");\napp.use(routes_1.cards.routes());\nvar server = app.listen(PORT, function () {\n    lib_1.logger.info(\"Listening on http://localhost:\" + PORT);\n});\n\n\n//# sourceURL=webpack:///./api/index.ts?");

/***/ }),

/***/ "./api/lib/index.ts":
/*!**************************!*\
  !*** ./api/lib/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar logger_1 = __webpack_require__(/*! ./logger */ \"./api/lib/logger.ts\");\nexports.logger = logger_1[\"default\"];\n\n\n//# sourceURL=webpack:///./api/lib/index.ts?");

/***/ }),

/***/ "./api/lib/logger.ts":
/*!***************************!*\
  !*** ./api/lib/logger.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar pino = __webpack_require__(/*! pino */ \"pino\");\nvar logger = pino({\n    level: 'trace',\n    prettyPrint: {\n        colorize: true,\n        // colorize: chalk.supportsColor, // --colorize\n        // crlf: false, // --crlf\n        // errorLikeObjectKeys: ['err', 'error'], // --errorLikeObjectKeys\n        // errorProps: '', // --errorProps\n        levelFirst: true,\n        // messageKey: 'msg', // --messageKey\n        // timestampKey: 'time', // --timestampKey\n        translateTime: true,\n        // search: 'foo == `bar`', // --search\n        ignore: 'pid,hostname' // --ignore\n    }\n} /*, 'log.json' */);\nexports[\"default\"] = logger;\n\n\n//# sourceURL=webpack:///./api/lib/logger.ts?");

/***/ }),

/***/ "./api/models/Card.ts":
/*!****************************!*\
  !*** ./api/models/Card.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar logger_1 = __webpack_require__(/*! ../lib/logger */ \"./api/lib/logger.ts\");\nvar Card = /** @class */ (function () {\n    function Card(data) {\n        if (data === void 0) { data = {}; }\n        var title = data.title, numbers = data.numbers;\n        this._title = title || 'Bingo';\n        this._numbers = numbers || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];\n        this._chunks = [];\n        var total = this._numbers.length;\n        if (total >= 10 && (total % 5) === 0) {\n            var batch = Math.floor(total / 5);\n            for (var i = 0, j = this._numbers.length; i < j; i += batch) {\n                this._chunks.push(this._numbers.slice(i, i + batch));\n            }\n        }\n    }\n    Card.prototype._shuffle = function () {\n        if (this._chunks.length === 5) {\n            for (var i = 0; i < 5; i++) {\n                var chunk = this._chunks[i];\n                for (var j = chunk.length - 1; j > 0; j--) {\n                    var k = Math.floor(Math.random() * (j + 1));\n                    var temp = chunk[j];\n                    chunk[j] = chunk[k];\n                    chunk[k] = temp;\n                }\n            }\n        }\n    };\n    Card.prototype._card = function () {\n        if (this._chunks.length === 5) {\n            this._shuffle();\n            var b = this._chunks[0].slice(0, 5);\n            var i = this._chunks[1].slice(0, 5);\n            var n = this._chunks[2].slice(0, 5);\n            n[2] = 'Free';\n            var g = this._chunks[3].slice(0, 5);\n            var o = this._chunks[4].slice(0, 5);\n            return {\n                title: this._title,\n                'B': b,\n                'I': i,\n                'N': n,\n                'G': g,\n                'O': o\n            };\n        }\n    };\n    Card.prototype.validate = function () {\n        var errors = [];\n        var total = this._numbers.length;\n        if (total < 10) {\n            errors.push('Two few numbers');\n        }\n        if ((total % 5) > 0) {\n            errors.push('Numbers not disable by five');\n        }\n        if (errors.length) {\n            return {\n                valid: false,\n                errors: errors\n            };\n        }\n        return {\n            valid: true\n        };\n    };\n    Card.prototype.generate = function (packs, pages, per) {\n        var cards = [];\n        for (var i = 0; i < packs; i++) {\n            var file = [];\n            for (var j = 0; j < pages; j++) {\n                var page = [];\n                for (var k = 0; k < per; k++) {\n                    page.push(this._card());\n                }\n                file.push(page);\n            }\n            cards.push(file);\n        }\n        return cards;\n    };\n    Card.prototype.debug = function () {\n        logger_1[\"default\"].debug(\"card: title: \" + this._title);\n        logger_1[\"default\"].debug(\"card: numbers: \" + JSON.stringify(this._numbers));\n        logger_1[\"default\"].debug(\"card: chunks: \" + JSON.stringify(this._chunks));\n    };\n    return Card;\n}());\nexports[\"default\"] = Card;\n\n\n//# sourceURL=webpack:///./api/models/Card.ts?");

/***/ }),

/***/ "./api/models/index.ts":
/*!*****************************!*\
  !*** ./api/models/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./api/models/Card.ts\");\nexports.Card = Card_1[\"default\"];\n\n\n//# sourceURL=webpack:///./api/models/index.ts?");

/***/ }),

/***/ "./api/renderers/index.ts":
/*!********************************!*\
  !*** ./api/renderers/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar json_1 = __webpack_require__(/*! ./json */ \"./api/renderers/json.ts\");\nexports.json = json_1[\"default\"];\nvar pdf_1 = __webpack_require__(/*! ./pdf */ \"./api/renderers/pdf.ts\");\nexports.pdf = pdf_1[\"default\"];\nvar zip_1 = __webpack_require__(/*! ./zip */ \"./api/renderers/zip.ts\");\nexports.zip = zip_1[\"default\"];\n\n\n//# sourceURL=webpack:///./api/renderers/index.ts?");

/***/ }),

/***/ "./api/renderers/json.ts":
/*!*******************************!*\
  !*** ./api/renderers/json.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar json = {\n    render: function (data) {\n        return data;\n    }\n};\nexports[\"default\"] = json;\n\n\n//# sourceURL=webpack:///./api/renderers/json.ts?");

/***/ }),

/***/ "./api/renderers/pdf.ts":
/*!******************************!*\
  !*** ./api/renderers/pdf.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar PDFDocument = __webpack_require__(/*! pdfkit */ \"pdfkit\");\nvar card = function (pdf, options) {\n    var x = options.x, y = options.y, headers = options.headers, rows = options.rows, width = options.width, height = options.height, columnSpacing = options.columnSpacing, rowSpacing = options.rowSpacing, onHeader = options.onHeader, onRow = options.onRow;\n    x = x || pdf.x;\n    y = y || pdf.y;\n    headers = headers || ['B', 'I', 'N', 'G', 'O'];\n    columnSpacing = columnSpacing || 15;\n    rowSpacing = rowSpacing || 5;\n    width = width || pdf.page.width - pdf.page.margins.left - pdf.page.margins.right;\n    height = height || 7 * (pdf.heightOfString('X') + rowSpacing);\n    onHeader = onHeader || (function () { });\n    onRow = onRow || (function (row, i) { });\n    var headerColor = '#666666';\n    var startX = x;\n    var startY = y;\n    var rowHeight = pdf.heightOfString('');\n    var columns = headers.length;\n    var computeRowHeight = function (row) {\n        var result = 0;\n        row.forEach(function (cell) {\n            var cellHeight = pdf.heightOfString(cell, {\n                width: columnWidth,\n                align: 'center'\n            });\n            result = Math.max(result, cellHeight);\n        });\n        return result + rowSpacing;\n    };\n    var containerWidth = width / columns;\n    var columnWidth = containerWidth - columnSpacing;\n    var maxY = pdf.page.height - pdf.page.margins.bottom;\n    var rowBottomY = 0;\n    pdf.on('pageAdded', function () {\n        startY = pdf.page.margins.top;\n        rowBottomY = 0;\n    });\n    onHeader();\n    // Check to have enough room for header and first rows\n    if (startY + 3 * computeRowHeight(headers) > maxY)\n        pdf.addPage();\n    // Outline card\n    //let rowHeight = computeRowHeight(headers)\n    pdf\n        .rect(startX, startY, 5 * (columnWidth + columnSpacing), height)\n        .stroke(headerColor);\n    // Print header background\n    rowHeight = computeRowHeight(headers);\n    pdf\n        .rect(startX, startY, 5 * (columnWidth + columnSpacing), rowHeight + rowSpacing)\n        .fill(headerColor);\n    // Print header tiles\n    headers.forEach(function (header, i) {\n        pdf\n            .fillColor('white')\n            .text(header, startX + i * containerWidth + columnSpacing / 2, startY + 3 / 2 * rowSpacing, {\n            width: columnWidth,\n            align: 'center'\n        })\n            .fillColor('black');\n    });\n    // Print column lines\n    headers.forEach(function (header, i) {\n        pdf\n            .moveTo(startX + i * containerWidth, startY)\n            .lineTo(startX + i * containerWidth, startY + height)\n            .stroke(headerColor);\n    });\n    rows.forEach(function (row, i) {\n        pdf\n            .moveTo(startX, startY + (i + 1) * (rowHeight + rowSpacing))\n            .lineTo(startX + 5 * containerWidth, startY + (i + 1) * (rowHeight + rowSpacing))\n            .stroke(headerColor);\n    });\n    // Refresh the y coordinate of the bottom of the headers row\n    rowBottomY = Math.max(startY + computeRowHeight(headers), rowBottomY);\n    // Separation line between headers and rows\n    // pdf\n    // \t.moveTo(startX, rowBottomY - rowSpacing * 0.5)\n    // \t.lineTo(startX + width, rowBottomY - rowSpacing * 0.5)\n    // \t.lineWidth(2)\n    // \t.stroke()\n    rows.forEach(function (row, i) {\n        var rowHeight = computeRowHeight(row);\n        // Switch to next page if we cannot go any further because the space is over.\n        // For safety, consider 3 rows margin instead of just one\n        if (startY + 3 * rowHeight < maxY)\n            startY = rowBottomY + rowSpacing;\n        else\n            pdf.addPage();\n        // Allow the user to override style for rows\n        onRow(row, i);\n        // Print all cells of the current row\n        row.forEach(function (cell, i) {\n            pdf\n                // .rect(startX + i * containerWidth, startY, columnWidth, rowHeight)\n                // .fill('black')\n                .text(cell, startX + i * containerWidth + columnSpacing / 2, startY + 3 / 2 * rowSpacing, {\n                width: columnWidth,\n                align: 'center'\n            });\n        });\n        // Refresh the y coordinate of the bottom of this row\n        rowBottomY = Math.max(startY + rowHeight, rowBottomY);\n        // // Separation line between rows\n        // pdf\n        // \t.moveTo(startX, rowBottomY - rowSpacing * 0.5)\n        // \t.lineTo(startX + width, rowBottomY - rowSpacing * 0.5)\n        // \t.lineWidth(1)\n        // \t.opacity(0.7)\n        // \t.stroke()\n        // \t.opacity(1) // Reset opacity after drawing the line\n    });\n    pdf.x = startX;\n    pdf.moveDown();\n};\nvar pdf = {\n    render: function (data) {\n        var pdf = new PDFDocument({\n            layout: 'landscape'\n        });\n        pdf.font('Helvetica-Bold').fontSize(18);\n        // pdf.font('Helvetica') // establishes the default font for forms\n        // pdf.initForm()\n        // let rootField = pdf.formField('rootField')\n        // pdf.font('Courier')\n        // let child1Field = pdf.formField('child1Field', { parent: rootField })\n        // pdf.font('Helvetica')\n        // let child2Field = pdf.formField('child2Field', { parent: rootField })\n        // let y = 10\n        // pdf.formCheckbox('check', 10, y, 10, 10, {\n        // \tparent: child1Field,\n        // \tvalue: '1',\n        // \talign: 'center'\n        // })\n        // pdf\n        // \t.font(path.join(appRootDir.get(), 'fonts/Viga-Regular.ttf'))\n        // \t.fontSize(25)\n        // \t.text('B  I  N  G  O', 100, 100)\n        // \t.text('12 21 33 47 68', 100, 120)\n        data.forEach(function (file, i) {\n            file.forEach(function (page, j) {\n                var per = page[0];\n                card(pdf, {\n                    x: 36,\n                    y: 54,\n                    width: 324,\n                    headers: ['B', 'I', 'N', 'G', 'O'],\n                    rows: [\n                        [per.B[0], per.I[0], per.N[0], per.G[0], per.O[0]],\n                        [per.B[1], per.I[1], per.N[1], per.G[1], per.O[1]],\n                        [per.B[2], per.I[2], per.N[2], per.G[2], per.O[2]],\n                        [per.B[3], per.I[3], per.N[3], per.G[3], per.O[3]],\n                        [per.B[4], per.I[4], per.N[4], per.G[4], per.O[4]]\n                    ],\n                    //width,\n                    //columnSpacing,\n                    //rowSpacing,\n                    onHeader: function () { return pdf.font('Helvetica-Bold').fontSize(18); },\n                    onRow: function () { return pdf.font('Helvetica').fontSize(18); }\n                });\n                per = page[1];\n                card(pdf, {\n                    x: 396 + 36,\n                    y: 54,\n                    width: 324,\n                    headers: ['B', 'I', 'N', 'G', 'O'],\n                    rows: [\n                        [per.B[0], per.I[0], per.N[0], per.G[0], per.O[0]],\n                        [per.B[1], per.I[1], per.N[1], per.G[1], per.O[1]],\n                        [per.B[2], per.I[2], per.N[2], per.G[2], per.O[2]],\n                        [per.B[3], per.I[3], per.N[3], per.G[3], per.O[3]],\n                        [per.B[4], per.I[4], per.N[4], per.G[4], per.O[4]]\n                    ],\n                    //width,\n                    //columnSpacing,\n                    //rowSpacing,\n                    onHeader: function () { return pdf.font('Helvetica-Bold').fontSize(18); },\n                    onRow: function () { return pdf.font('Helvetica').fontSize(18); }\n                });\n                per = page[2];\n                card(pdf, {\n                    x: 36,\n                    y: 306 + 54 - 40,\n                    width: 324,\n                    headers: ['B', 'I', 'N', 'G', 'O'],\n                    rows: [\n                        [per.B[0], per.I[0], per.N[0], per.G[0], per.O[0]],\n                        [per.B[1], per.I[1], per.N[1], per.G[1], per.O[1]],\n                        [per.B[2], per.I[2], per.N[2], per.G[2], per.O[2]],\n                        [per.B[3], per.I[3], per.N[3], per.G[3], per.O[3]],\n                        [per.B[4], per.I[4], per.N[4], per.G[4], per.O[4]]\n                    ],\n                    //width,\n                    //columnSpacing,\n                    //rowSpacing,\n                    onHeader: function () { return pdf.font('Helvetica-Bold').fontSize(18); },\n                    onRow: function () { return pdf.font('Helvetica').fontSize(18); }\n                });\n                per = page[3];\n                card(pdf, {\n                    x: 396 + 36,\n                    y: 306 + 54 - 40,\n                    width: 324,\n                    headers: ['B', 'I', 'N', 'G', 'O'],\n                    rows: [\n                        [per.B[0], per.I[0], per.N[0], per.G[0], per.O[0]],\n                        [per.B[1], per.I[1], per.N[1], per.G[1], per.O[1]],\n                        [per.B[2], per.I[2], per.N[2], per.G[2], per.O[2]],\n                        [per.B[3], per.I[3], per.N[3], per.G[3], per.O[3]],\n                        [per.B[4], per.I[4], per.N[4], per.G[4], per.O[4]]\n                    ],\n                    //width,\n                    //columnSpacing,\n                    //rowSpacing,\n                    onHeader: function () { return pdf.font('Helvetica-Bold').fontSize(18); },\n                    onRow: function () { return pdf.font('Helvetica').fontSize(18); }\n                });\n                if (file.length > 1 && j <= page.length) {\n                    pdf.addPage();\n                }\n            });\n            if (data.length > 1 && i < file.length) {\n                pdf.addPage();\n            }\n        });\n        pdf.end();\n        return pdf;\n    }\n};\nexports[\"default\"] = pdf;\n\n\n//# sourceURL=webpack:///./api/renderers/pdf.ts?");

/***/ }),

/***/ "./api/renderers/zip.ts":
/*!******************************!*\
  !*** ./api/renderers/zip.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Archiver = __webpack_require__(/*! archiver */ \"archiver\");\nvar _1 = __webpack_require__(/*! . */ \"./api/renderers/index.ts\");\nvar lib_1 = __webpack_require__(/*! ../lib */ \"./api/lib/index.ts\");\nvar zip = {\n    render: function (data) {\n        var archive = Archiver('zip', {\n            zlib: { level: 9 }\n        });\n        archive.on('warning', function (err) {\n            if (err.code === 'ENOENT') {\n                lib_1.logger.error(\"Error: \" + err + \" \" + err.stack);\n            }\n            else {\n                throw err;\n            }\n        });\n        archive.on('error', function (err) {\n            throw err;\n        });\n        data.forEach(function (file, i) {\n            archive.append(_1.pdf.render([file]), { name: \"cards\" + (i + 1) + \".pdf\" });\n        });\n        archive.finalize();\n        return archive;\n    }\n};\nexports[\"default\"] = zip;\n\n\n//# sourceURL=webpack:///./api/renderers/zip.ts?");

/***/ }),

/***/ "./api/routes/cards.ts":
/*!*****************************!*\
  !*** ./api/routes/cards.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nvar models_1 = __webpack_require__(/*! ../models */ \"./api/models/index.ts\");\nvar renderers_1 = __webpack_require__(/*! ../renderers */ \"./api/renderers/index.ts\");\nvar lib_1 = __webpack_require__(/*! ../lib */ \"./api/lib/index.ts\");\nvar base_url = '/api/cards';\nvar router = new Router();\nrouter.get(\"\" + base_url, function (ctx) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        ctx.body = {\n            status: 'success',\n            message: 'hello, cards!'\n        };\n        return [2 /*return*/];\n    });\n}); });\nrouter.post(base_url + \":suffix?\", function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var suffix, body, card, validate, packs, pages, per, cards;\n    return __generator(this, function (_a) {\n        suffix = ctx.params.suffix;\n        suffix = suffix || '.json';\n        body = ctx.request.body;\n        card = new models_1.Card(body);\n        validate = card.validate();\n        if (!validate.valid) {\n            validate.errors.forEach(function (error) { return lib_1.logger.error(\"Validation Error: \" + error); });\n            ctx.type = 'application/json; charset=utf-8';\n            ctx.status = 400;\n            ctx.body = {\n                status: 'error',\n                message: validate.errors\n            };\n        }\n        else {\n            packs = body.packs, pages = body.pages, per = body.per;\n            packs = packs || 1;\n            pages = pages || 1;\n            per = per || 1;\n            cards = card.generate(packs, pages, per);\n            try {\n                if (suffix === '.json') {\n                    ctx.attachment('cards.json');\n                    ctx.type = 'application/json; charset=utf-8';\n                    ctx.status = 200;\n                    ctx.body = renderers_1.json.render(cards);\n                }\n                else if (suffix === '.pdf') {\n                    ctx.attachment('cards.pdf');\n                    ctx.type = 'application/pdf';\n                    ctx.status = 200;\n                    ctx.body = renderers_1.pdf.render(cards);\n                }\n                else if (suffix === '.zip') {\n                    ctx.attachment('cards.zip');\n                    ctx.type = 'application/zip';\n                    ctx.status = 200;\n                    ctx.body = renderers_1.zip.render(cards);\n                }\n                else {\n                    ctx.type = 'application/json; charset=utf-8';\n                    ctx.status = 400;\n                    ctx.body = {\n                        status: 'error',\n                        message: \"Type \" + suffix + \" unsupported\"\n                    };\n                }\n            }\n            catch (err) {\n                lib_1.logger.error(\"Error: \" + err + \" \" + err.stack);\n            }\n        }\n        return [2 /*return*/];\n    });\n}); });\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack:///./api/routes/cards.ts?");

/***/ }),

/***/ "./api/routes/index.ts":
/*!*****************************!*\
  !*** ./api/routes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar cards_1 = __webpack_require__(/*! ./cards */ \"./api/routes/cards.ts\");\nexports.cards = cards_1[\"default\"];\n\n\n//# sourceURL=webpack:///./api/routes/index.ts?");

/***/ }),

/***/ "archiver":
/*!***************************!*\
  !*** external "archiver" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"archiver\");\n\n//# sourceURL=webpack:///external_%22archiver%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-bodyparser\");\n\n//# sourceURL=webpack:///external_%22koa-bodyparser%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ }),

/***/ "pdfkit":
/*!*************************!*\
  !*** external "pdfkit" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pdfkit\");\n\n//# sourceURL=webpack:///external_%22pdfkit%22?");

/***/ }),

/***/ "pino":
/*!***********************!*\
  !*** external "pino" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pino\");\n\n//# sourceURL=webpack:///external_%22pino%22?");

/***/ })

/******/ });