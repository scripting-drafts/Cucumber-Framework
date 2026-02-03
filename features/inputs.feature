Feature: Inputs

  Scenario: Type and adjust numeric input
    Given I open the inputs page
    When I type number "123"
    Then the input value should be "123"
    When I press arrow up 2 times
    Then the input value should be "125"
