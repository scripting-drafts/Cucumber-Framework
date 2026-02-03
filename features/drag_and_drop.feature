Feature: Drag and Drop

  Scenario: Drag A to B
    Given I open the drag and drop page
    When I drag A to B
    Then column A header should be "B"
    And column B header should be "A"
