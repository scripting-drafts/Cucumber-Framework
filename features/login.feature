Feature: Login

  Scenario: Successful login
    Given I open the login page
    When I login with valid credentials
    Then I should see the secure area

  Scenario Outline: Invalid login attempts
    Given I open the login page
    When I login with username "<username>" and password "<password>"
    Then I should see a flash containing "<message>"

    Examples:
      | username     | password              | message                      |
      | invalidUser  | SuperSecretPassword!  | Your username is invalid!    |
      | tomsmith     | wrongPassword         | Your password is invalid!    |
      | invalidUser  | wrongPassword         | Your username is invalid!    |
      |              |                       | Your username is invalid!    |
      |              | SuperSecretPassword!  | Your username is invalid!    |
      | tomsmith     |                       | Your password is invalid!    |

  Scenario: Successful login and logout
    Given I open the login page
    When I login with valid credentials
    Then I should see the secure area
    When I logout
    Then I should be back at the login page
    And I should see a flash containing "You logged out of the secure area!"