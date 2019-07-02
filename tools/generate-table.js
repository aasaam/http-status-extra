/* eslint-disable no-console */

const m = require('../index');

const std = {};
const nstd = {};
const catData = {};

Object.keys(m).forEach((c) => {
  if (m[c].standard === 'http') {
    if (!std[m[c].category.type]) {
      std[m[c].category.type] = [];
      catData[m[c].category.type] = m[c].category;
    }
    std[m[c].category.type].push(`| ${m[c].emoji} | **${c}** | \`${m[c].message}\` | _${m[c].description}_ |`);
  } else {
    if (!nstd[m[c].category.type]) {
      nstd[m[c].category.type] = [];
    }
    nstd[m[c].category.type].push(`| ${m[c].emoji} | **${c}** | \`${m[c].message}\` | ${m[c].standard} | _${m[c].description}_ |`);
  }
});

console.log('# HTTP Status Extra Preview');
console.log();
Object.keys(std).forEach((cat) => {
  const cData = catData[cat];

  console.log(`## ${cData.type} ${cData.message}`);
  console.log();
  console.log(`${cData.description}`);
  console.log();
  console.log('### Standard');
  console.log();
  console.log(`| Emoji | Code | Message | Description |
|---|---|---|---|`);
  std[cat].forEach((line) => {
    console.log(line);
  });
  if (nstd[cat]) {
    console.log();
    console.log('### Non-Standard');
    console.log();
    console.log(`| Emoji | Code | Message | Standard | Description |
|---|---|---|---|---|`);
    nstd[cat].forEach((line) => {
      console.log(line);
    });
  }
});
