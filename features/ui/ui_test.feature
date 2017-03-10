Feature: UI shows correct availability of a username
  Scenario: UI shows correct availability of a username
    Given I am on the Sign Up Page
    When I provide username photobox
    Then I should be alerted that username is already taken
