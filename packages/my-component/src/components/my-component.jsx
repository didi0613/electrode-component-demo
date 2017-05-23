import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/my-component.css";
import messages from "../lang/default-messages";

export default class MyComponent extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

MyComponent.displayName = "MyComponent";

MyComponent.propTypes = { };

MyComponent.defaultProps = { };
