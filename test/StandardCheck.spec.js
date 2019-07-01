/* eslint-env jest */

const { STATUS_CODES } = require('http');

const { length } = require('stringz');
const _ = require('lodash');

const m = require('../index');

describe('Container', () => {
  it('Must be on standards', () => {
    Object.keys(m).forEach((c) => {
      const s = m[c];
      if (s.standard === 'http') {
        expect(STATUS_CODES[c].toLocaleLowerCase()).toEqual(m[c].message.toLocaleLowerCase());
      }
    });
  });

  it('Emoji must be uniq', () => {
    const allEmoji = [];
    Object.keys(m).forEach((c) => {
      allEmoji.push(m[c].emoji);
      expect(length(m[c].emoji)).toEqual(1);
      expect(m[c].emoji).not.toEqual('?');
    });
    const uniqEmoji = _.uniq(allEmoji);
    expect(uniqEmoji.length).toEqual(allEmoji.length);
  });
});
