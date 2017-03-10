'use strict';

var World = function World() {

  this.apiBaseUrl = 'https://api.github.com';
  this.response = [];

  this.getLastResponseObject = ()=> this.response[this.response.length - 1];
};

module.exports.World = World;
