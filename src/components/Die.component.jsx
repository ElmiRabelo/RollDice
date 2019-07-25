import React from "react";
import "./Die.styles.css";

class Die extends React.Component {
  render() {
    return (
      // <div class="Die">
      <i
        class={` Die fas fa-dice-${this.props.face} ${
          this.props.rolling ? "flip" : ""
        }`}
      />
      // </div>
    );
  }
}

export default Die;
