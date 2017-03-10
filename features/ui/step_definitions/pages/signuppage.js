'use strict';

const USERNAME = '#user_login';

class SignUpPage {

  enterUsername(usernameValue) {
     browser.waitForVisible(USERNAME);
     return browser.setValue(USERNAME, usernameValue);
  }

  usernameFieldValidationError() {
    browser.waitForVisible('dd.error');
    return browser.getText('dd.error');
  }
}

module.exports = new SignUpPage();
