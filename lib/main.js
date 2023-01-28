/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

class Channel {
  constructor(options = {}) {
    this.options = options;
  }

  name = 'mailer';

  up(res, state) {

  }

  down(res, state) {

  }

  stop(res, state) {

  }

  error(error, res) {

  }

  timeout(error, res) {

  }
}


module.exports = Channel;
