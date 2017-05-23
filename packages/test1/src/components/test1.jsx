import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/test1.css";
import messages from "../lang/default-messages";

export default class Test1 extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

Test1.displayName = "Test1";

Test1.propTypes = {};

Test1.defaultProps = {};
