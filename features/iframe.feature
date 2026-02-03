Feature: iFrame

  Scenario: Type text in TinyMCE iframe
    Given I open the iframe page
    When I type "Hello World" in the editor
    Then the editor content should be "Hello World"
