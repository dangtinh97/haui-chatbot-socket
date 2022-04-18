/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_config_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/config/app */ "./src/config/app.ts");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! i18n */ "i18n");
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_responses_ResponseError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/responses/ResponseError */ "./src/app/responses/ResponseError.ts");
/* harmony import */ var _config_lang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/lang */ "./src/config/lang.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_config_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/config/database */ "./src/config/database.ts");
/* harmony import */ var _app_controllers_socket_controller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app/controllers/socket.controller */ "./src/app/controllers/socket.controller.ts");












var App = /** @class */ (function () {
    function App() {
        this.app = express__WEBPACK_IMPORTED_MODULE_0___default()();
        this.configLang();
        this.configPort();
        this.configMiddleware();
        this.connectDB();
        this.createServer();
        this.createSocket();
    }
    App.prototype.configPort = function () {
        this.app.set('port', _src_config_app__WEBPACK_IMPORTED_MODULE_4__["default"].port);
    };
    App.prototype.configMiddleware = function () {
        this.app.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default().json());
        this.app.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default().urlencoded({ extended: true }));
        this.app.use(helmet__WEBPACK_IMPORTED_MODULE_3___default()());
        this.app.use((i18n__WEBPACK_IMPORTED_MODULE_6___default().init));
        this.app.use(function (req, res, next) {
            return res.json((new _app_responses_ResponseError__WEBPACK_IMPORTED_MODULE_7__["default"](404, res.__('url_not_exists'))).toObject());
        });
    };
    App.prototype.createServer = function () {
        this.server = http__WEBPACK_IMPORTED_MODULE_2___default().createServer(this.app);
    };
    App.prototype.configLang = function () {
        i18n__WEBPACK_IMPORTED_MODULE_6___default().configure(_config_lang__WEBPACK_IMPORTED_MODULE_8__["default"]);
    };
    App.prototype.connectDB = function () {
        mongoose__WEBPACK_IMPORTED_MODULE_9__.connect(_src_config_database__WEBPACK_IMPORTED_MODULE_10__["default"].uri).catch(function (error) {
            console.log(error);
            process.exit(-1);
        });
    };
    App.prototype.createSocket = function () {
        var io = new socket_io__WEBPACK_IMPORTED_MODULE_1__.Server(this.server, {
            cors: "*"
        });
        return new _app_controllers_socket_controller__WEBPACK_IMPORTED_MODULE_11__["default"](io);
    };
    return App;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/app/constants/constants.ts":
/*!****************************************!*\
  !*** ./src/app/constants/constants.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SEND_MESSAGE": () => (/* binding */ SEND_MESSAGE),
/* harmony export */   "SEND_TYPING": () => (/* binding */ SEND_TYPING),
/* harmony export */   "SEND_REACTION": () => (/* binding */ SEND_REACTION),
/* harmony export */   "USER_ONLINE": () => (/* binding */ USER_ONLINE),
/* harmony export */   "USER_OFFLINE": () => (/* binding */ USER_OFFLINE),
/* harmony export */   "JOIN_ROOM": () => (/* binding */ JOIN_ROOM)
/* harmony export */ });
var SEND_MESSAGE = 'SEND_MESSAGE';
var SEND_TYPING = "SEND_TYPING";
var SEND_REACTION = "SEND_REACTION";
var USER_ONLINE = "USER_ONLINE";
var USER_OFFLINE = "USER_OFFLINE";
var JOIN_ROOM = "JOIN_ROOM";


/***/ }),

/***/ "./src/app/controllers/socket.controller.ts":
/*!**************************************************!*\
  !*** ./src/app/controllers/socket.controller.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/jwt */ "./src/config/jwt.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/database */ "./src/config/database.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
var createAdapter = (__webpack_require__(/*! @socket.io/mongo-adapter */ "@socket.io/mongo-adapter").createAdapter);
var MongoClient = (__webpack_require__(/*! mongodb */ "mongodb").MongoClient);


var DB = "datinee";
var COLLECTION = "socket.io-adapter-events";
var SocketController = /** @class */ (function () {
    function SocketController(socket) {
        var _this = this;
        this.socketService = new _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.io = socket;
        this.adapter();
        this.configMiddleware();
        this.io.on("connection", function (socket) { return _this._connection(socket); });
    }
    SocketController.prototype.adapter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mongoClient, e_1, mongoCollection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mongoClient = new MongoClient(_config_database__WEBPACK_IMPORTED_MODULE_3__["default"].uri, {
                            useUnifiedTopology: true,
                        });
                        return [4 /*yield*/, mongoClient.connect()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, mongoClient.db(DB).createCollection(COLLECTION, {
                                capped: true,
                                size: 1e6
                            })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5:
                        mongoCollection = mongoClient.db(DB).collection(COLLECTION);
                        this.io.adapter(createAdapter(mongoCollection));
                        return [2 /*return*/];
                }
            });
        });
    };
    SocketController.prototype.configMiddleware = function () {
        var _this = this;
        this.io.use(function (socket, next) { return __awaiter(_this, void 0, void 0, function () {
            var token, decoded;
            return __generator(this, function (_a) {
                token = socket.handshake.auth.token;
                if (token === undefined)
                    next(new Error("NO TOKEN Authorized 1!"));
                try {
                    decoded = jwt.verify(token.replace('Bearer ', ''), _config_jwt__WEBPACK_IMPORTED_MODULE_0__["default"].secret);
                    this.fromUserOid = decoded.sub;
                    return [2 /*return*/, next()];
                }
                catch (err) {
                    console.log(err);
                    next(new Error("error---" + err.message));
                }
                return [2 /*return*/];
            });
        }); });
    };
    SocketController.prototype._connection = function (socket) {
        var _this = this;
        this.socketService.saveSocket(socket.id, this.fromUserOid).then();
        // socket.join(this.roomOid)
        // socket.on(SEND_MESSAGE,(data:any)=>this._sendMessage(data,socket))
        // socket.on(SEND_TYPING,(data:any)=>this._typing(data))
        // socket.on(SEND_REACTION,(data:any)=>this._sendReaction(data))
        socket.on("disconnect", function () { return _this._disconnect(socket); });
        socket.on(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.JOIN_ROOM, function (data) { return _this._joinRoom(socket, data); });
        // this.io.to(this.roomOid).emit(USER_ONLINE,{
        //     from_user_oid:this.fromUserOid
        // })
    };
    SocketController.prototype._joinRoom = function (socket, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                socket.join(data.room_uuid);
                this.room_uuid = data.room_uuid.toString();
                this.io.to(this.room_uuid).emit(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.JOIN_ROOM, {
                    from_user_oid: this.fromUserOid
                });
                return [2 /*return*/];
            });
        });
    };
    SocketController.prototype._sendMessage = function (data, socket) {
        return __awaiter(this, void 0, void 0, function () {
            var io, roomOid, fromUserOid;
            return __generator(this, function (_a) {
                io = this.io;
                roomOid = this.roomOid;
                fromUserOid = this.fromUserOid;
                return [2 /*return*/];
            });
        });
    };
    SocketController.prototype._disconnect = function (socket) {
        this.socketService.saveSocket(socket.id, this.fromUserOid, "PULL").then();
    };
    SocketController.prototype._typing = function (data) {
        this.io.to(this.roomOid).emit(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.SEND_TYPING, __assign(__assign({}, data), { from_user_oid: this.fromUserOid }));
    };
    SocketController.prototype._sendReaction = function (data) {
        var io = this.io;
        var room = this.roomOid;
        var fromUserOid = this.fromUserOid;
    };
    return SocketController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketController);


/***/ }),

/***/ "./src/app/helpers/str.helper.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/str.helper.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var mongo = __webpack_require__(/*! mongoose */ "mongoose");
var bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
var saltRounds = 10;
var StrHelper = /** @class */ (function () {
    function StrHelper() {
    }
    StrHelper.isEmail = function (email) {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    StrHelper.htmlEscape = function (text) {
        return text.replace(/&/g, '&amp;').
            replace(/</g, '&lt;'). // it's not neccessary to escape >
            replace(/"/g, '/"').
            replace(/'/g, '/\'').
            trim() || '';
    };
    StrHelper.hashPassword = function (myPlaintextPassword) {
        return bcrypt.hashSync(myPlaintextPassword, saltRounds);
    };
    StrHelper.comparePassword = function (myPlaintextPassword, hash) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            bcrypt.compare(myPlaintextPassword, hash).then(function (result) {
                                return resolve(result);
                            });
                        }
                        catch (e) {
                            return resolve(false);
                        }
                    })];
            });
        });
    };
    StrHelper.toObjectId = function (str) {
        return mongo.Types.ObjectId(str);
    };
    StrHelper.isObjectId = function (str) {
        var ObjectId = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId);
        return ObjectId.isValid(str);
    };
    StrHelper.shuffle = function (arrayBegin) {
        var _a;
        var array = __spreadArray([], arrayBegin, true);
        var currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            _a = [
                array[randomIndex], array[currentIndex]
            ], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
        }
        return array;
    };
    StrHelper.rand = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 10; }
        if (max <= min)
            return null;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return StrHelper;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StrHelper);


