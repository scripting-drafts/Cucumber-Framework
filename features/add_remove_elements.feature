Feature: Add/Remove Elements

  Scenario: Add and remove elements
    Given I open the add/remove elements page
    When I add 2 elements
    And I remove 1 element
    Then I should see 1 element remaining
