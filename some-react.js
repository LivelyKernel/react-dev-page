// The code for setting this workspace up is inside the HTML file
// Press Command + S to refresh this module and apply changes to the runtime.

import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return (
        <div style={{border: "1px solid gray", background: "pink"}}>
        {this.props.message}
      </div>
    );
  }
}


ReactDOM.render(
    <HelloMessage message="Hello, I'm a react morph!" />,
  document.getElementById("canvas")
);