/***/ }),

/***/ "./src/app/models/connect.ts":
/*!***********************************!*\
  !*** ./src/app/models/connect.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATUS_CONNECT_FREE": () => (/* binding */ STATUS_CONNECT_FREE),
/* harmony export */   "STATUS_CONNECT_FIND": () => (/* binding */ STATUS_CONNECT_FIND),
/* harmony export */   "STATUS_CONNECT_BUSY": () => (/* binding */ STATUS_CONNECT_BUSY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defined_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defined.model */ "./src/app/models/defined.model.ts");


var connectSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    from_user_oid: Object,
    to_user_oid: Object,
    room_uuid: String,
    status: String,
    socket_ids: Array,
}, _defined_model__WEBPACK_IMPORTED_MODULE_1__["default"]);
var STATUS_CONNECT_FREE = "FREE";
var STATUS_CONNECT_FIND = "FIND";
var STATUS_CONNECT_BUSY = "BUSY";
var Connect = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Connect', connectSchema, "connects");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Connect);


/***/ }),

/***/ "./src/app/models/defined.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/defined.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    timestamps: {
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    },
    versionKey: false
});


/***/ }),

/***/ "./src/app/models/message.ts":
/*!***********************************!*\
  !*** ./src/app/models/message.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defined_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defined.model */ "./src/app/models/defined.model.ts");


var messageSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    from_user_oid: String,
    to_user_oid: String,
    message: String,
    room_uuid: String
}, _defined_model__WEBPACK_IMPORTED_MODULE_1__["default"]);
var Message = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Message", messageSchema, 'messages');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defined_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defined.model */ "./src/app/models/defined.model.ts");


var userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    full_name: String,
    avatar: String,
    email: String,
    fb_uid: String,
    type_account: String,
    gender: String,
}, _defined_model__WEBPACK_IMPORTED_MODULE_1__["default"]);
var User = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("User", userSchema, 'users');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ "./src/app/repositories/base.repository.ts":
/*!*************************************************!*\
  !*** ./src/app/repositories/base.repository.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseRepository": () => (/* binding */ BaseRepository)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var BaseRepository = /** @class */ (function () {
    function BaseRepository(schemaModel) {
        this._model = schemaModel;
    }
    BaseRepository.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._model.findById(id).exec()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.find = function (cond) {
        return __awaiter(this, void 0, void 0, function () {
            var condNew;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        condNew = JSON.parse(JSON.stringify(cond));
                        return [4 /*yield*/, this._model.find(condNew).exec()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.findOne = function (cond) {
        return __awaiter(this, void 0, void 0, function () {
            var condNew;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        condNew = JSON.parse(JSON.stringify(cond));
                        return [4 /*yield*/, this._model.findOne(cond).exec()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.update = function (cond, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._model.updateOne(cond, data).exec()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.updateMany = function (cond, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._model.updateMany(cond, data).exec()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._model.create(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._model.findById(id).deleteOne().exec()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.deletedMany = function (cond) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._model.find(cond).deleteMany().exec()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.findAndUpdate = function (cond, data, upsert) {
        if (upsert === void 0) { upsert = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._model.findOneAndUpdate(cond, {
                            $set: data
                        }, {
                            returnNewDocument: true,
                            upsert: upsert,
                            returnDocument: "after"
                        }).exec()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.findAndModify = function (cond, data, upsert) {
        if (upsert === void 0) { upsert = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._model.findOneAndUpdate(cond, data, {
                            returnNewDocument: true,
                            upsert: upsert,
                            returnDocument: "after"
                        }).exec()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.insert = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._model.insertMany(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return BaseRepository;
}());



/***/ }),

/***/ "./src/app/repositories/connect.repository.ts":
/*!****************************************************!*\
  !*** ./src/app/repositories/connect.repository.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.repository */ "./src/app/repositories/base.repository.ts");
/* harmony import */ var _models_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/connect */ "./src/app/models/connect.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ConnectRepository = /** @class */ (function (_super) {
    __extends(ConnectRepository, _super);
    function ConnectRepository() {
        return _super.call(this, _models_connect__WEBPACK_IMPORTED_MODULE_1__["default"]) || this;
    }
    return ConnectRepository;
}(_base_repository__WEBPACK_IMPORTED_MODULE_0__.BaseRepository));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectRepository);


/***/ }),

/***/ "./src/app/repositories/message.repository.ts":
/*!****************************************************!*\
  !*** ./src/app/repositories/message.repository.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.repository */ "./src/app/repositories/base.repository.ts");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/message */ "./src/app/models/message.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var MessageRepository = /** @class */ (function (_super) {
    __extends(MessageRepository, _super);
    function MessageRepository() {
        return _super.call(this, _models_message__WEBPACK_IMPORTED_MODULE_1__["default"]) || this;
    }
    MessageRepository.prototype.listMessage = function (roomUUID, lastOid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this._model.aggregate([
                            {
                                $match: {
                                    room_uuid: roomUUID
                                }
                            },
                            {
                                $sort: {
                                    _id: -1
                                }
                            },
                            {
                                $limit: 25
                            }
                        ]).then(function (res) { return resolve(res); });
                    })];
            });
        });
    };
    return MessageRepository;
}(_base_repository__WEBPACK_IMPORTED_MODULE_0__.BaseRepository));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageRepository);


/***/ }),

/***/ "./src/app/repositories/user.repository.ts":
/*!*************************************************!*\
  !*** ./src/app/repositories/user.repository.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.repository */ "./src/app/repositories/base.repository.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var UserRepository = /** @class */ (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        return _super.call(this, _models_user__WEBPACK_IMPORTED_MODULE_1__["default"]) || this;
    }
    UserRepository.prototype.findUserConnect = function (fbUid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this._model.aggregate([
                            {
                                $match: {
                                    fb_uid: fbUid
                                }
                            },
                            {
                                $lookup: {
                                    from: "connects",
                                    localField: "_id",
                                    foreignField: "from_user_oid",
                                    as: "connects"
                                }
                            }
                        ]).then(function (users) {
                            var _a;
                            return resolve((_a = users[0]) !== null && _a !== void 0 ? _a : null);
                        });
                    })];
            });
        });
    };
    return UserRepository;
}(_base_repository__WEBPACK_IMPORTED_MODULE_0__.BaseRepository));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserRepository);


/***/ }),

/***/ "./src/app/responses/ApiResponse.ts":
/*!******************************************!*\
  !*** ./src/app/responses/ApiResponse.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiResponse": () => (/* binding */ ApiResponse)
/* harmony export */ });
var ApiResponse = /** @class */ (function () {
    function ApiResponse(status, content, response) {
        this.status = status;
        this.content = content;
        this.response = response;
    }
    ApiResponse.prototype.toObject = function () {
        return {
            status: this.status,
            content: this.content,
            data: this.response
        };
    };
    ApiResponse.prototype.getData = function () {
        return this.response;
    };
    return ApiResponse;
}());



/***/ }),

/***/ "./src/app/responses/ResponseError.ts":
/*!********************************************!*\
  !*** ./src/app/responses/ResponseError.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiResponse */ "./src/app/responses/ApiResponse.ts");
/* harmony import */ var _config_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/lang */ "./src/config/lang.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var I18n = (__webpack_require__(/*! i18n */ "i18n").I18n);
var i18n = new I18n();

var ResponseError = /** @class */ (function (_super) {
    __extends(ResponseError, _super);
    // @ts-ignore
    function ResponseError(status, content, response) {
        if (status === void 0) { status = 201; }
        if (content === void 0) { content = null; }
        if (response === void 0) { response = {}; }
        var _this = this;
        i18n.configure(_config_lang__WEBPACK_IMPORTED_MODULE_1__["default"]);
        if (content === null) {
            content = i18n.__('server_error');
        }
        _this = _super.call(this, status, content, response) || this;
        _this.status = status;
        _this.content = content;
        _this.response = response;
        return _this;
    }
    return ResponseError;
}(_ApiResponse__WEBPACK_IMPORTED_MODULE_0__.ApiResponse));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponseError);


/***/ }),

