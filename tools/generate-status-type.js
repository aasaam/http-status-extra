const data = require('../data.json');

const { log } = console;

log(`type StatusCodes = ${Object.keys(data.statusCodes).join(' | ')};`);
