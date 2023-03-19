import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

///////////////////////////////////////////////////////////////////////////////////////
// STATELESS FUNCTION COMPONENT - (CAN BE USED IF ONLY LIFECYCLE METHOD USED IS RENDER)
///////////////////////////////////////////////////////////////////////////////////////
/*
function Photowall(props) {
  return (
    <div className="photo-grid">
      {props.posts.map((post, index) => (
        <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>
      ))}
    </div>
  );
}
*/

///////////////////////////////////////////////////////////////////////////////////////
// CLASS COMPONENT - (CAN BE USED FOR MORE LIFECYCLE METHOD USED USING THIS KEYWORD)
///////////////////////////////////////////////////////////////////////////////////////

class Photowall extends Component {
  // RENDER METHOD
  render() {
    return (
      <div>
        <Link className="addIcon" to="/AddPhoto"></Link>

        <div className="photo-grid">
          {this.props.posts
            .sort((x, y) => y.id - x.id)
            .map((post, index) => (
              <Photo key={index} post={post} {...this.props} index={index} />
            ))}
        </div>
      </div>
    );
  }
}

///////////////////////////////////////////////////////////////////////////////////////
// PROPTYPES
///////////////////////////////////////////////////////////////////////////////////////
Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Photowall;
