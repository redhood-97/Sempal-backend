'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
class ModbusCrcError extends Error {
    constructor() {
        super();

        this.message = 'Received Modbus response get invalid CRC';
        this.name = 'ModbusCrcError';
        Error.captureStackTrace(this, ModbusCrcError);
    }
}

exports.ModbusCrcError = ModbusCrcError;
class ModbusAborted extends Error {
    constructor() {
        super();
        this.message = 'Aborted';
        this.name = 'ModbusAborted';
        Error.captureStackTrace(this, ModbusAborted);
    }
}

exports.ModbusAborted = ModbusAborted;
class ModbusRetryLimitExceed extends Error {
    constructor(add) {
        super();
        this.message = 'Retry limit exceed ' + add;
        this.name = 'ModbusRetryLimitExceed';
        Error.captureStackTrace(this, ModbusRetryLimitExceed);
    }
}

exports.ModbusRetryLimitExceed = ModbusRetryLimitExceed;
class ModbusResponseTimeout extends Error {
    constructor(time) {
        super();
        this.message = `Response timeout of ${time}ms exceed!`;
        this.name = 'ModbusResponseTimeout';
        Error.captureStackTrace(this, ModbusResponseTimeout);
    }
}
exports.ModbusResponseTimeout = ModbusResponseTimeout;