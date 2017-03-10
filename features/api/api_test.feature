Feature: API returns correct full name
  Scenario: API returns correct full name
    When I make GET request to github API with username photobox
    Then the response code is 200
    And JSON response body should have name property equal to PhotoBox
