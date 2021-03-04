/* eslint-env jest */

const { STATUS_CODES } = require('http');

const { length } = require('stringz');
const _ = require('lodash');

const m = require('../index');

describe('Container', () => {
  it('Must be on standards', () => {
    Object.keys(m.statusCodes).forEach((c) => {
      const s = m.statusCodes[c];
      expect(['http', 'unofficial', 'aasaam', 'iis', 'nginx', 'cloudflare', 'elasticloadbalancing'].includes(s.standard)).toBeTruthy();
      if (s.standard === 'http') {
        expect(STATUS_CODES[c].toLocaleLowerCase()).toEqual(s.message.toLocaleLowerCase());
      } else {
        expect(STATUS_CODES[c]).toEqual(undefined);
      }
    });
  });

  it('Emoji must be uniq', () => {
    const allEmoji = [];
    Object.keys(m.statusCodes).forEach((c) => {
      const el = m.statusCodes[c];
      allEmoji.push(el.emoji);
      expect(length(el.emoji)).toEqual(1);
      expect(el.emoji).not.toEqual('?');
    });
    const uniqEmoji = _.uniq(allEmoji);
    expect(uniqEmoji.length).toEqual(allEmoji.length);
  });
});
