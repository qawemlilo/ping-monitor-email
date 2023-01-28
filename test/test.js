/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

const expect = require('chai').expect;
const Channel = require('../lib/main');


describe('Channel', function () {
  it('#1 should have required methods and properties', function (done) {

    let channel = new Channel({});

    expect(channel.name).to.be.a('string');
    expect(channel.up).to.be.a('function');
    expect(channel.down).to.be.a('function');
    expect(channel.stop).to.be.a('function');
    expect(channel.error).to.be.a('function');
    expect(channel.timeout).to.be.a('function');

    done();
  });
});
