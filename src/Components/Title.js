import { React, Component } from "react";

///////////////////////////////////////////////////////////////////////////////////////
// STATELESS FUNCTION COMPONENT - (CAN BE USED IF ONLY LIFECYCLE METHOD USED IS RENDER)
///////////////////////////////////////////////////////////////////////////////////////

/*
function Title(props) {
  return <h1>{props.title}</h1>;
}
*/

///////////////////////////////////////////////////////////////////////////////////////
// CLASS COMPONENT - (CAN BE USED FOR MORE LIFECYCLE METHOD used USING THIS KEYWORD)
///////////////////////////////////////////////////////////////////////////////////////
class Title extends Component {
  // RENDER METHOD
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

export default Title;