/***/ "./src/app/responses/ResponseSuccess.ts":
/*!**********************************************!*\
  !*** ./src/app/responses/ResponseSuccess.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiResponse */ "./src/app/responses/ApiResponse.ts");
/* harmony import */ var _config_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/lang */ "./src/config/lang.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


// import i18n from "i18n";
var I18n = (__webpack_require__(/*! i18n */ "i18n").I18n);
var i18n = new I18n();
var ResponseSuccess = /** @class */ (function (_super) {
    __extends(ResponseSuccess, _super);
    // @ts-ignore
    function ResponseSuccess(response, content, status) {
        if (response === void 0) { response = {}; }
        if (content === void 0) { content = null; }
        if (status === void 0) { status = 200; }
        var _this = this;
        i18n.configure(_config_lang__WEBPACK_IMPORTED_MODULE_1__["default"]);
        if (content === null) {
            content = i18n.__('success');
        }
        _this = _super.call(this, status, content, response) || this;
        _this.response = response;
        _this.content = content;
        _this.status = status;
        return _this;
    }
    return ResponseSuccess;
}(_ApiResponse__WEBPACK_IMPORTED_MODULE_0__.ApiResponse));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponseSuccess);


/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_str_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/str.helper */ "./src/app/helpers/str.helper.ts");
/* harmony import */ var _repositories_user_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repositories/user.repository */ "./src/app/repositories/user.repository.ts");
/* harmony import */ var _repositories_message_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repositories/message.repository */ "./src/app/repositories/message.repository.ts");
/* harmony import */ var _repositories_connect_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repositories/connect.repository */ "./src/app/repositories/connect.repository.ts");
/* harmony import */ var _responses_ResponseSuccess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../responses/ResponseSuccess */ "./src/app/responses/ResponseSuccess.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CryptoJS = __webpack_require__(/*! crypto-js */ "crypto-js");
var MD5 = __webpack_require__(/*! crypto-js/md5 */ "crypto-js/md5");
var Utf8 = CryptoJS.enc.Utf8;
var SocketService = /** @class */ (function () {
    function SocketService() {
        this.userRepository = new _repositories_user_repository__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.messageRepository = new _repositories_message_repository__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.connectRepository = new _repositories_connect_repository__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }
    SocketService.prototype.saveSocket = function (socketId, userOid, type) {
        if (type === void 0) { type = "PUSH"; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connectRepository.findAndModify({
                            from_user_oid: _helpers_str_helper__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectId(userOid)
                        }, type === "PULL" ? {
                            $pull: {
                                socket_ids: socketId
                            }
                        } : {
                            $push: {
                                socket_ids: socketId
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new _responses_ResponseSuccess__WEBPACK_IMPORTED_MODULE_4__["default"]()];
                }
            });
        });
    };
    return SocketService;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketService);


/***/ }),

/***/ "./src/config/app.ts":
/*!***************************!*\
  !*** ./src/config/app.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
(__webpack_require__(/*! dotenv */ "dotenv").config)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    port: process.env.PORT || 3000
});


/***/ }),

/***/ "./src/config/database.ts":
/*!********************************!*\
  !*** ./src/config/database.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    uri: process.env.MONGO_URI || "mongodb://localhost:27017/myapp"
});


/***/ }),

/***/ "./src/config/jwt.ts":
/*!***************************!*\
  !*** ./src/config/jwt.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    secret: process.env.JWT_SECRET,
    ttl: process.env.JWT_TTL || 60 * 60 * 24
});


/***/ }),

/***/ "./src/config/lang.ts":
/*!****************************!*\
  !*** ./src/config/lang.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    locales: ['en', 'vi'],
    directory: path__WEBPACK_IMPORTED_MODULE_0___default().join('./src/locales'),
    defaultLocale: 'vi',
    header: 'lang',
    queryParameter: 'lang',
    objectNotation: true
});


/***/ }),

/***/ "@socket.io/mongo-adapter":
/*!*******************************************!*\
  !*** external "@socket.io/mongo-adapter" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@socket.io/mongo-adapter");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "crypto-js/md5":
/*!********************************!*\
  !*** external "crypto-js/md5" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("crypto-js/md5");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "i18n":
/*!***********************!*\
  !*** external "i18n" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("i18n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/app */ "./src/config/app.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.ts");

(__webpack_require__(/*! dotenv */ "dotenv").config)();


