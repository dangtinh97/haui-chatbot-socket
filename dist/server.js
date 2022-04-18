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
        // this.app.use(api)
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
/* harmony export */   "USER_OFFLINE": () => (/* binding */ USER_OFFLINE)
/* harmony export */ });
var SEND_MESSAGE = 'SEND_MESSAGE';
var SEND_TYPING = "SEND_TYPING";
var SEND_REACTION = "SEND_REACTION";
var USER_ONLINE = "USER_ONLINE";
var USER_OFFLINE = "USER_OFFLINE";


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
/* harmony import */ var _helpers_str_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/str.helper */ "./src/app/helpers/str.helper.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/database */ "./src/config/database.ts");
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
                        mongoClient = new MongoClient(_config_database__WEBPACK_IMPORTED_MODULE_4__["default"].uri, {
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
            var token, decoded, room, users, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.roomOid = socket.handshake.query.room_oid;
                        if (!_helpers_str_helper__WEBPACK_IMPORTED_MODULE_2__["default"].isObjectId(this.roomOid))
                            return [2 /*return*/, next(new Error("CHAT ROOM NOT IS OBJECT ID"))];
                        token = socket.handshake.auth.token;
                        if (token === undefined)
                            next(new Error("Authorized 1!"));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        decoded = jwt.verify(token.replace('Bearer ', ''), _config_jwt__WEBPACK_IMPORTED_MODULE_0__["default"].secret);
                        if (decoded.exp < (new Date()).getTime() / 1000)
                            next(new Error("Authorized 2!"));
                        this.fromUserOid = decoded.sub;
                        return [4 /*yield*/, this.socketService.findRoomAndSaveSocket(this.roomOid, socket.id, decoded.sub)];
                    case 2:
                        room = _a.sent();
                        if (room === null)
                            return [2 /*return*/, next(new Error("ROOM CHAT NOT EXISTS!"))];
                        this.roomId = room.id;
                        this.room = room;
                        return [4 /*yield*/, this.socketService.findUserByCond({
                                id: {
                                    $in: room.joins
                                }
                            })];
                    case 3:
                        users = _a.sent();
                        this.fromUser = users.filter(function (user) {
                            return user._id.toString() === decoded.sub;
                        })[0];
                        this.toUser = users.filter(function (user) {
                            return user._id.toString() !== decoded.sub;
                        })[0];
                        this.users = users;
                        return [2 /*return*/, next()];
                    case 4:
                        err_1 = _a.sent();
                        console.log(err_1);
                        next(new Error("Authorized ERROR!"));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    SocketController.prototype._connection = function (socket) {
        var _this = this;
        socket.join(this.roomOid);
        socket.on(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SEND_MESSAGE, function (data) { return _this._sendMessage(data, socket); });
        socket.on(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SEND_TYPING, function (data) { return _this._typing(data); });
        socket.on(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SEND_REACTION, function (data) { return _this._sendReaction(data); });
        socket.on("disconnect", function () { return _this._disconnect(socket); });
        this.io.to(this.roomOid).emit(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.USER_ONLINE, {
            from_user_oid: this.fromUserOid
        });
    };
    SocketController.prototype._sendMessage = function (data, socket) {
        return __awaiter(this, void 0, void 0, function () {
            var io, roomOid, fromUserOid;
            return __generator(this, function (_a) {
                io = this.io;
                roomOid = this.roomOid;
                fromUserOid = this.fromUserOid;
                this.socketService.sendMessage(this.room, data, this.users, this.fromUserOid).then(function (res) {
                    io.to(roomOid).emit(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SEND_MESSAGE, {
                        from_user_oid: fromUserOid,
                        message_oid: res.message_oid,
                        data: data.data
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    SocketController.prototype._disconnect = function (socket) {
        this.socketService.removeSocket(this.roomOid, socket.id).then();
    };
    SocketController.prototype._typing = function (data) {
        this.io.to(this.roomOid).emit(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SEND_TYPING, __assign(__assign({}, data), { from_user_oid: this.fromUserOid }));
    };
    SocketController.prototype._sendReaction = function (data) {
        var io = this.io;
        var room = this.roomOid;
        var fromUserOid = this.fromUserOid;
        this.socketService.reaction(data, this.roomId, this.fromUser.id, this.toUser._id.toString()).then(function (res) {
            io.to(room).emit(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SEND_REACTION, __assign({ from_user_oid: fromUserOid }, data));
        });
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

/***/ "./src/app/models/chatRoom.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/chatRoom.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defined_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defined.model */ "./src/app/models/defined.model.ts");



var chatRoomSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    user_oid_create: mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId,
    joins: Array,
    status: String,
    id: Number,
    sockets: Array,
    message_last: String,
    type_message: String,
    user_id_send_last: Number,
    time_send_last: Date
}, _defined_model__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ChatRoom = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('ChatRoom', chatRoomSchema, 'dt_chat_rooms');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatRoom);


/***/ }),

/***/ "./src/app/models/counter.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/counter.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


var schemaCounter = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name_collection: String,
    id: Number
});
var Counter = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Counter', schemaCounter, 'counters');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);


/***/ }),

/***/ "./src/app/models/defined.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/defined.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "save": () => (/* binding */ save)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    timestamps: {
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    },
    versionKey: false
});
var save = function (next) {
    this.deleted_flag = false;
    next();
};


/***/ }),

/***/ "./src/app/models/message.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/message.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATUS_MESSAGE_NORMAL": () => (/* binding */ STATUS_MESSAGE_NORMAL),
/* harmony export */   "STATUS_MESSAGE_DELETE": () => (/* binding */ STATUS_MESSAGE_DELETE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defined_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defined.model */ "./src/app/models/defined.model.ts");


var MessageSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    id: Number,
    from_user_id: Number,
    to_user_id: Number,
    type_message: String,
    message: String,
    reactions: Array,
    medias: [],
    deleted_flag: Boolean,
    info: Object,
    status: String,
    room_id: Number
}, _defined_model__WEBPACK_IMPORTED_MODULE_1__["default"]);
var Message = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Message', MessageSchema, 'dt_messages');
var STATUS_MESSAGE_NORMAL = "NORMAL";
var STATUS_MESSAGE_DELETE = "DELETE";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);


/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATUS_NORMAL": () => (/* binding */ STATUS_NORMAL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defined_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defined.model */ "./src/app/models/defined.model.ts");


var userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    id: Number,
    mobile: String,
    email: String,
    password: String,
    uid_fb: String,
    apple_id: String,
    full_name: String,
    gender: String,
    care_about_gender: String,
    age: Number,
    address: String,
    avatar_attachment_id: Number,
    cover_attachment_id: Number,
    location: Object,
    status: String,
    tokens_notification: Array,
    introduce: String,
    link_qr_code: String,
    verify_account: Boolean,
    matching_with_user_id: Number,
    deleted_flag: Boolean
}, _defined_model__WEBPACK_IMPORTED_MODULE_1__["default"]).pre('save', function (next) {
    if (this.isNew) {
        this.deleted_flag = false;
    }
    next();
}).pre('deleteOne', function (next) {
    this.deleted_flag = true;
});
var User = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('User', userSchema, 'dt_users');
var STATUS_NORMAL = "NORMAL";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ "./src/app/repositories/ChatRoomRepository.ts":
/*!****************************************************!*\
  !*** ./src/app/repositories/ChatRoomRepository.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.repository */ "./src/app/repositories/base.repository.ts");
/* harmony import */ var _models_chatRoom_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/chatRoom.model */ "./src/app/models/chatRoom.model.ts");
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


