import React from "react";
import SignIn from "../SignIn";

describe("<Stepper />", () => {
  it("mounts", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SignIn />);
  });
});
