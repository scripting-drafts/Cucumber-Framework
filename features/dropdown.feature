Feature: Dropdown

  Scenario: Select options from dropdown
    Given I open the dropdown page
    When I select dropdown option "Option 1"
    Then the selected dropdown option should be "Option 1"
    When I select dropdown option "Option 2"
    Then the selected dropdown option should be "Option 2"
