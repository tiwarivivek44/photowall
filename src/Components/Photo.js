import React, { Component } from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

///////////////////////////////////////////////////////////////////////////////////////
// STATELESS FUNCTION COMPONENT - (CAN BE USED IF ONLY LIFECYCLE METHOD USED IS RENDER)
///////////////////////////////////////////////////////////////////////////////////////
/*
function Photo(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <img className="photo" alt={post.description} src={post.imageLink} />
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button className="remove-button" onClick={() => {
              props.onRemovePhoto(post);
            }}>Remove</button>
      </div>
    </figure>
  );
}
*/

///////////////////////////////////////////////////////////////////////////////////////
// CLASS COMPONENT - (CAN BE USED FOR MORE LIFECYCLE METHOD USED USING THIS KEYWORD)
///////////////////////////////////////////////////////////////////////////////////////
class Photo extends Component {
  // RENDER METHOD
  render() {
    const post = this.props.post;
    return (
      <figure className="figure">
        <Link to={`/single/${post.id}`}>
          <img className="photo" alt={post.description} src={post.imageLink} />
        </Link>
        <figcaption>
          <p>{post.description}</p>
        </figcaption>
        <div className="button-container">
          <button
            className="button"
            onClick={() => {
              this.props.removePost(this.props.index);
            }}
          >
            Remove
          </button>
        </div>
      </figure>
    );
  }
}

/*
function mapStateToProps(state) {
  return {
    posts: state,
  };
}
*/
///////////////////////////////////////////////////////////////////////////////////////
// PROPTypes
///////////////////////////////////////////////////////////////////////////////////////

Photo.protoType = {
  post: PropTypes.object.isRequired,
};

export default Photo;
// export default connect(mapStateToProps)(Photo);
