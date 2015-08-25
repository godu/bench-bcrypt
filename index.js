'use strict';

var fs = require('fs');

var bcrypt = require('bcrypt');
var bcryptjs = require('bcrypt-nodejs');

var salt = bcrypt.genSaltSync(8);
var hash = bcrypt.hashSync('bacon', salt);

exports.compare = {
  'bcrypt' : function () {
    bcrypt.compareSync('bacon', hash);
  },
  'bcrypt-nodejs' : function () {
    bcryptjs.compareSync('bacon', hash);
  }
};

require('bench').runMain();
