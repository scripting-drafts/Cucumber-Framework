Feature: JavaScript Alerts

  Scenario: Accept alert
    Given I open the javascript alerts page
    When I trigger the alert and accept
    Then the alert result should be "You successfully clicked an alert"

  Scenario: Dismiss confirm
    Given I open the javascript alerts page
    When I trigger the confirm and dismiss
    Then the alert result should be "You clicked: Cancel"

  Scenario: Prompt with input
    Given I open the javascript alerts page
    When I trigger the prompt and enter "Hello"
    Then the alert result should be "You entered: Hello"
