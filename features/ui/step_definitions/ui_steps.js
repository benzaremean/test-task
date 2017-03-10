var HomePage = require('./pages/homepage');
var SignUpPage = require('./pages/signuppage');
var assert = require('assert');

module.exports = function() {
  this.Given(/^I am on the Sign Up Page$/, function () {
    HomePage.open('');
    HomePage.signUp();
  });

  this.When(/^I provide username ([^"]*)$/, function (username) {
    SignUpPage.enterUsername(username)
  });

  this.Then(/I should be alerted that username is already taken/, function () {
    const actualValidationMessage = SignUpPage.usernameFieldValidationError();
    console.log(actualValidationMessage)
    assert.equal(actualValidationMessage, "Username is already taken");
  });
};
