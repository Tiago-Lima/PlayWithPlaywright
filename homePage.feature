Feature: Home Page Components

  Background:
    Given the user accesses the Home Page

  Scenario: Validate status code 200
    When the system sends a GET request to the Home Page
    Then the response status should be 200

  Scenario: Validate logo visibility and attributes
    Then the logo should be visible
    And the logo should have the alt attribute "Website for automation practice"

  Scenario: Validate carousel navigation
    When the user navigates to slide 1
    Then the active slide should be 1

    When the user navigates to the next slide
    Then the active slide should be 2

    When the user navigates to the previous slide
    Then the active slide should be 1

