/* eslint-disable no-console */

const m = require('../index');

const std = [];
const nstd = [];

Object.keys(m).forEach((c) => {
  if (m[c].standard === 'http') {
    std.push(`| ${m[c].emoji} | **${c}** | \`${m[c].message}\` | _${m[c].description}_ |`);
  } else {
    nstd.push(`| ${m[c].emoji} | **${c}** | \`${m[c].message}\` | ${m[c].standard} | _${m[c].description}_ |`);
  }
});

console.log('# AASAAM HTTP Status Extra Preview');
console.log('');
console.log('There is result of process based on [../data.json](../data.json)');
console.log('');
console.log('## Standard');
console.log('');
console.log(`| Emoji | Code | Message | Description |
|---|---|---|---|`);
console.log(std.join('\n'));
console.log('');
console.log('## Non-Standards');
console.log('');
console.log(`| Emoji | Code | Message | Standard | Description |
|---|---|---|---|---|`);
console.log(nstd.join('\n'));