var app = new _app__WEBPACK_IMPORTED_MODULE_1__["default"]();
var server = app.server;
server.listen(_config_app__WEBPACK_IMPORTED_MODULE_0__["default"].port);
server.on('unhandledRejection', function (error, promise) {
    console.log(' Oh Lord! We forgot to handle a promise rejection here: ', promise);
    console.log(' The error was: ', error);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNxQjtBQUMzQjtBQUNJO0FBQ2M7QUFDTDtBQUNiO0FBQ2tDO0FBQ3pCO0FBQ0k7QUFDZTtBQUNlO0FBQ25FO0FBQ0E7QUFDQSxtQkFBbUIsOENBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0REFBYztBQUMzQztBQUNBO0FBQ0EscUJBQXFCLHVEQUFlO0FBQ3BDLHFCQUFxQiw2REFBcUIsR0FBRyxnQkFBZ0I7QUFDN0QscUJBQXFCLDZDQUFNO0FBQzNCLHFCQUFxQixrREFBUztBQUM5QjtBQUNBLGlDQUFpQyxvRUFBYTtBQUM5QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHNCQUFzQix3REFBaUI7QUFDdkM7QUFDQTtBQUNBLFFBQVEscURBQWMsQ0FBQyxvREFBSTtBQUMzQjtBQUNBO0FBQ0EsUUFBUSw2Q0FBZ0IsQ0FBQyxpRUFBa0I7QUFDM0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EscUJBQXFCLDZDQUFZO0FBQ2pDO0FBQ0EsU0FBUztBQUNULG1CQUFtQiwyRUFBZ0I7QUFDbkM7QUFDQTtBQUNBLENBQUM7QUFDRCxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsU0FBSSxJQUFJLFNBQUk7QUFDL0IsY0FBYyw2QkFBNkIsMEJBQTBCLGNBQWMscUJBQXFCO0FBQ3hHLGlCQUFpQixvREFBb0QscUVBQXFFLGNBQWM7QUFDeEosdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsbUNBQW1DLFNBQVM7QUFDNUMsbUNBQW1DLFdBQVcsVUFBVTtBQUN4RCwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLDhHQUE4RyxPQUFPO0FBQ3JILGlGQUFpRixpQkFBaUI7QUFDbEcseURBQXlELGdCQUFnQixRQUFRO0FBQ2pGLCtDQUErQyxnQkFBZ0IsZ0JBQWdCO0FBQy9FO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDdEQsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUN5QztBQUNjO0FBQ3ZELFVBQVUsbUJBQU8sQ0FBQyxrQ0FBYztBQUNoQyxvQkFBb0IsK0ZBQWlEO0FBQ3JFLGtCQUFrQiwyREFBOEI7QUFDZ0I7QUFDYjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdFQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxtQ0FBbUM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsNERBQWtCO0FBQ3hFO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLDBEQUFnQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVMsSUFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsbUNBQW1DO0FBQ2pGLGtCQUFrQiwyREFBUyxvQkFBb0IsdUNBQXVDO0FBQ3RGO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELDJEQUFTO0FBQ3pEO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNkRBQVcsc0JBQXNCLFdBQVcsaUNBQWlDO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLaEMsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLFNBQUksSUFBSSxTQUFJO0FBQy9CLGNBQWMsNkJBQTZCLDBCQUEwQixjQUFjLHFCQUFxQjtBQUN4RyxpQkFBaUIsb0RBQW9ELHFFQUFxRSxjQUFjO0FBQ3hKLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLG1DQUFtQyxTQUFTO0FBQzVDLG1DQUFtQyxXQUFXLFVBQVU7QUFDeEQsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQSw4R0FBOEcsT0FBTztBQUNySCxpRkFBaUYsaUJBQWlCO0FBQ2xHLHlEQUF5RCxnQkFBZ0IsUUFBUTtBQUNqRiwrQ0FBK0MsZ0JBQWdCLGdCQUFnQjtBQUMvRTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsVUFBVSxZQUFZLGFBQWEsU0FBUyxVQUFVO0FBQ3RELG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDQSxxQkFBcUIsU0FBSSxJQUFJLFNBQUk7QUFDakMsNkVBQTZFLE9BQU87QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0M7QUFDaEMsWUFBWSxtQkFBTyxDQUFDLDBCQUFVO0FBQzlCLGFBQWEsbUJBQU8sQ0FBQyxzQkFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx3QkFBd0IsNkJBQTZCLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksaUNBQWlDLEdBQUc7QUFDdEs7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0VBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhnQjtBQUNFO0FBQzNDLHdCQUF3Qiw0Q0FBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFLHNEQUFZO0FBQ1I7QUFDQTtBQUNBO0FBQ1AsY0FBYywrQ0FBSztBQUNuQixpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2J2QixpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ0U7QUFDM0Msd0JBQXdCLDRDQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFLHNEQUFZO0FBQ2YsY0FBYywrQ0FBSztBQUNuQixpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RrQjtBQUNFO0FBQzNDLHFCQUFxQiw0Q0FBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUUsc0RBQVk7QUFDZixXQUFXLCtDQUFLO0FBQ2hCLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWHBCLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixjQUFjLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDeEcsaUJBQWlCLG9EQUFvRCxxRUFBcUUsY0FBYztBQUN4Six1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxtQ0FBbUMsU0FBUztBQUM1QyxtQ0FBbUMsV0FBVyxVQUFVO0FBQ3hELDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsOEdBQThHLE9BQU87QUFDckgsaUZBQWlGLGlCQUFpQjtBQUNsRyx5REFBeUQsZ0JBQWdCLFFBQVE7QUFDakYsK0NBQStDLGdCQUFnQixnQkFBZ0I7QUFDL0U7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFVBQVUsWUFBWSxhQUFhLFNBQVMsVUFBVTtBQUN0RCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFLMUIsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ3ZGLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7QUFDa0Q7QUFDWDtBQUN4QztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdURBQU87QUFDeEM7QUFDQTtBQUNBLENBQUMsQ0FBQyw0REFBYztBQUNoQixpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmpDLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0Isc0NBQXNDLGtCQUFrQjtBQUN2Riw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLFNBQUksSUFBSSxTQUFJO0FBQy9CLGNBQWMsNkJBQTZCLDBCQUEwQixjQUFjLHFCQUFxQjtBQUN4RyxpQkFBaUIsb0RBQW9ELHFFQUFxRSxjQUFjO0FBQ3hKLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLG1DQUFtQyxTQUFTO0FBQzVDLG1DQUFtQyxXQUFXLFVBQVU7QUFDeEQsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQSw4R0FBOEcsT0FBTztBQUNySCxpRkFBaUYsaUJBQWlCO0FBQ2xHLHlEQUF5RCxnQkFBZ0IsUUFBUTtBQUNqRiwrQ0FBK0MsZ0JBQWdCLGdCQUFnQjtBQUMvRTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsVUFBVSxZQUFZLGFBQWEsU0FBUyxVQUFVO0FBQ3RELG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDbUQ7QUFDWDtBQUN4QztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdURBQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsc0JBQXNCO0FBQ3ZFLHFCQUFxQjtBQUNyQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDLENBQUMsNERBQWM7QUFDaEIsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZqQyxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCLHNDQUFzQyxrQkFBa0I7QUFDdkYsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsQ0FBQztBQUNELGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixjQUFjLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDeEcsaUJBQWlCLG9EQUFvRCxxRUFBcUUsY0FBYztBQUN4Six1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxtQ0FBbUMsU0FBUztBQUM1QyxtQ0FBbUMsV0FBVyxVQUFVO0FBQ3hELDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsOEdBQThHLE9BQU87QUFDckgsaUZBQWlGLGlCQUFpQjtBQUNsRyx5REFBeUQsZ0JBQWdCLFFBQVE7QUFDakYsK0NBQStDLGdCQUFnQixnQkFBZ0I7QUFDL0U7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFVBQVUsWUFBWSxhQUFhLFNBQVMsVUFBVTtBQUN0RCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ21EO0FBQ2pCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvREFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUMsQ0FBQyw0REFBYztBQUNoQixpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ2QixpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCLHNDQUFzQyxrQkFBa0I7QUFDdkYsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsQ0FBQztBQUMyQztBQUM1QyxXQUFXLDhDQUFvQjtBQUMvQjtBQUNxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DO0FBQ0EsdUJBQXVCLG9EQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLHFEQUFXO0FBQ2IsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDN0IsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ3ZGLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7QUFDMkM7QUFDUDtBQUNyQztBQUNBLFdBQVcsOENBQW9CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQztBQUNBLHVCQUF1QixvREFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxxREFBVztBQUNiLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qy9CLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixjQUFjLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDeEcsaUJBQWlCLG9EQUFvRCxxRUFBcUUsY0FBYztBQUN4Six1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxtQ0FBbUMsU0FBUztBQUM1QyxtQ0FBbUMsV0FBVyxVQUFVO0FBQ3hELDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsOEdBQThHLE9BQU87QUFDckgsaUZBQWlGLGlCQUFpQjtBQUNsRyx5REFBeUQsZ0JBQWdCLFFBQVE7QUFDakYsK0NBQStDLGdCQUFnQixnQkFBZ0I7QUFDL0U7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFVBQVUsWUFBWSxhQUFhLFNBQVMsVUFBVTtBQUN0RCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQzhDO0FBQ2U7QUFDTTtBQUNBO0FBQ1I7QUFDM0QsZUFBZSxtQkFBTyxDQUFDLDRCQUFXO0FBQ2xDLFVBQVUsbUJBQU8sQ0FBQyxvQ0FBZTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUVBQWM7QUFDaEQscUNBQXFDLHdFQUFpQjtBQUN0RCxxQ0FBcUMsd0VBQWlCO0FBQ3REO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsc0VBQW9CO0FBQy9ELHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxrREFBa0Qsa0VBQWU7QUFDakU7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzRTdCLG9EQUF3QjtBQUN4QixpRUFBZTtBQUNmO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNIRixpRUFBZTtBQUNmO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNGRixpRUFBZTtBQUNmO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHNCO0FBQ3hCLGlFQUFlO0FBQ2Y7QUFDQSxlQUFlLGdEQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7OztBQ1JGOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLG9EQUF3QjtBQUNhO0FBQ2I7QUFDeEIsY0FBYyw0Q0FBRztBQUNqQjtBQUNBLGNBQWMsd0RBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwL2NvbnN0YW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vZGF0aW5lZS8uL3NyYy9hcHAvY29udHJvbGxlcnMvc29ja2V0LmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZGF0aW5lZS8uL3NyYy9hcHAvaGVscGVycy9zdHIuaGVscGVyLnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwL21vZGVscy9jb25uZWN0LnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwL21vZGVscy9kZWZpbmVkLm1vZGVsLnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwL21vZGVscy9tZXNzYWdlLnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwL21vZGVscy91c2VyLnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwL3JlcG9zaXRvcmllcy9iYXNlLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vZGF0aW5lZS8uL3NyYy9hcHAvcmVwb3NpdG9yaWVzL2Nvbm5lY3QucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9kYXRpbmVlLy4vc3JjL2FwcC9yZXBvc2l0b3JpZXMvbWVzc2FnZS5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwL3JlcG9zaXRvcmllcy91c2VyLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vZGF0aW5lZS8uL3NyYy9hcHAvcmVzcG9uc2VzL0FwaVJlc3BvbnNlLnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwL3Jlc3BvbnNlcy9SZXNwb25zZUVycm9yLnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwL3Jlc3BvbnNlcy9SZXNwb25zZVN1Y2Nlc3MudHMiLCJ3ZWJwYWNrOi8vZGF0aW5lZS8uL3NyYy9hcHAvc2VydmljZXMvc29ja2V0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZGF0aW5lZS8uL3NyYy9jb25maWcvYXBwLnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvY29uZmlnL2RhdGFiYXNlLnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvY29uZmlnL2p3dC50cyIsIndlYnBhY2s6Ly9kYXRpbmVlLy4vc3JjL2NvbmZpZy9sYW5nLnRzIiwid2VicGFjazovL2RhdGluZWUvZXh0ZXJuYWwgY29tbW9uanMgXCJAc29ja2V0LmlvL21vbmdvLWFkYXB0ZXJcIiIsIndlYnBhY2s6Ly9kYXRpbmVlL2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vZGF0aW5lZS9leHRlcm5hbCBjb21tb25qcyBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vZGF0aW5lZS9leHRlcm5hbCBjb21tb25qcyBcImNyeXB0by1qc1wiIiwid2VicGFjazovL2RhdGluZWUvZXh0ZXJuYWwgY29tbW9uanMgXCJjcnlwdG8tanMvbWQ1XCIiLCJ3ZWJwYWNrOi8vZGF0aW5lZS9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL2RhdGluZWUvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vZGF0aW5lZS9leHRlcm5hbCBjb21tb25qcyBcImhlbG1ldFwiIiwid2VicGFjazovL2RhdGluZWUvZXh0ZXJuYWwgY29tbW9uanMgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vZGF0aW5lZS9leHRlcm5hbCBjb21tb25qcyBcImkxOG5cIiIsIndlYnBhY2s6Ly9kYXRpbmVlL2V4dGVybmFsIGNvbW1vbmpzIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZGF0aW5lZS9leHRlcm5hbCBjb21tb25qcyBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly9kYXRpbmVlL2V4dGVybmFsIGNvbW1vbmpzIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9kYXRpbmVlL2V4dGVybmFsIGNvbW1vbmpzIFwic29ja2V0LmlvXCIiLCJ3ZWJwYWNrOi8vZGF0aW5lZS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL2RhdGluZWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGF0aW5lZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kYXRpbmVlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kYXRpbmVlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGF0aW5lZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBTZXJ2ZXIgYXMgU29ja2V0U2VydmVyIH0gZnJvbSBcInNvY2tldC5pb1wiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImh0dHBcIjtcbmltcG9ydCBoZWxtZXQgZnJvbSBcImhlbG1ldFwiO1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9zcmMvY29uZmlnL2FwcCc7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCBpMThuIGZyb20gJ2kxOG4nO1xuaW1wb3J0IFJlc3BvbnNlRXJyb3IgZnJvbSBcIi4vYXBwL3Jlc3BvbnNlcy9SZXNwb25zZUVycm9yXCI7XG5pbXBvcnQgbGFuZyBmcm9tIFwiLi9jb25maWcvbGFuZ1wiO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgZGF0YWJhc2VDb25maWcgZnJvbSBcIi4uL3NyYy9jb25maWcvZGF0YWJhc2VcIjtcbmltcG9ydCBTb2NrZXRDb250cm9sbGVyIGZyb20gXCIuL2FwcC9jb250cm9sbGVycy9zb2NrZXQuY29udHJvbGxlclwiO1xudmFyIEFwcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcHAoKSB7XG4gICAgICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xuICAgICAgICB0aGlzLmNvbmZpZ0xhbmcoKTtcbiAgICAgICAgdGhpcy5jb25maWdQb3J0KCk7XG4gICAgICAgIHRoaXMuY29uZmlnTWlkZGxld2FyZSgpO1xuICAgICAgICB0aGlzLmNvbm5lY3REQigpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNlcnZlcigpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNvY2tldCgpO1xuICAgIH1cbiAgICBBcHAucHJvdG90eXBlLmNvbmZpZ1BvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXBwLnNldCgncG9ydCcsIGFwcENvbmZpZy5wb3J0KTtcbiAgICB9O1xuICAgIEFwcC5wcm90b3R5cGUuY29uZmlnTWlkZGxld2FyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbiAgICAgICAgdGhpcy5hcHAudXNlKGhlbG1ldCgpKTtcbiAgICAgICAgdGhpcy5hcHAudXNlKGkxOG4uaW5pdCk7XG4gICAgICAgIHRoaXMuYXBwLnVzZShmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigobmV3IFJlc3BvbnNlRXJyb3IoNDA0LCByZXMuX18oJ3VybF9ub3RfZXhpc3RzJykpKS50b09iamVjdCgpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBcHAucHJvdG90eXBlLmNyZWF0ZVNlcnZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcih0aGlzLmFwcCk7XG4gICAgfTtcbiAgICBBcHAucHJvdG90eXBlLmNvbmZpZ0xhbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGkxOG4uY29uZmlndXJlKGxhbmcpO1xuICAgIH07XG4gICAgQXBwLnByb3RvdHlwZS5jb25uZWN0REIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QoZGF0YWJhc2VDb25maWcudXJpKS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgtMSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXBwLnByb3RvdHlwZS5jcmVhdGVTb2NrZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbyA9IG5ldyBTb2NrZXRTZXJ2ZXIodGhpcy5zZXJ2ZXIsIHtcbiAgICAgICAgICAgIGNvcnM6IFwiKlwiXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFNvY2tldENvbnRyb2xsZXIoaW8pO1xuICAgIH07XG4gICAgcmV0dXJuIEFwcDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJleHBvcnQgdmFyIFNFTkRfTUVTU0FHRSA9ICdTRU5EX01FU1NBR0UnO1xuZXhwb3J0IHZhciBTRU5EX1RZUElORyA9IFwiU0VORF9UWVBJTkdcIjtcbmV4cG9ydCB2YXIgU0VORF9SRUFDVElPTiA9IFwiU0VORF9SRUFDVElPTlwiO1xuZXhwb3J0IHZhciBVU0VSX09OTElORSA9IFwiVVNFUl9PTkxJTkVcIjtcbmV4cG9ydCB2YXIgVVNFUl9PRkZMSU5FID0gXCJVU0VSX09GRkxJTkVcIjtcbmV4cG9ydCB2YXIgSk9JTl9ST09NID0gXCJKT0lOX1JPT01cIjtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IGp3dENvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2p3dFwiO1xuaW1wb3J0IFNvY2tldFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlXCI7XG52YXIgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XG52YXIgY3JlYXRlQWRhcHRlciA9IHJlcXVpcmUoXCJAc29ja2V0LmlvL21vbmdvLWFkYXB0ZXJcIikuY3JlYXRlQWRhcHRlcjtcbnZhciBNb25nb0NsaWVudCA9IHJlcXVpcmUoXCJtb25nb2RiXCIpLk1vbmdvQ2xpZW50O1xuaW1wb3J0IHsgSk9JTl9ST09NLCBTRU5EX1RZUElORyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuaW1wb3J0IGRhdGFiYXNlQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy9kYXRhYmFzZSc7XG52YXIgREIgPSBcImRhdGluZWVcIjtcbnZhciBDT0xMRUNUSU9OID0gXCJzb2NrZXQuaW8tYWRhcHRlci1ldmVudHNcIjtcbnZhciBTb2NrZXRDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNvY2tldENvbnRyb2xsZXIoc29ja2V0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc29ja2V0U2VydmljZSA9IG5ldyBTb2NrZXRTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuaW8gPSBzb2NrZXQ7XG4gICAgICAgIHRoaXMuYWRhcHRlcigpO1xuICAgICAgICB0aGlzLmNvbmZpZ01pZGRsZXdhcmUoKTtcbiAgICAgICAgdGhpcy5pby5vbihcImNvbm5lY3Rpb25cIiwgZnVuY3Rpb24gKHNvY2tldCkgeyByZXR1cm4gX3RoaXMuX2Nvbm5lY3Rpb24oc29ja2V0KTsgfSk7XG4gICAgfVxuICAgIFNvY2tldENvbnRyb2xsZXIucHJvdG90eXBlLmFkYXB0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtb25nb0NsaWVudCwgZV8xLCBtb25nb0NvbGxlY3Rpb247XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtb25nb0NsaWVudCA9IG5ldyBNb25nb0NsaWVudChkYXRhYmFzZUNvbmZpZy51cmksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG1vbmdvQ2xpZW50LmNvbm5lY3QoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsyLCA0LCAsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG1vbmdvQ2xpZW50LmRiKERCKS5jcmVhdGVDb2xsZWN0aW9uKENPTExFQ1RJT04sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwcGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAxZTZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9uZ29Db2xsZWN0aW9uID0gbW9uZ29DbGllbnQuZGIoREIpLmNvbGxlY3Rpb24oQ09MTEVDVElPTik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlvLmFkYXB0ZXIoY3JlYXRlQWRhcHRlcihtb25nb0NvbGxlY3Rpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTb2NrZXRDb250cm9sbGVyLnByb3RvdHlwZS5jb25maWdNaWRkbGV3YXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmlvLnVzZShmdW5jdGlvbiAoc29ja2V0LCBuZXh0KSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4sIGRlY29kZWQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSBzb2NrZXQuaGFuZHNoYWtlLmF1dGgudG9rZW47XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIG5leHQobmV3IEVycm9yKFwiTk8gVE9LRU4gQXV0aG9yaXplZCAxIVwiKSk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4ucmVwbGFjZSgnQmVhcmVyICcsICcnKSwgand0Q29uZmlnLnNlY3JldCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvbVVzZXJPaWQgPSBkZWNvZGVkLnN1YjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5leHQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dChuZXcgRXJyb3IoXCJlcnJvci0tLVwiICsgZXJyLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9KTtcbiAgICB9O1xuICAgIFNvY2tldENvbnRyb2xsZXIucHJvdG90eXBlLl9jb25uZWN0aW9uID0gZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNvY2tldFNlcnZpY2Uuc2F2ZVNvY2tldChzb2NrZXQuaWQsIHRoaXMuZnJvbVVzZXJPaWQpLnRoZW4oKTtcbiAgICAgICAgLy8gc29ja2V0LmpvaW4odGhpcy5yb29tT2lkKVxuICAgICAgICAvLyBzb2NrZXQub24oU0VORF9NRVNTQUdFLChkYXRhOmFueSk9PnRoaXMuX3NlbmRNZXNzYWdlKGRhdGEsc29ja2V0KSlcbiAgICAgICAgLy8gc29ja2V0Lm9uKFNFTkRfVFlQSU5HLChkYXRhOmFueSk9PnRoaXMuX3R5cGluZyhkYXRhKSlcbiAgICAgICAgLy8gc29ja2V0Lm9uKFNFTkRfUkVBQ1RJT04sKGRhdGE6YW55KT0+dGhpcy5fc2VuZFJlYWN0aW9uKGRhdGEpKVxuICAgICAgICBzb2NrZXQub24oXCJkaXNjb25uZWN0XCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9kaXNjb25uZWN0KHNvY2tldCk7IH0pO1xuICAgICAgICBzb2NrZXQub24oSk9JTl9ST09NLCBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMuX2pvaW5Sb29tKHNvY2tldCwgZGF0YSk7IH0pO1xuICAgICAgICAvLyB0aGlzLmlvLnRvKHRoaXMucm9vbU9pZCkuZW1pdChVU0VSX09OTElORSx7XG4gICAgICAgIC8vICAgICBmcm9tX3VzZXJfb2lkOnRoaXMuZnJvbVVzZXJPaWRcbiAgICAgICAgLy8gfSlcbiAgICB9O1xuICAgIFNvY2tldENvbnRyb2xsZXIucHJvdG90eXBlLl9qb2luUm9vbSA9IGZ1bmN0aW9uIChzb2NrZXQsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHNvY2tldC5qb2luKGRhdGEucm9vbV91dWlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb21fdXVpZCA9IGRhdGEucm9vbV91dWlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pby50byh0aGlzLnJvb21fdXVpZCkuZW1pdChKT0lOX1JPT00sIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbV91c2VyX29pZDogdGhpcy5mcm9tVXNlck9pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNvY2tldENvbnRyb2xsZXIucHJvdG90eXBlLl9zZW5kTWVzc2FnZSA9IGZ1bmN0aW9uIChkYXRhLCBzb2NrZXQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGlvLCByb29tT2lkLCBmcm9tVXNlck9pZDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpbyA9IHRoaXMuaW87XG4gICAgICAgICAgICAgICAgcm9vbU9pZCA9IHRoaXMucm9vbU9pZDtcbiAgICAgICAgICAgICAgICBmcm9tVXNlck9pZCA9IHRoaXMuZnJvbVVzZXJPaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU29ja2V0Q29udHJvbGxlci5wcm90b3R5cGUuX2Rpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHRoaXMuc29ja2V0U2VydmljZS5zYXZlU29ja2V0KHNvY2tldC5pZCwgdGhpcy5mcm9tVXNlck9pZCwgXCJQVUxMXCIpLnRoZW4oKTtcbiAgICB9O1xuICAgIFNvY2tldENvbnRyb2xsZXIucHJvdG90eXBlLl90eXBpbmcgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLmlvLnRvKHRoaXMucm9vbU9pZCkuZW1pdChTRU5EX1RZUElORywgX19hc3NpZ24oX19hc3NpZ24oe30sIGRhdGEpLCB7IGZyb21fdXNlcl9vaWQ6IHRoaXMuZnJvbVVzZXJPaWQgfSkpO1xuICAgIH07XG4gICAgU29ja2V0Q29udHJvbGxlci5wcm90b3R5cGUuX3NlbmRSZWFjdGlvbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBpbyA9IHRoaXMuaW87XG4gICAgICAgIHZhciByb29tID0gdGhpcy5yb29tT2lkO1xuICAgICAgICB2YXIgZnJvbVVzZXJPaWQgPSB0aGlzLmZyb21Vc2VyT2lkO1xuICAgIH07XG4gICAgcmV0dXJuIFNvY2tldENvbnRyb2xsZXI7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgU29ja2V0Q29udHJvbGxlcjtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG52YXIgbW9uZ28gPSByZXF1aXJlKCdtb25nb29zZScpO1xudmFyIGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdCcpO1xudmFyIHNhbHRSb3VuZHMgPSAxMDtcbnZhciBTdHJIZWxwZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RySGVscGVyKCkge1xuICAgIH1cbiAgICBTdHJIZWxwZXIuaXNFbWFpbCA9IGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKGVtYWlsKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5tYXRjaCgvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8pO1xuICAgIH07XG4gICAgU3RySGVscGVyLmh0bWxFc2NhcGUgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8mL2csICcmYW1wOycpLlxuICAgICAgICAgICAgcmVwbGFjZSgvPC9nLCAnJmx0OycpLiAvLyBpdCdzIG5vdCBuZWNjZXNzYXJ5IHRvIGVzY2FwZSA+XG4gICAgICAgICAgICByZXBsYWNlKC9cIi9nLCAnL1wiJykuXG4gICAgICAgICAgICByZXBsYWNlKC8nL2csICcvXFwnJykuXG4gICAgICAgICAgICB0cmltKCkgfHwgJyc7XG4gICAgfTtcbiAgICBTdHJIZWxwZXIuaGFzaFBhc3N3b3JkID0gZnVuY3Rpb24gKG15UGxhaW50ZXh0UGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIGJjcnlwdC5oYXNoU3luYyhteVBsYWludGV4dFBhc3N3b3JkLCBzYWx0Um91bmRzKTtcbiAgICB9O1xuICAgIFN0ckhlbHBlci5jb21wYXJlUGFzc3dvcmQgPSBmdW5jdGlvbiAobXlQbGFpbnRleHRQYXNzd29yZCwgaGFzaCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmNyeXB0LmNvbXBhcmUobXlQbGFpbnRleHRQYXNzd29yZCwgaGFzaCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU3RySGVscGVyLnRvT2JqZWN0SWQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBtb25nby5UeXBlcy5PYmplY3RJZChzdHIpO1xuICAgIH07XG4gICAgU3RySGVscGVyLmlzT2JqZWN0SWQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHZhciBPYmplY3RJZCA9IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkO1xuICAgICAgICByZXR1cm4gT2JqZWN0SWQuaXNWYWxpZChzdHIpO1xuICAgIH07XG4gICAgU3RySGVscGVyLnNodWZmbGUgPSBmdW5jdGlvbiAoYXJyYXlCZWdpbikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBhcnJheSA9IF9fc3ByZWFkQXJyYXkoW10sIGFycmF5QmVnaW4sIHRydWUpO1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLCByYW5kb21JbmRleDtcbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCAhPSAwKSB7XG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC0tO1xuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgX2EgPSBbXG4gICAgICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdLCBhcnJheVtjdXJyZW50SW5kZXhdXG4gICAgICAgICAgICBdLCBhcnJheVtjdXJyZW50SW5kZXhdID0gX2FbMF0sIGFycmF5W3JhbmRvbUluZGV4XSA9IF9hWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuICAgIFN0ckhlbHBlci5yYW5kID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgICAgIGlmIChtaW4gPT09IHZvaWQgMCkgeyBtaW4gPSAwOyB9XG4gICAgICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSAxMDsgfVxuICAgICAgICBpZiAobWF4IDw9IG1pbilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9O1xuICAgIHJldHVybiBTdHJIZWxwZXI7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgU3RySGVscGVyO1xuIiwiaW1wb3J0IHsgbW9kZWwsIFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IGRlZmluZWRNb2RlbCBmcm9tIFwiLi9kZWZpbmVkLm1vZGVsXCI7XG52YXIgY29ubmVjdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIGZyb21fdXNlcl9vaWQ6IE9iamVjdCxcbiAgICB0b191c2VyX29pZDogT2JqZWN0LFxuICAgIHJvb21fdXVpZDogU3RyaW5nLFxuICAgIHN0YXR1czogU3RyaW5nLFxuICAgIHNvY2tldF9pZHM6IEFycmF5LFxufSwgZGVmaW5lZE1vZGVsKTtcbmV4cG9ydCB2YXIgU1RBVFVTX0NPTk5FQ1RfRlJFRSA9IFwiRlJFRVwiO1xuZXhwb3J0IHZhciBTVEFUVVNfQ09OTkVDVF9GSU5EID0gXCJGSU5EXCI7XG5leHBvcnQgdmFyIFNUQVRVU19DT05ORUNUX0JVU1kgPSBcIkJVU1lcIjtcbnZhciBDb25uZWN0ID0gbW9kZWwoJ0Nvbm5lY3QnLCBjb25uZWN0U2NoZW1hLCBcImNvbm5lY3RzXCIpO1xuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdDtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aW1lc3RhbXBzOiB7XG4gICAgICAgIHVwZGF0ZWRBdDogJ3VwZGF0ZWRfYXQnLFxuICAgICAgICBjcmVhdGVkQXQ6ICdjcmVhdGVkX2F0JyxcbiAgICB9LFxuICAgIHZlcnNpb25LZXk6IGZhbHNlXG59O1xuIiwiaW1wb3J0IHsgbW9kZWwsIFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IGRlZmluZWRNb2RlbCBmcm9tIFwiLi9kZWZpbmVkLm1vZGVsXCI7XG52YXIgbWVzc2FnZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIGZyb21fdXNlcl9vaWQ6IFN0cmluZyxcbiAgICB0b191c2VyX29pZDogU3RyaW5nLFxuICAgIG1lc3NhZ2U6IFN0cmluZyxcbiAgICByb29tX3V1aWQ6IFN0cmluZ1xufSwgZGVmaW5lZE1vZGVsKTtcbnZhciBNZXNzYWdlID0gbW9kZWwoXCJNZXNzYWdlXCIsIG1lc3NhZ2VTY2hlbWEsICdtZXNzYWdlcycpO1xuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcbiIsImltcG9ydCB7IFNjaGVtYSwgbW9kZWwgfSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCBkZWZpbmVkTW9kZWwgZnJvbSBcIi4vZGVmaW5lZC5tb2RlbFwiO1xudmFyIHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBmdWxsX25hbWU6IFN0cmluZyxcbiAgICBhdmF0YXI6IFN0cmluZyxcbiAgICBlbWFpbDogU3RyaW5nLFxuICAgIGZiX3VpZDogU3RyaW5nLFxuICAgIHR5cGVfYWNjb3VudDogU3RyaW5nLFxuICAgIGdlbmRlcjogU3RyaW5nLFxufSwgZGVmaW5lZE1vZGVsKTtcbnZhciBVc2VyID0gbW9kZWwoXCJVc2VyXCIsIHVzZXJTY2hlbWEsICd1c2VycycpO1xuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgQmFzZVJlcG9zaXRvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmFzZVJlcG9zaXRvcnkoc2NoZW1hTW9kZWwpIHtcbiAgICAgICAgdGhpcy5fbW9kZWwgPSBzY2hlbWFNb2RlbDtcbiAgICB9XG4gICAgQmFzZVJlcG9zaXRvcnkucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fbW9kZWwuZmluZEJ5SWQoaWQpLmV4ZWMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQmFzZVJlcG9zaXRvcnkucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAoY29uZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29uZE5ldztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmROZXcgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbmQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX21vZGVsLmZpbmQoY29uZE5ldykuZXhlYygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBCYXNlUmVwb3NpdG9yeS5wcm90b3R5cGUuZmluZE9uZSA9IGZ1bmN0aW9uIChjb25kKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb25kTmV3O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZE5ldyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29uZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fbW9kZWwuZmluZE9uZShjb25kKS5leGVjKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJhc2VSZXBvc2l0b3J5LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoY29uZCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX21vZGVsLnVwZGF0ZU9uZShjb25kLCBkYXRhKS5leGVjKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJhc2VSZXBvc2l0b3J5LnByb3RvdHlwZS51cGRhdGVNYW55ID0gZnVuY3Rpb24gKGNvbmQsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9tb2RlbC51cGRhdGVNYW55KGNvbmQsIGRhdGEpLmV4ZWMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQmFzZVJlcG9zaXRvcnkucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fbW9kZWwuY3JlYXRlKGRhdGEpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBCYXNlUmVwb3NpdG9yeS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fbW9kZWwuZmluZEJ5SWQoaWQpLmRlbGV0ZU9uZSgpLmV4ZWMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQmFzZVJlcG9zaXRvcnkucHJvdG90eXBlLmRlbGV0ZWRNYW55ID0gZnVuY3Rpb24gKGNvbmQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9tb2RlbC5maW5kKGNvbmQpLmRlbGV0ZU1hbnkoKS5leGVjKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJhc2VSZXBvc2l0b3J5LnByb3RvdHlwZS5maW5kQW5kVXBkYXRlID0gZnVuY3Rpb24gKGNvbmQsIGRhdGEsIHVwc2VydCkge1xuICAgICAgICBpZiAodXBzZXJ0ID09PSB2b2lkIDApIHsgdXBzZXJ0ID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9tb2RlbC5maW5kT25lQW5kVXBkYXRlKGNvbmQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2V0OiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuTmV3RG9jdW1lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBzZXJ0OiB1cHNlcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuRG9jdW1lbnQ6IFwiYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuZXhlYygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBCYXNlUmVwb3NpdG9yeS5wcm90b3R5cGUuZmluZEFuZE1vZGlmeSA9IGZ1bmN0aW9uIChjb25kLCBkYXRhLCB1cHNlcnQpIHtcbiAgICAgICAgaWYgKHVwc2VydCA9PT0gdm9pZCAwKSB7IHVwc2VydCA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fbW9kZWwuZmluZE9uZUFuZFVwZGF0ZShjb25kLCBkYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuTmV3RG9jdW1lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBzZXJ0OiB1cHNlcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuRG9jdW1lbnQ6IFwiYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuZXhlYygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBCYXNlUmVwb3NpdG9yeS5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9tb2RlbC5pbnNlcnRNYW55KGRhdGEpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQmFzZVJlcG9zaXRvcnk7XG59KCkpO1xuZXhwb3J0IHsgQmFzZVJlcG9zaXRvcnkgfTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCIuL2Jhc2UucmVwb3NpdG9yeVwiO1xuaW1wb3J0IENvbm5lY3QgZnJvbSBcIi4uL21vZGVscy9jb25uZWN0XCI7XG52YXIgQ29ubmVjdFJlcG9zaXRvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbm5lY3RSZXBvc2l0b3J5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbm5lY3RSZXBvc2l0b3J5KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgQ29ubmVjdCkgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIENvbm5lY3RSZXBvc2l0b3J5O1xufShCYXNlUmVwb3NpdG9yeSkpO1xuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdFJlcG9zaXRvcnk7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIi4vYmFzZS5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi4vbW9kZWxzL21lc3NhZ2VcIjtcbnZhciBNZXNzYWdlUmVwb3NpdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWVzc2FnZVJlcG9zaXRvcnksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWVzc2FnZVJlcG9zaXRvcnkoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBNZXNzYWdlKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNZXNzYWdlUmVwb3NpdG9yeS5wcm90b3R5cGUubGlzdE1lc3NhZ2UgPSBmdW5jdGlvbiAocm9vbVVVSUQsIGxhc3RPaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9tb2RlbC5hZ2dyZWdhdGUoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1hdGNoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb29tX3V1aWQ6IHJvb21VVUlEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNvcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGltaXQ6IDI1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSkudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXNvbHZlKHJlcyk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTWVzc2FnZVJlcG9zaXRvcnk7XG59KEJhc2VSZXBvc2l0b3J5KSk7XG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlUmVwb3NpdG9yeTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tIFwiLi9iYXNlLnJlcG9zaXRvcnlcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi9tb2RlbHMvdXNlclwiO1xudmFyIFVzZXJSZXBvc2l0b3J5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhVc2VyUmVwb3NpdG9yeSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBVc2VyUmVwb3NpdG9yeSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIFVzZXIpIHx8IHRoaXM7XG4gICAgfVxuICAgIFVzZXJSZXBvc2l0b3J5LnByb3RvdHlwZS5maW5kVXNlckNvbm5lY3QgPSBmdW5jdGlvbiAoZmJVaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9tb2RlbC5hZ2dyZWdhdGUoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1hdGNoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYl91aWQ6IGZiVWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvb2t1cDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogXCJjb25uZWN0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxGaWVsZDogXCJfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmVpZ25GaWVsZDogXCJmcm9tX3VzZXJfb2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhczogXCJjb25uZWN0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKS50aGVuKGZ1bmN0aW9uICh1c2Vycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgoX2EgPSB1c2Vyc1swXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFVzZXJSZXBvc2l0b3J5O1xufShCYXNlUmVwb3NpdG9yeSkpO1xuZXhwb3J0IGRlZmF1bHQgVXNlclJlcG9zaXRvcnk7XG4iLCJ2YXIgQXBpUmVzcG9uc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBpUmVzcG9uc2Uoc3RhdHVzLCBjb250ZW50LCByZXNwb25zZSkge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH1cbiAgICBBcGlSZXNwb25zZS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgZGF0YTogdGhpcy5yZXNwb25zZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgQXBpUmVzcG9uc2UucHJvdG90eXBlLmdldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlO1xuICAgIH07XG4gICAgcmV0dXJuIEFwaVJlc3BvbnNlO1xufSgpKTtcbmV4cG9ydCB7IEFwaVJlc3BvbnNlIH07XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgQXBpUmVzcG9uc2UgfSBmcm9tIFwiLi9BcGlSZXNwb25zZVwiO1xudmFyIEkxOG4gPSByZXF1aXJlKCdpMThuJykuSTE4bjtcbnZhciBpMThuID0gbmV3IEkxOG4oKTtcbmltcG9ydCBsYW5nIGZyb20gXCIuLi8uLi9jb25maWcvbGFuZ1wiO1xudmFyIFJlc3BvbnNlRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlc3BvbnNlRXJyb3IsIF9zdXBlcik7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZ1bmN0aW9uIFJlc3BvbnNlRXJyb3Ioc3RhdHVzLCBjb250ZW50LCByZXNwb25zZSkge1xuICAgICAgICBpZiAoc3RhdHVzID09PSB2b2lkIDApIHsgc3RhdHVzID0gMjAxOyB9XG4gICAgICAgIGlmIChjb250ZW50ID09PSB2b2lkIDApIHsgY29udGVudCA9IG51bGw7IH1cbiAgICAgICAgaWYgKHJlc3BvbnNlID09PSB2b2lkIDApIHsgcmVzcG9uc2UgPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpMThuLmNvbmZpZ3VyZShsYW5nKTtcbiAgICAgICAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBpMThuLl9fKCdzZXJ2ZXJfZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHN0YXR1cywgY29udGVudCwgcmVzcG9uc2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgX3RoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIF90aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFJlc3BvbnNlRXJyb3I7XG59KEFwaVJlc3BvbnNlKSk7XG5leHBvcnQgZGVmYXVsdCBSZXNwb25zZUVycm9yO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IEFwaVJlc3BvbnNlIH0gZnJvbSBcIi4vQXBpUmVzcG9uc2VcIjtcbmltcG9ydCBsYW5nIGZyb20gXCIuLi8uLi9jb25maWcvbGFuZ1wiO1xuLy8gaW1wb3J0IGkxOG4gZnJvbSBcImkxOG5cIjtcbnZhciBJMThuID0gcmVxdWlyZSgnaTE4bicpLkkxOG47XG52YXIgaTE4biA9IG5ldyBJMThuKCk7XG52YXIgUmVzcG9uc2VTdWNjZXNzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZXNwb25zZVN1Y2Nlc3MsIF9zdXBlcik7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZ1bmN0aW9uIFJlc3BvbnNlU3VjY2VzcyhyZXNwb25zZSwgY29udGVudCwgc3RhdHVzKSB7XG4gICAgICAgIGlmIChyZXNwb25zZSA9PT0gdm9pZCAwKSB7IHJlc3BvbnNlID0ge307IH1cbiAgICAgICAgaWYgKGNvbnRlbnQgPT09IHZvaWQgMCkgeyBjb250ZW50ID0gbnVsbDsgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSB2b2lkIDApIHsgc3RhdHVzID0gMjAwOyB9XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGkxOG4uY29uZmlndXJlKGxhbmcpO1xuICAgICAgICBpZiAoY29udGVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGVudCA9IGkxOG4uX18oJ3N1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHN0YXR1cywgY29udGVudCwgcmVzcG9uc2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgIF90aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFJlc3BvbnNlU3VjY2Vzcztcbn0oQXBpUmVzcG9uc2UpKTtcbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlU3VjY2VzcztcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgU3RySGVscGVyIGZyb20gXCIuLi9oZWxwZXJzL3N0ci5oZWxwZXJcIjtcbmltcG9ydCBVc2VyUmVwb3NpdG9yeSBmcm9tIFwiLi4vcmVwb3NpdG9yaWVzL3VzZXIucmVwb3NpdG9yeVwiO1xuaW1wb3J0IE1lc3NhZ2VSZXBvc2l0b3J5IGZyb20gXCIuLi9yZXBvc2l0b3JpZXMvbWVzc2FnZS5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgQ29ubmVjdFJlcG9zaXRvcnkgZnJvbSBcIi4uL3JlcG9zaXRvcmllcy9jb25uZWN0LnJlcG9zaXRvcnlcIjtcbmltcG9ydCBSZXNwb25zZVN1Y2Nlc3MgZnJvbSBcIi4uL3Jlc3BvbnNlcy9SZXNwb25zZVN1Y2Nlc3NcIjtcbnZhciBDcnlwdG9KUyA9IHJlcXVpcmUoXCJjcnlwdG8tanNcIik7XG52YXIgTUQ1ID0gcmVxdWlyZSgnY3J5cHRvLWpzL21kNScpO1xudmFyIFV0ZjggPSBDcnlwdG9KUy5lbmMuVXRmODtcbnZhciBTb2NrZXRTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNvY2tldFNlcnZpY2UoKSB7XG4gICAgICAgIHRoaXMudXNlclJlcG9zaXRvcnkgPSBuZXcgVXNlclJlcG9zaXRvcnkoKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlUmVwb3NpdG9yeSA9IG5ldyBNZXNzYWdlUmVwb3NpdG9yeSgpO1xuICAgICAgICB0aGlzLmNvbm5lY3RSZXBvc2l0b3J5ID0gbmV3IENvbm5lY3RSZXBvc2l0b3J5KCk7XG4gICAgfVxuICAgIFNvY2tldFNlcnZpY2UucHJvdG90eXBlLnNhdmVTb2NrZXQgPSBmdW5jdGlvbiAoc29ja2V0SWQsIHVzZXJPaWQsIHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IHZvaWQgMCkgeyB0eXBlID0gXCJQVVNIXCI7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNvbm5lY3RSZXBvc2l0b3J5LmZpbmRBbmRNb2RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fdXNlcl9vaWQ6IFN0ckhlbHBlci50b09iamVjdElkKHVzZXJPaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0eXBlID09PSBcIlBVTExcIiA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHVsbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXRfaWRzOiBzb2NrZXRJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHB1c2g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0X2lkczogc29ja2V0SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUmVzcG9uc2VTdWNjZXNzKCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTb2NrZXRTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFNvY2tldFNlcnZpY2U7XG4iLCJyZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3J0OiBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDBcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdXJpOiBwcm9jZXNzLmVudi5NT05HT19VUkkgfHwgXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L215YXBwXCJcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICAgIHR0bDogcHJvY2Vzcy5lbnYuSldUX1RUTCB8fCA2MCAqIDYwICogMjRcbn07XG4iLCJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxvY2FsZXM6IFsnZW4nLCAndmknXSxcbiAgICBkaXJlY3Rvcnk6IHBhdGguam9pbignLi9zcmMvbG9jYWxlcycpLFxuICAgIGRlZmF1bHRMb2NhbGU6ICd2aScsXG4gICAgaGVhZGVyOiAnbGFuZycsXG4gICAgcXVlcnlQYXJhbWV0ZXI6ICdsYW5nJyxcbiAgICBvYmplY3ROb3RhdGlvbjogdHJ1ZVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzb2NrZXQuaW8vbW9uZ28tYWRhcHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0by1qcy9tZDVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaTE4blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcbmltcG9ydCBjb25maWdBcHAgZnJvbSAnLi9jb25maWcvYXBwJztcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG52YXIgYXBwID0gbmV3IEFwcCgpO1xudmFyIHNlcnZlciA9IGFwcC5zZXJ2ZXI7XG5zZXJ2ZXIubGlzdGVuKGNvbmZpZ0FwcC5wb3J0KTtcbnNlcnZlci5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgZnVuY3Rpb24gKGVycm9yLCBwcm9taXNlKSB7XG4gICAgY29uc29sZS5sb2coJyBPaCBMb3JkISBXZSBmb3Jnb3QgdG8gaGFuZGxlIGEgcHJvbWlzZSByZWplY3Rpb24gaGVyZTogJywgcHJvbWlzZSk7XG4gICAgY29uc29sZS5sb2coJyBUaGUgZXJyb3Igd2FzOiAnLCBlcnJvcik7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==