'use strict';

const SIGN_UP_LINK = "a[href='/join?source=header-home']";

class HomePage {

    open(path) {
      browser.url(`/${path}`);
    }

    signUp() {
      return browser
          .click(SIGN_UP_LINK);
    }

}
module.exports = new HomePage();