var ChatRoomRepository = /** @class */ (function (_super) {
    __extends(ChatRoomRepository, _super);
    function ChatRoomRepository() {
        return _super.call(this, _models_chatRoom_model__WEBPACK_IMPORTED_MODULE_1__["default"]) || this;
    }
    return ChatRoomRepository;
}(_base_repository__WEBPACK_IMPORTED_MODULE_0__.BaseRepository));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatRoomRepository);


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
/* harmony import */ var _models_counter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/counter.model */ "./src/app/models/counter.model.ts");
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
                        condNew.deleted_flag = {
                            $ne: true
                        };
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
                        condNew.deleted_flag = {
                            $ne: true
                        };
                        return [4 /*yield*/, this._model.findOne(condNew).exec()];
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
    BaseRepository.prototype.countId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modelName, count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modelName = this._model.collection.collectionName;
                        return [4 /*yield*/, _models_counter_model__WEBPACK_IMPORTED_MODULE_0__["default"].findOneAndUpdate({
                                name_collection: modelName,
                            }, {
                                $inc: {
                                    id: 1
                                }
                            }, {
                                upsert: true,
                                returnDocument: "after"
                            }).exec()];
                    case 1:
                        count = _a.sent();
                        return [2 /*return*/, count.id];
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
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/message.model */ "./src/app/models/message.model.ts");
/* harmony import */ var _helpers_str_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/str.helper */ "./src/app/helpers/str.helper.ts");
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
        return _super.call(this, _models_message_model__WEBPACK_IMPORTED_MODULE_1__["default"]) || this;
    }
    MessageRepository.prototype.getMessage = function (roomId, lastOid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this._model.aggregate([
                            {
                                $match: {
                                    room_id: roomId,
                                    _id: lastOid === "" ? {
                                        $exists: true
                                    } : {
                                        $gt: _helpers_str_helper__WEBPACK_IMPORTED_MODULE_2__["default"].toObjectId(lastOid)
                                    }
                                }
                            },
                            {
                                $sort: {
                                    _id: -1
                                }
                            },
                            {
                                $limit: 20
                            }
                        ]).then(resolve);
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
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _helpers_str_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/str.helper */ "./src/app/helpers/str.helper.ts");
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
        return _super.call(this, _models_user_model__WEBPACK_IMPORTED_MODULE_1__["default"]) || this;
    }
    UserRepository.prototype.infoUser = function (userOid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _models_user_model__WEBPACK_IMPORTED_MODULE_1__["default"].aggregate([
                        {
                            $match: {
                                _id: userOid
                            }
                        },
                        {
                            $lookup: {
                                from: 'dt_favorites',
                                localField: 'id',
                                foreignField: "user_id",
                                as: "favorites"
                            }
                        }
                    ])];
            });
        });
    };
    UserRepository.prototype.matching = function (from_user_id, user_oid, lastOid) {
        return __awaiter(this, void 0, void 0, function () {
            var match;
            return __generator(this, function (_a) {
                match = {
                    _id: {
                        $ne: _helpers_str_helper__WEBPACK_IMPORTED_MODULE_2__["default"].toObjectId(user_oid)
                    }
                };
                if (_helpers_str_helper__WEBPACK_IMPORTED_MODULE_2__["default"].isObjectId(lastOid))
                    match = {
                        $and: [
                            {
                                _id: {
                                    $ne: _helpers_str_helper__WEBPACK_IMPORTED_MODULE_2__["default"].toObjectId(user_oid)
                                }
                            },
                            {
                                _id: {
                                    $gt: _helpers_str_helper__WEBPACK_IMPORTED_MODULE_2__["default"].toObjectId(lastOid)
                                }
                            }
                        ]
                    };
                return [2 /*return*/, new Promise(function (resolve) {
                        _models_user_model__WEBPACK_IMPORTED_MODULE_1__["default"].aggregate([
                            {
                                $match: match
                            },
                            {
                                $limit: 2
                            },
                            {
                                $sort: {
                                    _id: -1
                                }
                            },
                            {
                                $lookup: {
                                    from: 'dt_follows',
                                    localField: 'id',
                                    foreignField: 'follow_user_id',
                                    pipeline: [
                                        {
                                            $match: {
                                                from_user_id: from_user_id,
                                            }
                                        }
                                    ],
                                    as: 'follows'
                                }
                            },
                            {
                                $lookup: {
                                    from: 'dt_attachments',
                                    localField: 'avatar_attachment_id',
                                    foreignField: 'id',
                                    as: 'attachments'
                                }
                            },
                            {
                                $project: {
                                    full_name: 1,
                                    age: 1,
                                    address: 1,
                                    introduce: 1,
                                    location: 1,
                                    follow: { $arrayElemAt: ["$follows", 0] },
                                    attachment: { $arrayElemAt: ["$attachments", 0] }
                                }
                            }
                        ]).then(function (res) { return resolve(res !== null && res !== void 0 ? res : null); });
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
/* harmony import */ var _repositories_ChatRoomRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repositories/ChatRoomRepository */ "./src/app/repositories/ChatRoomRepository.ts");
/* harmony import */ var _helpers_str_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/str.helper */ "./src/app/helpers/str.helper.ts");
/* harmony import */ var _repositories_user_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repositories/user.repository */ "./src/app/repositories/user.repository.ts");
/* harmony import */ var _repositories_message_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repositories/message.repository */ "./src/app/repositories/message.repository.ts");
/* harmony import */ var _responses_ResponseSuccess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../responses/ResponseSuccess */ "./src/app/responses/ResponseSuccess.ts");
/* harmony import */ var _responses_ResponseError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../responses/ResponseError */ "./src/app/responses/ResponseError.ts");
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
        this.chatRoomRepository = new _repositories_ChatRoomRepository__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.userRepository = new _repositories_user_repository__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.messageRepository = new _repositories_message_repository__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }
    SocketService.prototype.findRoomAndSaveSocket = function (roomOid, socketId, fromUserOid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.chatRoomRepository.findAndModify({
                            _id: _helpers_str_helper__WEBPACK_IMPORTED_MODULE_1__["default"].toObjectId(roomOid)
                        }, {
                            $push: {
                                sockets: {
                                    'user_oid': _helpers_str_helper__WEBPACK_IMPORTED_MODULE_1__["default"].toObjectId(fromUserOid),
                                    'socket_id': socketId
                                }
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SocketService.prototype.decryptedMessage = function (textPlan, roomOid) {
        var key = CryptoJS.MD5(roomOid).toString();
        return CryptoJS.AES.decrypt(textPlan, Utf8.parse(key), {
            iv: Utf8.parse(key.substr(0, 16))
        }).toString(Utf8);
    };
    SocketService.prototype.sendMessage = function (room, data, users, fromUserOid) {
        return __awaiter(this, void 0, void 0, function () {
            var roomOid, decrypted, messageData, fromUser, fromUserId, toUser, toUserId, toUserOid, createMessage, haveInRoom;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        roomOid = room._id.toString();
                        decrypted = this.decryptedMessage(data.data, roomOid);
                        if (decrypted === "")
                            return [2 /*return*/, {
                                    decode_data: true,
                                    send_socket: false,
                                    message_oid: ""
                                }];
                        messageData = JSON.parse(decrypted);
                        fromUser = users.filter(function (user) {
                            return user._id.toString() === fromUserOid;
                        })[0];
                        fromUserId = fromUser.id;
                        toUser = users.filter(function (user) {
                            return user._id.toString() !== fromUserOid;
                        })[0];
                        toUserId = toUser.id;
                        toUserOid = toUser._id.toString();
                        return [4 /*yield*/, this.saveMessage(messageData, roomOid, room.id, fromUserId, toUserId)];
                    case 1:
                        createMessage = _a.sent();
                        haveInRoom = room.sockets.filter(function (socket) {
                            return socket.user_oid !== fromUserOid;
                        }).length > 0;
                        if (!haveInRoom) {
                        }
                        return [2 /*return*/, {
                                decode_data: true,
                                send_socket: haveInRoom,
                                message_oid: createMessage._id.toString()
                            }];
                }
            });
        });
    };
    SocketService.prototype.encrypt = function (data, roomOid) {
        var key = CryptoJS.MD5(roomOid).toString();
        return CryptoJS.AES.encrypt(data, Utf8.parse(key), {
            iv: Utf8.parse(key.substr(0, 16))
        }).toString();
    };
    SocketService.prototype.saveMessage = function (messageData, roomOid, roomId, fromUserId, toUserId) {
        return __awaiter(this, void 0, void 0, function () {
            var message, dataCreateMessage;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        message = '';
                        if (typeof messageData.message !== "undefined" && messageData.message !== "") {
                            message = this.encrypt(messageData.message, roomOid);
                        }
                        _a = {};
                        return [4 /*yield*/, this.messageRepository.countId()];
                    case 1:
                        dataCreateMessage = (_a.id = _b.sent(),
                            _a.message = message,
                            _a.medias = messageData.media.map(function (str) {
                                return _helpers_str_helper__WEBPACK_IMPORTED_MODULE_1__["default"].toObjectId(str);
                            }),
                            _a.room_id = roomId,
                            _a.from_user_id = fromUserId,
                            _a.to_user_id = toUserId,
                            _a.type_message = messageData.type_message,
                            _a);
                        return [2 /*return*/, new Promise(function (resolve) {
                                Promise.all([
                                    _this.messageRepository.create(dataCreateMessage),
                                    _this.chatRoomRepository.findAndUpdate({
                                        id: roomId,
                                    }, {
                                        message_last: message,
                                        type_message: messageData.type_message,
                                        user_id_send_last: fromUserId,
                                        time_send_last: new Date()
                                    })
                                ]).then(function (data) {
                                    return resolve(data[0]);
                                });
                            })];
                }
            });
        });
    };
    SocketService.prototype.removeSocket = function (roomOid, socketId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.chatRoomRepository.findAndModify({
                            _id: _helpers_str_helper__WEBPACK_IMPORTED_MODULE_1__["default"].toObjectId(roomOid)
                        }, {
                            $pull: {
                                'sockets': { socket_id: socketId }
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SocketService.prototype.findUserByCond = function (cond) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.find(cond)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SocketService.prototype.reaction = function (data, roomId, fromUserId, toUserOid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (typeof data.message_oid === "undefined" || !_helpers_str_helper__WEBPACK_IMPORTED_MODULE_1__["default"].isObjectId(data.message_oid))
                    return [2 /*return*/, new _responses_ResponseError__WEBPACK_IMPORTED_MODULE_5__["default"]()];
                return [2 /*return*/, new Promise(function (resolve) {
                        Promise.all([
                            _this.messageRepository.findAndModify({
                                _id: _helpers_str_helper__WEBPACK_IMPORTED_MODULE_1__["default"].toObjectId(data.message_oid),
                                room_id: roomId,
                                reactions: {
                                    $ne: fromUserId
                                }
                            }, {
                                $push: {
                                    reactions: [fromUserId]
                                }
                            }),
                            _this.partnerOnline(roomId, toUserOid)
                        ]).then(function (res) {
                            console.log(res);
                            return resolve((new _responses_ResponseSuccess__WEBPACK_IMPORTED_MODULE_4__["default"]({
                                send_socket: res[1]
                            })));
                        });
                    })];
            });
        });
    };
    SocketService.prototype.partnerOnline = function (roomId, userOid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.chatRoomRepository.findOne({
                            id: roomId,
                            'sockets.user_oid': _helpers_str_helper__WEBPACK_IMPORTED_MODULE_1__["default"].toObjectId(userOid)
                        })];
                    case 1: return [2 /*return*/, (_a.sent()) !== null];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLG9EQUF3QjtBQUNhO0FBQ2I7QUFDeEIsY0FBYyw0Q0FBRztBQUNqQjtBQUNBLGNBQWMsd0RBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwL2NvbnN0YW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vZGF0aW5lZS8uL3NyYy9hcHAvY29udHJvbGxlcnMvc29ja2V0LmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZGF0aW5lZS8uL3NyYy9hcHAvaGVscGVycy9zdHIuaGVscGVyLnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwL21vZGVscy9jaGF0Um9vbS5tb2RlbC50cyIsIndlYnBhY2s6Ly9kYXRpbmVlLy4vc3JjL2FwcC9tb2RlbHMvY291bnRlci5tb2RlbC50cyIsIndlYnBhY2s6Ly9kYXRpbmVlLy4vc3JjL2FwcC9tb2RlbHMvZGVmaW5lZC5tb2RlbC50cyIsIndlYnBhY2s6Ly9kYXRpbmVlLy4vc3JjL2FwcC9tb2RlbHMvbWVzc2FnZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9kYXRpbmVlLy4vc3JjL2FwcC9tb2RlbHMvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly9kYXRpbmVlLy4vc3JjL2FwcC9yZXBvc2l0b3JpZXMvQ2hhdFJvb21SZXBvc2l0b3J5LnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwL3JlcG9zaXRvcmllcy9iYXNlLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vZGF0aW5lZS8uL3NyYy9hcHAvcmVwb3NpdG9yaWVzL21lc3NhZ2UucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9kYXRpbmVlLy4vc3JjL2FwcC9yZXBvc2l0b3JpZXMvdXNlci5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwL3Jlc3BvbnNlcy9BcGlSZXNwb25zZS50cyIsIndlYnBhY2s6Ly9kYXRpbmVlLy4vc3JjL2FwcC9yZXNwb25zZXMvUmVzcG9uc2VFcnJvci50cyIsIndlYnBhY2s6Ly9kYXRpbmVlLy4vc3JjL2FwcC9yZXNwb25zZXMvUmVzcG9uc2VTdWNjZXNzLnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvYXBwL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlLnRzIiwid2VicGFjazovL2RhdGluZWUvLi9zcmMvY29uZmlnL2FwcC50cyIsIndlYnBhY2s6Ly9kYXRpbmVlLy4vc3JjL2NvbmZpZy9kYXRhYmFzZS50cyIsIndlYnBhY2s6Ly9kYXRpbmVlLy4vc3JjL2NvbmZpZy9qd3QudHMiLCJ3ZWJwYWNrOi8vZGF0aW5lZS8uL3NyYy9jb25maWcvbGFuZy50cyIsIndlYnBhY2s6Ly9kYXRpbmVlL2V4dGVybmFsIGNvbW1vbmpzIFwiQHNvY2tldC5pby9tb25nby1hZGFwdGVyXCIiLCJ3ZWJwYWNrOi8vZGF0aW5lZS9leHRlcm5hbCBjb21tb25qcyBcImJjcnlwdFwiIiwid2VicGFjazovL2RhdGluZWUvZXh0ZXJuYWwgY29tbW9uanMgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovL2RhdGluZWUvZXh0ZXJuYWwgY29tbW9uanMgXCJjcnlwdG8tanNcIiIsIndlYnBhY2s6Ly9kYXRpbmVlL2V4dGVybmFsIGNvbW1vbmpzIFwiY3J5cHRvLWpzL21kNVwiIiwid2VicGFjazovL2RhdGluZWUvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9kYXRpbmVlL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2RhdGluZWUvZXh0ZXJuYWwgY29tbW9uanMgXCJoZWxtZXRcIiIsIndlYnBhY2s6Ly9kYXRpbmVlL2V4dGVybmFsIGNvbW1vbmpzIFwiaHR0cFwiIiwid2VicGFjazovL2RhdGluZWUvZXh0ZXJuYWwgY29tbW9uanMgXCJpMThuXCIiLCJ3ZWJwYWNrOi8vZGF0aW5lZS9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2RhdGluZWUvZXh0ZXJuYWwgY29tbW9uanMgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vZGF0aW5lZS9leHRlcm5hbCBjb21tb25qcyBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vZGF0aW5lZS9leHRlcm5hbCBjb21tb25qcyBcInNvY2tldC5pb1wiIiwid2VicGFjazovL2RhdGluZWUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9kYXRpbmVlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RhdGluZWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGF0aW5lZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGF0aW5lZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RhdGluZWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kYXRpbmVlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgU2VydmVyIGFzIFNvY2tldFNlcnZlciB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCBodHRwIGZyb20gXCJodHRwXCI7XG5pbXBvcnQgaGVsbWV0IGZyb20gXCJoZWxtZXRcIjtcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vc3JjL2NvbmZpZy9hcHAnO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XG5pbXBvcnQgaTE4biBmcm9tICdpMThuJztcbmltcG9ydCBSZXNwb25zZUVycm9yIGZyb20gXCIuL2FwcC9yZXNwb25zZXMvUmVzcG9uc2VFcnJvclwiO1xuaW1wb3J0IGxhbmcgZnJvbSBcIi4vY29uZmlnL2xhbmdcIjtcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IGRhdGFiYXNlQ29uZmlnIGZyb20gXCIuLi9zcmMvY29uZmlnL2RhdGFiYXNlXCI7XG5pbXBvcnQgU29ja2V0Q29udHJvbGxlciBmcm9tIFwiLi9hcHAvY29udHJvbGxlcnMvc29ja2V0LmNvbnRyb2xsZXJcIjtcbnZhciBBcHAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBwKCkge1xuICAgICAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcbiAgICAgICAgdGhpcy5jb25maWdMYW5nKCk7XG4gICAgICAgIHRoaXMuY29uZmlnUG9ydCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ01pZGRsZXdhcmUoKTtcbiAgICAgICAgdGhpcy5jb25uZWN0REIoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTb2NrZXQoKTtcbiAgICB9XG4gICAgQXBwLnByb3RvdHlwZS5jb25maWdQb3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFwcC5zZXQoJ3BvcnQnLCBhcHBDb25maWcucG9ydCk7XG4gICAgfTtcbiAgICBBcHAucHJvdG90eXBlLmNvbmZpZ01pZGRsZXdhcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG4gICAgICAgIHRoaXMuYXBwLnVzZShoZWxtZXQoKSk7XG4gICAgICAgIHRoaXMuYXBwLnVzZShpMThuLmluaXQpO1xuICAgICAgICAvLyB0aGlzLmFwcC51c2UoYXBpKVxuICAgICAgICB0aGlzLmFwcC51c2UoZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKG5ldyBSZXNwb25zZUVycm9yKDQwNCwgcmVzLl9fKCd1cmxfbm90X2V4aXN0cycpKSkudG9PYmplY3QoKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXBwLnByb3RvdHlwZS5jcmVhdGVTZXJ2ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIodGhpcy5hcHApO1xuICAgIH07XG4gICAgQXBwLnByb3RvdHlwZS5jb25maWdMYW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpMThuLmNvbmZpZ3VyZShsYW5nKTtcbiAgICB9O1xuICAgIEFwcC5wcm90b3R5cGUuY29ubmVjdERCID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtb25nb29zZS5jb25uZWN0KGRhdGFiYXNlQ29uZmlnLnVyaSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoLTEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEFwcC5wcm90b3R5cGUuY3JlYXRlU29ja2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW8gPSBuZXcgU29ja2V0U2VydmVyKHRoaXMuc2VydmVyLCB7XG4gICAgICAgICAgICBjb3JzOiBcIipcIlxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBTb2NrZXRDb250cm9sbGVyKGlvKTtcbiAgICB9O1xuICAgIHJldHVybiBBcHA7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiZXhwb3J0IHZhciBTRU5EX01FU1NBR0UgPSAnU0VORF9NRVNTQUdFJztcbmV4cG9ydCB2YXIgU0VORF9UWVBJTkcgPSBcIlNFTkRfVFlQSU5HXCI7XG5leHBvcnQgdmFyIFNFTkRfUkVBQ1RJT04gPSBcIlNFTkRfUkVBQ1RJT05cIjtcbmV4cG9ydCB2YXIgVVNFUl9PTkxJTkUgPSBcIlVTRVJfT05MSU5FXCI7XG5leHBvcnQgdmFyIFVTRVJfT0ZGTElORSA9IFwiVVNFUl9PRkZMSU5FXCI7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCBqd3RDb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9qd3RcIjtcbmltcG9ydCBTb2NrZXRTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZVwiO1xuaW1wb3J0IFN0ckhlbHBlciBmcm9tIFwiLi4vaGVscGVycy9zdHIuaGVscGVyXCI7XG52YXIgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XG52YXIgY3JlYXRlQWRhcHRlciA9IHJlcXVpcmUoXCJAc29ja2V0LmlvL21vbmdvLWFkYXB0ZXJcIikuY3JlYXRlQWRhcHRlcjtcbnZhciBNb25nb0NsaWVudCA9IHJlcXVpcmUoXCJtb25nb2RiXCIpLk1vbmdvQ2xpZW50O1xuaW1wb3J0IHsgU0VORF9NRVNTQUdFLCBTRU5EX1JFQUNUSU9OLCBTRU5EX1RZUElORywgVVNFUl9PTkxJTkUgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJztcbmltcG9ydCBkYXRhYmFzZUNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcvZGF0YWJhc2UnO1xudmFyIERCID0gXCJkYXRpbmVlXCI7XG52YXIgQ09MTEVDVElPTiA9IFwic29ja2V0LmlvLWFkYXB0ZXItZXZlbnRzXCI7XG52YXIgU29ja2V0Q29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTb2NrZXRDb250cm9sbGVyKHNvY2tldCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNvY2tldFNlcnZpY2UgPSBuZXcgU29ja2V0U2VydmljZSgpO1xuICAgICAgICB0aGlzLmlvID0gc29ja2V0O1xuICAgICAgICB0aGlzLmFkYXB0ZXIoKTtcbiAgICAgICAgdGhpcy5jb25maWdNaWRkbGV3YXJlKCk7XG4gICAgICAgIHRoaXMuaW8ub24oXCJjb25uZWN0aW9uXCIsIGZ1bmN0aW9uIChzb2NrZXQpIHsgcmV0dXJuIF90aGlzLl9jb25uZWN0aW9uKHNvY2tldCk7IH0pO1xuICAgIH1cbiAgICBTb2NrZXRDb250cm9sbGVyLnByb3RvdHlwZS5hZGFwdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbW9uZ29DbGllbnQsIGVfMSwgbW9uZ29Db2xsZWN0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9uZ29DbGllbnQgPSBuZXcgTW9uZ29DbGllbnQoZGF0YWJhc2VDb25maWcudXJpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBtb25nb0NsaWVudC5jb25uZWN0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMiwgNCwgLCA1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBtb25nb0NsaWVudC5kYihEQikuY3JlYXRlQ29sbGVjdGlvbihDT0xMRUNUSU9OLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHBlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMWU2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbmdvQ29sbGVjdGlvbiA9IG1vbmdvQ2xpZW50LmRiKERCKS5jb2xsZWN0aW9uKENPTExFQ1RJT04pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pby5hZGFwdGVyKGNyZWF0ZUFkYXB0ZXIobW9uZ29Db2xsZWN0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU29ja2V0Q29udHJvbGxlci5wcm90b3R5cGUuY29uZmlnTWlkZGxld2FyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5pby51c2UoZnVuY3Rpb24gKHNvY2tldCwgbmV4dCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRva2VuLCBkZWNvZGVkLCByb29tLCB1c2VycywgZXJyXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb21PaWQgPSBzb2NrZXQuaGFuZHNoYWtlLnF1ZXJ5LnJvb21fb2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFTdHJIZWxwZXIuaXNPYmplY3RJZCh0aGlzLnJvb21PaWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXh0KG5ldyBFcnJvcihcIkNIQVQgUk9PTSBOT1QgSVMgT0JKRUNUIElEXCIpKV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHNvY2tldC5oYW5kc2hha2UuYXV0aC50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQobmV3IEVycm9yKFwiQXV0aG9yaXplZCAxIVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNCwgLCA1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbi5yZXBsYWNlKCdCZWFyZXIgJywgJycpLCBqd3RDb25maWcuc2VjcmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWNvZGVkLmV4cCA8IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQobmV3IEVycm9yKFwiQXV0aG9yaXplZCAyIVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb21Vc2VyT2lkID0gZGVjb2RlZC5zdWI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnNvY2tldFNlcnZpY2UuZmluZFJvb21BbmRTYXZlU29ja2V0KHRoaXMucm9vbU9pZCwgc29ja2V0LmlkLCBkZWNvZGVkLnN1YildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByb29tID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvb20gPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5leHQobmV3IEVycm9yKFwiUk9PTSBDSEFUIE5PVCBFWElTVFMhXCIpKV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb21JZCA9IHJvb20uaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb20gPSByb29tO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zb2NrZXRTZXJ2aWNlLmZpbmRVc2VyQnlDb25kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbjogcm9vbS5qb2luc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VycyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvbVVzZXIgPSB1c2Vycy5maWx0ZXIoZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlci5faWQudG9TdHJpbmcoKSA9PT0gZGVjb2RlZC5zdWI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9Vc2VyID0gdXNlcnMuZmlsdGVyKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXIuX2lkLnRvU3RyaW5nKCkgIT09IGRlY29kZWQuc3ViO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gdXNlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV4dCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0KG5ldyBFcnJvcihcIkF1dGhvcml6ZWQgRVJST1IhXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH0pO1xuICAgIH07XG4gICAgU29ja2V0Q29udHJvbGxlci5wcm90b3R5cGUuX2Nvbm5lY3Rpb24gPSBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHNvY2tldC5qb2luKHRoaXMucm9vbU9pZCk7XG4gICAgICAgIHNvY2tldC5vbihTRU5EX01FU1NBR0UsIGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBfdGhpcy5fc2VuZE1lc3NhZ2UoZGF0YSwgc29ja2V0KTsgfSk7XG4gICAgICAgIHNvY2tldC5vbihTRU5EX1RZUElORywgZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLl90eXBpbmcoZGF0YSk7IH0pO1xuICAgICAgICBzb2NrZXQub24oU0VORF9SRUFDVElPTiwgZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLl9zZW5kUmVhY3Rpb24oZGF0YSk7IH0pO1xuICAgICAgICBzb2NrZXQub24oXCJkaXNjb25uZWN0XCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9kaXNjb25uZWN0KHNvY2tldCk7IH0pO1xuICAgICAgICB0aGlzLmlvLnRvKHRoaXMucm9vbU9pZCkuZW1pdChVU0VSX09OTElORSwge1xuICAgICAgICAgICAgZnJvbV91c2VyX29pZDogdGhpcy5mcm9tVXNlck9pZFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNvY2tldENvbnRyb2xsZXIucHJvdG90eXBlLl9zZW5kTWVzc2FnZSA9IGZ1bmN0aW9uIChkYXRhLCBzb2NrZXQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGlvLCByb29tT2lkLCBmcm9tVXNlck9pZDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpbyA9IHRoaXMuaW87XG4gICAgICAgICAgICAgICAgcm9vbU9pZCA9IHRoaXMucm9vbU9pZDtcbiAgICAgICAgICAgICAgICBmcm9tVXNlck9pZCA9IHRoaXMuZnJvbVVzZXJPaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXRTZXJ2aWNlLnNlbmRNZXNzYWdlKHRoaXMucm9vbSwgZGF0YSwgdGhpcy51c2VycywgdGhpcy5mcm9tVXNlck9pZCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlvLnRvKHJvb21PaWQpLmVtaXQoU0VORF9NRVNTQUdFLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tX3VzZXJfb2lkOiBmcm9tVXNlck9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Vfb2lkOiByZXMubWVzc2FnZV9vaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU29ja2V0Q29udHJvbGxlci5wcm90b3R5cGUuX2Rpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHRoaXMuc29ja2V0U2VydmljZS5yZW1vdmVTb2NrZXQodGhpcy5yb29tT2lkLCBzb2NrZXQuaWQpLnRoZW4oKTtcbiAgICB9O1xuICAgIFNvY2tldENvbnRyb2xsZXIucHJvdG90eXBlLl90eXBpbmcgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLmlvLnRvKHRoaXMucm9vbU9pZCkuZW1pdChTRU5EX1RZUElORywgX19hc3NpZ24oX19hc3NpZ24oe30sIGRhdGEpLCB7IGZyb21fdXNlcl9vaWQ6IHRoaXMuZnJvbVVzZXJPaWQgfSkpO1xuICAgIH07XG4gICAgU29ja2V0Q29udHJvbGxlci5wcm90b3R5cGUuX3NlbmRSZWFjdGlvbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBpbyA9IHRoaXMuaW87XG4gICAgICAgIHZhciByb29tID0gdGhpcy5yb29tT2lkO1xuICAgICAgICB2YXIgZnJvbVVzZXJPaWQgPSB0aGlzLmZyb21Vc2VyT2lkO1xuICAgICAgICB0aGlzLnNvY2tldFNlcnZpY2UucmVhY3Rpb24oZGF0YSwgdGhpcy5yb29tSWQsIHRoaXMuZnJvbVVzZXIuaWQsIHRoaXMudG9Vc2VyLl9pZC50b1N0cmluZygpKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGlvLnRvKHJvb20pLmVtaXQoU0VORF9SRUFDVElPTiwgX19hc3NpZ24oeyBmcm9tX3VzZXJfb2lkOiBmcm9tVXNlck9pZCB9LCBkYXRhKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNvY2tldENvbnRyb2xsZXI7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgU29ja2V0Q29udHJvbGxlcjtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG52YXIgbW9uZ28gPSByZXF1aXJlKCdtb25nb29zZScpO1xudmFyIGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdCcpO1xudmFyIHNhbHRSb3VuZHMgPSAxMDtcbnZhciBTdHJIZWxwZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RySGVscGVyKCkge1xuICAgIH1cbiAgICBTdHJIZWxwZXIuaXNFbWFpbCA9IGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKGVtYWlsKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5tYXRjaCgvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8pO1xuICAgIH07XG4gICAgU3RySGVscGVyLmh0bWxFc2NhcGUgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8mL2csICcmYW1wOycpLlxuICAgICAgICAgICAgcmVwbGFjZSgvPC9nLCAnJmx0OycpLiAvLyBpdCdzIG5vdCBuZWNjZXNzYXJ5IHRvIGVzY2FwZSA+XG4gICAgICAgICAgICByZXBsYWNlKC9cIi9nLCAnL1wiJykuXG4gICAgICAgICAgICByZXBsYWNlKC8nL2csICcvXFwnJykuXG4gICAgICAgICAgICB0cmltKCkgfHwgJyc7XG4gICAgfTtcbiAgICBTdHJIZWxwZXIuaGFzaFBhc3N3b3JkID0gZnVuY3Rpb24gKG15UGxhaW50ZXh0UGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIGJjcnlwdC5oYXNoU3luYyhteVBsYWludGV4dFBhc3N3b3JkLCBzYWx0Um91bmRzKTtcbiAgICB9O1xuICAgIFN0ckhlbHBlci5jb21wYXJlUGFzc3dvcmQgPSBmdW5jdGlvbiAobXlQbGFpbnRleHRQYXNzd29yZCwgaGFzaCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmNyeXB0LmNvbXBhcmUobXlQbGFpbnRleHRQYXNzd29yZCwgaGFzaCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU3RySGVscGVyLnRvT2JqZWN0SWQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBtb25nby5UeXBlcy5PYmplY3RJZChzdHIpO1xuICAgIH07XG4gICAgU3RySGVscGVyLmlzT2JqZWN0SWQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHZhciBPYmplY3RJZCA9IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkO1xuICAgICAgICByZXR1cm4gT2JqZWN0SWQuaXNWYWxpZChzdHIpO1xuICAgIH07XG4gICAgU3RySGVscGVyLnNodWZmbGUgPSBmdW5jdGlvbiAoYXJyYXlCZWdpbikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBhcnJheSA9IF9fc3ByZWFkQXJyYXkoW10sIGFycmF5QmVnaW4sIHRydWUpO1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLCByYW5kb21JbmRleDtcbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCAhPSAwKSB7XG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC0tO1xuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgX2EgPSBbXG4gICAgICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdLCBhcnJheVtjdXJyZW50SW5kZXhdXG4gICAgICAgICAgICBdLCBhcnJheVtjdXJyZW50SW5kZXhdID0gX2FbMF0sIGFycmF5W3JhbmRvbUluZGV4XSA9IF9hWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuICAgIFN0ckhlbHBlci5yYW5kID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgICAgIGlmIChtaW4gPT09IHZvaWQgMCkgeyBtaW4gPSAwOyB9XG4gICAgICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSAxMDsgfVxuICAgICAgICBpZiAobWF4IDw9IG1pbilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9O1xuICAgIHJldHVybiBTdHJIZWxwZXI7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgU3RySGVscGVyO1xuIiwiaW1wb3J0IHsgbW9kZWwsIFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IGRlZmluZWRNb2RlbCBmcm9tIFwiLi9kZWZpbmVkLm1vZGVsXCI7XG52YXIgY2hhdFJvb21TY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICB1c2VyX29pZF9jcmVhdGU6IE9iamVjdElkLFxuICAgIGpvaW5zOiBBcnJheSxcbiAgICBzdGF0dXM6IFN0cmluZyxcbiAgICBpZDogTnVtYmVyLFxuICAgIHNvY2tldHM6IEFycmF5LFxuICAgIG1lc3NhZ2VfbGFzdDogU3RyaW5nLFxuICAgIHR5cGVfbWVzc2FnZTogU3RyaW5nLFxuICAgIHVzZXJfaWRfc2VuZF9sYXN0OiBOdW1iZXIsXG4gICAgdGltZV9zZW5kX2xhc3Q6IERhdGVcbn0sIGRlZmluZWRNb2RlbCk7XG52YXIgQ2hhdFJvb20gPSBtb2RlbCgnQ2hhdFJvb20nLCBjaGF0Um9vbVNjaGVtYSwgJ2R0X2NoYXRfcm9vbXMnKTtcbmV4cG9ydCBkZWZhdWx0IENoYXRSb29tO1xuIiwiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG52YXIgc2NoZW1hQ291bnRlciA9IG5ldyBTY2hlbWEoe1xuICAgIG5hbWVfY29sbGVjdGlvbjogU3RyaW5nLFxuICAgIGlkOiBOdW1iZXJcbn0pO1xudmFyIENvdW50ZXIgPSBtb25nb29zZS5tb2RlbCgnQ291bnRlcicsIHNjaGVtYUNvdW50ZXIsICdjb3VudGVycycpO1xuZXhwb3J0IGRlZmF1bHQgQ291bnRlcjtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aW1lc3RhbXBzOiB7XG4gICAgICAgIHVwZGF0ZWRBdDogJ3VwZGF0ZWRfYXQnLFxuICAgICAgICBjcmVhdGVkQXQ6ICdjcmVhdGVkX2F0JyxcbiAgICB9LFxuICAgIHZlcnNpb25LZXk6IGZhbHNlXG59O1xuZXhwb3J0IHZhciBzYXZlID0gZnVuY3Rpb24gKG5leHQpIHtcbiAgICB0aGlzLmRlbGV0ZWRfZmxhZyA9IGZhbHNlO1xuICAgIG5leHQoKTtcbn07XG4iLCJpbXBvcnQgeyBtb2RlbCwgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgZGVmaW5lZE1vZGVsIGZyb20gXCIuL2RlZmluZWQubW9kZWxcIjtcbnZhciBNZXNzYWdlU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgaWQ6IE51bWJlcixcbiAgICBmcm9tX3VzZXJfaWQ6IE51bWJlcixcbiAgICB0b191c2VyX2lkOiBOdW1iZXIsXG4gICAgdHlwZV9tZXNzYWdlOiBTdHJpbmcsXG4gICAgbWVzc2FnZTogU3RyaW5nLFxuICAgIHJlYWN0aW9uczogQXJyYXksXG4gICAgbWVkaWFzOiBbXSxcbiAgICBkZWxldGVkX2ZsYWc6IEJvb2xlYW4sXG4gICAgaW5mbzogT2JqZWN0LFxuICAgIHN0YXR1czogU3RyaW5nLFxuICAgIHJvb21faWQ6IE51bWJlclxufSwgZGVmaW5lZE1vZGVsKTtcbnZhciBNZXNzYWdlID0gbW9kZWwoJ01lc3NhZ2UnLCBNZXNzYWdlU2NoZW1hLCAnZHRfbWVzc2FnZXMnKTtcbmV4cG9ydCB2YXIgU1RBVFVTX01FU1NBR0VfTk9STUFMID0gXCJOT1JNQUxcIjtcbmV4cG9ydCB2YXIgU1RBVFVTX01FU1NBR0VfREVMRVRFID0gXCJERUxFVEVcIjtcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XG4iLCJpbXBvcnQgeyBtb2RlbCwgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgZGVmaW5lZE1vZGVsIGZyb20gJy4vZGVmaW5lZC5tb2RlbCc7XG52YXIgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIGlkOiBOdW1iZXIsXG4gICAgbW9iaWxlOiBTdHJpbmcsXG4gICAgZW1haWw6IFN0cmluZyxcbiAgICBwYXNzd29yZDogU3RyaW5nLFxuICAgIHVpZF9mYjogU3RyaW5nLFxuICAgIGFwcGxlX2lkOiBTdHJpbmcsXG4gICAgZnVsbF9uYW1lOiBTdHJpbmcsXG4gICAgZ2VuZGVyOiBTdHJpbmcsXG4gICAgY2FyZV9hYm91dF9nZW5kZXI6IFN0cmluZyxcbiAgICBhZ2U6IE51bWJlcixcbiAgICBhZGRyZXNzOiBTdHJpbmcsXG4gICAgYXZhdGFyX2F0dGFjaG1lbnRfaWQ6IE51bWJlcixcbiAgICBjb3Zlcl9hdHRhY2htZW50X2lkOiBOdW1iZXIsXG4gICAgbG9jYXRpb246IE9iamVjdCxcbiAgICBzdGF0dXM6IFN0cmluZyxcbiAgICB0b2tlbnNfbm90aWZpY2F0aW9uOiBBcnJheSxcbiAgICBpbnRyb2R1Y2U6IFN0cmluZyxcbiAgICBsaW5rX3FyX2NvZGU6IFN0cmluZyxcbiAgICB2ZXJpZnlfYWNjb3VudDogQm9vbGVhbixcbiAgICBtYXRjaGluZ193aXRoX3VzZXJfaWQ6IE51bWJlcixcbiAgICBkZWxldGVkX2ZsYWc6IEJvb2xlYW5cbn0sIGRlZmluZWRNb2RlbCkucHJlKCdzYXZlJywgZnVuY3Rpb24gKG5leHQpIHtcbiAgICBpZiAodGhpcy5pc05ldykge1xuICAgICAgICB0aGlzLmRlbGV0ZWRfZmxhZyA9IGZhbHNlO1xuICAgIH1cbiAgICBuZXh0KCk7XG59KS5wcmUoJ2RlbGV0ZU9uZScsIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgdGhpcy5kZWxldGVkX2ZsYWcgPSB0cnVlO1xufSk7XG52YXIgVXNlciA9IG1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSwgJ2R0X3VzZXJzJyk7XG5leHBvcnQgdmFyIFNUQVRVU19OT1JNQUwgPSBcIk5PUk1BTFwiO1xuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCIuL2Jhc2UucmVwb3NpdG9yeVwiO1xuaW1wb3J0IENoYXRSb29tIGZyb20gXCIuLi9tb2RlbHMvY2hhdFJvb20ubW9kZWxcIjtcbnZhciBDaGF0Um9vbVJlcG9zaXRvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENoYXRSb29tUmVwb3NpdG9yeSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDaGF0Um9vbVJlcG9zaXRvcnkoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBDaGF0Um9vbSkgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIENoYXRSb29tUmVwb3NpdG9yeTtcbn0oQmFzZVJlcG9zaXRvcnkpKTtcbmV4cG9ydCBkZWZhdWx0IENoYXRSb29tUmVwb3NpdG9yeTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vbW9kZWxzL2NvdW50ZXIubW9kZWxcIjtcbnZhciBCYXNlUmVwb3NpdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCYXNlUmVwb3NpdG9yeShzY2hlbWFNb2RlbCkge1xuICAgICAgICB0aGlzLl9tb2RlbCA9IHNjaGVtYU1vZGVsO1xuICAgIH1cbiAgICBCYXNlUmVwb3NpdG9yeS5wcm90b3R5cGUuZmluZEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9tb2RlbC5maW5kQnlJZChpZCkuZXhlYygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBCYXNlUmVwb3NpdG9yeS5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIChjb25kKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb25kTmV3O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZE5ldyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29uZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZE5ldy5kZWxldGVkX2ZsYWcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG5lOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fbW9kZWwuZmluZChjb25kTmV3KS5leGVjKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJhc2VSZXBvc2l0b3J5LnByb3RvdHlwZS5maW5kT25lID0gZnVuY3Rpb24gKGNvbmQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbmROZXc7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kTmV3ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25kKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kTmV3LmRlbGV0ZWRfZmxhZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbmU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9tb2RlbC5maW5kT25lKGNvbmROZXcpLmV4ZWMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQmFzZVJlcG9zaXRvcnkucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChjb25kLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fbW9kZWwudXBkYXRlT25lKGNvbmQsIGRhdGEpLmV4ZWMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQmFzZVJlcG9zaXRvcnkucHJvdG90eXBlLnVwZGF0ZU1hbnkgPSBmdW5jdGlvbiAoY29uZCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX21vZGVsLnVwZGF0ZU1hbnkoY29uZCwgZGF0YSkuZXhlYygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBCYXNlUmVwb3NpdG9yeS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9tb2RlbC5jcmVhdGUoZGF0YSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJhc2VSZXBvc2l0b3J5LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9tb2RlbC5maW5kQnlJZChpZCkuZGVsZXRlT25lKCkuZXhlYygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBCYXNlUmVwb3NpdG9yeS5wcm90b3R5cGUuZGVsZXRlZE1hbnkgPSBmdW5jdGlvbiAoY29uZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX21vZGVsLmZpbmQoY29uZCkuZGVsZXRlTWFueSgpLmV4ZWMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQmFzZVJlcG9zaXRvcnkucHJvdG90eXBlLmZpbmRBbmRVcGRhdGUgPSBmdW5jdGlvbiAoY29uZCwgZGF0YSwgdXBzZXJ0KSB7XG4gICAgICAgIGlmICh1cHNlcnQgPT09IHZvaWQgMCkgeyB1cHNlcnQgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX21vZGVsLmZpbmRPbmVBbmRVcGRhdGUoY29uZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzZXQ6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5OZXdEb2N1bWVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cHNlcnQ6IHVwc2VydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Eb2N1bWVudDogXCJhZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5leGVjKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJhc2VSZXBvc2l0b3J5LnByb3RvdHlwZS5maW5kQW5kTW9kaWZ5ID0gZnVuY3Rpb24gKGNvbmQsIGRhdGEsIHVwc2VydCkge1xuICAgICAgICBpZiAodXBzZXJ0ID09PSB2b2lkIDApIHsgdXBzZXJ0ID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9tb2RlbC5maW5kT25lQW5kVXBkYXRlKGNvbmQsIGRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5OZXdEb2N1bWVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cHNlcnQ6IHVwc2VydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Eb2N1bWVudDogXCJhZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5leGVjKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJhc2VSZXBvc2l0b3J5LnByb3RvdHlwZS5jb3VudElkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbW9kZWxOYW1lLCBjb3VudDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsTmFtZSA9IHRoaXMuX21vZGVsLmNvbGxlY3Rpb24uY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBDb3VudGVyLmZpbmRPbmVBbmRVcGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lX2NvbGxlY3Rpb246IG1vZGVsTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbmM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwc2VydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuRG9jdW1lbnQ6IFwiYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmV4ZWMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGNvdW50LmlkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBCYXNlUmVwb3NpdG9yeS5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9tb2RlbC5pbnNlcnRNYW55KGRhdGEpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQmFzZVJlcG9zaXRvcnk7XG59KCkpO1xuZXhwb3J0IHsgQmFzZVJlcG9zaXRvcnkgfTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tIFwiLi9iYXNlLnJlcG9zaXRvcnlcIjtcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuLi9tb2RlbHMvbWVzc2FnZS5tb2RlbFwiO1xuaW1wb3J0IFN0ckhlbHBlciBmcm9tIFwiLi4vaGVscGVycy9zdHIuaGVscGVyXCI7XG52YXIgTWVzc2FnZVJlcG9zaXRvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1lc3NhZ2VSZXBvc2l0b3J5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1lc3NhZ2VSZXBvc2l0b3J5KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgTWVzc2FnZSkgfHwgdGhpcztcbiAgICB9XG4gICAgTWVzc2FnZVJlcG9zaXRvcnkucHJvdG90eXBlLmdldE1lc3NhZ2UgPSBmdW5jdGlvbiAocm9vbUlkLCBsYXN0T2lkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbW9kZWwuYWdncmVnYXRlKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vbV9pZDogcm9vbUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiBsYXN0T2lkID09PSBcIlwiID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRleGlzdHM6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGd0OiBTdHJIZWxwZXIudG9PYmplY3RJZChsYXN0T2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzb3J0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxpbWl0OiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLnRoZW4ocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBNZXNzYWdlUmVwb3NpdG9yeTtcbn0oQmFzZVJlcG9zaXRvcnkpKTtcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VSZXBvc2l0b3J5O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCIuL2Jhc2UucmVwb3NpdG9yeVwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQgU3RySGVscGVyIGZyb20gXCIuLi9oZWxwZXJzL3N0ci5oZWxwZXJcIjtcbnZhciBVc2VyUmVwb3NpdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVXNlclJlcG9zaXRvcnksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVXNlclJlcG9zaXRvcnkoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBVc2VyKSB8fCB0aGlzO1xuICAgIH1cbiAgICBVc2VyUmVwb3NpdG9yeS5wcm90b3R5cGUuaW5mb1VzZXIgPSBmdW5jdGlvbiAodXNlck9pZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFVzZXIuYWdncmVnYXRlKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWF0Y2g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiB1c2VyT2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9va3VwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206ICdkdF9mYXZvcml0ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbEZpZWxkOiAnaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JlaWduRmllbGQ6IFwidXNlcl9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhczogXCJmYXZvcml0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVXNlclJlcG9zaXRvcnkucHJvdG90eXBlLm1hdGNoaW5nID0gZnVuY3Rpb24gKGZyb21fdXNlcl9pZCwgdXNlcl9vaWQsIGxhc3RPaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIG1hdGNoID0ge1xuICAgICAgICAgICAgICAgICAgICBfaWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRuZTogU3RySGVscGVyLnRvT2JqZWN0SWQodXNlcl9vaWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChTdHJIZWxwZXIuaXNPYmplY3RJZChsYXN0T2lkKSlcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYW5kOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRuZTogU3RySGVscGVyLnRvT2JqZWN0SWQodXNlcl9vaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3Q6IFN0ckhlbHBlci50b09iamVjdElkKGxhc3RPaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VyLmFnZ3JlZ2F0ZShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWF0Y2g6IG1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsaW1pdDogMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc29ydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb29rdXA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206ICdkdF9mb2xsb3dzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsRmllbGQ6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JlaWduRmllbGQ6ICdmb2xsb3dfdXNlcl9pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXBlbGluZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1hdGNoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tX3VzZXJfaWQ6IGZyb21fdXNlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhczogJ2ZvbGxvd3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvb2t1cDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJ2R0X2F0dGFjaG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsRmllbGQ6ICdhdmF0YXJfYXR0YWNobWVudF9pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JlaWduRmllbGQ6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhczogJ2F0dGFjaG1lbnRzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsX25hbWU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50cm9kdWNlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3c6IHsgJGFycmF5RWxlbUF0OiBbXCIkZm9sbG93c1wiLCAwXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudDogeyAkYXJyYXlFbGVtQXQ6IFtcIiRhdHRhY2htZW50c1wiLCAwXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKS50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlc29sdmUocmVzICE9PSBudWxsICYmIHJlcyAhPT0gdm9pZCAwID8gcmVzIDogbnVsbCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVXNlclJlcG9zaXRvcnk7XG59KEJhc2VSZXBvc2l0b3J5KSk7XG5leHBvcnQgZGVmYXVsdCBVc2VyUmVwb3NpdG9yeTtcbiIsInZhciBBcGlSZXNwb25zZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcGlSZXNwb25zZShzdGF0dXMsIGNvbnRlbnQsIHJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgfVxuICAgIEFwaVJlc3BvbnNlLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLnJlc3BvbnNlXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBBcGlSZXNwb25zZS5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2U7XG4gICAgfTtcbiAgICByZXR1cm4gQXBpUmVzcG9uc2U7XG59KCkpO1xuZXhwb3J0IHsgQXBpUmVzcG9uc2UgfTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBBcGlSZXNwb25zZSB9IGZyb20gXCIuL0FwaVJlc3BvbnNlXCI7XG52YXIgSTE4biA9IHJlcXVpcmUoJ2kxOG4nKS5JMThuO1xudmFyIGkxOG4gPSBuZXcgSTE4bigpO1xuaW1wb3J0IGxhbmcgZnJvbSBcIi4uLy4uL2NvbmZpZy9sYW5nXCI7XG52YXIgUmVzcG9uc2VFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmVzcG9uc2VFcnJvciwgX3N1cGVyKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZnVuY3Rpb24gUmVzcG9uc2VFcnJvcihzdGF0dXMsIGNvbnRlbnQsIHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IHZvaWQgMCkgeyBzdGF0dXMgPSAyMDE7IH1cbiAgICAgICAgaWYgKGNvbnRlbnQgPT09IHZvaWQgMCkgeyBjb250ZW50ID0gbnVsbDsgfVxuICAgICAgICBpZiAocmVzcG9uc2UgPT09IHZvaWQgMCkgeyByZXNwb25zZSA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGkxOG4uY29uZmlndXJlKGxhbmcpO1xuICAgICAgICBpZiAoY29udGVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGVudCA9IGkxOG4uX18oJ3NlcnZlcl9lcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc3RhdHVzLCBjb250ZW50LCByZXNwb25zZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICBfdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgX3RoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gUmVzcG9uc2VFcnJvcjtcbn0oQXBpUmVzcG9uc2UpKTtcbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlRXJyb3I7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgQXBpUmVzcG9uc2UgfSBmcm9tIFwiLi9BcGlSZXNwb25zZVwiO1xuaW1wb3J0IGxhbmcgZnJvbSBcIi4uLy4uL2NvbmZpZy9sYW5nXCI7XG4vLyBpbXBvcnQgaTE4biBmcm9tIFwiaTE4blwiO1xudmFyIEkxOG4gPSByZXF1aXJlKCdpMThuJykuSTE4bjtcbnZhciBpMThuID0gbmV3IEkxOG4oKTtcbnZhciBSZXNwb25zZVN1Y2Nlc3MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlc3BvbnNlU3VjY2VzcywgX3N1cGVyKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZnVuY3Rpb24gUmVzcG9uc2VTdWNjZXNzKHJlc3BvbnNlLCBjb250ZW50LCBzdGF0dXMpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlID09PSB2b2lkIDApIHsgcmVzcG9uc2UgPSB7fTsgfVxuICAgICAgICBpZiAoY29udGVudCA9PT0gdm9pZCAwKSB7IGNvbnRlbnQgPSBudWxsOyB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09IHZvaWQgMCkgeyBzdGF0dXMgPSAyMDA7IH1cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaTE4bi5jb25maWd1cmUobGFuZyk7XG4gICAgICAgIGlmIChjb250ZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250ZW50ID0gaTE4bi5fXygnc3VjY2VzcycpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc3RhdHVzLCBjb250ZW50LCByZXNwb25zZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgX3RoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIF90aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gUmVzcG9uc2VTdWNjZXNzO1xufShBcGlSZXNwb25zZSkpO1xuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2VTdWNjZXNzO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCBDaGF0Um9vbVJlcG9zaXRvcnkgZnJvbSBcIi4uL3JlcG9zaXRvcmllcy9DaGF0Um9vbVJlcG9zaXRvcnlcIjtcbmltcG9ydCBTdHJIZWxwZXIgZnJvbSBcIi4uL2hlbHBlcnMvc3RyLmhlbHBlclwiO1xuaW1wb3J0IFVzZXJSZXBvc2l0b3J5IGZyb20gXCIuLi9yZXBvc2l0b3JpZXMvdXNlci5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgTWVzc2FnZVJlcG9zaXRvcnkgZnJvbSBcIi4uL3JlcG9zaXRvcmllcy9tZXNzYWdlLnJlcG9zaXRvcnlcIjtcbmltcG9ydCBSZXNwb25zZVN1Y2Nlc3MgZnJvbSBcIi4uL3Jlc3BvbnNlcy9SZXNwb25zZVN1Y2Nlc3NcIjtcbmltcG9ydCBSZXNwb25zZUVycm9yIGZyb20gXCIuLi9yZXNwb25zZXMvUmVzcG9uc2VFcnJvclwiO1xudmFyIENyeXB0b0pTID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTtcbnZhciBNRDUgPSByZXF1aXJlKCdjcnlwdG8tanMvbWQ1Jyk7XG52YXIgVXRmOCA9IENyeXB0b0pTLmVuYy5VdGY4O1xudmFyIFNvY2tldFNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU29ja2V0U2VydmljZSgpIHtcbiAgICAgICAgdGhpcy5jaGF0Um9vbVJlcG9zaXRvcnkgPSBuZXcgQ2hhdFJvb21SZXBvc2l0b3J5KCk7XG4gICAgICAgIHRoaXMudXNlclJlcG9zaXRvcnkgPSBuZXcgVXNlclJlcG9zaXRvcnkoKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlUmVwb3NpdG9yeSA9IG5ldyBNZXNzYWdlUmVwb3NpdG9yeSgpO1xuICAgIH1cbiAgICBTb2NrZXRTZXJ2aWNlLnByb3RvdHlwZS5maW5kUm9vbUFuZFNhdmVTb2NrZXQgPSBmdW5jdGlvbiAocm9vbU9pZCwgc29ja2V0SWQsIGZyb21Vc2VyT2lkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jaGF0Um9vbVJlcG9zaXRvcnkuZmluZEFuZE1vZGlmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiBTdHJIZWxwZXIudG9PYmplY3RJZChyb29tT2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwdXNoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1c2VyX29pZCc6IFN0ckhlbHBlci50b09iamVjdElkKGZyb21Vc2VyT2lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzb2NrZXRfaWQnOiBzb2NrZXRJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNvY2tldFNlcnZpY2UucHJvdG90eXBlLmRlY3J5cHRlZE1lc3NhZ2UgPSBmdW5jdGlvbiAodGV4dFBsYW4sIHJvb21PaWQpIHtcbiAgICAgICAgdmFyIGtleSA9IENyeXB0b0pTLk1ENShyb29tT2lkKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodGV4dFBsYW4sIFV0ZjgucGFyc2Uoa2V5KSwge1xuICAgICAgICAgICAgaXY6IFV0ZjgucGFyc2Uoa2V5LnN1YnN0cigwLCAxNikpXG4gICAgICAgIH0pLnRvU3RyaW5nKFV0ZjgpO1xuICAgIH07XG4gICAgU29ja2V0U2VydmljZS5wcm90b3R5cGUuc2VuZE1lc3NhZ2UgPSBmdW5jdGlvbiAocm9vbSwgZGF0YSwgdXNlcnMsIGZyb21Vc2VyT2lkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByb29tT2lkLCBkZWNyeXB0ZWQsIG1lc3NhZ2VEYXRhLCBmcm9tVXNlciwgZnJvbVVzZXJJZCwgdG9Vc2VyLCB0b1VzZXJJZCwgdG9Vc2VyT2lkLCBjcmVhdGVNZXNzYWdlLCBoYXZlSW5Sb29tO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vbU9pZCA9IHJvb20uX2lkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWQgPSB0aGlzLmRlY3J5cHRlZE1lc3NhZ2UoZGF0YS5kYXRhLCByb29tT2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWNyeXB0ZWQgPT09IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZV9kYXRhOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZF9zb2NrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9vaWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UoZGVjcnlwdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Vc2VyID0gdXNlcnMuZmlsdGVyKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXIuX2lkLnRvU3RyaW5nKCkgPT09IGZyb21Vc2VyT2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tVXNlcklkID0gZnJvbVVzZXIuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b1VzZXIgPSB1c2Vycy5maWx0ZXIoZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlci5faWQudG9TdHJpbmcoKSAhPT0gZnJvbVVzZXJPaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvVXNlcklkID0gdG9Vc2VyLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9Vc2VyT2lkID0gdG9Vc2VyLl9pZC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zYXZlTWVzc2FnZShtZXNzYWdlRGF0YSwgcm9vbU9pZCwgcm9vbS5pZCwgZnJvbVVzZXJJZCwgdG9Vc2VySWQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTWVzc2FnZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVJblJvb20gPSByb29tLnNvY2tldHMuZmlsdGVyKGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29ja2V0LnVzZXJfb2lkICE9PSBmcm9tVXNlck9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhdmVJblJvb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZV9kYXRhOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kX3NvY2tldDogaGF2ZUluUm9vbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9vaWQ6IGNyZWF0ZU1lc3NhZ2UuX2lkLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTb2NrZXRTZXJ2aWNlLnByb3RvdHlwZS5lbmNyeXB0ID0gZnVuY3Rpb24gKGRhdGEsIHJvb21PaWQpIHtcbiAgICAgICAgdmFyIGtleSA9IENyeXB0b0pTLk1ENShyb29tT2lkKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoZGF0YSwgVXRmOC5wYXJzZShrZXkpLCB7XG4gICAgICAgICAgICBpdjogVXRmOC5wYXJzZShrZXkuc3Vic3RyKDAsIDE2KSlcbiAgICAgICAgfSkudG9TdHJpbmcoKTtcbiAgICB9O1xuICAgIFNvY2tldFNlcnZpY2UucHJvdG90eXBlLnNhdmVNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2VEYXRhLCByb29tT2lkLCByb29tSWQsIGZyb21Vc2VySWQsIHRvVXNlcklkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlLCBkYXRhQ3JlYXRlTWVzc2FnZTtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2VEYXRhLm1lc3NhZ2UgIT09IFwidW5kZWZpbmVkXCIgJiYgbWVzc2FnZURhdGEubWVzc2FnZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmVuY3J5cHQobWVzc2FnZURhdGEubWVzc2FnZSwgcm9vbU9pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5tZXNzYWdlUmVwb3NpdG9yeS5jb3VudElkKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ3JlYXRlTWVzc2FnZSA9IChfYS5pZCA9IF9iLnNlbnQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5tZXNzYWdlID0gbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5tZWRpYXMgPSBtZXNzYWdlRGF0YS5tZWRpYS5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RySGVscGVyLnRvT2JqZWN0SWQoc3RyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5yb29tX2lkID0gcm9vbUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmZyb21fdXNlcl9pZCA9IGZyb21Vc2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EudG9fdXNlcl9pZCA9IHRvVXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnR5cGVfbWVzc2FnZSA9IG1lc3NhZ2VEYXRhLnR5cGVfbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubWVzc2FnZVJlcG9zaXRvcnkuY3JlYXRlKGRhdGFDcmVhdGVNZXNzYWdlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNoYXRSb29tUmVwb3NpdG9yeS5maW5kQW5kVXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcm9vbUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfbGFzdDogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlX21lc3NhZ2U6IG1lc3NhZ2VEYXRhLnR5cGVfbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkX3NlbmRfbGFzdDogZnJvbVVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lX3NlbmRfbGFzdDogbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZGF0YVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTb2NrZXRTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVTb2NrZXQgPSBmdW5jdGlvbiAocm9vbU9pZCwgc29ja2V0SWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNoYXRSb29tUmVwb3NpdG9yeS5maW5kQW5kTW9kaWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IFN0ckhlbHBlci50b09iamVjdElkKHJvb21PaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHB1bGw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NvY2tldHMnOiB7IHNvY2tldF9pZDogc29ja2V0SWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNvY2tldFNlcnZpY2UucHJvdG90eXBlLmZpbmRVc2VyQnlDb25kID0gZnVuY3Rpb24gKGNvbmQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmQoY29uZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNvY2tldFNlcnZpY2UucHJvdG90eXBlLnJlYWN0aW9uID0gZnVuY3Rpb24gKGRhdGEsIHJvb21JZCwgZnJvbVVzZXJJZCwgdG9Vc2VyT2lkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLm1lc3NhZ2Vfb2lkID09PSBcInVuZGVmaW5lZFwiIHx8ICFTdHJIZWxwZXIuaXNPYmplY3RJZChkYXRhLm1lc3NhZ2Vfb2lkKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBSZXNwb25zZUVycm9yKCldO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm1lc3NhZ2VSZXBvc2l0b3J5LmZpbmRBbmRNb2RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IFN0ckhlbHBlci50b09iamVjdElkKGRhdGEubWVzc2FnZV9vaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb29tX2lkOiByb29tSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJG5lOiBmcm9tVXNlcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwdXNoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdGlvbnM6IFtmcm9tVXNlcklkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucGFydG5lck9ubGluZShyb29tSWQsIHRvVXNlck9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKG5ldyBSZXNwb25zZVN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kX3NvY2tldDogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTb2NrZXRTZXJ2aWNlLnByb3RvdHlwZS5wYXJ0bmVyT25saW5lID0gZnVuY3Rpb24gKHJvb21JZCwgdXNlck9pZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY2hhdFJvb21SZXBvc2l0b3J5LmZpbmRPbmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByb29tSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NvY2tldHMudXNlcl9vaWQnOiBTdHJIZWxwZXIudG9PYmplY3RJZCh1c2VyT2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCAoX2Euc2VudCgpKSAhPT0gbnVsbF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNvY2tldFNlcnZpY2U7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgU29ja2V0U2VydmljZTtcbiIsInJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB1cmk6IHByb2Nlc3MuZW52Lk1PTkdPX1VSSSB8fCBcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvbXlhcHBcIlxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXG4gICAgdHRsOiBwcm9jZXNzLmVudi5KV1RfVFRMIHx8IDYwICogNjAgKiAyNFxufTtcbiIsImltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbG9jYWxlczogWydlbicsICd2aSddLFxuICAgIGRpcmVjdG9yeTogcGF0aC5qb2luKCcuL3NyYy9sb2NhbGVzJyksXG4gICAgZGVmYXVsdExvY2FsZTogJ3ZpJyxcbiAgICBoZWFkZXI6ICdsYW5nJyxcbiAgICBxdWVyeVBhcmFtZXRlcjogJ2xhbmcnLFxuICAgIG9iamVjdE5vdGF0aW9uOiB0cnVlXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNvY2tldC5pby9tb25nby1hZGFwdGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG8tanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvLWpzL21kNVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpMThuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuaW1wb3J0IGNvbmZpZ0FwcCBmcm9tICcuL2NvbmZpZy9hcHAnO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcbnZhciBhcHAgPSBuZXcgQXBwKCk7XG52YXIgc2VydmVyID0gYXBwLnNlcnZlcjtcbnNlcnZlci5saXN0ZW4oY29uZmlnQXBwLnBvcnQpO1xuc2VydmVyLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCBmdW5jdGlvbiAoZXJyb3IsIHByb21pc2UpIHtcbiAgICBjb25zb2xlLmxvZygnIE9oIExvcmQhIFdlIGZvcmdvdCB0byBoYW5kbGUgYSBwcm9taXNlIHJlamVjdGlvbiBoZXJlOiAnLCBwcm9taXNlKTtcbiAgICBjb25zb2xlLmxvZygnIFRoZSBlcnJvciB3YXM6ICcsIGVycm9yKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9