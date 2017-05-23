import {} from "test1";
import React from "react";
import { connect } from "react-redux";
import { IntlProvider, addLocaleData } from "react-intl";

import { GuestList, RenderFriend, YourAwesomeComponent } from "test1"

const locale = "en";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <YourAwesomeComponent
          ourFriends={[
             {name: "electrode", img: "//goo.gl/CZ4wAF", size: 12},
             {name: "hapi", img: "//goo.gl/q9uIFW", size: 12},
             {name: "React", img: "//goo.gl/dL5MXT", size: 12},
            ]}

            invitees={[
             {name: "electrode", invited: true},
             {name: "hapi", invited: true},
             {name: "React", invited: true}
            ]}

            toggleGuest={(invitee) => alert('Edit invitees array in playground to invite a guest!')}

            message={(c)=>(
              <div className={c}>
                Change key 'invited' to true in 'invitees' array in the playground above to invite guests!
              </div>
    )
  }
  /> < /
  div >
);
}
}

export default connect((state) => state)(Home);
