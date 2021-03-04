/* eslint-disable no-console */

const m = require('../index');

const std = {};
const notStd = {};
const catData = {};

Object.keys(m.statusCodes).forEach((c) => {
  const el = m.statusCodes[c];
  let catType = '0xx';
  if (c.match(/^1/)) {
    catType = '1xx';
  } else if (c.match(/^2/)) {
    catType = '2xx';
  } else if (c.match(/^3/)) {
    catType = '3xx';
  } else if (c.match(/^4/)) {
    catType = '4xx';
  } else if (c.match(/^5/)) {
    catType = '5xx';
  }
  if (el.standard === 'http') {
    if (!std[catType]) {
      std[catType] = [];
      catData[catType] = m.category[catType];
    }
    std[catType].push(`| ${el.emoji} | **${c}** | \`${el.message}\` | _${el.description}_ |`);
  } else {
    if (!notStd[catType]) {
      notStd[catType] = [];
    }
    notStd[catType].push(`| ${el.emoji} | **${c}** | \`${el.message}\` | ${el.standard} | _${el.description}_ |`);
  }
});

console.log('# HTTP Status Extra Preview');
Object.keys(std).forEach((cat) => {
  const cData = catData[cat];
  console.log('');
  console.log(`## ${cat} ${cData.message}`);
  console.log('');
  console.log(`${cData.description}`);
  console.log('');
  console.log(`### Standard ${cat} ${cData.message}`);
  console.log('');
  console.log(`| Emoji | Code | Message | Description |
|---|---|---|---|`);
  std[cat].forEach((line) => {
    console.log(line);
  });
  if (notStd[cat]) {
    console.log('');
    console.log(`### Non-Standard ${cat} ${cData.message}`);
    console.log('');
    console.log(`| Emoji | Code | Message | Standard | Description |
|---|---|---|---|---|`);
    notStd[cat].forEach((line) => {
      console.log(line);
    });
  }
});
