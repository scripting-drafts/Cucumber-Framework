Feature: File Upload

  Scenario: Upload a sample file
    Given I open the file upload page
    When I upload file "test_assets/sample.txt"
    Then I should see upload success
