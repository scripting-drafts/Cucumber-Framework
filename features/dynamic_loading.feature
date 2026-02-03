Feature: Dynamic Loading

  Scenario: Example 2 shows Hello World after loading
    Given I open dynamic loading example 2
    When I start dynamic loading
    Then I should see text "Hello World!"
