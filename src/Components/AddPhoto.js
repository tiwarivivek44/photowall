import React, { Component } from "react";

class AddPhoto extends Component {
  // Constructor
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Submit Method
  handleSubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const imageDescription = event.target.elements.description.value;

    const post = {
      id: Number(new Date()),
      description: imageDescription,
      imageLink: imageLink,
    };

    if (imageLink && imageDescription) {
      this.props.addPost(post);
      this.props.onHistory.push("/");
    }
  }

  // Render Methof
  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="link" />
            <input type="text" placeholder="Description" name="description" />
            <button className="button">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
