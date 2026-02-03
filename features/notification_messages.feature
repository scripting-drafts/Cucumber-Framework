Feature: Notification Messages

  Scenario: Notification appears after clicking
    Given I open the notification messages page
    When I click to trigger notification
    Then I should see a notification message
