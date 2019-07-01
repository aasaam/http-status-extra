const fs = require('fs');

const m = require('../index');

fs.writeFileSync(`${__dirname}/../data.json`, JSON.stringify(m, null, 2));
