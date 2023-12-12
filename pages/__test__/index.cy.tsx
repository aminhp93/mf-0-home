import IndexPage from "../index";
/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress Component Test
describe("<IndexPage />", () => {
  it("should render and display expected content", () => {
    // Mount the React component for the Index page
    cy.mount(<IndexPage />);

    // The new page should contain an h1 with "Index page"
    cy.get("h1").contains("Index page");

    // Validate that a link with the expected URL is present
    // *Following* the link is better suited to an E2E test
    cy.get('a[href="/"]').should("be.visible");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
