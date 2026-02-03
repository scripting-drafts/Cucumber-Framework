Feature: Checkboxes

  Scenario: Toggle checkboxes
    Given I open the checkboxes page
    When I check checkbox 1
    And I uncheck checkbox 2
    Then checkbox 1 should be checked
    And checkbox 2 should be unchecked
