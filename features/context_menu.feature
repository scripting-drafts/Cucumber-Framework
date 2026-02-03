Feature: Context Menu

  Scenario: Right click shows alert
    Given I open the context menu page
    When I right click the hot spot
    Then I should see alert text "You selected a context menu"
