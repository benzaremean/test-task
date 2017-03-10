'use strict';

var request = require('request');
var assert = require('assert');

module.exports = function() {

  this.World = require('./world').World;

  this.When(/^I make GET request to github API with username (.*)/, function(username, callback) {

    const options = {
      url:  `${this.apiBaseUrl}/users/${username}`,
      headers: {
        'User-Agent': 'request'
      }
    };

    return request(options, (error, response)=> {
      if (error) {
        callback(error);
      } else {
        callback();
      }
      this.response.push(response);
    });
  });

  this.Then(/^the response code is (\d+)/, function (responseCode) {
    assert.equal(this.getLastResponseObject().statusCode, responseCode);
  });

  this.Then(/^JSON response body should have name property equal to (.*)/, function (nameProperty) {
    const body = this.getLastResponseObject().body;
    assert.equal(JSON.parse(body).name, nameProperty);
  });
}
