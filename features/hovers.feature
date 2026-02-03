Feature: Hovers

  Scenario: Hover shows caption
    Given I open the hovers page
    When I hover over user 1
    Then I should see hover caption containing "user1"
