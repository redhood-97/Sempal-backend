'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _master = require('./master');

Object.defineProperty(exports, 'ModbusMaster', {
  enumerable: true,
  get: function get() {
    return _master.ModbusMaster;
  }
});

var _packetUtils = require('./packet-utils');

Object.defineProperty(exports, 'DATA_TYPES', {
  enumerable: true,
  get: function get() {
    return _packetUtils.DATA_TYPES;
  }
});