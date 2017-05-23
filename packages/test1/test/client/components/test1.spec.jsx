/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import Test1 from "src/components/test1";

describe("components/test1", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<Test1 />);
      expect(component).to.not.be.null;
    });

  });

});
