/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import MyComponent from "src/components/my-component";

describe("components/my-component", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<MyComponent />);
      expect(component).to.not.be.null;
    });

  });

});
