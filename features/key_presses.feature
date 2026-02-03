Feature: Key Presses

  Scenario: Press letter A
    Given I open the key presses page
    When I press key "A"
    Then I should see key result "You entered: A"
