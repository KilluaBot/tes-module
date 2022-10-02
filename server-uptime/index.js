'use strict';
const os = require('os');
const convert = require('convert-seconds');

module.exports = convert(os.uptime());

